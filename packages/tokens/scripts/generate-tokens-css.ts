import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

import { createTheme, ThemeColor } from "../src";

// -----------------------------------------------------------------------------
// paths
// -----------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.resolve(__dirname, "../dist/styles");
const OUT_FILE = path.join(OUT_DIR, "tokens.css");

// -----------------------------------------------------------------------------
// utils
// -----------------------------------------------------------------------------

function hexToRgbTriplet(hex: string): string {
  const clean = hex.replace("#", "").trim();
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;

  const num = parseInt(full, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

  return `${r} ${g} ${b}`;
}

function flattenVars(obj: ThemeColor, prefix: string): Array<[string, string]> {
  const out: Array<[string, string]> = [];

  for (const [key, value] of Object.entries(obj)) {
    const name = `${prefix}-${key}`;

    if (typeof value === "object" && value !== null) {
      out.push(...flattenVars(value, name));
    } else {
      out.push([`--${name}`, hexToRgbTriplet(String(value))]);
    }
  }

  return out;
}

function cssBlock(selector: string, vars: Array<[string, string]>): string {
  return [`${selector} {`, ...vars.map(([k, v]) => `  ${k}: ${v};`), `}`, ""].join("\n");
}

function sha256(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex");
}

// -----------------------------------------------------------------------------
// build css
// -----------------------------------------------------------------------------

function buildCss(): string {
  const light = createTheme("light");
  const dark = createTheme("dark");

  const lightVars = flattenVars(light.color, "color");
  const darkVars = flattenVars(dark.color, "color");

  return [
    "/* ------------------------------------------------------------------ */",
    "/* AUTO-GENERATED FILE — DO NOT EDIT MANUALLY                          */",
    "/* Source: @buskerone/tokens                                           */",
    "/* ------------------------------------------------------------------ */",
    "",
    cssBlock(':root[data-theme="light"]', lightVars),
    cssBlock(':root[data-theme="dark"]', darkVars),
  ].join("\n");
}

// -----------------------------------------------------------------------------
// write-if-changed
// -----------------------------------------------------------------------------

function writeIfChanged(file: string, content: string) {
  fs.mkdirSync(path.dirname(file), { recursive: true });

  if (fs.existsSync(file)) {
    const prev = fs.readFileSync(file, "utf8");
    if (sha256(prev) === sha256(content)) {
      console.log("[tokens.css] no changes");
      return;
    }
  }

  fs.writeFileSync(file, content, "utf8");
  console.log(`[tokens.css] written → ${file}`);
}

// -----------------------------------------------------------------------------
// run
// -----------------------------------------------------------------------------

const css = buildCss();
writeIfChanged(OUT_FILE, css);

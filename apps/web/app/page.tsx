"use client";

import { useState } from "react";
import { useColorMode } from "@buskerone/primitives";
import { Text } from "@buskerone/ui-web";
import { typography, color } from "@buskerone/tokens";
import type { TextTone, TextVariant } from "@buskerone/tokens";

const TEXT_VARIANTS = Object.keys(typography.textVariant) as TextVariant[];
const TEXT_TONES = Object.keys(color.light.text) as TextTone[];

export default function Home() {
  const { mode, toggleMode } = useColorMode();
  const [variant, setVariant] = useState<TextVariant>("body.md");
  const [tone, setTone] = useState<TextTone>("default");

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header */}
      <header className="border-b border-theme bg-surface/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold bg-gray-100 dark:bg-gray-600">
                <Text variant="heading.h1" as="span" className="text-lg font-bold">
                  B
                </Text>
              </div>
              <div>
                <Text variant="body.sm" as="div" className="font-semibold tracking-tight">
                  busker-ui
                </Text>
                <Text variant="body.sm" tone="muted" as="div">
                  Component Library
                </Text>
              </div>
            </div>

            <button
              onClick={toggleMode}
              className="inline-flex items-center gap-2 rounded-xl border border-black/20 bg-white px-4 py-2 transition-colors hover:bg-black/5 dark:border-white/20 dark:bg-black dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              <span className="text-base">{mode === "light" ? "🌙" : "☀️"}</span>
              <Text variant="body.sm" as="span" className="hidden sm:inline">
                {mode === "light" ? "Dark" : "Light"}
              </Text>
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Playground */}
      <section id="playground" className="border-b border-theme">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mb-12 text-center flex flex-col items-center gap-2">
            <Text
              variant="heading.h1"
              as="h2"
              className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Typography Playground
            </Text>
            <Text variant="body.md" tone="muted" as="p" className="max-w-2xl mx-auto">
              Experiment with text variants and tones in real-time.
            </Text>
          </div>

          <div className="rounded-3xl border border-theme bg-white p-6 sm:p-8 shadow-lg dark:bg-black">
            <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <Text
                    variant="body.sm"
                    as="label"
                    className="block font-medium mb-2"
                    htmlFor="variant"
                  >
                    Variant
                  </Text>
                  <div className="relative">
                    <select
                      id="variant"
                      value={variant}
                      onChange={(e) => setVariant(e.target.value as TextVariant)}
                      className="w-full rounded-xl border border-theme bg-white pl-4 pr-10 py-2.5 text-sm text-black outline-none transition-all focus:ring-2 focus:ring-black/20 appearance-none dark:bg-black dark:text-white dark:focus:ring-white/20"
                    >
                      {TEXT_VARIANTS.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="h-4 w-4 text-black dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <Text
                    variant="body.sm"
                    as="label"
                    className="block font-medium mb-2"
                    htmlFor="tone"
                  >
                    Tone
                  </Text>
                  <div className="relative">
                    <select
                      id="tone"
                      value={tone}
                      onChange={(e) => setTone(e.target.value as TextTone)}
                      className="w-full rounded-xl border border-theme bg-white pl-4 pr-10 py-2.5 text-sm text-black outline-none transition-all focus:ring-2 focus:ring-black/20 appearance-none dark:bg-black dark:text-white dark:focus:ring-white/20"
                    >
                      {TEXT_TONES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="h-4 w-4 text-black dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-theme bg-gray-50 p-4 dark:bg-gray-900">
                  <Text variant="body.sm" tone="muted" as="div" className="font-medium mb-2">
                    Current Style
                  </Text>
                  <Text
                    variant="body.sm"
                    as="div"
                    className="font-mono block rounded-lg border border-theme bg-white p-3 dark:bg-black"
                  >
                    variant=&quot;{variant}&quot;
                    <br />
                    tone=&quot;{tone}&quot;
                  </Text>
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-theme bg-gray-50 p-8 dark:bg-gray-900 h-[-webkit-fill-available]">
                  <Text
                    variant="body.sm"
                    tone="muted"
                    as="div"
                    className="font-medium uppercase tracking-wider mb-4"
                  >
                    Live Preview
                  </Text>
                  <Text variant={variant} tone={tone}>
                    This demonstrates how the selected variant and tone render across different
                    contexts.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Variants Grid */}
      <section className="border-b border-theme bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mb-12">
            <Text
              variant="heading.h1"
              as="h2"
              className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Typography Scale
            </Text>
            <Text variant="body.md" tone="muted" as="p" className="max-w-2xl">
              A complete type scale designed for hierarchy and readability.
            </Text>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEXT_VARIANTS.map((v) => (
              <div
                key={v}
                className="group rounded-2xl border border-theme bg-white p-6 transition-all hover:shadow-lg hover:scale-[1.02] dark:bg-black"
              >
                <div className="flex items-center justify-between mb-4">
                  <Text variant="body.sm" tone="muted" as="span" className="font-mono">
                    {v}
                  </Text>
                  <div className="h-6 w-6 rounded-lg border border-theme bg-gray-100 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center dark:bg-gray-800">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <Text variant={v} className="text-balance">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tones Showcase */}
      <section className="border-b border-theme">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mb-12">
            <Text
              variant="heading.h1"
              as="h2"
              className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Text Tones
            </Text>
            <Text variant="body.md" tone="muted" as="p" className="max-w-2xl">
              Apply semantic meaning with tones. From subtle muted text to prominent brand colors,
              each tone adapts to your theme automatically.
            </Text>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEXT_TONES.map((t) => (
              <div
                key={t}
                className="group rounded-2xl border border-theme bg-white p-6 transition-all hover:shadow-lg dark:bg-black"
              >
                <div className="mb-4">
                  <Text
                    variant="body.sm"
                    tone="muted"
                    as="span"
                    className="inline-block font-mono mb-2"
                  >
                    {t}
                  </Text>
                  <div className="h-1 w-12 rounded-full bg-black/20 dark:bg-white/20" />
                </div>
                <Text variant="heading.h1" as="h2" tone={t} className="font-medium mb-2">
                  Sample Heading
                </Text>
                <Text variant="body.md" as="p" tone={t}>
                  This demonstrates how the {t} tone appears in your interface.
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-theme bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold bg-gray-100 dark:bg-gray-600">
                <Text variant="body.sm" as="span" className="font-bold">
                  B
                </Text>
              </div>
              <Text variant="body.sm" tone="muted" as="div">
                busker-ui © {new Date().getFullYear()}
              </Text>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/buskerone/busker-ui"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-text"
              >
                <Text variant="body.sm" tone="muted" as="span">
                  Documentation
                </Text>
              </a>
              <a
                href="https://github.com/buskerone/busker-ui"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-text"
              >
                <Text variant="body.sm" tone="muted" as="span">
                  GitHub
                </Text>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

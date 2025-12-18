import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.turbo/**",
      "**/.next/**",
      "**/storybook-static/**",
      "**/coverage/**",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Disables ESLint rules that conflict with Prettier
  prettierConfig,

  // Global rule tweaks
  {
    rules: {
      // Allow CommonJS-style require() where needed (e.g. Metro, config, scripts, asset imports)
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // Enables the `prettier/prettier` rule
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // Configuration for CommonJS files (.cjs)
  {
    files: ["**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Node-style globals for .js tooling files (Metro, scripts, configs, etc.)
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

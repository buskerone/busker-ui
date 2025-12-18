# Contributing to busker-ui

Thanks for your interest in contributing! This repo is a PNPM + Turborepo monorepo with multiple packages (tokens, primitives, ui-web, ui-mobile).

The goal is to keep contributions **small**, **typed**, and **aligned with the design tokens**.

## Getting started

```bash
pnpm install
pnpm dev        # start example apps (if configured)
```

## Building packages

Each package is built with `pnpm` scripts:

```bash
# build everything
pnpm build

# or build a single package (examples)
pnpm --filter @buskerone/tokens build
pnpm --filter @buskerone/primitives build
pnpm --filter @buskerone/ui-web build
pnpm --filter @buskerone/ui-mobile build
```

## Adding a new component to ui-web

1. **Pick a name**
   - Example: `Button`

2. **Create the component file** in `packages/ui-web/src/components`
   - Follow existing patterns (typed props, variants, tones, etc.).

3. **Export it from the package entry**
   - Update `packages/ui-web/src/index.ts` to export the new component and its types.

4. **Use primitives & tokens**
   - Reuse hooks from `@buskerone/primitives` (e.g. `useText`, `useTheme`)
   - Use tokens from `@buskerone/tokens` (e.g. `typography`, `color`).

5. **Run build & typecheck**

```bash
pnpm --filter @buskerone/ui-web build
```

## Adding a new component to ui-mobile

1. **Pick a name**
   - Example: `Button`

2. **Create the component file** in `packages/ui-mobile/src/components`
   - Wrap React Native primitives (e.g. `View`, `Text`, `Pressable`).

3. **Export it from the package entry**
   - Update `packages/ui-mobile/src/index.ts` to export the new component and its types.

4. **Use primitives & tokens**
   - Reuse hooks from `@buskerone/primitives` where possible.
   - Use `@buskerone/tokens` for typography and color decisions.

5. **Run build & typecheck**

```bash
pnpm --filter @buskerone/ui-mobile build
```

## General guidelines

- Keep APIs **small and predictable**.
- Prefer **composition over configuration**.
- Always use **TypeScript** types and reuse existing token/primitives types where possible.
- Keep docs and examples **short and practical**.

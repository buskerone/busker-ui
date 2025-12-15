# @buskerone/tokens

Design tokens for the **busker-ui** design system.

This package provides the foundational, platform-agnostic design tokens used across web and native applications.

## Features

- 🎨 **Token-first design** (colors, typography, themes)
- 🌗 **Light and dark mode** support
- 🧠 **Typed tokens** for safe consumption in TypeScript
- 📦 **Framework-agnostic** (usable in React, React Native, or any JS environment)
- 🌳 **Tree-shakeable** and side-effect free

## Installation

```bash
pnpm add @buskerone/tokens
```

or

```bash
npm install @buskerone/tokens
```

## Quick Start

```typescript
import { createTheme } from "@buskerone/tokens";

const theme = createTheme("light");

console.log(theme.color.text.default);
// → "#0B0F14"
```

### Using typed tokens

```typescript
import type { TextVariant, TextTone } from "@buskerone/tokens";

const variant: TextVariant = "body.md";
const tone: TextTone = "muted";
```

### Switching themes

```typescript
const lightTheme = createTheme("light");
const darkTheme = createTheme("dark");
```

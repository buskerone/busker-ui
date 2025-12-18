# @buskerone/primitives

Core theming and typography primitives for the **busker-ui** design system.

This package wires design tokens into reusable hooks and providers, shared by both web and native UI packages.

## Installation

```bash
pnpm add @buskerone/primitives
```

or

```bash
npm install @buskerone/primitives
```

## Quick Start

```tsx
import { ThemeProvider, useTheme } from "@buskerone/primitives";

function Example() {
  const theme = useTheme();

  return <div style={{ color: theme.color.text.default }}>Hello primitives</div>;
}

export default function App() {
  return (
    <ThemeProvider defaultMode="light">
      <Example />
    </ThemeProvider>
  );
}
```

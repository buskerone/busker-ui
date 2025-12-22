# @buskerone/ui-web

Web UI components for the **busker-ui** design system, built on top of primitives and tokens.

## Installation

```bash
pnpm add @buskerone/ui-web
```

or

```bash
npm install @buskerone/ui-web
```

## Quick Start

```tsx
import { ThemeProvider } from "@buskerone/primitives";
import { Text } from "@buskerone/ui-web";

export default function Page() {
  return (
    <ThemeProvider defaultMode="light">
      <Text as="h1" variant="heading.h1" tone="brand">
        Hello web UI
      </Text>
    </ThemeProvider>
  );
}
```

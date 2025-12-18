# @buskerone/ui-mobile

Mobile-first React Native / Expo components for the **busker-ui** design system.

## Installation

```bash
pnpm add @buskerone/ui-mobile
```

or

```bash
npm install @buskerone/ui-mobile
```

## Quick Start

```tsx
import { ThemeProvider } from "@buskerone/primitives";
import { Text } from "@buskerone/ui-mobile";

export default function App() {
  return (
    <ThemeProvider defaultMode="light">
      <Text variant="body.md" tone="default">
        Hello mobile UI
      </Text>
    </ThemeProvider>
  );
}
```

export type ColorMode = "light" | "dark";

export const palette = {
  gray: {
    0: "#FFFFFF",
    50: "#E8EEF5",
    400: "#B6C2D1",
    600: "#4B5563",
    950: "#0B0F14",
  },
  brand: {
    400: "#A5B4FC",
    600: "#4F46E5",
  },
  success: {
    400: "#4ADE80",
    500: "#22C55E",
    700: "#15803D",
  },
} as const;

export const color = {
  light: {
    text: {
      default: palette.gray[950],
      muted: palette.gray[600],
      brand: palette.brand[600],
      success: palette.success[700],
    },
    bg: {
      canvas: palette.gray[0],
    },
  },
  dark: {
    text: {
      default: palette.gray[50],
      muted: palette.gray[400],
      brand: palette.brand[400],
      success: palette.success[400],
    },
    bg: {
      canvas: palette.gray[950],
    },
  },
} as const;

export type TextTone = keyof typeof color.light.text;
// "default" | "muted" | "brand" | "success"

export const typography = {
  textVariant: {
    "body.sm": { fontSize: 14, lineHeight: 20, fontWeight: 400 as const },
    "body.md": { fontSize: 16, lineHeight: 24, fontWeight: 400 as const },
    "heading.h1": { fontSize: 32, lineHeight: 40, fontWeight: 700 as const },
  },
} as const;

export type TextVariant = keyof typeof typography.textVariant;

// Type representing the structure of a color theme (shared by light and dark)
export type ThemeColor = {
  readonly text: {
    readonly default: string;
    readonly muted: string;
    readonly brand: string;
    readonly success: string;
  };
  readonly bg: {
    readonly canvas: string;
  };
};

export type Theme = {
  mode: ColorMode;
  color: ThemeColor;
  typography: typeof typography;
};

export function createTheme(mode: ColorMode): Theme {
  return {
    mode,
    color: color[mode],
    typography,
  };
}

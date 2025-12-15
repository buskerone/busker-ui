import { useEffect, useState, useMemo, useCallback, useContext, createContext } from "react";
import { createTheme } from "@buskerone/tokens";
import type { ColorMode, Theme } from "@buskerone/tokens";

export type ThemeContextValue = {
  theme: Theme;
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export type ThemeProviderProps = {
  children: React.ReactNode;
  /**
   * Initial mode for the app. You can later override it with setMode/toggleMode.
   */
  defaultMode?: ColorMode;

  /**
   * Optional: provide your own theme object (e.g. in tests).
   * If omitted, we createTheme(mode) from @buskerone/tokens.
   */
  themeOverride?: Theme;

  /**
   * Optional: sync the color mode to the DOM for web apps.
   * Useful for Tailwind/CSS vars: [data-theme="dark"] selectors, etc.
   *
   * Default: true
   */
  syncToDom?: boolean;

  /**
   * Optional: attribute used on document.documentElement when syncToDom is true.
   * Default: "data-theme"
   */
  domAttribute?: string;
};

export function ThemeProvider({
  children,
  defaultMode = "light",
  themeOverride,
  syncToDom = true,
  domAttribute = "data-theme",
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ColorMode>(defaultMode);

  const theme = useMemo<Theme>(() => {
    if (themeOverride) return themeOverride;
    return createTheme(mode);
  }, [mode, themeOverride]);

  const toggleMode = useCallback(() => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }, []);

  // Web-only: keep DOM attribute in sync (safe no-op in non-DOM envs).
  useEffect(() => {
    if (!syncToDom) return;
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute(domAttribute, mode);
  }, [mode, syncToDom, domAttribute]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, mode, setMode, toggleMode }),
    [theme, mode, toggleMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within <ThemeProvider>.");
  }
  return ctx;
}

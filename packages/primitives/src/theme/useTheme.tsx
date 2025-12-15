import { useThemeContext } from "@/theme/theme-context";

export function useTheme() {
  return useThemeContext().theme;
}

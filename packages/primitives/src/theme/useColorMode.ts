import { useThemeContext } from "@/theme/theme-context";

export function useColorMode() {
  const { mode, setMode, toggleMode } = useThemeContext();
  return { mode, setMode, toggleMode };
}

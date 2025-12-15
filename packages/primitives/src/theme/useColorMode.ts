import { useThemeContext } from "./theme-context";

export function useColorMode() {
  const { mode, setMode, toggleMode } = useThemeContext();
  return { mode, setMode, toggleMode };
}

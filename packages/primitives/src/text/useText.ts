import { useMemo } from "react";
import { useTheme } from "../theme/useTheme";
import type { TextTone, TextVariant } from "@buskerone/tokens";

export type UseTextOptions = {
  variant?: TextVariant;
  tone?: TextTone;
};

export type ResolvedTextStyle = Readonly<{
  fontSize: number;
  fontWeight: 400 | 500 | 600 | 700;
  color: string;
}>;

export function useText(options: UseTextOptions = {}) {
  const theme = useTheme();

  const { variant = "body.md", tone = "default" } = options;

  const style = useMemo<ResolvedTextStyle>(() => {
    const v = theme.typography.textVariant[variant];
    const c = theme.color.text[tone];

    return {
      fontSize: v.fontSize,
      fontWeight: v.fontWeight,
      color: c,
    };
  }, [theme, variant, tone]);

  return { style };
}

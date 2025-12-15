import { useMemo } from "react";
import type { TextTone, TextVariant } from "@buskerone/tokens";
import { useTheme } from "../theme/useTheme";

export type TextAlign = "left" | "center" | "right" | "justify";

export type UseTextOptions = {
  variant?: TextVariant;
  tone?: TextTone;
  align?: TextAlign;

  /**
   * - In web components we’ll map to `text-overflow: ellipsis`.
   * - In RN components we’ll map to `numberOfLines={1}`.
   */
  truncate?: boolean;
};

export type ResolvedTextStyle = Readonly<{
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  color: string;
  textAlign?: TextAlign;
}>;

export function useText(options: UseTextOptions = {}) {
  const theme = useTheme();

  const { variant = "body.md", tone = "default", align } = options;

  const style = useMemo<ResolvedTextStyle>(() => {
    const v = theme.typography.textVariant[variant];
    const c = theme.color.text[tone];

    return {
      fontSize: v.fontSize,
      lineHeight: v.lineHeight,
      fontWeight: v.fontWeight,
      color: c,
      ...(align ? { textAlign: align } : null),
    };
  }, [theme, variant, tone, align]);

  return { style };
}

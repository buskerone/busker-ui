import * as React from "react";
import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import type { TextTone, TextVariant } from "@buskerone/tokens";
import { typography } from "@buskerone/tokens";
import { useText, useTheme } from "@buskerone/primitives";

export type TextAlign = "left" | "center" | "right" | "justify";

export type TextProps = {
  variant?: TextVariant;
  tone?: TextTone;
  align?: TextAlign;
  className?: string;
  children: React.ReactNode;
} & Omit<RNTextProps, "style" | "children"> & {
    style?: RNTextProps["style"];
  };

export function Text({
  variant = "body.md",
  tone = "default",
  align,
  className,
  style,
  children,
  ...rest
}: TextProps) {
  const { style: resolved } = useText({ variant }); // fontSize only
  const theme = useTheme();

  const fw = typography.textVariant[variant].fontWeight;
  const color = theme.color.text[tone];

  return (
    <RNText
      {...rest}
      className={className}
      style={[
        { fontSize: resolved.fontSize, fontWeight: fw, color },
        align ? { textAlign: align } : null,
        style,
      ]}
    >
      {children}
    </RNText>
  );
}

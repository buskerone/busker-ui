import * as React from "react";
import type { TextTone, TextVariant } from "@buskerone/tokens";
import { useText } from "@buskerone/primitives";
import { cn } from "@/utils/cn";

export type TextAlign = "left" | "center" | "right" | "justify";

export type TextAs =
  | "span"
  | "p"
  | "div"
  | "label"
  | "strong"
  | "em"
  | "small"
  | "h1"
  | "h2"
  | "h3";

export type TextProps<T extends TextAs = "span"> = {
  as?: T;
  variant?: TextVariant;
  tone?: TextTone;
  align?: TextAlign;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "color" | "children">;

export function Text<T extends TextAs = "span">({
  as,
  variant = "body.md",
  tone = "default",
  align,
  className,
  style,
  ...rest
}: TextProps<T>) {
  const Comp = (as ?? "span") as React.ElementType;

  const { style: resolved } = useText({ variant, tone });

  return (
    <Comp
      {...rest}
      className={cn(className)}
      style={{
        ...resolved,
        ...(align ? { textAlign: align } : null),
        ...(style as React.CSSProperties),
      }}
    />
  );
}

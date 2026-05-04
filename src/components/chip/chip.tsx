"use client";

import type {SystemStyleObject} from "@chakra-ui/react";
import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Variant, Color & Size Style Maps
 * -----------------------------------------------------------------------------------------------*/
type ChipVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "soft"
  | "solid"
  | "subtle"
  | "outline"
  | "surface";
type ChipColor = "accent" | "default" | "success" | "warning" | "danger";
type ChipSize = "sm" | "md" | "lg";

const colorStyles: Record<string, SystemStyleObject> = {
  accent: {color: "accent.solid"},
  danger: {color: "red.fg"},
  default: {color: "fg"},
  success: {color: "green.fg"},
  warning: {color: "orange.fg"},
};

const sizeStyles: Record<string, SystemStyleObject> = {
  sm: {px: "1", py: "0", fontSize: "xs"},
  md: {fontSize: "xs"},
  lg: {px: "3", py: "1", fontSize: "sm", fontWeight: "medium"},
};

/* Solid / Primary: filled bg + contrast text */
const solidCompoundStyles: Record<string, SystemStyleObject> = {
  accent: {bg: "accent.solid", color: "accent.contrast"},
  success: {bg: "green.solid", color: "green.contrast"},
  warning: {bg: "orange.solid", color: "orange.contrast"},
  danger: {bg: "red.solid", color: "red.contrast"},
  default: {bg: "neutral.solid", color: "neutral.contrast"},
};

/* Subtle / Secondary: tinted bg + colored text */
const subtleCompoundStyles: Record<string, SystemStyleObject> = {
  accent: {bg: "accent.subtle", color: "accent.solid"},
  success: {bg: "green.subtle", color: "green.fg"},
  warning: {bg: "orange.subtle", color: "orange.fg"},
  danger: {bg: "red.subtle", color: "red.fg"},
  default: {bg: "bg.emphasized", color: "fg"},
};

/* Soft: muted bg + solid (primary) colored text */
const softCompoundStyles: Record<string, SystemStyleObject> = {
  accent: {bg: "accent.subtle", color: "accent.solid"},
  success: {bg: "green.subtle", color: "green.solid"},
  warning: {bg: "orange.subtle", color: "orange.solid"},
  danger: {bg: "red.subtle", color: "red.solid"},
  default: {bg: "bg.emphasized", color: "fg"},
};

/* Outline: border + colored text, transparent bg */
const outlineCompoundStyles: Record<string, SystemStyleObject> = {
  accent: {bg: "transparent", borderColor: "accent.border", color: "accent.solid"},
  success: {bg: "transparent", borderColor: "green.border", color: "green.fg"},
  warning: {bg: "transparent", borderColor: "orange.border", color: "orange.fg"},
  danger: {bg: "transparent", borderColor: "red.border", color: "red.fg"},
  default: {bg: "transparent", borderColor: "border", color: "fg"},
};

/* Surface: subtle bg + border + colored text */
const surfaceCompoundStyles: Record<string, SystemStyleObject> = {
  accent: {bg: "accent.subtle", borderColor: "accent.border", color: "accent.solid"},
  success: {bg: "green.subtle", borderColor: "green.border", color: "green.fg"},
  warning: {bg: "orange.subtle", borderColor: "orange.border", color: "orange.fg"},
  danger: {bg: "red.subtle", borderColor: "red.border", color: "red.fg"},
  default: {bg: "bg.subtle", borderColor: "border", color: "fg"},
};

function getChipStyleProps(variant?: string, chipColor?: string, size?: string): SystemStyleObject {
  const styles: SystemStyleObject = {
    display: "inline-flex",
    flexShrink: 0,
    alignItems: "center",
    gap: "0.5",
    rounded: "2xl",
    px: "2",
    py: "0.5",
    fontSize: "xs",
    lineHeight: "1.25rem",
    fontWeight: "medium",
    bg: "bg.emphasized",
    borderWidth: "1px",
    borderColor: "transparent",
    "& svg": {
      width: "1em",
      height: "1em",
      flexShrink: 0,
    },
  };

  // Size
  if (size && sizeStyles[size]) {
    Object.assign(styles, sizeStyles[size]);
  }

  // Base color (applies text color when no compound overrides)
  if (chipColor && colorStyles[chipColor]) {
    Object.assign(styles, colorStyles[chipColor]);
  }

  // Normalize SoniaUI variant names to Chakra-style
  const normalizedVariant = variant === "primary" ? "solid" : variant;

  // Variant: tertiary / secondary = transparent bg
  if (normalizedVariant === "tertiary") {
    styles.bg = "transparent";
  }

  // Outline base: transparent bg + border
  if (normalizedVariant === "outline") {
    styles.bg = "transparent";
    styles.borderColor = "border";
  }

  // Surface base: muted bg + border
  if (normalizedVariant === "surface") {
    styles.borderColor = "border.muted";
  }

  // Compound: solid + color
  if (normalizedVariant === "solid" && chipColor && solidCompoundStyles[chipColor]) {
    Object.assign(styles, solidCompoundStyles[chipColor]);
  }

  // Compound: subtle / secondary + color
  if (
    (normalizedVariant === "subtle" || normalizedVariant === "secondary") &&
    chipColor &&
    subtleCompoundStyles[chipColor]
  ) {
    Object.assign(styles, subtleCompoundStyles[chipColor]);
  }

  // Compound: soft + color
  if (normalizedVariant === "soft" && chipColor && softCompoundStyles[chipColor]) {
    Object.assign(styles, softCompoundStyles[chipColor]);
  }

  // Compound: outline + color
  if (normalizedVariant === "outline" && chipColor && outlineCompoundStyles[chipColor]) {
    Object.assign(styles, outlineCompoundStyles[chipColor]);
  }

  // Compound: surface + color
  if (normalizedVariant === "surface" && chipColor && surfaceCompoundStyles[chipColor]) {
    Object.assign(styles, surfaceCompoundStyles[chipColor]);
  }

  return styles;
}

/* -------------------------------------------------------------------------------------------------
 * Chip Root
 * -----------------------------------------------------------------------------------------------*/
interface ChipRootProps extends Omit<ComponentPropsWithRef<typeof Box>, "color" | "size"> {
  children: React.ReactNode;
  variant?: ChipVariant;
  color?: ChipColor;
  size?: ChipSize;
}

const ChipRoot = ({children, color, size, variant, ...props}: ChipRootProps) => {
  const chipChildren = React.useMemo(() => {
    if (typeof children === "string" || typeof children === "number") {
      return <ChipLabel>{children}</ChipLabel>;
    }

    return children;
  }, [children]);

  const styleProps = getChipStyleProps(variant, color, size);

  return (
    <Box data-slot="chip" {...styleProps} {...props}>
      {chipChildren}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Chip Label
 * -----------------------------------------------------------------------------------------------*/
interface ChipLabelProps extends ComponentPropsWithRef<"span"> {}

const ChipLabel = ({children, ...props}: ChipLabelProps) => {
  return (
    <Box as="span" data-slot="chip-label" px="0.5" {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ChipRoot, ChipLabel};

export type {ChipRootProps, ChipLabelProps};

"use client";

import type {SystemStyleObject} from "@chakra-ui/react";
import type {ComponentPropsWithRef} from "react";

import {Box, Badge as ChakraBadge} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Placement Styles
 * -----------------------------------------------------------------------------------------------*/
type BadgePlacement = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const placementStyles: Record<string, SystemStyleObject> = {
  "top-right": {position: "absolute", top: "0", right: "0", transform: "translate(35%, -35%)"},
  "top-left": {position: "absolute", top: "0", left: "0", transform: "translate(-35%, -35%)"},
  "bottom-right": {position: "absolute", right: "0", bottom: "0", transform: "translate(35%, 35%)"},
  "bottom-left": {position: "absolute", bottom: "0", left: "0", transform: "translate(-35%, 35%)"},
};

/* -------------------------------------------------------------------------------------------------
 * Badge Anchor
 * -----------------------------------------------------------------------------------------------*/
interface BadgeAnchorProps extends ComponentPropsWithRef<typeof Box> {
  children: React.ReactNode;
}

const BadgeAnchor = ({children, ...props}: BadgeAnchorProps) => {
  return (
    <Box
      data-slot="badge-anchor"
      display="inline-flex"
      flexShrink={0}
      position="relative"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Badge Root
 *
 * Uses the Chakra Badge recipe for variant/size/colorPalette styling.
 * Supports HeroUI variant aliases: primary→solid, secondary→subtle, soft→subtle.
 * -----------------------------------------------------------------------------------------------*/
type HeroUIBadgeVariant = "primary" | "secondary" | "soft";
type RecipeBadgeVariant = "solid" | "subtle" | "outline" | "surface" | "plain";

interface BadgeRootProps extends Omit<ComponentPropsWithRef<typeof ChakraBadge>, "variant"> {
  children?: React.ReactNode;
  placement?: BadgePlacement;
  variant?: RecipeBadgeVariant | HeroUIBadgeVariant;
}

const VARIANT_MAP: Record<string, RecipeBadgeVariant> = {
  primary: "solid",
  secondary: "subtle",
  soft: "subtle",
};

const DOT_SIZES: Record<string, SystemStyleObject> = {
  xs: {boxSize: "3", minH: "unset", minW: "unset", px: "0"},
  sm: {boxSize: "4", minH: "unset", minW: "unset", px: "0"},
  md: {boxSize: "5", minH: "unset", minW: "unset", px: "0"},
  lg: {boxSize: "6", minH: "unset", minW: "unset", px: "0"},
};

const BadgeRoot = ({children, placement, size, variant = "solid", ...props}: BadgeRootProps) => {
  const isDot = children == null || children === "" || children === false;

  const badgeChildren = React.useMemo(() => {
    if (isDot) return null;
    if (typeof children === "string" || typeof children === "number") {
      return <BadgeLabel>{children}</BadgeLabel>;
    }

    return children;
  }, [children, isDot]);

  const resolvedVariant =
    typeof variant === "string" && VARIANT_MAP[variant] ? VARIANT_MAP[variant] : variant;

  const resolvedPlacement = placement ?? (isDot ? "bottom-right" : "top-right");

  const placementCss = placementStyles[resolvedPlacement] ?? undefined;

  const sizeKey = (typeof size === "string" ? size : "sm") as string;
  const dotCss = isDot ? (DOT_SIZES[sizeKey] ?? DOT_SIZES["sm"]) : undefined;

  return (
    <ChakraBadge
      css={{...placementCss, ...dotCss}}
      data-slot="badge"
      size={size}
      variant={resolvedVariant as RecipeBadgeVariant}
      {...props}
    >
      {badgeChildren}
    </ChakraBadge>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Badge Label
 * -----------------------------------------------------------------------------------------------*/
interface BadgeLabelProps extends ComponentPropsWithRef<"span"> {}

const BadgeLabel = ({children, ...props}: BadgeLabelProps) => {
  return (
    <Box as="span" data-slot="badge-label" {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {BadgeRoot, BadgeLabel, BadgeAnchor};

export type {BadgeRootProps, BadgeLabelProps, BadgeAnchorProps};

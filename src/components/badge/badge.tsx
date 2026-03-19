"use client";

import type {ComponentPropsWithRef} from "react";
import type {SystemStyleObject} from "@chakra-ui/react";

import {Badge as ChakraBadge, Box} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Placement Styles
 * -----------------------------------------------------------------------------------------------*/
type BadgePlacement = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const placementStyles: Record<string, SystemStyleObject> = {
  "top-right": {position: "absolute", top: "0", right: "0", transform: "translate(25%, -25%)"},
  "top-left": {position: "absolute", top: "0", left: "0", transform: "translate(-25%, -25%)"},
  "bottom-right": {position: "absolute", right: "0", bottom: "0", transform: "translate(25%, 25%)"},
  "bottom-left": {position: "absolute", bottom: "0", left: "0", transform: "translate(-25%, 25%)"},
};

/* -------------------------------------------------------------------------------------------------
 * Badge Anchor
 * -----------------------------------------------------------------------------------------------*/
interface BadgeAnchorProps extends ComponentPropsWithRef<typeof Box> {
  children: React.ReactNode;
}

const BadgeAnchor = ({children, ...props}: BadgeAnchorProps) => {
  return (
    <Box position="relative" display="inline-flex" flexShrink={0} data-slot="badge-anchor" {...props}>
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

const BadgeRoot = ({children, placement, variant, ...props}: BadgeRootProps) => {
  const badgeChildren = React.useMemo(() => {
    if (typeof children === "string" || typeof children === "number") {
      return <BadgeLabel>{children}</BadgeLabel>;
    }

    return children;
  }, [children]);

  const resolvedVariant = (typeof variant === "string" && VARIANT_MAP[variant])
    ? VARIANT_MAP[variant]
    : variant;

  const placementCss = placement && placementStyles[placement]
    ? placementStyles[placement]
    : undefined;

  return (
    <ChakraBadge
      data-slot="badge"
      variant={resolvedVariant as RecipeBadgeVariant}
      css={placementCss}
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
    <Box as="span" data-slot="badge-label" px="0.5" {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {BadgeRoot, BadgeLabel, BadgeAnchor};

export type {BadgeRootProps, BadgeLabelProps, BadgeAnchorProps};

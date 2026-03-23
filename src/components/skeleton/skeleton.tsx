"use client";

import type {ComponentPropsWithRef} from "react";

import {Skeleton as ChakraSkeleton} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Skeleton Root
 * -----------------------------------------------------------------------------------------------*/
type SkeletonAnimation = "shimmer" | "pulse" | "none";

interface SkeletonRootProps extends ComponentPropsWithRef<typeof ChakraSkeleton> {
  animation?: SkeletonAnimation;
}

const shimmerCss = {
  "&::after": {
    content: '""',
    position: "absolute" as const,
    inset: 0,
    transform: "translateX(-100%)",
    background:
      "linear-gradient(90deg, transparent 0%, var(--chakra-colors-bg-subtle, rgba(255,255,255,0.5)) 50%, transparent 100%)",
    animation: "shimmer 1.5s infinite",
  },
  "@keyframes shimmer": {
    "100%": {transform: "translateX(100%)"},
  },
};

const SkeletonRoot = ({animation = "shimmer", ...props}: SkeletonRootProps) => {
  const isShimmer = animation === "shimmer";

  return (
    <ChakraSkeleton
      css={isShimmer ? shimmerCss : undefined}
      data-slot="skeleton"
      variant={isShimmer ? "none" : animation}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {SkeletonRoot};

export type {SkeletonRootProps};

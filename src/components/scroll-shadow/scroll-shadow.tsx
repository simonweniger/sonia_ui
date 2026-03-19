"use client";

import type {RefObject} from "react";

import {Box} from "@chakra-ui/react";
import {useRef} from "react";

import {useSafeLayoutEffect} from "../../hooks/use-safe-layout-effect";

import {useScrollShadow} from "./use-scroll-shadow";

export type ScrollShadowVisibility = "auto" | "both" | "top" | "bottom" | "left" | "right" | "none";

export interface ScrollShadowRootProps extends Omit<React.ComponentProps<typeof Box>, "size"> {
  /**
   * The shadow size in pixels
   * @default 40
   */
  size?: number;

  /**
   * The scroll offset before showing shadows (in pixels)
   * @default 0
   */
  offset?: number;

  /**
   * Controlled shadow visibility state
   * @default "auto"
   */
  visibility?: ScrollShadowVisibility;

  /**
   * Whether scroll shadow detection is enabled
   * @default true
   */
  isEnabled?: boolean;

  /**
   * Whether to hide the scrollbar
   * @default false
   */
  hideScrollBar?: boolean;

  /**
   * Scroll orientation
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal";

  /**
   * Callback invoked when shadow visibility changes
   */
  onVisibilityChange?: (visibility: ScrollShadowVisibility) => void;
}

export const ScrollShadowRoot = ({
  children,
  className,
  hideScrollBar = false,
  isEnabled = true,
  offset = 0,
  onVisibilityChange,
  orientation = "vertical",
  ref,
  size = 40,
  visibility = "auto",
  ...props
}: ScrollShadowRootProps) => {
  const internalRef = useRef<HTMLDivElement | null>(null);

  useScrollShadow({
    containerRef: internalRef as RefObject<HTMLElement>,
    isEnabled,
    offset,
    onVisibilityChange,
    orientation,
    visibility,
  });

  // Handle controlled visibility mode
  useSafeLayoutEffect(() => {
    const el = internalRef.current;

    if (!el || visibility === "auto") return;

    // Clear all data attributes
    delete el.dataset["topScroll"];
    delete el.dataset["bottomScroll"];
    delete el.dataset["topBottomScroll"];
    delete el.dataset["leftScroll"];
    delete el.dataset["rightScroll"];
    delete el.dataset["leftRightScroll"];

    // Set controlled visibility
    if (visibility === "both") {
      el.dataset[orientation === "vertical" ? "topBottomScroll" : "leftRightScroll"] = "true";
    } else if (visibility !== "none") {
      el.dataset[`${visibility}Scroll`] = "true";
    }
  }, [visibility, orientation]);

  // Merge refs
  const mergedRef = (node: HTMLDivElement | null) => {
    internalRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  return (
    <Box
      ref={mergedRef}
      className={className}
      data-orientation={orientation}
      data-scroll-shadow-size={size}
      position="relative"
      overflow={orientation === "vertical" ? "auto" : "auto"}
      overflowY={orientation === "vertical" ? "auto" : undefined}
      overflowX={orientation === "horizontal" ? "auto" : undefined}
      css={{
        "--scroll-shadow-size": `${size}px`,
        ...(hideScrollBar
          ? {
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {display: "none"},
            }
          : {}),
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

ScrollShadowRoot.displayName = "ScrollShadow";

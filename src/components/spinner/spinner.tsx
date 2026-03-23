"use client";

import type {ComponentPropsWithRef} from "react";

import {Spinner as ChakraSpinner} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Spinner Root
 * -----------------------------------------------------------------------------------------------*/
type SpinnerSize = "sm" | "md" | "lg" | "xl";
type SpinnerColor = "current" | "accent" | "danger" | "success" | "warning";

const colorMap: Record<SpinnerColor, string> = {
  current: "currentColor",
  accent: "accent",
  danger: "danger",
  success: "success",
  warning: "warning",
};

interface SpinnerRootProps extends Omit<ComponentPropsWithRef<typeof ChakraSpinner>, "size"> {
  size?: SpinnerSize;
  spinnerColor?: SpinnerColor;
}

const SpinnerRoot = ({size = "md", spinnerColor = "current", ...props}: SpinnerRootProps) => {
  return (
    <ChakraSpinner color={colorMap[spinnerColor]} data-slot="spinner" size={size} {...props} />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {SpinnerRoot};

export type {SpinnerRootProps};

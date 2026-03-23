"use client";

import type {ComponentPropsWithRef} from "react";

import {Separator as ChakraSeparator} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Separator Root
 * -----------------------------------------------------------------------------------------------*/
type SeparatorColor = "default" | "secondary" | "tertiary";

const colorMap: Record<SeparatorColor, string> = {
  default: "border",
  secondary: "border/70",
  tertiary: "border/50",
};

interface SeparatorRootProps extends ComponentPropsWithRef<typeof ChakraSeparator> {
  orientation?: "horizontal" | "vertical";
  separatorColor?: SeparatorColor;
}

const SeparatorRoot = ({
  orientation = "horizontal",
  separatorColor = "default",
  ...props
}: SeparatorRootProps) => {
  return (
    <ChakraSeparator
      borderColor={colorMap[separatorColor]}
      data-slot="separator"
      orientation={orientation}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {SeparatorRoot};

export type {SeparatorRootProps};

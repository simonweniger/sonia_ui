"use client";

import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Switch Group Root
 * -----------------------------------------------------------------------------------------------*/
interface SwitchGroupRootProps extends ComponentPropsWithRef<"div"> {
  orientation?: "horizontal" | "vertical";
}

const SwitchGroupRoot = ({children, orientation = "vertical", ...props}: SwitchGroupRootProps) => {
  return (
    <Box
      data-orientation={orientation}
      data-slot="switch-group"
      display="flex"
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      gap="4"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {SwitchGroupRoot};

export type {SwitchGroupRootProps};

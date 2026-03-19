"use client";

import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import React, {createContext} from "react";

/* ------------------------------------------------------------------------------------------------
 * Surface Context
 * --------------------------------------------------------------------------------------------- */
type SurfaceContext = {
  variant?: "default" | "secondary" | "tertiary";
};

const SurfaceContext = createContext<SurfaceContext>({});

/* ------------------------------------------------------------------------------------------------
 * Surface Root
 * --------------------------------------------------------------------------------------------- */
interface SurfaceRootProps extends ComponentPropsWithRef<"div"> {
  variant?: "default" | "secondary" | "tertiary";
}

const SurfaceRoot = ({children, variant = "default", ...rest}: SurfaceRootProps) => {
  return (
    <SurfaceContext value={{variant}}>
      <Box
        data-slot="surface"
        data-variant={variant}
        position="relative"
        color="fg"
        bg={
          variant === "secondary"
            ? "bg.subtle"
            : variant === "tertiary"
              ? "bg.muted"
              : "surface"
        }
        {...rest}
      >
        {children}
      </Box>
    </SurfaceContext>
  );
};

/* ------------------------------------------------------------------------------------------------
 * Exports
 * --------------------------------------------------------------------------------------------- */
export {SurfaceRoot, SurfaceContext};

export type {SurfaceRootProps};

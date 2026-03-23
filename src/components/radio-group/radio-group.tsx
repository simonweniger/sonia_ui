"use client";

import type {ComponentPropsWithRef} from "react";

import {RadioGroup as ChakraRadioGroup} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Radio Group Root
 * -----------------------------------------------------------------------------------------------*/
interface RadioGroupRootProps extends Omit<
  ComponentPropsWithRef<typeof ChakraRadioGroup.Root>,
  "variant"
> {
  variant?: string;
}

const RadioGroupRoot = ({children, variant, ...props}: RadioGroupRootProps) => {
  return (
    <ChakraRadioGroup.Root
      data-slot="radio-group"
      data-variant={variant}
      display="flex"
      flexDirection="column"
      css={{
        "&[data-orientation=vertical] [data-slot=radio]": {
          marginTop: "1rem",
        },
        "&[data-orientation=horizontal]": {
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1rem",
        },
        /* Secondary variant overrides */
        "&[data-variant=secondary] [data-slot=radio-control]": {
          shadow: "none",
          bg: "bg.muted",
        },
        "&[data-variant=secondary] [data-slot=radio]:hover [data-slot=radio-control], &[data-variant=secondary] [data-slot=radio][data-hovered=true] [data-slot=radio-control]":
          {
            borderColor: "border.emphasized",
          },
        "&[data-variant=secondary] [data-slot=radio]:not([aria-checked=true]):not([data-selected=true]) [data-slot=radio-control] [data-slot=radio-indicator]:empty::before":
          {
            bg: "bg.muted",
          },
        "&[data-variant=secondary] [data-slot=radio]:hover:not([aria-checked=true]):not([data-selected=true]) [data-slot=radio-control] [data-slot=radio-indicator]:empty::before, &[data-variant=secondary] [data-slot=radio][data-hovered=true]:not([aria-checked=true]):not([data-selected=true]) [data-slot=radio-control] [data-slot=radio-indicator]:empty::before":
          {
            bg: "bg.muted/80",
          },
      }}
      {...props}
    >
      {children}
    </ChakraRadioGroup.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {RadioGroupRoot};

export type {RadioGroupRootProps};

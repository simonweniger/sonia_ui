"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Switch as ChakraSwitch} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Switch Root
 * -----------------------------------------------------------------------------------------------*/
interface SwitchRootProps extends ComponentPropsWithRef<typeof ChakraSwitch.Root> {}

const SwitchRoot = ({children, ...props}: SwitchRootProps) => {
  return (
    <ChakraSwitch.Root
      data-slot="switch"
      css={{
        /* Disabled + Checked: reduce thumb opacity */
        "&:is(:disabled, [data-disabled=true], [aria-disabled=true]):is([aria-checked=true], [data-state=checked])":
          {
            "& [data-slot=switch-thumb]": {
              opacity: 0.4,
            },
          },
      }}
      {...props}
    >
      <ChakraSwitch.HiddenInput />
      {children}
    </ChakraSwitch.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Switch Control
 * -----------------------------------------------------------------------------------------------*/
interface SwitchControlProps extends ComponentPropsWithRef<typeof ChakraSwitch.Control> {}

const SwitchControl = ({children, ...props}: SwitchControlProps) => {
  return (
    <ChakraSwitch.Control
      data-slot="switch-control"
      css={{
        /* Hover (unchecked) */
        "[data-slot=switch]:hover &, [data-slot=switch][data-hovered=true] &": {
          bg: "bg.emphasized/80",
        },
        /* Checked + Hover */
        "[data-slot=switch]:is([aria-checked=true], [data-state=checked]):hover &, [data-slot=switch]:is([aria-checked=true], [data-state=checked])[data-hovered=true] &":
          {
            bg: "colorPalette.solid/90",
          },
        /* Checked + Pressed */
        "[data-slot=switch]:is([aria-checked=true], [data-state=checked]):active &, [data-slot=switch]:is([aria-checked=true], [data-state=checked])[data-pressed=true] &":
          {
            bg: "colorPalette.solid/90",
          },
      }}
      {...props}
    >
      {children}
    </ChakraSwitch.Control>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Switch Thumb
 * -----------------------------------------------------------------------------------------------*/
interface SwitchThumbProps extends ComponentPropsWithRef<typeof ChakraSwitch.Thumb> {}

const SwitchThumb = ({children, ...props}: SwitchThumbProps) => {
  return (
    <ChakraSwitch.Thumb
      data-slot="switch-thumb"
      css={{
        /* Horizontal stretch on press — anchored to the side the thumb sits on.
           The bouncy spring-back uses the recipe's cubic-bezier(0.34, 1.56, 0.64, 1). */
        "[data-slot=switch]:active &, [data-slot=switch][data-pressed=true] &": {
          transform: "scaleX(1.15) scaleY(0.9)",
          transformOrigin: "left center",
        },
        "[data-slot=switch]:is([aria-checked=true], [data-state=checked]):active &, [data-slot=switch]:is([aria-checked=true], [data-state=checked])[data-pressed=true] &":
          {
            transformOrigin: "right center",
          },
      }}
      {...props}
    >
      {children}
    </ChakraSwitch.Thumb>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Switch Icon
 * -----------------------------------------------------------------------------------------------*/
interface SwitchIconProps extends ComponentPropsWithRef<"span"> {}

const SwitchIcon = ({children, ...props}: SwitchIconProps) => {
  return (
    <Box
      alignItems="center"
      as="span"
      data-slot="switch-icon"
      display="flex"
      height="100%"
      justifyContent="center"
      width="100%"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Switch Content
 * -----------------------------------------------------------------------------------------------*/
interface SwitchContentProps extends ComponentPropsWithRef<"div"> {}

const SwitchContent = ({children, ...props}: SwitchContentProps) => {
  return (
    <Box data-slot="switch-content" display="flex" flexDirection="column" gap="0" {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {SwitchRoot, SwitchControl, SwitchThumb, SwitchIcon, SwitchContent};

export type {
  SwitchRootProps,
  SwitchControlProps,
  SwitchThumbProps,
  SwitchIconProps,
  SwitchContentProps,
};

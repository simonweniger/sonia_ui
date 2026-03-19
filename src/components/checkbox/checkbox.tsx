"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Checkbox as ChakraCheckbox} from "@chakra-ui/react";
import React, {useContext} from "react";

import {CheckboxGroupContext} from "../checkbox-group/checkbox-group";

/* -------------------------------------------------------------------------------------------------
 * Checkbox Root
 * -----------------------------------------------------------------------------------------------*/
interface CheckboxRootProps extends Omit<ComponentPropsWithRef<typeof ChakraCheckbox.Root>, 'variant'> {
  /** The name of the checkbox, used when submitting an HTML form. */
  name?: string;
  variant?: string;
}

const CheckboxRoot = ({children, variant, ...props}: CheckboxRootProps) => {
  const checkboxGroupContext = useContext(CheckboxGroupContext);
  const effectiveVariant = variant ?? checkboxGroupContext.variant;

  return (
    <ChakraCheckbox.Root
      data-slot="checkbox"
      data-variant={effectiveVariant}
      css={{
        "&:not(:has([data-slot=description]))": {alignItems: "center"},
        "&:has([data-slot=description])": {alignItems: "flex-start"},
        "& [data-slot=label]": {userSelect: "none"},
        "& [data-slot=description]": {textWrap: "wrap", userSelect: "none"},
      }}
      {...props}
    >
      <ChakraCheckbox.HiddenInput />
      {children}
    </ChakraCheckbox.Root>
  );
};

/* -----------------------------------------------------------------------------------------------*/

interface CheckboxControlProps extends ComponentPropsWithRef<typeof ChakraCheckbox.Control> {}

const CheckboxControl = ({children, ...props}: CheckboxControlProps) => {
  return (
    <ChakraCheckbox.Control
      data-slot="checkbox-control"
      css={{
        WebkitTapHighlightColor: "transparent",
        /* Background indicator pseudo-element */
        "&::before": {
          content: '""',
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transformOrigin: "center",
          scale: "0.7",
          rounded: "md",
          bg: "accent",
          opacity: 0,
          transition: "scale 100ms linear, opacity 200ms linear, background-color 200ms ease-out",
        },
        /* Description offset */
        "[data-slot=checkbox]:has([data-slot=description]) &": {
          marginTop: "0.125rem",
        },
        /* Focus */
        "[data-slot=checkbox]:focus-visible &, [data-slot=checkbox][data-focus-visible=true] &": {
          ring: "2px",
          ringColor: "accent",
          ringOffset: "2px",
        },
        /* Hover */
        "[data-slot=checkbox]:hover &::before, [data-slot=checkbox][data-hovered=true] &::before": {
          bg: "accent/90",
        },
        /* Selected */
        "[data-slot=checkbox][aria-checked=true] &, [data-slot=checkbox][data-selected=true] &": {
          borderColor: "transparent",
          color: "accent.fg",
        },
        "[data-slot=checkbox][aria-checked=true] &::before, [data-slot=checkbox][data-selected=true] &::before": {
          scale: "1",
          opacity: 1,
        },
        /* Indeterminate */
        "[data-slot=checkbox][data-indeterminate=true] &": {
          bg: "accent",
          color: "accent.fg",
        },
        /* Indeterminate + Pressed */
        "[data-slot=checkbox]:active[data-indeterminate=true] &, [data-slot=checkbox][data-pressed=true][data-indeterminate=true] &": {
          bg: "accent/90",
        },
        /* Invalid (not selected/indeterminate) */
        "[data-slot=checkbox][data-invalid=true]:not([aria-checked=true]):not([data-selected=true]):not([data-indeterminate=true]) &, [data-slot=checkbox][aria-invalid=true]:not([aria-checked=true]):not([data-selected=true]):not([data-indeterminate=true]) &": {
          borderColor: "danger",
          bg: "danger/10",
        },
        /* Invalid + Selected */
        "[data-slot=checkbox][data-invalid=true][aria-checked=true] &, [data-slot=checkbox][data-invalid=true][data-selected=true] &, [data-slot=checkbox][aria-invalid=true][aria-checked=true] &, [data-slot=checkbox][aria-invalid=true][data-selected=true] &": {
          borderColor: "transparent",
          bg: "danger",
          color: "danger.fg",
        },
        "[data-slot=checkbox][data-invalid=true][aria-checked=true] &::before, [data-slot=checkbox][data-invalid=true][data-selected=true] &::before, [data-slot=checkbox][aria-invalid=true][aria-checked=true] &::before, [data-slot=checkbox][aria-invalid=true][data-selected=true] &::before": {
          scale: "1",
          bg: "danger",
          opacity: 1,
        },
        /* Invalid + Indeterminate */
        "[data-slot=checkbox][data-indeterminate=true][aria-invalid=true] &, [data-slot=checkbox][data-indeterminate=true][data-invalid=true] &": {
          bg: "danger",
          color: "danger.fg",
        },
        /* Secondary variant overrides */
        "[data-variant=secondary] &": {
          shadow: "none",
          bg: "bg.muted",
        },
        "[data-variant=secondary]:not([aria-checked=true]):not([data-selected=true]):not([data-indeterminate=true]) &": {
          bg: "bg.muted",
        },
        "[data-variant=secondary][aria-checked=true] &::before, [data-variant=secondary][data-selected=true] &::before": {
          bg: "accent",
        },
        "[data-variant=secondary][data-indeterminate=true] &": {
          bg: "accent",
        },
        "[data-variant=secondary][data-indeterminate=true] &::before": {
          bg: "accent",
        },
      }}
      {...props}
    >
      {children}
    </ChakraCheckbox.Control>
  );
};

/* -----------------------------------------------------------------------------------------------*/

interface CheckboxIndicatorProps extends ComponentPropsWithRef<typeof ChakraCheckbox.Indicator> {}

const CheckboxIndicator = ({children, ...props}: CheckboxIndicatorProps) => {
  return (
    <ChakraCheckbox.Indicator
      data-slot="checkbox-indicator"
      position="relative"
      zIndex={10}
      display="flex"
      width="3"
      height="3"
      alignItems="center"
      justifyContent="center"
      css={{
        "& svg": {transform: "translateZ(0)"},
      }}
      {...props}
    >
      {children}
    </ChakraCheckbox.Indicator>
  );
};

/* -----------------------------------------------------------------------------------------------*/

interface CheckboxContentProps extends ComponentPropsWithRef<"div"> {}

const CheckboxContent = ({children, ...props}: CheckboxContentProps) => {
  return (
    <Box data-slot="checkbox-content" display="flex" flexDirection="column" gap="0" {...props}>
      {children}
    </Box>
  );
};

/* ----------------------------------------------------------------------------------------------*/

export {CheckboxRoot, CheckboxControl, CheckboxIndicator, CheckboxContent};
export type {CheckboxRootProps, CheckboxControlProps, CheckboxIndicatorProps, CheckboxContentProps};

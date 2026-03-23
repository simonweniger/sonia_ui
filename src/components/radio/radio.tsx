"use client";

import type {ComponentPropsWithRef} from "react";

import {RadioGroup} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Radio Root
 * -----------------------------------------------------------------------------------------------*/
interface RadioRootProps extends ComponentPropsWithRef<typeof RadioGroup.Item> {
  /** The name of the radio button, used when submitting an HTML form. */
  name?: string;
}

const RadioRoot = ({children, ...props}: RadioRootProps) => {
  return (
    <RadioGroup.Item
      data-slot="radio"
      css={{
        "& [data-slot=label]": {userSelect: "none"},
        "& [data-slot=description]": {textWrap: "wrap", userSelect: "none"},
      }}
      {...props}
    >
      <RadioGroup.ItemHiddenInput />
      {children}
    </RadioGroup.Item>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Radio Control
 * -----------------------------------------------------------------------------------------------*/
interface RadioControlProps extends ComponentPropsWithRef<typeof RadioGroup.ItemControl> {}

const RadioControl = ({children, ...props}: RadioControlProps) => {
  return (
    <RadioGroup.ItemControl
      data-slot="radio-control"
      css={{
        WebkitTapHighlightColor: "transparent",
        /* Focus */
        "[data-slot=radio]:focus-visible &, [data-slot=radio][data-focus-visible=true] &": {
          ring: "2px",
          ringColor: "accent",
          ringOffset: "2px",
        },
        /* Hover */
        "[data-slot=radio]:hover &, [data-slot=radio][data-hovered=true] &": {
          borderColor: "border.emphasized",
        },
        /* Pressed */
        "[data-slot=radio]:active &, [data-slot=radio][data-pressed=true] &": {
          transform: "scale(0.95)",
        },
        /* Selected */
        "[data-slot=radio][aria-checked=true] &, [data-slot=radio][data-selected=true] &": {
          borderColor: "transparent",
          bg: "accent",
        },
        /* Selected + Pressed */
        "[data-slot=radio]:active[data-selected=true] &, [data-slot=radio][data-pressed=true][data-selected=true] &":
          {
            bg: "accent/90",
          },
        /* Invalid */
        "[data-slot=radio][data-invalid=true] &, [data-slot=radio][aria-invalid=true] &": {
          borderColor: "danger",
          bg: "danger/10",
        },
        /* Invalid + Selected */
        "[data-slot=radio][data-invalid=true][aria-checked=true] &, [data-slot=radio][data-invalid=true][data-selected=true] &, [data-slot=radio][aria-invalid=true][aria-checked=true] &, [data-slot=radio][aria-invalid=true][data-selected=true] &":
          {
            borderColor: "danger",
            bg: "danger/10",
          },
      }}
      {...props}
    >
      {children}
    </RadioGroup.ItemControl>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Radio Indicator
 * -----------------------------------------------------------------------------------------------*/
interface RadioIndicatorProps extends ComponentPropsWithRef<typeof RadioGroup.ItemIndicator> {}

const RadioIndicator = ({children, ...props}: RadioIndicatorProps) => {
  return (
    <RadioGroup.ItemIndicator
      alignItems="center"
      data-slot="radio-indicator"
      display="flex"
      inset="0"
      justifyContent="center"
      pointerEvents="none"
      position="absolute"
      css={{
        "&:empty::before": {
          content: '""',
          rounded: "full",
          bg: "bg",
          width: "100%",
          height: "100%",
          scale: "1",
          transition: "scale 200ms ease-out, background-color 200ms ease-out",
        },
        /* Hover unselected indicator */
        "[data-slot=radio]:hover:not([aria-checked=true]):not([data-selected=true]) [data-slot=radio-control] &:empty::before, [data-slot=radio][data-hovered=true]:not([aria-checked=true]):not([data-selected=true]) [data-slot=radio-control] &:empty::before":
          {
            bg: "bg.subtle",
          },
        /* Selected indicator dot */
        "[data-slot=radio][aria-checked=true] &:empty::before, [data-slot=radio][data-selected=true] &:empty::before":
          {
            bg: "accent.fg",
            scale: "0.4286",
          },
        /* Selected + Pressed */
        "[data-slot=radio][data-selected=true][data-pressed=true] &:empty::before": {
          scale: "0.5714",
        },
      }}
      {...props}
    >
      {children}
    </RadioGroup.ItemIndicator>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Radio Content
 * -----------------------------------------------------------------------------------------------*/
interface RadioContentProps extends ComponentPropsWithRef<typeof RadioGroup.ItemText> {}

const RadioContent = ({children, ...props}: RadioContentProps) => {
  return (
    <RadioGroup.ItemText
      data-slot="radio-content"
      display="flex"
      flexDirection="column"
      gap="0"
      {...props}
    >
      {children}
    </RadioGroup.ItemText>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {RadioRoot, RadioControl, RadioIndicator, RadioContent};

export type {RadioRootProps, RadioControlProps, RadioIndicatorProps, RadioContentProps};

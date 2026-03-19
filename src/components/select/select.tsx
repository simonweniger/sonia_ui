"use client";

import type {ComponentPropsWithRef, ReactNode, RefAttributes} from "react";

import type {CollectionItem, SelectRootProps as ChakraSelectRootProps} from "@chakra-ui/react";

import {Portal, Select as ChakraSelect} from "@chakra-ui/react";
import React from "react";

import {IconChevronDown} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * Select Root
 * -----------------------------------------------------------------------------------------------*/
interface SelectRootProps<T extends CollectionItem = CollectionItem>
  extends ChakraSelectRootProps<T>,
    RefAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  children?: ReactNode;
}

function SelectRoot<T extends CollectionItem = CollectionItem>({
  children,
  fullWidth,
  ...props
}: SelectRootProps<T>) {
  return (
    <ChakraSelect.Root
      data-slot="select"
      width={fullWidth ? "100%" : undefined}
      {...(props as ChakraSelectRootProps<T>)}
    >
      {children}
    </ChakraSelect.Root>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Select Trigger
 * -----------------------------------------------------------------------------------------------*/
interface SelectTriggerProps extends ComponentPropsWithRef<typeof ChakraSelect.Trigger> {}

const SelectTrigger = ({children, ...props}: SelectTriggerProps) => {
  return (
    <ChakraSelect.Trigger data-slot="select-trigger" {...props}>
      {children}
    </ChakraSelect.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Select Value
 * -----------------------------------------------------------------------------------------------*/
interface SelectValueProps extends ComponentPropsWithRef<typeof ChakraSelect.ValueText> {}

const SelectValue = ({children, ...props}: SelectValueProps) => {
  return (
    <ChakraSelect.ValueText
      data-slot="select-value"
      flex="1"
      textAlign="left"
      fontSize={{base: "md", sm: "sm"}}
      css={{overflowWrap: "break-word"}}
      {...props}
    >
      {children}
    </ChakraSelect.ValueText>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Select Indicator
 * -----------------------------------------------------------------------------------------------*/
interface SelectIndicatorProps extends ComponentPropsWithRef<typeof ChakraSelect.Indicator> {}

const SelectIndicator = ({children, ...props}: SelectIndicatorProps) => {
  return (
    <ChakraSelect.Indicator
      data-slot="select-indicator"
      css={{
        transition: "transform 150ms",
        "&[data-open=true]": {transform: "rotate(180deg)"},
      }}
      {...props}
    >
      {children ?? <IconChevronDown />}
    </ChakraSelect.Indicator>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Select Popover (Content)
 * -----------------------------------------------------------------------------------------------*/
interface SelectPopoverProps extends ComponentPropsWithRef<typeof ChakraSelect.Content> {}

const SelectPopover = ({children, ...props}: SelectPopoverProps) => {
  return (
    <Portal>
      <ChakraSelect.Positioner>
        <ChakraSelect.Content
          data-slot="select-popover"
          css={{
            minWidth: "var(--trigger-width)",
            transformOrigin: "var(--trigger-anchor-point)",
          }}
          {...props}
        >
          {children}
        </ChakraSelect.Content>
      </ChakraSelect.Positioner>
    </Portal>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {SelectRoot, SelectTrigger, SelectValue, SelectIndicator, SelectPopover};

export type {
  SelectRootProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectIndicatorProps,
  SelectPopoverProps,
};

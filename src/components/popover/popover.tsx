"use client";

import type {ComponentPropsWithRef} from "react";

import {Popover as ChakraPopover} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Popover Root
 * -----------------------------------------------------------------------------------------------*/
interface PopoverRootProps extends ComponentPropsWithRef<typeof ChakraPopover.Root> {}

const PopoverRoot = ({children, ...props}: PopoverRootProps) => {
  return (
    <ChakraPopover.Root data-slot="popover-root" {...props}>
      {children}
    </ChakraPopover.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Popover Content
 * -----------------------------------------------------------------------------------------------*/
interface PopoverContentProps extends ComponentPropsWithRef<typeof ChakraPopover.Content> {}

const PopoverContent = ({children, className, ...props}: PopoverContentProps) => {
  return (
    <ChakraPopover.Content
      className={className}
      css={{transformOrigin: "var(--trigger-anchor-point)"}}
      data-slot="popover-content"
      p="0"
      {...props}
    >
      {children}
    </ChakraPopover.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Popover Arrow
 * -----------------------------------------------------------------------------------------------*/
interface PopoverArrowProps extends ComponentPropsWithRef<typeof ChakraPopover.Arrow> {}

const PopoverArrow = ({className, ...props}: PopoverArrowProps) => {
  return (
    <ChakraPopover.Arrow className={className} data-slot="popover-arrow" {...props}>
      <ChakraPopover.ArrowTip />
    </ChakraPopover.Arrow>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Popover Body
 * -----------------------------------------------------------------------------------------------*/
interface PopoverBodyProps extends ComponentPropsWithRef<typeof ChakraPopover.Body> {}

const PopoverBody = ({children, className, ...props}: PopoverBodyProps) => {
  return (
    <ChakraPopover.Body
      className={className}
      data-slot="popover-body"
      outline="none"
      p="4"
      {...props}
    >
      {children}
    </ChakraPopover.Body>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Popover Trigger
 * -----------------------------------------------------------------------------------------------*/
interface PopoverTriggerProps extends ComponentPropsWithRef<typeof ChakraPopover.Trigger> {}

const PopoverTrigger = ({children, className, ...props}: PopoverTriggerProps) => {
  return (
    <ChakraPopover.Trigger
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      className={className}
      cursor="pointer"
      data-slot="popover-trigger"
      css={{
        transition:
          "color 150ms var(--ease-smooth), background-color 150ms var(--ease-smooth), box-shadow 150ms var(--ease-out)",
      }}
      {...props}
    >
      {children}
    </ChakraPopover.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Popover Heading
 * -----------------------------------------------------------------------------------------------*/
interface PopoverHeadingProps extends ComponentPropsWithRef<typeof ChakraPopover.Header> {}

const PopoverHeading = ({children, className, ...props}: PopoverHeadingProps) => {
  return (
    <ChakraPopover.Header
      className={className}
      data-slot="popover-heading"
      fontWeight="medium"
      {...props}
    >
      {children}
    </ChakraPopover.Header>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Popover CloseTrigger
 * -----------------------------------------------------------------------------------------------*/
interface PopoverCloseTriggerProps extends ComponentPropsWithRef<
  typeof ChakraPopover.CloseTrigger
> {}

const PopoverCloseTrigger = ({children, className, ...props}: PopoverCloseTriggerProps) => {
  return (
    <ChakraPopover.CloseTrigger className={className} data-slot="popover-close-trigger" {...props}>
      {children}
    </ChakraPopover.CloseTrigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  PopoverRoot,
  PopoverTrigger,
  PopoverBody,
  PopoverArrow,
  PopoverContent,
  PopoverHeading,
  PopoverCloseTrigger,
};

export type {
  PopoverRootProps,
  PopoverTriggerProps,
  PopoverBodyProps,
  PopoverArrowProps,
  PopoverContentProps,
  PopoverHeadingProps,
  PopoverCloseTriggerProps,
};

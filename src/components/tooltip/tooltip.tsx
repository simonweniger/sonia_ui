"use client";

import type {ComponentPropsWithRef} from "react";

import {Tooltip as ChakraTooltip} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Tooltip Root
 * -----------------------------------------------------------------------------------------------*/
interface TooltipRootProps extends ComponentPropsWithRef<typeof ChakraTooltip.Root> {}

const TooltipRoot = ({children, ...props}: TooltipRootProps) => {
  return (
    <ChakraTooltip.Root data-slot="tooltip-root" {...props}>
      {children}
    </ChakraTooltip.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tooltip Content
 * -----------------------------------------------------------------------------------------------*/
interface TooltipContentProps extends ComponentPropsWithRef<typeof ChakraTooltip.Content> {
  showArrow?: boolean;
}

const TooltipContent = ({
  children,
  className,
  showArrow = false,
  ...props
}: TooltipContentProps) => {
  return (
    <ChakraTooltip.Content
      className={className}
      css={{transformOrigin: "var(--trigger-anchor-point)"}}
      data-slot="tooltip-content"
      {...props}
    >
      {!!showArrow && (
        <ChakraTooltip.Arrow data-slot="tooltip-arrow">
          <ChakraTooltip.ArrowTip />
        </ChakraTooltip.Arrow>
      )}
      {children}
    </ChakraTooltip.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tooltip Arrow
 * -----------------------------------------------------------------------------------------------*/
interface TooltipArrowProps extends ComponentPropsWithRef<typeof ChakraTooltip.Arrow> {}

const TooltipArrow = ({className, ...props}: TooltipArrowProps) => {
  return (
    <ChakraTooltip.Arrow className={className} data-slot="tooltip-arrow" {...props}>
      <ChakraTooltip.ArrowTip />
    </ChakraTooltip.Arrow>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tooltip Trigger
 * -----------------------------------------------------------------------------------------------*/
interface TooltipTriggerProps extends ComponentPropsWithRef<typeof ChakraTooltip.Trigger> {}

const TooltipTrigger = ({children, className, ...props}: TooltipTriggerProps) => {
  return (
    <ChakraTooltip.Trigger
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      className={className}
      data-slot="tooltip-trigger"
      css={{
        transition:
          "color 150ms var(--ease-smooth), background-color 150ms var(--ease-smooth), box-shadow 150ms var(--ease-out)",
      }}
      {...props}
    >
      {children}
    </ChakraTooltip.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow};

export type {TooltipRootProps, TooltipArrowProps, TooltipContentProps, TooltipTriggerProps};

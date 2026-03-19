import type {ComponentProps} from "react";

import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverHeading,
  PopoverRoot,
  PopoverTrigger,
} from "./popover";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Body: PopoverBody,
  Arrow: PopoverArrow,
  Content: PopoverContent,
  Heading: PopoverHeading,
  CloseTrigger: PopoverCloseTrigger,
});

export type Popover = {
  Props: ComponentProps<typeof PopoverRoot>;
  RootProps: ComponentProps<typeof PopoverRoot>;
  TriggerProps: ComponentProps<typeof PopoverTrigger>;
  BodyProps: ComponentProps<typeof PopoverBody>;
  ArrowProps: ComponentProps<typeof PopoverArrow>;
  ContentProps: ComponentProps<typeof PopoverContent>;
  HeadingProps: ComponentProps<typeof PopoverHeading>;
  CloseTriggerProps: ComponentProps<typeof PopoverCloseTrigger>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {PopoverArrow, PopoverBody, PopoverCloseTrigger, PopoverContent, PopoverHeading, PopoverRoot, PopoverTrigger};

export type {
  PopoverRootProps,
  PopoverRootProps as PopoverProps,
  PopoverTriggerProps,
  PopoverBodyProps,
  PopoverArrowProps,
  PopoverContentProps,
  PopoverHeadingProps,
  PopoverCloseTriggerProps,
} from "./popover";

import type {ComponentProps} from "react";

import {SelectIndicator, SelectPopover, SelectRoot, SelectTrigger, SelectValue} from "./select";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Indicator: SelectIndicator,
  Popover: SelectPopover,
});

export type Select = {
  Props: ComponentProps<typeof SelectRoot>;
  RootProps: ComponentProps<typeof SelectRoot>;
  TriggerProps: ComponentProps<typeof SelectTrigger>;
  ValueProps: ComponentProps<typeof SelectValue>;
  IndicatorProps: ComponentProps<typeof SelectIndicator>;
  PopoverProps: ComponentProps<typeof SelectPopover>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {SelectIndicator, SelectPopover, SelectRoot, SelectTrigger, SelectValue};

export type {
  SelectRootProps,
  SelectRootProps as SelectProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectIndicatorProps,
  SelectPopoverProps,
} from "./select";

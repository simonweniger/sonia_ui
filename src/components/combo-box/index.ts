import type {ComponentProps} from "react";

import {ComboBoxInputGroup, ComboBoxPopover, ComboBoxRoot, ComboBoxTrigger} from "./combo-box";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ComboBox = Object.assign(ComboBoxRoot, {
  Root: ComboBoxRoot,
  InputGroup: ComboBoxInputGroup,
  Trigger: ComboBoxTrigger,
  Popover: ComboBoxPopover,
});

export type ComboBox = {
  Props: ComponentProps<typeof ComboBoxRoot>;
  RootProps: ComponentProps<typeof ComboBoxRoot>;
  InputGroupProps: ComponentProps<typeof ComboBoxInputGroup>;
  TriggerProps: ComponentProps<typeof ComboBoxTrigger>;
  PopoverProps: ComponentProps<typeof ComboBoxPopover>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {ComboBoxInputGroup, ComboBoxPopover, ComboBoxRoot, ComboBoxTrigger};

export type {
  ComboBoxRootProps,
  ComboBoxRootProps as ComboBoxProps,
  ComboBoxInputGroupProps,
  ComboBoxTriggerProps,
  ComboBoxPopoverProps,
} from "./combo-box";

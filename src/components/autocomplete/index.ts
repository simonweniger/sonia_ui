import type {ComponentProps} from "react";

import {
  AutocompleteClearButton,
  AutocompleteFilter,
  AutocompleteIndicator,
  AutocompleteItem,
  AutocompleteItemGroup,
  AutocompleteItemIndicator,
  AutocompleteItemText,
  AutocompletePopover,
  AutocompleteRoot,
  AutocompleteTrigger,
  AutocompleteValue,
} from "./autocomplete";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Autocomplete = Object.assign(AutocompleteRoot, {
  Root: AutocompleteRoot,
  Trigger: AutocompleteTrigger,
  Value: AutocompleteValue,
  Indicator: AutocompleteIndicator,
  Popover: AutocompletePopover,
  Filter: AutocompleteFilter,
  ClearButton: AutocompleteClearButton,
  Item: AutocompleteItem,
  ItemText: AutocompleteItemText,
  ItemIndicator: AutocompleteItemIndicator,
  ItemGroup: AutocompleteItemGroup,
});

export type Autocomplete = {
  Props: ComponentProps<typeof AutocompleteRoot>;
  RootProps: ComponentProps<typeof AutocompleteRoot>;
  TriggerProps: ComponentProps<typeof AutocompleteTrigger>;
  ValueProps: ComponentProps<typeof AutocompleteValue>;
  IndicatorProps: ComponentProps<typeof AutocompleteIndicator>;
  PopoverProps: ComponentProps<typeof AutocompletePopover>;
  FilterProps: ComponentProps<typeof AutocompleteFilter>;
  ClearButtonProps: ComponentProps<typeof AutocompleteClearButton>;
  ItemProps: ComponentProps<typeof AutocompleteItem>;
  ItemTextProps: ComponentProps<typeof AutocompleteItemText>;
  ItemIndicatorProps: ComponentProps<typeof AutocompleteItemIndicator>;
  ItemGroupProps: ComponentProps<typeof AutocompleteItemGroup>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {
  AutocompleteClearButton,
  AutocompleteFilter,
  AutocompleteItem,
  AutocompleteItemGroup,
  AutocompleteItemIndicator,
  AutocompleteItemText,
  AutocompleteTrigger,
  AutocompleteIndicator,
  AutocompletePopover,
  AutocompleteRoot,
  AutocompleteValue,
};

export type {
  AutocompleteRootProps,
  AutocompleteRootProps as AutocompleteProps,
  AutocompleteTriggerProps,
  AutocompleteValueProps,
  AutocompleteIndicatorProps,
  AutocompletePopoverProps,
  AutocompleteFilterProps,
  AutocompleteClearButtonProps,
  AutocompleteItemProps,
  AutocompleteItemTextProps,
  AutocompleteItemIndicatorProps,
  AutocompleteItemGroupProps,
} from "./autocomplete";

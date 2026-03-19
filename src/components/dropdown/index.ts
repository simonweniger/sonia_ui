import type {ComponentProps} from "react";

import {
  DropdownCheckboxItem,
  DropdownContent,
  DropdownItem,
  DropdownItemIndicator,
  DropdownRadioItem,
  DropdownRadioItemGroup,
  DropdownRoot,
  DropdownSection,
  DropdownSectionLabel,
  DropdownSeparator,
  DropdownTrigger,
  DropdownTriggerItem,
} from "./dropdown";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Dropdown = Object.assign(DropdownRoot, {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Section: DropdownSection,
  SectionLabel: DropdownSectionLabel,
  Item: DropdownItem,
  ItemIndicator: DropdownItemIndicator,
  CheckboxItem: DropdownCheckboxItem,
  RadioItemGroup: DropdownRadioItemGroup,
  RadioItem: DropdownRadioItem,
  TriggerItem: DropdownTriggerItem,
  Separator: DropdownSeparator,
});

export type Dropdown = {
  Props: ComponentProps<typeof DropdownRoot>;
  RootProps: ComponentProps<typeof DropdownRoot>;
  TriggerProps: ComponentProps<typeof DropdownTrigger>;
  ContentProps: ComponentProps<typeof DropdownContent>;
  SectionProps: ComponentProps<typeof DropdownSection>;
  SectionLabelProps: ComponentProps<typeof DropdownSectionLabel>;
  ItemProps: ComponentProps<typeof DropdownItem>;
  ItemIndicatorProps: ComponentProps<typeof DropdownItemIndicator>;
  CheckboxItemProps: ComponentProps<typeof DropdownCheckboxItem>;
  RadioItemGroupProps: ComponentProps<typeof DropdownRadioItemGroup>;
  RadioItemProps: ComponentProps<typeof DropdownRadioItem>;
  TriggerItemProps: ComponentProps<typeof DropdownTriggerItem>;
  SeparatorProps: ComponentProps<typeof DropdownSeparator>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {
  DropdownCheckboxItem,
  DropdownContent,
  DropdownItem,
  DropdownItemIndicator,
  DropdownRadioItem,
  DropdownRadioItemGroup,
  DropdownRoot,
  DropdownSection,
  DropdownSectionLabel,
  DropdownSeparator,
  DropdownTrigger,
  DropdownTriggerItem,
};

export type {
  DropdownCheckboxItemProps,
  DropdownContentProps,
  DropdownItemIndicatorProps,
  DropdownItemProps,
  DropdownRadioItemGroupProps,
  DropdownRadioItemProps,
  DropdownRootProps,
  DropdownRootProps as DropdownProps,
  DropdownSectionLabelProps,
  DropdownSectionProps,
  DropdownSeparatorProps,
  DropdownTriggerItemProps,
  DropdownTriggerProps,
} from "./dropdown";

import type {MenuItemRoot} from "../menu-item";
import type {MenuSectionRoot} from "../menu-section";
import type {ComponentProps} from "react";

import {MenuItem, MenuItemIndicator} from "../menu-item";
import {MenuSection} from "../menu-section";

import {MenuContent, MenuRoot} from "./menu";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Menu = Object.assign(MenuRoot, {
  Root: MenuRoot,
  Content: MenuContent,
  Item: MenuItem,
  ItemIndicator: MenuItemIndicator,
  Section: MenuSection,
});

export type Menu = {
  Props: ComponentProps<typeof MenuRoot>;
  RootProps: ComponentProps<typeof MenuRoot>;
  ContentProps: ComponentProps<typeof MenuContent>;
  ItemProps: ComponentProps<typeof MenuItemRoot>;
  SectionProps: ComponentProps<typeof MenuSectionRoot>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {MenuRoot, MenuContent};

export type {MenuRootProps, MenuRootProps as MenuProps, MenuContentProps} from "./menu";

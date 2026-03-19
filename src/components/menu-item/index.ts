import type {ComponentProps} from "react";

import {MenuItemCommand, MenuItemIndicator, MenuItemRoot} from "./menu-item";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const MenuItem = Object.assign(MenuItemRoot, {
  Root: MenuItemRoot,
  Indicator: MenuItemIndicator,
  Command: MenuItemCommand,
});

export type MenuItem = {
  Props: ComponentProps<typeof MenuItemRoot>;
  RootProps: ComponentProps<typeof MenuItemRoot>;
  IndicatorProps: ComponentProps<typeof MenuItemIndicator>;
  CommandProps: ComponentProps<typeof MenuItemCommand>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {MenuItemRoot, MenuItemIndicator, MenuItemCommand};

export type {
  MenuItemRootProps,
  MenuItemRootProps as MenuItemProps,
  MenuItemIndicatorProps,
  MenuItemCommandProps,
} from "./menu-item";

import type {ComponentProps} from "react";

import {MenuSectionLabel, MenuSectionRoot} from "./menu-section";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const MenuSection = Object.assign(MenuSectionRoot, {
  Root: MenuSectionRoot,
  Label: MenuSectionLabel,
});

export type MenuSection = {
  Props: ComponentProps<typeof MenuSectionRoot>;
  RootProps: ComponentProps<typeof MenuSectionRoot>;
  LabelProps: ComponentProps<typeof MenuSectionLabel>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {MenuSectionRoot, MenuSectionLabel};

export type {
  MenuSectionRootProps,
  MenuSectionRootProps as MenuSectionProps,
  MenuSectionLabelProps,
} from "./menu-section";

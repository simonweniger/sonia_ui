import {createSystem, defaultBaseConfig, mergeConfigs} from "@chakra-ui/react";

import {defaultThemeConfig} from "./theme/index";

export const system = createSystem(mergeConfigs(defaultBaseConfig, defaultThemeConfig));

export type {RecipeProps, SlotRecipeProps} from "./types";

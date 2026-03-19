import {createSystem} from "@chakra-ui/react";

import {defaultConfig} from "../preset";

/**
 * Single app theme — all tokens, recipes, and semantic tokens
 * live in the preset (`src/preset/`). No overrides needed.
 */
export const system = createSystem(defaultConfig);

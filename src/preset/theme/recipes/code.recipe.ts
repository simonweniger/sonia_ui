import {defineRecipe} from "@chakra-ui/react/styled-system";

import {badgeRecipe} from "./badge.recipe";

const {defaultVariants, variants} = badgeRecipe;

export const codeRecipe = defineRecipe({
  className: "chakra-code",
  base: {
    fontFamily: "mono",
    alignItems: "center",
    display: "inline-flex",
    borderRadius: "indicator.md",
  },
  variants,
  defaultVariants,
});

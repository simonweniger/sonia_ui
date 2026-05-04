import {tableAnatomy} from "@chakra-ui/react/anatomy";
import {defineSlotRecipe} from "@chakra-ui/react/styled-system";

/**
 * Minimal table recipe — all visual styling lives in the table component
 * (table.tsx) to match the original SoniaUI design. This recipe only
 * provides the slot class names so Chakra's anatomy system is satisfied.
 */
export const tableSlotRecipe = defineSlotRecipe({
  className: "chakra-table",
  slots: tableAnatomy.keys(),
  base: {
    root: {
      fontVariantNumeric: "lining-nums tabular-nums",
      width: "full",
    },
  },
  variants: {
    variant: {
      line: {},
      outline: {},
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    variant: "line",
    size: "md",
  },
});

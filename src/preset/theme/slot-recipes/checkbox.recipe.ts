import {checkboxAnatomy} from "@chakra-ui/react/anatomy";
import {defineSlotRecipe} from "@chakra-ui/react/styled-system";

import {checkmarkRecipe} from "../recipes/checkmark.recipe";
import {soniaUIDisabled} from "../shared";

export const checkboxSlotRecipe = defineSlotRecipe({
  slots: checkboxAnatomy.keys(),
  className: "chakra-checkbox",
  base: {
    root: {
      colorPalette: "accent",
      display: "inline-flex",
      gap: "3",
      alignItems: "center",
      verticalAlign: "top",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
      ...soniaUIDisabled,
    },

    control: {
      ...checkmarkRecipe.base,
      position: "relative",
      overflow: "hidden",
      borderRadius: "md",
      bg: "bg",
      shadow: "field",
      outline: "none",
      cursor: "pointer",
      transitionProperty: "background-color, transform",
      transitionDuration: "200ms, 100ms",
      transitionTimingFunction: "ease-out",
      _motionReduce: {transition: "none"},
    },

    label: {
      fontWeight: "medium",
      userSelect: "none",
      _disabled: {
        opacity: "0.5",
      },
    },
  },

  variants: {
    size: {
      xs: {
        root: {gap: "1.5"},
        label: {textStyle: "xs"},
        control: checkmarkRecipe.variants?.size?.xs,
      },
      sm: {
        root: {gap: "2"},
        label: {textStyle: "sm"},
        control: checkmarkRecipe.variants?.size?.sm,
      },
      md: {
        root: {gap: "2.5"},
        label: {textStyle: "sm"},
        control: checkmarkRecipe.variants?.size?.md,
      },
      lg: {
        root: {gap: "3"},
        label: {textStyle: "md"},
        control: checkmarkRecipe.variants?.size?.lg,
      },
    },

    variant: {
      outline: {
        control: checkmarkRecipe.variants?.variant?.outline,
      },
      solid: {
        control: checkmarkRecipe.variants?.variant?.solid,
      },
      subtle: {
        control: checkmarkRecipe.variants?.variant?.subtle,
      },
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

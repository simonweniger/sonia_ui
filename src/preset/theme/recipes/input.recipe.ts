import {defineRecipe} from "@chakra-ui/react/styled-system";

import {soniaUIDisabled, soniaUIFocusRing} from "../shared";

export const inputRecipe = defineRecipe({
  className: "chakra-input",
  base: {
    width: "100%",
    minWidth: "0",
    outline: "0",
    position: "relative",
    appearance: "none",
    textAlign: "start",
    borderRadius: "lg",
    color: "fg",
    px: "3",
    py: "2",
    fontSize: {base: "md", sm: "sm"},
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease",
    _placeholder: {color: "fg.muted"},
    ...soniaUIFocusRing,
    ...soniaUIDisabled,
    height: "var(--input-height)",
    minW: "var(--input-height)",
    "--focus-color": "colors.colorPalette.focusRing",
    "--error-color": "colors.border.error",
    _invalid: {
      outline: "1px solid",
      outlineColor: "danger",
      bg: "bg.subtle",
    },
  },

  variants: {
    size: {
      xs: {
        borderRadius: "control.sm",
        textStyle: "xs",
        px: "2",
        "--input-height": "sizes.6",
      },
      sm: {
        borderRadius: "control.md",
        textStyle: "sm",
        px: "2.5",
        "--input-height": "sizes.7",
      },
      md: {
        borderRadius: "lg",
        textStyle: "sm",
        px: "3",
        "--input-height": "sizes.8",
      },
      lg: {
        borderRadius: "lg",
        textStyle: "md",
        px: "4.5",
        "--input-height": "sizes.10",
      },
      xl: {
        borderRadius: "lg",
        textStyle: "md",
        px: "6",
        "--input-height": "sizes.12",
      },
    },

    variant: {
      outline: {
        bg: "bg",
        borderWidth: "1px",
        borderColor: "border",
        shadow: "field",
        _hover: {
          bg: "bg.muted",
          borderColor: "border.emphasized",
        },
        _focus: {
          ring: "2px",
          ringColor: "accent",
          borderColor: "accent",
          bg: "bg.subtle",
        },
      },
      subtle: {
        bg: "bg.emphasized",
        shadow: "none",
        borderWidth: "1px",
        borderColor: "transparent",
        _hover: {
          bg: "bg.emphasized/85",
        },
        _focus: {
          ring: "2px",
          ringColor: "accent",
          bg: "bg.emphasized",
        },
        _invalid: {
          outline: "1px solid",
          outlineColor: "danger",
          bg: "bg.emphasized",
        },
      },
      flushed: {
        bg: "transparent",
        borderBottomWidth: "1px",
        borderBottomColor: "border",
        borderRadius: "0",
        px: "0",
        _focusVisible: {
          borderColor: "var(--focus-color)",
          boxShadow: "0px 1px 0px 0px var(--focus-color)",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

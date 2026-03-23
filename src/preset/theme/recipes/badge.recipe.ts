import {defineRecipe} from "@chakra-ui/react/styled-system";

export const badgeRecipe = defineRecipe({
  className: "chakra-badge",
  base: {
    display: "inline-flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5",
    fontWeight: "medium",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
    userSelect: "none",
    borderWidth: "1.5px",
    borderColor: "bg",
    borderRadius: "full",
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
      },
      outline: {
        color: "colorPalette.fg",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.border",
      },
      surface: {
        bg: "colorPalette.muted",
        color: "colorPalette.fg",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.border",
      },
      plain: {
        color: "colorPalette.fg",
      },
    },
    size: {
      xs: {
        textStyle: "2xs",
        px: "0.5",
        minH: "3.5",
        minW: "3.5",
      },
      sm: {
        textStyle: "2xs",
        px: "1",
        minH: "4",
        minW: "4",
        lineHeight: "1.34",
      },
      md: {
        textStyle: "xs",
        px: "1.5",
        minH: "5",
        minW: "5",
        lineHeight: "1.34",
      },
      lg: {
        textStyle: "xs",
        px: "2",
        minH: "6",
        minW: "6",
        lineHeight: "1.43",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "sm",
  },
});

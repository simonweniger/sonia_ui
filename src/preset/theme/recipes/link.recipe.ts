import {defineRecipe} from "@chakra-ui/react/styled-system";

import {soniaUIDisabled, soniaUIFocusRing} from "../shared";

export const linkRecipe = defineRecipe({
  className: "chakra-link",
  base: {
    display: "inline-flex",
    position: "relative",
    alignItems: "center",
    h: "fit-content",
    w: "fit-content",
    outline: "none",
    gap: "1.5",
    cursor: "pointer",
    borderRadius: "xl",
    fontSize: "sm",
    fontWeight: "medium",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "1.5px",
    color: "fg",
    textDecorationColor: "border/50",
    WebkitTapHighlightColor: "transparent",
    transitionProperty: "color, text-decoration-color, background-color, box-shadow, opacity",
    transitionDuration: "100ms, 100ms, 150ms, 150ms, 100ms",
    transitionTimingFunction: "ease, ease-out, ease, ease-out, ease-out",
    "@media (hover: hover)": {
      "&:hover [data-slot=link-icon], &[data-hovered=true] [data-slot=link-icon]": {
        opacity: 1,
      },
    },
    _hover: {
      textDecorationColor: "fg.muted",
    },
    ...soniaUIFocusRing,
    ...soniaUIDisabled,
  },

  variants: {
    variant: {
      underline: {
        color: "colorPalette.fg",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationColor: "currentColor/20",
      },
      plain: {
        color: "colorPalette.fg",
        textDecoration: "none",
        _hover: {
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          textDecorationColor: "currentColor/20",
        },
      },
    },
  },

  defaultVariants: {
    variant: "underline",
  },
});

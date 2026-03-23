import {menuAnatomy} from "@chakra-ui/react/anatomy";
import {defineSlotRecipe} from "@chakra-ui/react/styled-system";

import {heroUIDisabled, heroUIFocusRing} from "../shared";

export const menuSlotRecipe = defineSlotRecipe({
  className: "chakra-menu",
  slots: menuAnatomy.keys(),
  base: {
    trigger: {
      _focusVisible: {outline: "none", ring: "0", ringOffset: "0", boxShadow: "none"},
      position: "relative",
      _open: {zIndex: 0},
    },
    content: {
      overflowY: "auto",
      overscrollBehavior: "contain",
      borderRadius: "3xl",
      bg: "overlay",
      p: "0",
      fontSize: "sm",
      shadow: "overlay",
      outline: 0,
      color: "fg",
      maxHeight: "var(--available-height)",
      "--menu-z-index": "zIndex.layer-3",
      zIndex: "calc(var(--menu-z-index) + var(--layer-index, 0))",
      scrollPaddingBlock: "0.25rem",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fastest",
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "fastest",
      },
      scrollbar: "thin",
      _focusVisible: {outline: "none"},
    },
    item: {
      textDecoration: "none",
      color: "fg",
      userSelect: "none",
      borderRadius: "2xl",
      width: "100%",
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "start",
      position: "relative",
      flex: "0 0 auto",
      outline: 0,
      gap: "3",
      minH: "9",
      px: "2",
      py: "1.5",
      WebkitTapHighlightColor: "transparent",
      transitionProperty: "transform, box-shadow",
      transitionDuration: "250ms, 150ms",
      ...heroUIFocusRing,
      _active: {transform: "scale(0.98)"},
      ...heroUIDisabled,
    },
    itemText: {
      flex: "1",
    },
    itemGroupLabel: {
      display: "flex",
      alignItems: "center",
      textStyle: "sm",
      color: "fg.subtle",
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
    },
    itemCommand: {
      opacity: "0.6",
      textStyle: "xs",
      ms: "auto",
      ps: "4",
      letterSpacing: "widest",
    },
    separator: {
      height: "1px",
      bg: "border",
      my: "1",
      mx: "-1",
    },
  },

  variants: {
    variant: {
      subtle: {
        item: {
          _highlighted: {
            bg: "bg.emphasized",
          },
        },
      },
      solid: {
        item: {
          _highlighted: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast",
          },
        },
      },
    },

    size: {
      sm: {
        content: {
          minW: "8rem",
          padding: "1",
          borderRadius: "panel.md",
        },
        item: {
          gap: "1",
          textStyle: "xs",
          minH: "6",
          px: "1.5",
          ps: "var(--menu-item-inset, {sizes.1.5})",
        },
        itemGroupLabel: {
          textStyle: "xs",
          minH: "6",
          px: "1.5",
        },
      },
      md: {
        content: {
          minW: "8rem",
          padding: "1",
        },
        item: {
          gap: "2",
          textStyle: "sm",
          minH: "7",
          px: "2",
          ps: "var(--menu-item-inset, {sizes.2})",
        },
        itemGroupLabel: {
          textStyle: "sm",
          minH: "7",
          px: "2",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});

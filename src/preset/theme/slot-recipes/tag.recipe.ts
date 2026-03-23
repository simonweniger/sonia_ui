import {tagAnatomy} from "@chakra-ui/react/anatomy";
import {defineSlotRecipe} from "@chakra-ui/react/styled-system";

import {heroUIDisabled} from "../shared";

export const tagSlotRecipe = defineSlotRecipe({
  slots: tagAnatomy.keys(),
  className: "chakra-tag",
  base: {
    root: {
      colorPalette: "neutral",
      display: "inline-flex",
      alignItems: "center",
      verticalAlign: "top",
      maxWidth: "100%",
      userSelect: "none",
      borderRadius: "full",
      fontWeight: "medium",
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
      focusVisibleRing: "outside",
      transitionProperty: "color, background-color, box-shadow, scale, opacity",
      transitionDuration: "100ms",
      transitionTimingFunction: "var(--ease-smooth, ease)",
      transformOrigin: "center",
      ...heroUIDisabled,

      /* SVG icon styling */
      "& svg": {
        pointerEvents: "none",
        width: "3",
        height: "3",
        flexShrink: 0,
        alignSelf: "center",
        color: "currentColor",
      },

      /* Selected state */
      "&[data-selected=true], &[aria-selected=true]": {
        bg: "accent.subtle",
        color: "accent.solid",
        "@media (hover: hover)": {
          "&:is(:hover, [data-hovered=true])": {
            bg: "accent.emphasized",
          },
        },
      },
    },
    label: {
      lineClamp: "1",
    },
    closeTrigger: {
      cursor: "button",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      borderRadius: "full",
      color: "currentColor",
      opacity: 0.8,
      padding: "1px",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      _hover: {
        opacity: 1,
      },
      _after: {
        content: '""',
        position: "absolute",
        boxSize: "24px",
        borderRadius: "full",
      },
      /* SVG icon styling */
      "& svg": {
        boxSize: "inherit",
        flexShrink: 0,
        alignSelf: "center",
        color: "currentColor",
      },
    },
    startElement: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      boxSize: "var(--tag-element-size)",
      _icon: {boxSize: "80% !important"},
      "&:has([data-scope=avatar])": {
        boxSize: "var(--tag-avatar-size)",
        ms: "var(--tag-element-offset)",
      },
      '&:has([class*="status__root"])': {
        width: "var(--tag-status-size)",
      },
    },
    endElement: {
      flexShrink: 0,
      boxSize: "var(--tag-element-size)",
      _icon: {boxSize: "100%"},
      "&:has(button)": {
        me: "var(--tag-element-offset)",
      },
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          px: "1",
          py: "0.5",
          gap: "1",
          "--tag-avatar-size": "spacing.3.5",
          "--tag-status-size": "spacing.2",
          "--tag-element-size": "spacing.3.5",
          "--tag-element-offset": "spacing.-0.5",
        },
        label: {
          textStyle: "xs",
        },
        closeTrigger: {
          boxSize: "3",
        },
      },
      md: {
        root: {
          px: "1.5",
          py: "1",
          gap: "1",
          "--tag-avatar-size": "spacing.4",
          "--tag-status-size": "spacing.2",
          "--tag-element-size": "spacing.4",
          "--tag-element-offset": "spacing.-1",
        },
        label: {
          textStyle: "xs",
        },
        closeTrigger: {
          boxSize: "3",
        },
      },
      lg: {
        root: {
          px: "2.5",
          py: "1.5",
          gap: "1",
          "--tag-avatar-size": "spacing.5",
          "--tag-status-size": "spacing.2",
          "--tag-element-size": "spacing.5",
          "--tag-element-offset": "spacing.-1.5",
        },
        label: {
          textStyle: "sm",
        },
        closeTrigger: {
          boxSize: "3.5",
          padding: "2px",
        },
      },
    },

    variant: {
      /**
       * "subtle" maps to the original HeroUI "default" variant:
       * neutral gray background with foreground text.
       */
      subtle: {
        root: {
          bg: "neutral.muted",
          color: "neutral.fg",
          "@media (hover: hover)": {
            "&:is(:hover, [data-hovered=true]):not([data-selected=true]):not([data-disabled=true])":
              {
                bg: "neutral.subtle",
              },
          },
        },
      },
      /**
       * "surface" maps to the original HeroUI "surface" variant:
       * white/surface background with foreground text.
       */
      surface: {
        root: {
          bg: "surface",
          color: "surface.fg",
          "@media (hover: hover)": {
            "&:is(:hover, [data-hovered=true]):not([data-selected=true]):not([data-disabled=true])":
              {
                bg: "surface.hover",
              },
          },
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "subtle",
  },
});

import {defineRecipe} from "@chakra-ui/react/styled-system";

import {heroUIDisabled, heroUIFocusRing} from "../shared";

export const buttonRecipe = defineRecipe({
  className: "chakra-button",
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    cursor: "pointer",
    flexShrink: "0",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    fontSize: "sm",
    borderRadius: "3xl",
    gap: "2",
    px: "4",
    width: "fit-content",
    transformOrigin: "center",
    h: "10",
    md: {h: "9"},
    borderWidth: "1px",
    borderColor: "transparent",
    WebkitTapHighlightColor: "transparent",
    transitionProperty: "transform, background-color, box-shadow",
    transitionDuration: "250ms, 100ms, 100ms",
    transitionTimingFunction:
      "var(--ease-smooth, ease), var(--ease-out, ease-out), var(--ease-out, ease-out)",
    _motionReduce: {transition: "none"},

    _active: {
      transform: "scale(0.97)",
    },

    ...heroUIFocusRing,
    ...heroUIDisabled,

    "&[data-pending=true]": {
      cursor: "wait",
      opacity: 0.7,
    },

    /* SVG icon styling - exclude spinner and link-icon svgs */
    "& svg:not([data-slot=spinner] svg, [data-slot=link-icon] svg)": {
      pointerEvents: "none",
      marginInline: "-0.125rem",
      marginBlock: "0.125rem",
      width: "1.25rem",
      height: "1.25rem",
      flexShrink: 0,
      alignSelf: "center",
    },
    "@media (min-width: 640px)": {
      "& svg:not([data-slot=spinner] svg, [data-slot=link-icon] svg)": {
        marginBlock: "0.25rem",
        width: "1rem",
        height: "1rem",
      },
    },
  },

  variants: {
    size: {
      xs: {
        gap: "1",
        h: "6",
        minW: "6",
        textStyle: "xs",
        px: "2",
      },
      sm: {
        gap: "2",
        h: "9",
        px: "3",
        md: {h: "8"},
        "& svg:not([data-slot=spinner] svg, [data-slot=link-icon] svg)": {
          width: "1rem",
          height: "1rem",
        },
        _active: {transform: "scale(0.98)"},
      },
      md: {
        gap: "2",
        h: "10",
        md: {h: "9"},
      },
      lg: {
        gap: "3",
        h: "11",
        textStyle: "md",
        px: "4.5",
        md: {h: "10"},
        _active: {transform: "scale(0.96)"},
      },
      xl: {
        gap: "3",
        h: "12",
        minW: "12",
        textStyle: "lg",
        px: "6",
      },
    },

    variant: {
      /* Solid: filled with colorPalette color */
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.solid/90",
        },
      },

      /* Subtle: light tinted bg, darkens on hover */
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.emphasized",
        },
      },

      /* Glass: accent with gradient overlay */
      glass: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderColor: "transparent",
        textShadow: "0 1px 2px rgba(0,0,0,0.1)",
        overflow: "clip",
        _hover: {
          bg: "colorPalette.solid/90",
        },
        _after: {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "linear-gradient(180deg, white 40%, rgba(0,0,0,0.2))",
          opacity: 0.2,
          transitionProperty: "opacity",
          transitionDuration: "moderate",
          pointerEvents: "none",
        },
        "@media (hover: hover)": {
          "&:hover, &[data-hovered=true]": {
            _after: {
              background: "linear-gradient(180deg, rgba(255,255,255,0.8) 40%, rgba(0,0,0,0.6))",
            },
          },
        },
      },

      /* Surface: bordered with subtle bg, darkens on hover */
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderColor: "colorPalette.muted",
        _hover: {
          bg: "colorPalette.emphasized",
        },
      },

      /* Secondary: visible gray bg + accent-colored text */
      secondary: {
        bg: "neutral.subtle",
        color: "accent.fg",
        borderColor: "transparent",
        _hover: {
          bg: "neutral.emphasized",
        },
      },

      /* Tertiary: visible gray bg + default text */
      tertiary: {
        bg: "neutral.subtle",
        color: "fg",
        borderColor: "transparent",
        _hover: {
          bg: "neutral.emphasized",
        },
      },

      /* Danger-soft: muted red bg + red text */
      "danger-soft": {
        bg: "red.subtle",
        color: "red.fg",
        borderColor: "transparent",
        _hover: {
          bg: "red.emphasized",
        },
      },

      /* Outline: transparent bg + default border + dark text
       * Original: --button-fg: var(--color-default-foreground); border: border;
       * Hover: color-mix(in srgb, var(--color-default) 60%, transparent) */
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "border",
        color: "fg",
        _hover: {
          bg: "bg.emphasized/60",
        },
      },

      /* Ghost: transparent bg, default dark text
       * Original: --button-fg: var(--color-default-foreground)
       * Hover: --color-default-hover */
      ghost: {
        bg: "transparent",
        color: "fg",
        borderColor: "transparent",
        _hover: {
          bg: "bg.emphasized",
        },
      },

      /* Plain: no bg, default dark text */
      plain: {
        color: "fg",
        borderColor: "transparent",
        px: "0",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});

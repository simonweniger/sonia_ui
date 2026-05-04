import {sliderAnatomy} from "@chakra-ui/react/anatomy";
import {defineSlotRecipe} from "@chakra-ui/react/styled-system";

import {soniaUIDisabled} from "../shared";

export const sliderSlotRecipe = defineSlotRecipe({
  className: "chakra-slider",
  slots: sliderAnatomy.keys(),
  base: {
    root: {
      display: "grid",
      width: "100%",
      gap: "1",
      gridTemplateAreas: '"label output" "track track"',
      gridTemplateColumns: "1fr auto",
      position: "relative",
      isolation: "isolate",
      ...soniaUIDisabled,

      "& [data-slot=label]": {
        width: "fit-content",
        fontSize: "sm",
        fontWeight: "medium",
        gridArea: "label",
      },
      "&:is(:disabled, [data-disabled=true], [aria-disabled=true]) [data-slot=label]": {
        opacity: 1,
      },
    },

    label: {
      width: "fit-content",
      fontSize: "sm",
      fontWeight: "medium",
      gridArea: "label",
    },

    valueText: {
      fontSize: "sm",
      fontWeight: "medium",
      fontVariantNumeric: "tabular-nums",
      gridArea: "output",
    },

    control: {
      gridArea: "track",
      display: "flex",
      alignItems: "center",
      borderRadius: "full",
      cursor: "pointer",
      _disabled: {cursor: "default"},
    },

    track: {
      width: "100%",
      borderRadius: "full",
      bg: "default",
      position: "relative",
      overflow: "hidden",
    },

    range: {
      borderRadius: "full",
      height: "100%",
      bg: "accent",
    },

    thumb: {
      display: "flex",
      cursor: "grab",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "full",
      bg: "white",
      boxShadow:
        "0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 1px 0 rgb(0 0 0 / 0.1), 0 0 0 1px rgb(0 0 0 / 0.05)",
      outline: 0,
      WebkitTapHighlightColor: "transparent",
      transitionProperty: "box-shadow, transform",
      transitionDuration: "150ms",
      transitionTimingFunction: "var(--ease-smooth, ease)",
      _motionReduce: {transition: "none"},

      "&[data-dragging]": {
        cursor: "grabbing",
        scale: "0.9",
      },

      _focusVisible: {
        ring: "2px",
        ringColor: "accent",
        ringOffset: "2px",
        ringOffsetColor: "bg",
      },

      _disabled: {
        cursor: "default",
      },
    },

    markerGroup: {},
    marker: {},
    markerIndicator: {},
  },

  variants: {
    size: {
      sm: {
        control: {height: "3.5", "--slider-track-height": "3px"},
        track: {height: "var(--slider-track-height)"},
        thumb: {width: "3", height: "3"},
      },
      md: {
        control: {height: "4", "--slider-track-height": "4px"},
        track: {height: "var(--slider-track-height)"},
        thumb: {width: "4", height: "4"},
      },
      lg: {
        control: {height: "5", "--slider-track-height": "6px"},
        track: {height: "var(--slider-track-height)"},
        thumb: {width: "5", height: "5"},
      },
    },

    orientation: {
      horizontal: {
        root: {
          flexDirection: "column",
        },
        control: {
          width: "100%",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    orientation: "horizontal",
  },
});

import { sliderAnatomy } from '@chakra-ui/react/anatomy'
import { defineSlotRecipe } from '@chakra-ui/react/styled-system'

import { heroUIDisabled } from '../shared'

/**
 * Slider recipe matching the original HeroUI v3 design.
 *
 * Architecture (Ark inline styles we CANNOT override):
 * - Control: position:relative, touch-action:none, user-select:none
 * - Track:   position:relative
 * - Thumb:   position:absolute, insetInlineStart, transform:translateX(-50%)
 *
 * We pass thumbSize to Zag for correct contain-alignment offsets.
 * The fill uses --slider-thumb-offset-N CSS vars (corrected positions)
 * instead of Ark's Range (raw percentages), ensuring seamless fill-to-thumb alignment.
 */
export const sliderSlotRecipe = defineSlotRecipe({
  className: 'chakra-slider',
  slots: sliderAnatomy.keys(),
  base: {
    root: {
      display: 'grid',
      width: '100%',
      gap: '1',
      gridTemplateAreas: '"label output" "track track"',
      gridTemplateColumns: '1fr auto',
      position: 'relative',
      isolation: 'isolate',
      ...heroUIDisabled,

      /* Label within slider (our custom Label component) */
      '& [data-slot=label]': {
        width: 'fit-content',
        fontSize: 'sm',
        fontWeight: 'medium',
        gridArea: 'label',
      },
      '&:is(:disabled, [data-disabled=true], [aria-disabled=true]) [data-slot=label]': {
        opacity: 1,
      },
    },

    label: {
      width: 'fit-content',
      fontSize: 'sm',
      fontWeight: 'medium',
      gridArea: 'label',
    },

    valueText: {
      fontSize: 'sm',
      fontWeight: 'medium',
      fontVariantNumeric: 'tabular-nums',
      gridArea: 'output',
    },

    control: {
      gridArea: 'track',
      borderRadius: 'full',
      bg: 'default',
      transitionProperty: 'transform',
      transitionDuration: '400ms',
      transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.3, 1)',
    },

    track: {
      width: '100%',
      height: '100%',
      borderRadius: 'full',
    },

    range: {},

    thumb: {
      display: 'flex',
      cursor: 'grab',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'full',
      bg: 'accent',
      outline: 0,
      WebkitTapHighlightColor: 'transparent',
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '250ms',
      transitionTimingFunction: 'var(--ease-smooth, ease)',
      _motionReduce: { transition: 'none' },

      _after: {
        content: '""',
        display: 'block',
        position: 'relative',
        zIndex: 10,
        borderRadius: 'full',
        bg: 'accent.fg',
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 0.1), 0 0 1px 0 rgb(0 0 0 / 0.2)',
        transformOrigin: 'center',
        transitionProperty: 'all',
        transitionDuration: '150ms',
        transitionTimingFunction: 'var(--ease-out, ease-out)',
        _motionReduce: { transition: 'none' },
      },

      '&[data-dragging]': {
        cursor: 'grabbing',
      },
      '&[data-dragging]::after': {
        transform: 'scale(0.9)',
      },

      _focusVisible: {
        ring: '2px',
        ringColor: 'accent',
        ringOffset: '2px',
        ringOffsetColor: 'bg',
      },

      _disabled: {
        cursor: 'default',
      },
    },

    markerGroup: {},
    marker: {},
    markerIndicator: {},
  },

  variants: {
    orientation: {
      horizontal: {
        root: {
          flexDirection: 'column',
        },
        control: {
          width: '100%',
          height: '5',
        },
        thumb: {
          top: 0,
          bottom: 0,
          width: 'calc(1.5rem + 0.25rem)',
          _after: {
            width: '1.5rem',
            height: '1rem',
          },
        },
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
})

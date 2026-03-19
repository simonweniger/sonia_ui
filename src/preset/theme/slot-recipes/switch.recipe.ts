import { switchAnatomy } from '@chakra-ui/react/anatomy'
import { defineSlotRecipe } from '@chakra-ui/react/styled-system'

/**
 * Switch recipe matching the original HeroUI v3 design.
 *
 * Uses margin-based thumb animation (margin-inline-start) with a pill-shaped
 * thumb, matching the original HeroUI approach.
 */
export const switchSlotRecipe = defineSlotRecipe({
  slots: switchAnatomy.keys(),
  className: 'chakra-switch',
  base: {
    root: {
      colorPalette: 'accent',
      display: 'inline-flex',
      gap: '3',
      alignItems: 'center',
      position: 'relative',
      verticalAlign: 'middle',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },

    label: {
      lineHeight: '1',
      userSelect: 'none',
      fontSize: 'sm',
      fontWeight: 'medium',
      _disabled: {
        opacity: '0.5',
      },
    },

    indicator: {
      position: 'absolute',
      flexShrink: 0,
      userSelect: 'none',
      display: 'grid',
      placeContent: 'center',
      fontWeight: 'medium',
    },

    control: {
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 'full',
      position: 'relative',
      bg: 'bg.emphasized',
      focusVisibleRing: 'outside',
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '250ms, 150ms',
      transitionTimingFunction: 'ease, ease-out',
      _motionReduce: { transition: 'none' },
      _checked: {
        bg: 'colorPalette.solid',
      },
      _invalid: {
        focusRingColor: 'border.error',
      },
    },

    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderRadius: 'full',
      transformOrigin: 'left center',
      bg: 'white',
      color: 'black',
      ms: '0.5',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      transitionProperty: 'margin, background-color, transform',
      transitionDuration: '300ms, 200ms, 150ms',
      transitionTimingFunction:
        'cubic-bezier(0.16, 1, 0.3, 1), ease-out, cubic-bezier(0.34, 1.56, 0.64, 1)',
      _motionReduce: { transition: 'none' },
      _active: {
        transform: 'scaleX(1.15) scaleY(0.9)',
      },
      _checked: {
        transformOrigin: 'right center',
        bg: 'colorPalette.contrast',
        color: 'colorPalette.solid',
        boxShadow:
          '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
      },
    },
  },

  variants: {
    size: {
      sm: {
        control: {
          height: '1rem',
          width: '2rem',
        },
        thumb: {
          height: '0.75rem',
          width: '1.03125rem',
          _checked: {
            ms: 'calc(100% - 1.15625rem)',
          },
        },
      },
      md: {
        control: {
          height: '1.25rem',
          width: '2.5rem',
        },
        thumb: {
          height: '1rem',
          width: '1.375rem',
          _checked: {
            ms: 'calc(100% - 1.5rem)',
          },
        },
      },
      lg: {
        control: {
          height: '1.5rem',
          width: '3rem',
        },
        thumb: {
          height: '1.25rem',
          width: '1.71875rem',
          _checked: {
            ms: 'calc(100% - 1.84375rem)',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

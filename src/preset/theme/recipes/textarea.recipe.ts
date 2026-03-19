import { defineRecipe } from '@chakra-ui/react/styled-system'

import { heroUIDisabled, heroUIFocusRing } from '../shared'

export const textareaRecipe = defineRecipe({
  className: 'chakra-textarea',
  base: {
    width: '100%',
    minWidth: '0',
    outline: '0',
    position: 'relative',
    appearance: 'none',
    textAlign: 'start',
    borderRadius: 'xl',
    color: 'fg',
    minHeight: '38px',
    fontSize: { base: 'md', sm: 'sm' },
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease',
    _placeholder: { color: 'fg.muted' },
    ...heroUIFocusRing,
    ...heroUIDisabled,
    '--focus-color': 'colors.colorPalette.focusRing',
    '--error-color': 'colors.border.error',
    _invalid: {
      outline: '1px solid',
      outlineColor: 'danger',
      bg: 'bg.subtle',
    },
  },
  variants: {
    size: {
      xs: {
        borderRadius: 'control.sm',
        textStyle: 'xs',
        px: '2',
        py: '1',
        scrollPaddingBottom: '1',
      },
      sm: {
        borderRadius: 'control.md',
        textStyle: 'sm',
        px: '2.5',
        py: '1.5',
        scrollPaddingBottom: '1.5',
      },
      md: {
        borderRadius: 'xl',
        textStyle: 'sm',
        px: '3',
        py: '1.5',
        scrollPaddingBottom: '1.5',
      },
      lg: {
        borderRadius: 'xl',
        textStyle: 'md',
        px: '4',
        py: '2',
        scrollPaddingBottom: '2',
      },
      xl: {
        borderRadius: 'xl',
        textStyle: 'md',
        px: '4.5',
        py: '3.5',
        scrollPaddingBottom: '3.5',
      },
    },

    variant: {
      outline: {
        bg: 'white',
        borderWidth: '1px',
        borderColor: 'border',
        shadow: 'field',
        _hover: {
          bg: 'bg.muted',
          borderColor: 'border.emphasized',
        },
        _focus: {
          ring: '2px',
          ringColor: 'accent',
          borderColor: 'accent',
          bg: 'bg.subtle',
        },
      },
      subtle: {
        bg: 'bg.muted',
        shadow: 'none',
        borderWidth: '1px',
        borderColor: 'transparent',
        _hover: {
          bg: 'bg.emphasized',
        },
        _focus: {
          ring: '2px',
          ringColor: 'accent',
          bg: 'bg.muted',
        },
        _invalid: {
          outline: '1px solid',
          outlineColor: 'danger',
          bg: 'bg.muted',
        },
      },
      flushed: {
        bg: 'transparent',
        borderBottomWidth: '1px',
        borderBottomColor: 'border',
        borderRadius: '0',
        px: '0',
        _focusVisible: {
          borderColor: 'var(--focus-color)',
          boxShadow: '0px 1px 0px 0px var(--focus-color)',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})

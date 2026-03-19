import { defineRecipe } from '@chakra-ui/react/styled-system'

export const badgeRecipe = defineRecipe({
  className: 'chakra-badge',
  base: {
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5',
    fontWeight: 'medium',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    borderWidth: '1px',
    borderColor: 'bg',
  },
  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
      subtle: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
      },
      outline: {
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.border',
      },
      surface: {
        bg: 'colorPalette.muted',
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.border',
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },
    size: {
      xs: {
        textStyle: '2xs',
        px: '1',
        minH: '4',
        minW: '4',
        borderRadius: 'full',
      },
      sm: {
        textStyle: 'xs',
        px: '1.5',
        minH: '4',
        minW: '4',
        borderRadius: 'xl',
        lineHeight: '1.34',
      },
      md: {
        textStyle: 'xs',
        px: '2',
        minH: '7',
        minW: '7',
        borderRadius: '3xl',
        lineHeight: '1.34',
      },
      lg: {
        textStyle: 'sm',
        px: '2.5',
        minH: '8',
        minW: '8',
        borderRadius: '2xl',
        lineHeight: '1.43',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
})

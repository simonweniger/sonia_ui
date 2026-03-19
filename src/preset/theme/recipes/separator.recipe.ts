import { defineRecipe } from '@chakra-ui/react/styled-system'

export const separatorRecipe = defineRecipe({
  className: 'chakra-separator',
  base: {
    display: 'block',
    flexShrink: 0,
    borderRadius: 'sm',
    borderColor: 'border',
  },
  variants: {
    variant: {
      solid: {
        borderStyle: 'solid',
      },
      dashed: {
        borderStyle: 'dashed',
      },
      dotted: {
        borderStyle: 'dotted',
      },
    },
    orientation: {
      vertical: {
        height: '100%',
        minHeight: '0.5rem',
        width: '1px',
        borderInlineStartWidth: 'var(--separator-thickness)',
      },
      horizontal: {
        width: '100%',
        height: '1px',
        borderTopWidth: 'var(--separator-thickness)',
      },
    },
    size: {
      xs: {
        '--separator-thickness': '0.5px',
      },
      sm: {
        '--separator-thickness': '1px',
      },
      md: {
        '--separator-thickness': '2px',
      },
      lg: {
        '--separator-thickness': '3px',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'solid',
    orientation: 'horizontal',
  },
})

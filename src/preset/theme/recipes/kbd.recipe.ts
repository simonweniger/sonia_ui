import { defineRecipe } from '@chakra-ui/react/styled-system'

export const kbdRecipe = defineRecipe({
  className: 'chakra-kbd',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'medium',
    fontFamily: 'body',
    flexShrink: '0',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    px: '2',
    h: '6',
    borderRadius: 'lg',
    textAlign: 'center',
    fontSize: 'sm',
    color: 'fg.muted',
    wordSpacing: '-0.25rem',
    gap: '0.5',
  },

  variants: {
    variant: {
      raised: {
        bg: 'bg',
      },
      outline: {
        bg: 'bg',
        borderWidth: '1px',
        borderColor: 'border',
      },
      subtle: {
        bg: 'bg',
      },
      plain: {
        bg: 'transparent',
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
  },
})

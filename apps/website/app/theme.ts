import { createSystem } from '@chakra-ui/react'

import { defaultConfig } from '@sonia/ui'

export const themeConfig = {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-inter)' },
        body: { value: 'var(--font-inter)' },
      },
    },
  },
  globalCss: {
    ':root': {
      '--header-height': { base: '54px' },
      '--content-height': 'calc(100dvh - var(--header-height))',
    },
  },
}

export const system = createSystem(defaultConfig, themeConfig)

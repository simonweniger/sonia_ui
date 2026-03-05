export const FRAMEWORKS = {
  'next-app': {
    name: 'next-app',
    label: 'Next.js',
    links: {
      installation: 'https://sonia-ui.dev/docs/core/installation/nextjs-guide',
    },
  },
  'next-pages': {
    name: 'next-pages',
    label: 'Next.js',
    links: {
      installation:
        'https://sonia-ui.dev/docs/core/installation/nextjs-pages-guide',
    },
  },
  'tanstack-start': {
    name: 'tanstack-start',
    label: 'Remix',
    links: {
      installation:
        'https://sonia-ui.dev/docs/core/installation/tanstack-start-guide',
    },
  },
  vite: {
    name: 'vite',
    label: 'Vite',
    links: {
      installation: 'https://sonia-ui.dev/docs/core/installation/vite-guide',
    },
  },
  manual: {
    name: 'manual',
    label: 'Manual',
  },
} as const

export type Framework = (typeof FRAMEWORKS)[keyof typeof FRAMEWORKS]

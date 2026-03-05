import { withContentCollections } from '@content-collections/next'
import type { NextConfig } from 'next'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/4PmJGFcAjX',
        permanent: false,
      },
      {
        source: '/docs/getting-started',
        destination: '/docs/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/docs/iconify-cli',
        destination: '/docs/iconx',
        permanent: true,
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      resourceQuery: /raw/,
      type: 'asset/source',
    })

    config.resolve.mainFields = [
      'sui',
      'source',
      'module',
      'main',
      ...config.resolve.mainFields,
    ]

    return config
  },
  turbopack: {
    resolveAlias: {
      '@sonia/ui/forms/zod':
        '../../packages/sonia-ui/src/forms/zod/src/index.ts',
      '@sonia/ui/forms': '../../packages/sonia-ui/src/forms/index.ts',
      '@sonia/ui/modals': '../../packages/sonia-ui/src/modals/index.ts',
      '@sonia/ui/hotkeys': '../../packages/sonia-ui/src/hotkeys/index.ts',
      '@sonia/ui/utils': '../../packages/sonia-ui/src/utils/index.ts',
      '@sonia/ui/hooks': '../../packages/sonia-ui/src/hooks/index.ts',
      '@sonia/ui': '../../packages/sonia-ui/src/index.ts',
      '@sonia/ui/*': '../../packages/sonia-ui/src/components/*',
    },
  },
} satisfies NextConfig

export default withContentCollections(nextConfig)

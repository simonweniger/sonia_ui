import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => {
  return {
    entry: ['src/bin/cli.ts'],
    outDir: 'lib',
    format: ['esm'],
    tsconfig: 'tsconfig.json',
    sourcemap: !!watch,
    external: ['fs'],
    platform: 'node',
    env: {
      REGISTRY_URL: process.env.REGISTRY_URL ?? '',
      SCHEMA_URL: process.env.SCHEMA_URL ?? '',
    },
    clean: true,
    splitting: true,
    minify: true,
  }
})

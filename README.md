# Sonia UI

A React component library for building beautiful B2B and dashboard-style apps
with speed. Built on top of Chakra UI v3 and fully written in TypeScript.

## Packages

| Package      | Description                                           |
| ------------ | ----------------------------------------------------- |
| `@sonia/ui`  | Styled components, primitives, forms, modals, hotkeys |
| `@sonia/cli` | CLI tool for scaffolding and updating components      |

## Getting Started

```bash
pnpm install
```

### Build

```bash
pnpm build:packages
```

### Test

```bash
pnpm test
```

### Website

```bash
pnpm dev:web
```

## Project Structure

```
packages/
  sonia-ui/          # Component library (single package)
    src/
      components/    # 138+ styled components
      primitives/    # Headless primitives (sidebar, navbar, grid-list, steps, error-boundary)
      preset/        # Design tokens and recipes
      provider/      # SoniaProvider
      forms/         # React Hook Form + Zod integration
      modals/        # Modal manager
      hotkeys/       # Hotkeys system
      hooks/         # React hooks
      utils/         # Utilities
  sonia-ui-cli/      # CLI tool
apps/
  website/           # Next.js documentation site
```

## Imports

```tsx
import { Button, Dialog, Sidebar } from '@sonia/ui'
import { Field, Form, SubmitButton } from '@sonia/ui/forms'
import { createZodForm } from '@sonia/ui/forms/zod'
import { useDebouncedCallback, useLocalStorage } from '@sonia/ui/hooks'
import { HotkeysProvider, useHotkeys } from '@sonia/ui/hotkeys'
import { ModalsProvider, useModals } from '@sonia/ui/modals'
import { callAll, runIfFn } from '@sonia/ui/utils'
```

## License

MIT

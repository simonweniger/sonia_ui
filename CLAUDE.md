# CLAUDE.md — Sonia UI

## Project Overview

Sonia UI is a React component library and design system for SaaS applications,
built on Chakra UI v3 and Ark UI. It provides styled components, form
integration, modal management, and hotkeys — all in a single `@sonia/ui`
package. A shadcn-like CLI pulls components into user projects, and a
documentation website showcases available components.

**Main branch**: `main`

## Monorepo Structure

This is a pnpm workspaces monorepo orchestrated with Turborepo.

```code
packages/
  sonia-ui/              # Single component library (npm: @sonia/ui)
    src/
      components/        # 138+ styled Chakra UI components
      primitives/        # Unstyled headless components (grid-list, navbar, sidebar, steps, error-boundary)
      preset/            # Design tokens, recipes, slot-recipes
      provider/          # SoniaProvider
      hooks/             # React hooks
      utils/             # Utility functions
      forms/             # React Hook Form + Zod integration
      modals/            # Modal manager
      hotkeys/           # Hotkeys system
  sonia-ui-cli/          # CLI tool (npm: @sonia/cli)
apps/
  website/               # Next.js documentation site + component registry
    compositions/        # Component composition examples (examples/ + lib/)
```

## Sub-path Exports

```code
@sonia/ui              # Main: styled components, provider, preset
@sonia/ui/forms        # Form system (React Hook Form + Zod)
@sonia/ui/forms/zod    # Zod resolver
@sonia/ui/modals       # Modal manager
@sonia/ui/hotkeys      # Hotkeys
@sonia/ui/utils        # Utility functions
@sonia/ui/hooks        # React hooks
@sonia/ui/preset       # Design system preset
@sonia/ui/colors       # Color palette
@sonia/ui/{component}  # Individual components (e.g., @sonia/ui/dialog)
```

## Essential Commands

```bash
# Package manager: pnpm v10+ (required)
pnpm install                    # Install all dependencies

# Development
pnpm dev:web                    # Start website dev server on localhost:3020

# Building
pnpm build:packages             # Build all packages (via Turbo)
pnpm build:tokens               # Generate Chakra UI type tokens
pnpm w <package> build          # Build a single package (pnpm --filter shorthand)

# Code quality
pnpm lint                       # Run ESLint across repo (via Turbo)

# CLI (component registry)
sonia init                      # Initialize components.json in a project
sonia add <component>           # Add a component from the registry
sonia list                      # List available components
sonia diff                      # Check for component updates
```

## Code Style & Conventions

### Formatting (Prettier)

- No semicolons
- Single quotes
- Trailing commas
- 80 character line width
- Imports are auto-sorted via `@trivago/prettier-plugin-sort-imports`

### TypeScript

- Strict mode enabled
- Target: ESNext
- Module resolution: bundler
- Custom condition: `"sui"` for conditional exports (source code access)
- JSX: react-jsx

### Naming Conventions

- **Package**: `@sonia/ui` (scoped)
- **Components**: PascalCase (`Sidebar`, `GridList`, `Navbar`)
- **Files**: kebab-case (`sidebar.tsx`, `grid-list.tsx`)
- **Hooks**: camelCase with `use` prefix (`useSidebar`, `useStepper`)
- **Types/Interfaces**: PascalCase with `Props` suffix (`SidebarProps`)

### Component File Structure

Each component lives in its own directory under `src/components/`:

```code
src/components/sidebar/
  sidebar.tsx           # Main component implementation
  sidebar.context.ts    # Context/providers (if needed)
  index.ts              # Re-exports
```

### Commit Convention

Follow conventional commits: `category(scope): message`

Categories: `feat`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`

## Architecture

### Package Structure

Everything is in a single `@sonia/ui` package:

- **`src/components/`** — Styled components built on Chakra UI v3
- **`src/primitives/`** — Unstyled headless primitives built on Ark UI
- **`src/preset/`** — Design tokens, recipes, slot-recipes
- **`src/forms/`** — React Hook Form integration with Zod/AJV resolvers
- **`src/modals/`** — Programmatic modal manager
- **`src/hotkeys/`** — Keyboard shortcut system
- **`src/hooks/`** — Shared React hooks
- **`src/utils/`** — Shared utility functions

### CLI & Registry

The CLI (`sonia`) works like shadcn — it fetches component definitions from a
registry (served by the website at `/r/`) and copies them into the user's
project.

- `components.json` — project configuration (aliases, style, TypeScript)
- Registry URL defaults to `http://localhost:3020/r` (configurable via
  `REGISTRY_URL` env var)

### Build System

- **tsc** compiles the main package to ESM (target: ES2022)
- **Turbo** orchestrates builds with caching
- The `"sui"` custom condition provides source-level access during development

### Key Dependencies

- **React 19** / React DOM 19
- **Chakra UI v3** (v3.28+) — styled component system
- **Ark UI v5** — headless component primitives
- **Emotion v11** — CSS-in-JS runtime
- **React Hook Form** — form state management
- **Zod** — schema validation

## Tips for AI Agents

- The `pnpm w` shorthand is equivalent to `pnpm --filter` for targeting specific
  packages
- The `"sui"` custom condition in tsconfig allows importing package source
  directly during development
- The website serves as the component registry for the CLI at `/r/`

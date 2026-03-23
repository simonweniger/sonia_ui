import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import {defineConfig} from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import onlyWarnPlugin from "eslint-plugin-only-warn";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import sortDestructureKeysPlugin from "eslint-plugin-sort-destructure-keys";
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";
import storybookPlugin from "eslint-plugin-storybook";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const config = defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    ignores: [
      "**/.temp/**",
      "**/.swc/**",
      "**/.cache/**",
      "**/.DS_Store",
      "**/dist/**",
      "**/build/**",
      "**/storybook-static/**",
      "**/public/**",
      "**/node_modules/**",
      "**/coverage/**",
      "**/__snapshots__/**",
      "**/pnpm-lock.yaml",
      "!.vscode/**",
      "!scripts/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
        JSX: true,
        React: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "only-warn": onlyWarnPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      "sort-destructure-keys": sortDestructureKeysPlugin,
      "sort-keys-fix": sortKeysFixPlugin,
      storybook: storybookPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      // TypeScript
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // Imports
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/newline-after-import": ["error", {count: 1}],
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          alphabetize: {caseInsensitive: true, order: "asc"},
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "unknown",
          ],
          "newlines-between": "always",
          pathGroups: [
            {group: "type", pattern: "server-only", position: "before"},
            {
              group: "unknown",
              pattern: "**/*.+(css|sass|scss)",
              patternOptions: {dot: true, nocomment: true},
              position: "after",
            },
            {
              group: "unknown",
              pattern: "{.,..}/**/*.+(css|sass|scss)",
              patternOptions: {dot: true, nocomment: true},
              position: "after",
            },
            {group: "internal", pattern: "@/**", position: "after"},
          ],
          pathGroupsExcludedImportTypes: ["type"],
          warnOnUnassignedImports: true,
        },
      ],
      // React
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...storybookPlugin.configs.recommended.rules,
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "jsx-a11y/no-autofocus": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-refresh/only-export-components": ["warn", {allowConstantExport: true}],
      "react/jsx-boolean-value": ["error", "never", {always: ["personal"]}],
      "react/jsx-curly-brace-presence": ["error", {children: "never", props: "never"}],
      "react/jsx-no-leaked-render": ["error", {validStrategies: ["coerce", "ternary"]}],
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          locale: "auto",
          multiline: "last",
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: true,
          shorthandLast: false,
        },
      ],
      "react/jsx-uses-react": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": ["error", {component: true, html: true}],
      // General
      "no-console": "warn",
      "no-unused-vars": "off",
      "object-curly-spacing": ["error", "never"],
      "padding-line-between-statements": [
        "error",
        {blankLine: "always", next: "*", prev: "directive"},
        {blankLine: "any", next: "directive", prev: "directive"},
        {blankLine: "always", next: "*", prev: ["const", "let", "var"]},
        {blankLine: "any", next: ["const", "let", "var"], prev: ["const", "let", "var"]},
        {blankLine: "always", next: "return", prev: "*"},
      ],
      "prettier/prettier": "error",
      "sort-destructure-keys/sort-destructure-keys": ["error", {caseSensitive: true}],
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: true,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrors: "none",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      "import/resolver": {node: true, typescript: true},
      react: {version: "detect"},
    },
  },
  {
    files: [".*.js", ".*.cjs", ".*.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
]);

export default config;

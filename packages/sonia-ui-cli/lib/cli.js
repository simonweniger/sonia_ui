#!/usr/bin/env node
import { run as h } from '@stricli/core'
import { buildApplication as b, buildRouteMap as g } from '@stricli/core'
import { buildCommand as m } from '@stricli/core'
import { buildCommand as l } from '@stricli/core'
import { buildCommand as f } from '@stricli/core'
import { buildCommand as u } from '@stricli/core'

var r = '@sonia/cli',
  t = 'Sonia UI command line'
var i = '0.1.0-next.1'
import { buildCommand as m } from '@stricli/core'
var n = m({
  loader: async () => {
    let { add: e } = await import('./impl-DO4SZIYR.js')
    return e
  },
  parameters: {
    flags: {
      all: { kind: 'boolean', brief: 'Add all available components' },
      yes: { kind: 'boolean', brief: 'Skip confirmation prompt.' },
      overwrite: { kind: 'boolean', brief: 'Overwrite existing files.' },
      cwd: {
        kind: 'parsed',
        optional: !0,
        parse: String,
        brief: 'The working directory. Defaults to the current directory.',
      },
      silent: { kind: 'boolean', brief: 'Mute output.' },
      srcDir: {
        kind: 'boolean',
        optional: !0,
        brief: 'Use the src directory when creating a new project.',
      },
      path: {
        kind: 'parsed',
        parse: String,
        optional: !0,
        brief: 'The path to add the component to.',
      },
    },
    positional: {
      kind: 'array',
      parameter: {
        parse: String,
        brief: 'The components to add or a url to the component.',
      },
      minimum: 0,
    },
  },
  docs: { brief: 'Add components to your project' },
})
import { buildCommand as l } from '@stricli/core'
var a = l({
  loader: async () => {
    let { diff: e } = await import('./impl-DOJZUDGJ.js')
    return e
  },
  parameters: {
    flags: {
      yes: { kind: 'boolean', brief: 'Skip confirmation prompt.', default: !1 },
      cwd: {
        kind: 'parsed',
        parse: String,
        brief: 'The working directory. Defaults to the current directory.',
        optional: !0,
      },
    },
    positional: {
      kind: 'array',
      parameter: {
        parse: String,
        brief: 'The component to check for updates.',
      },
      minimum: 0,
      maximum: 1,
    },
  },
  docs: { brief: 'Check for component updates' },
})
import { buildCommand as f } from '@stricli/core'
var s = f({
  loader: async () => {
    let { init: e } = await import('./impl-V4VPYOMV.js')
    return e
  },
  parameters: {
    flags: {
      yes: { kind: 'boolean', default: !0, brief: 'Skip confirmation prompt.' },
      defaults: {
        kind: 'boolean',
        default: !1,
        brief: 'Use default configuration.',
      },
      force: {
        kind: 'boolean',
        default: !1,
        brief: 'Force overwrite of existing configuration.',
      },
      cwd: {
        kind: 'parsed',
        parse: String,
        brief: 'The working directory. defaults to the current directory.',
        default: process.cwd(),
      },
      silent: { kind: 'boolean', default: !1, brief: 'Mute output.' },
    },
    positional: {
      kind: 'array',
      parameter: { parse: String, brief: 'The components to install.' },
      minimum: 0,
    },
  },
  docs: { brief: 'Initialize a project.' },
})
import { buildCommand as u } from '@stricli/core'
var p = u({
  loader: async () => {
    let { list: e } = await import('./impl-Q2R5VKPZ.js')
    return e
  },
  parameters: {
    flags: {
      category: {
        kind: 'parsed',
        parse: String,
        optional: !0,
        brief: 'Filter components by category.',
      },
      search: {
        kind: 'parsed',
        parse: String,
        optional: !0,
        brief: 'Search components by name or description.',
      },
    },
  },
  docs: { brief: 'List all available components.' },
})
var y = g({
    routes: { init: s, add: n, diff: a, list: p },
    docs: { brief: t },
  }),
  d = b(y, { name: r, versionInfo: { currentVersion: i } })
function c(e) {
  return { process: e }
}
await h(d, process.argv.slice(2), c(process))

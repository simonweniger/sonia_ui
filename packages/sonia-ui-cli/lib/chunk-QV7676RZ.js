import { detect as ge } from '@antfu/ni'
import { execa as ue } from 'execa'
import Y from 'fast-glob'
import { promises as ne } from 'fs'
import oe from 'fs'
import { existsSync as F, promises as ee } from 'fs'
import v from 'fs-extra'
import C from 'fs-extra'
import { ensureFileSync as de } from 'fs-extra'
import pe from 'ora'
import $ from 'path'
import N from 'path'
import I from 'path'
import se from 'path'
import u, { basename as b } from 'path'
import _ from 'prompts'
import me from 'prompts'
import he from 'prompts'
import { Project as ye } from 'ts-morph'
import { loadConfig as ae } from 'tsconfig-paths'
import { z as h } from 'zod'

import {
  c as A,
  d as D,
  i as G,
  h as L,
  e as O,
  f as P,
  g as R,
  b as k,
  j as z,
} from './chunk-576RJTMU.js'
import {
  g as J,
  c as S,
  e as U,
  f as W,
  b as o,
  a as p,
} from './chunk-OBQ3PQY4.js'

import { promises as ne } from 'fs'
import $ from 'path'
import _ from 'prompts'
import { z as h } from 'zod'
import v from 'fs-extra'
import N from 'path'
import me from 'prompts'
import Y from 'fast-glob'
import C from 'fs-extra'
import I from 'path'
import { loadConfig as ae } from 'tsconfig-paths'
var x = {
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
  manual: { name: 'manual', label: 'Manual' },
}
import oe from 'fs'
import se from 'path'
function V(e = '', t = !0) {
  let r = se.join(e, 'package.json'),
    n = oe.readFileSync(r, 'utf8')
  try {
    return JSON.parse(n)
  } catch (i) {
    if (t) throw i
  }
  return null
}
var H = ['**/node_modules/**', '.next', 'public', 'dist', 'build']
async function y(e) {
  let [t, r, n, i, s] = await Promise.all([
      Y.glob('**/{next,vite,astro}.config.*|gatsby-config.*|composer.json', {
        cwd: e,
        deep: 3,
        ignore: H,
      }),
      C.pathExists(I.resolve(e, 'src')),
      le(e),
      ce(e),
      V(e, !1),
    ]),
    m = await C.pathExists(I.resolve(e, `${r ? 'src/' : ''}app`)),
    c = {
      framework: x.manual,
      system: null,
      isSrcDir: r,
      isRSC: !1,
      isTsx: n,
      aliasPrefix: i ?? null,
    }
  return (
    Object.keys(s?.dependencies ?? {}).find((f) =>
      f.startsWith('@chakra-ui/'),
    ) && (c.system = k.chakra),
    Object.keys(s?.devDependencies ?? {}).find((f) =>
      f.startsWith('@pandacss/dev'),
    ) && (c.system = k.panda),
    t.find((f) => f.startsWith('next.config.'))?.length
      ? ((c.framework = m ? x['next-app'] : x['next-pages']), (c.isRSC = m), c)
      : Object.keys(s?.dependencies ?? {}).find((f) =>
            f.startsWith('@tanstack/react-start'),
          )
        ? ((c.framework = x['tanstack-start']), c)
        : (t.find((f) => f.startsWith('vite.config.'))?.length &&
            (c.framework = x.vite),
          c)
  )
}
async function ce(e) {
  let t = await ae(e)
  if (t?.resultType === 'failed' || !t?.paths) return null
  for (let [r, n] of Object.entries(t.paths))
    if (
      n.includes('./*') ||
      n.includes('./src/*') ||
      n.includes('./app/*') ||
      n.includes('./resources/js/*')
    )
      return r.at(0) ?? null
  return null
}
async function le(e) {
  return (await Y.glob('tsconfig.*', { cwd: e, deep: 1, ignore: H })).length > 0
}
async function B(e = process.cwd()) {
  try {
    let t = I.resolve(e, 'tsconfig.json'),
      r = await C.readJSON(t)
    if (!r) throw new Error('tsconfig.json is missing')
    return r
  } catch {
    return null
  }
}
async function q(e, t = null) {
  let [r, n] = await Promise.all([P(e), t ? Promise.resolve(t) : y(e)])
  if (r) return r
  if (!n) return null
  let i = {
    $schema: '',
    rsc: n.isRSC,
    tsx: n.isTsx,
    system: n.system?.name ?? k.chakra.name,
    style: 'default',
    aliases: {
      components: `${n.aliasPrefix}components`,
      ui: `${n.aliasPrefix}components/ui`,
      hooks: `${n.aliasPrefix}hooks`,
      lib: `${n.aliasPrefix}lib`,
      utils: `${n.aliasPrefix}lib/utils`,
    },
  }
  return await R(e, i)
}
import pe from 'ora'
function g(e, t) {
  return pe({ text: e, isSilent: t?.silent })
}
async function Q(e) {
  let t = {}
  if (!v.existsSync(e.cwd))
    return ((t['1'] = !0), { errors: t, projectInfo: null })
  let r = g('Preflight checks.', { silent: e.silent }).start()
  ;(v.existsSync(N.resolve(e.cwd, 'components.json')) &&
    !e.force &&
    (r?.fail(),
    o.break(),
    o.error(`A ${p.info('components.json')} file already exists at ${p.info(e.cwd)}.
To start over, remove the ${p.info('components.json')} file and run ${p.info('init')} again.`),
    o.break(),
    process.exit(1)),
    r?.succeed())
  let n = g('Verifying framework.', { silent: e.silent }).start(),
    i = await y(e.cwd)
  ;((!i || i?.framework.name === 'manual') &&
    ((t['6'] = !0),
    n?.fail(),
    o.break(),
    i &&
      'links' in i.framework &&
      i.framework.links.installation &&
      o.error(`We could not detect a supported framework at ${p.info(e.cwd)}.
Visit ${p.info(i?.framework.links.installation)} to manually configure your project.
Once configured, you can use the cli to add components.`),
    o.break(),
    process.exit(1)),
    n?.succeed(`Verifying framework. Found ${p.info(i.framework.label)}.`))
  let s = g('Validating import alias.', { silent: e.silent }).start()
  if (i?.aliasPrefix) s?.succeed()
  else {
    ;(s?.fail(),
      o.break(),
      o.warn('No import alias found in your tsconfig.json file.'),
      o.break())
    let c = (await v.pathExists(N.resolve(e.cwd, 'src'))) ? './src/*' : './*',
      { aliasPrefix: f } = await me({
        type: 'select',
        name: 'aliasPrefix',
        message: 'Which import alias would you like to use?',
        choices: [
          { title: p.info('#*'), description: `Maps to ${c}`, value: '#*' },
          { title: p.info('@/*'), description: `Maps to ${c}`, value: '@/*' },
        ],
        initial: 0,
      })
    f ||
      (o.break(),
      o.error('Import alias is required to continue.'),
      o.break(),
      process.exit(1))
    let a = N.resolve(e.cwd, 'tsconfig.json'),
      l = await B(e.cwd)
    ;(l ||
      (o.break(),
      o.error('Unable to read tsconfig.json'),
      o.break(),
      process.exit(1)),
      l.compilerOptions || (l.compilerOptions = {}),
      l.compilerOptions.paths || (l.compilerOptions.paths = {}),
      (l.compilerOptions.paths[f] = [c]),
      await v.writeJSON(a, l, { spaces: 2 }))
    let { execa: w } = await import('execa')
    try {
      await w('npx', ['prettier', '--write', a], { cwd: e.cwd })
    } catch {}
    ;(o.break(),
      o.success(`Added ${p.info(f)} to tsconfig.json paths.`),
      o.break(),
      s?.succeed())
  }
  return (
    Object.keys(t).length > 0 && (o.break(), process.exit(1)),
    { errors: t, projectInfo: i }
  )
}
import { execa as ue } from 'execa'
import { detect as ge } from '@antfu/ni'
async function X(e, { withFallback: t } = { withFallback: !1 }) {
  let r = await ge({ programmatic: !0, cwd: e }),
    [n, i = '0.0.0'] = r?.split('@') ?? ['', '0.0.0']
  if (n === 'yarn') return { packageManager: 'yarn', version: i }
  if (n === 'pnpm') return { packageManager: 'pnpm', version: i }
  if (n === 'bun') return { packageManager: 'bun', version: i }
  if (!t) return { packageManager: 'npm', version: '0.0.0' }
  let s = process.env.npm_config_user_agent || ''
  return s.startsWith('yarn')
    ? { packageManager: 'yarn', version: '0.0.0' }
    : s.startsWith('pnpm')
      ? { packageManager: 'pnpm', version: '0.0.0' }
      : s.startsWith('bun')
        ? { packageManager: 'bun', version: '0.0.0' }
        : { packageManager: 'npm', version: '0.0.0' }
}
async function Z(e, t, r) {
  if (((e = Array.from(new Set(e))), !e?.length)) return
  r = { silent: !1, ...r }
  let n = g('Installing dependencies.', { silent: r.silent })?.start(),
    { packageManager: i } = await X(t.resolvedPaths.cwd)
  ;(await ue(i, [i === 'npm' ? 'install' : 'add', ...e], {
    cwd: t.resolvedPaths.cwd,
  }),
    n?.succeed())
}
import { ensureFileSync as de } from 'fs-extra'
import { existsSync as F, promises as ee } from 'fs'
import u, { basename as b } from 'path'
import he from 'prompts'
import { Project as ye } from 'ts-morph'
function we(e, t, r) {
  return r.startsWith('~/')
    ? u.join(t.resolvedPaths.cwd, r.replace('~/', ''))
    : e?.isSrcDir
      ? u.join(t.resolvedPaths.cwd, 'src', r)
      : u.join(t.resolvedPaths.cwd, r)
}
async function te(e, t, r) {
  if (!e?.length) return
  r = { overwrite: !1, force: !1, silent: !1, ...r }
  let n = g('Updating files.', { silent: r.silent })?.start(),
    [i] = await Promise.all([y(t.resolvedPaths.cwd)]),
    s = [],
    m = [],
    c = []
  for (let a of e) {
    if (!a.content) continue
    let l = W(a, t)
    a.path.startsWith(b(l)) &&
      (l = u.join(l, u.dirname(a.path.replace(b(l), ''))))
    let w = b(a.path),
      d = u.join(l, w)
    ;(a.target && ((d = we(i, t, a.target)), (l = u.dirname(d))),
      t.tsx ||
        (d = d.replace(/\.tsx?$/, (j) => (j === '.tsx' ? '.jsx' : '.js'))))
    let T = F(d)
    if (T && !r.overwrite) {
      n.stop()
      let { overwrite: j } = await he({
        type: 'confirm',
        name: 'overwrite',
        message: `The file ${p.info(w)} already exists. Would you like to overwrite?`,
        initial: !1,
      })
      if (!j) {
        c.push(u.relative(t.resolvedPaths.cwd, d))
        continue
      }
      n?.start()
    }
    F(l) || (await ee.mkdir(l, { recursive: !0 }))
    let ie = await z(
      { filename: a.path, raw: a.content, config: t, transformJsx: !t.tsx },
      [L, G],
    )
    ;(await ee.writeFile(d, ie, 'utf-8'),
      T
        ? m.push(u.relative(t.resolvedPaths.cwd, d))
        : s.push(u.relative(t.resolvedPaths.cwd, d)))
  }
  if (
    (!(s.length || m.length) && !c.length && n?.info('No files updated.'),
    s.length)
  ) {
    if (
      (n?.succeed(`Created ${s.length} ${s.length === 1 ? 'file' : 'files'}:`),
      !r.silent)
    )
      for (let l of s) o.log(`  - ${l}`)
    let a = s.filter((l) => l.includes('icons/'))
    a.length && xe(a, t)
  } else n?.stop()
  if (
    m.length &&
    (g(`Updated ${m.length} ${m.length === 1 ? 'file' : 'files'}:`, {
      silent: r.silent,
    })?.info(),
    !r.silent)
  )
    for (let a of m) o.log(`  - ${a}`)
  if (
    c.length &&
    (g(`Skipped ${c.length} ${m.length === 1 ? 'file' : 'files'}:`, {
      silent: r.silent,
    })?.info(),
    !r.silent)
  )
    for (let a of c) o.log(`  - ${a}`)
  r.silent || o.break()
}
async function xe(e, t) {
  let r = u.join(t.resolvedPaths.icons, 'index.ts')
  F(r) || de(r)
  let i = new ye().addSourceFileAtPath(r)
  for (let s of e) {
    let m = b(s),
      c = m
        .replace(/\.tsx$/, '')
        .replace(/-([a-z])/g, (a) => a[1].toUpperCase())
        .replace(/^./, (a) => a.toUpperCase()),
      f = `./${m}`
    i
      .getExportDeclarations()
      .some((a) => a.getNamedExports().some((l) => l.getName() === c)) ||
      i.addExportDeclaration({ moduleSpecifier: f, namedExports: [c] })
  }
  await i.save()
}
async function re(e, t, r) {
  r = { overwrite: !1, silent: !1, isNewProject: !1, ...r }
  let n = g('Checking registry.', { silent: r.silent })?.start(),
    i = await J(e, t)
  if (!i)
    return (
      n?.fail(),
      S(new Error('Failed to fetch components from registry.'))
    )
  ;(n?.succeed(),
    await Z(i.dependencies, t, { silent: r.silent }),
    await te(i.files, t, { overwrite: r.overwrite, silent: r.silent }),
    i.docs && o.info(i.docs))
}
var ke = h.object({
    cwd: h.string(),
    yes: h.boolean(),
    defaults: h.boolean(),
    force: h.boolean(),
    silent: h.boolean(),
  }),
  Pe = ke.extend({ components: h.array(h.string()).optional() })
async function At(e, ...t) {
  try {
    let r = Pe.parse({
      ...e,
      cwd: $.resolve(e.cwd ?? process.cwd()),
      isNewProject: !1,
      components: t,
    })
    if ((await Re(r)) === null) return
    ;(o.break(),
      o.log(`${p.success('Success!')} Project initialization completed.
You may now add components.`),
      o.break())
  } catch (r) {
    ;(o.break(), S(r))
  }
}
async function Re(e) {
  let t,
    r = $.resolve(e.cwd, 'package.json')
  ;(await ne
    .access(r)
    .then(() => !0)
    .catch(() => !1))
    ? (t = await y(e.cwd))
    : (o.error(`No ${p.info('package.json')} found in ${p.info(e.cwd)}.`),
      o.error(`Please run ${p.info('init')} in a valid Node.js project.`),
      process.exit(1))
  let i = await Q(e)
  ;(i.errors['1'] && process.exit(1), (t = i.projectInfo))
  let s = await q(e.cwd, t),
    m = s ? await ve(s, e) : await Se(await P(e.cwd))
  if (!e.yes) {
    let { proceed: w } = await _({
      type: 'confirm',
      name: 'proceed',
      message: `Write configuration to ${p.info('components.json')}. Proceed?`,
      initial: !0,
    })
    w || process.exit(0)
  }
  let c = g('Writing components.json.').start(),
    f = $.resolve(e.cwd, 'components.json')
  ;(await ne.writeFile(f, JSON.stringify(m, null, 2), 'utf8'), c.succeed())
  let a = await R(e.cwd, m),
    l = ['index', ...(e.components || [])]
  return (
    await re(l, a, {
      overwrite: !0,
      silent: e.silent,
      isNewProject: e.isNewProject || t?.framework.name === 'next-app',
    }),
    a
  )
}
async function Se(e = null) {
  o.info('')
  let t = await _([
    {
      type: 'toggle',
      name: 'typescript',
      message: `Would you like to use ${p.info('TypeScript')} (recommended)?`,
      initial: e?.tsx ?? !0,
      active: 'yes',
      inactive: 'no',
    },
    {
      type: 'text',
      name: 'components',
      message: `Configure the import alias for ${p.info('components')}:`,
      initial: e?.aliases.components ?? A,
    },
    {
      type: 'text',
      name: 'utils',
      message: `Configure the import alias for ${p.info('utils')}:`,
      initial: e?.aliases.utils ?? D,
    },
    {
      type: 'toggle',
      name: 'rsc',
      message: `Are you using ${p.info('React Server Components')}?`,
      initial: e?.rsc ?? !0,
      active: 'yes',
      inactive: 'no',
    },
  ])
  return O.parse({
    $schema: '',
    system: 'chakra',
    style: 'default',
    rsc: t.rsc,
    tsx: t.typescript,
    aliases: {
      utils: t.utils,
      components: t.components,
      lib: t.components.replace(/\/components$/, 'lib'),
      hooks: t.components.replace(/\/components$/, 'hooks'),
    },
  })
}
async function ve(e, t) {
  let r = e.style
  if (!t.defaults) {
    let n = await U()
    r = (
      await _([
        {
          type: 'select',
          name: 'style',
          message: `Which ${p.info('style')} would you like to use?`,
          choices: n.map((s) => ({ title: s.label, value: s.name })),
          initial: n.findIndex((s) => s.name === r),
        },
      ])
    ).style
  }
  return O.parse({
    $schema: e?.$schema,
    style: r,
    rsc: e?.rsc,
    tsx: e?.tsx,
    aliases: e?.aliases,
  })
}
export { re as a, ke as b, At as c, Re as d }

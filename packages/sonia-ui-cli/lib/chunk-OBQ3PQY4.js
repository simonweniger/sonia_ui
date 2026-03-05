import f from 'deepmerge'
import { HttpsProxyAgent as C } from 'https-proxy-agent'
import { yellow as E, cyan as I, green as R, red as j } from 'kleur/colors'
import z from 'node-fetch'
import { z as D } from 'zod'
import { z as e } from 'zod'
import { z as U } from 'zod'

var c = { error: j, warn: E, info: I, success: R }
var o = {
  error(...r) {
    console.log(c.error(r.join(' ')))
  },
  warn(...r) {
    console.log(c.warn(r.join(' ')))
  },
  info(...r) {
    console.log(c.info(r.join(' ')))
  },
  success(...r) {
    console.log(c.success(r.join(' ')))
  },
  debug(...r) {
    process.env.DEBUG && console.log(r.join(' '))
  },
  log(...r) {
    console.log(r.join(' '))
  },
  break() {
    console.log('')
  },
}
import { z as D } from 'zod'
function y(r) {
  if (
    (o.error(
      'Something went wrong. Please check the error below for more details.',
    ),
    o.error('If the problem persists, please open an issue on GitHub.'),
    o.error(''),
    typeof r == 'string' && (o.error(r), o.break(), process.exit(1)),
    r instanceof D.ZodError)
  ) {
    o.error('Validation failed:')
    for (let [t, a] of Object.entries(r.flatten().fieldErrors))
      o.error(`- ${c.info(t)}: ${a}`)
    ;(o.break(), process.exit(1))
  }
  ;(r instanceof Error && (o.error(r.message), o.break(), process.exit(1)),
    o.break(),
    process.exit(1))
}
import { z as e } from 'zod'
var h = e.enum([
    'registry:style',
    'registry:lib',
    'registry:example',
    'registry:block',
    'registry:component',
    'registry:ui',
    'registry:hook',
    'registry:theme',
    'registry:page',
    'registry:icon',
    'registry:story',
  ]),
  w = e.object({
    path: e.string(),
    content: e.string().optional(),
    type: h,
    target: e.string().optional(),
  }),
  P = e.object({
    config: e
      .object({
        content: e.array(e.string()).optional(),
        theme: e.record(e.string(), e.any()).optional(),
        plugins: e.array(e.string()).optional(),
      })
      .optional(),
  }),
  T = e.object({
    light: e.record(e.string(), e.string()).optional(),
    dark: e.record(e.string(), e.string()).optional(),
  }),
  m = e.object({
    name: e.string(),
    type: h,
    private: e.boolean().optional(),
    description: e.string().optional(),
    dependencies: e.array(e.string()).optional(),
    devDependencies: e.array(e.string()).optional(),
    registryDependencies: e.array(e.string()).optional(),
    files: e.array(w).optional(),
    tailwind: P.optional(),
    cssVars: T.optional(),
    meta: e.record(e.string(), e.any()).optional(),
    docs: e.string().optional(),
    category: e.string().optional(),
    subcategory: e.string().optional(),
  }),
  x = e.array(
    m.extend({ files: e.array(e.union([e.string(), w])).optional() }),
  ),
  b = e.array(e.object({ name: e.string(), label: e.string() })),
  Z = e.object({
    inlineColors: e.object({
      light: e.record(e.string(), e.string()),
      dark: e.record(e.string(), e.string()),
    }),
    cssVars: e.object({
      light: e.record(e.string(), e.string()),
      dark: e.record(e.string(), e.string()),
    }),
    inlineColorsTemplate: e.string(),
    cssVarsTemplate: e.string(),
  }),
  k = m.pick({
    dependencies: !0,
    devDependencies: !0,
    files: !0,
    tailwind: !0,
    cssVars: !0,
    docs: !0,
  })
import f from 'deepmerge'
import { HttpsProxyAgent as C } from 'https-proxy-agent'
import z from 'node-fetch'
import { z as U } from 'zod'
var _ = process.env.https_proxy ? new C(process.env.https_proxy) : void 0
async function F() {
  try {
    let [r] = await u(['index.json'])
    return x.parse(r)
  } catch (r) {
    ;(o.error(`
`),
      y(r))
  }
}
async function ie() {
  try {
    let [r] = await u(['styles/index.json'])
    return b.parse(r)
  } catch (r) {
    return (
      o.error(`
`),
      y(r),
      []
    )
  }
}
async function u(r) {
  try {
    return await Promise.all(
      r.map(async (a) => {
        let g = S(a),
          s = await z(g, { agent: _ })
        if (!s.ok) {
          let p = {
            400: 'Bad request',
            401: 'Unauthorized',
            403: 'Forbidden',
            404: 'Not found',
            500: 'Internal server error',
          }
          if (s.status === 401)
            throw new Error(`You are not authorized to access the component at ${c.info(g)}.
If this is a remote registry, you may need to authenticate.`)
          if (s.status === 404)
            throw new Error(`The component at ${c.info(g)} was not found.
It may not exist at the registry. Please make sure it is a valid component.`)
          if (s.status === 403)
            throw new Error(`You do not have access to the component at ${c.info(g)}.
If this is a remote registry, you may need to authenticate or a token.`)
          let n = await s.json(),
            l =
              n && typeof n == 'object' && 'error' in n
                ? n.error
                : s.statusText || p[s.status]
          throw new Error(`Failed to fetch from ${c.info(g)}.
${l}`)
        }
        return s.json()
      }),
    )
  } catch (t) {
    return (
      o.error(`
`),
      y(t),
      []
    )
  }
}
function ae(r, t, a) {
  return (
    a ||
    (r.type === 'registry:ui'
      ? t.resolvedPaths.ui
      : r.type === 'registry:lib'
        ? t.resolvedPaths.lib
        : r.type === 'registry:block' || r.type === 'registry:component'
          ? t.resolvedPaths.components
          : r.type === 'registry:hook'
            ? t.resolvedPaths.hooks
            : r.type === 'registry:page'
              ? t.resolvedPaths.components
              : r.type === 'registry:icon'
                ? t.resolvedPaths.icons
                : t.resolvedPaths.components)
  )
}
async function ce(r, t) {
  try {
    if (!(await F())) return null
    r.includes('index') && r.unshift('index')
    let g = []
    for (let i of r) {
      let d = await L(i, t)
      g.push(...d)
    }
    let s = Array.from(new Set(g)),
      p = await u(s),
      n = U.array(m).parse(p)
    if (!n) return null
    let l = ''
    return (
      n.forEach((i) => {
        i.docs &&
          (l += `${i.docs}
`)
      }),
      k.parse({
        dependencies: f.all(n.map((i) => i.dependencies ?? [])),
        devDependencies: f.all(n.map((i) => i.devDependencies ?? [])),
        files: f.all(n.map((i) => i.files ?? [])),
        docs: l,
      })
    )
  } catch (a) {
    return (y(a), null)
  }
}
async function L(r, t) {
  let a = new Set(),
    g = []
  async function s(p) {
    let n = S(v(p) ? p : `styles/${t.style}/${p}.json`)
    if (!a.has(n)) {
      a.add(n)
      try {
        let [l] = await u([n]),
          i = m.parse(l)
        if ((g.push(n), i.registryDependencies))
          for (let d of i.registryDependencies) await s(d)
      } catch (l) {
        console.error(`Error fetching or parsing registry item at ${p}:`, l)
      }
    }
  }
  return (await s(r), Array.from(new Set(g)))
}
function S(r) {
  return v(r) ? r : `${''}/${r}`
}
function v(r) {
  try {
    return (new URL(r), !0)
  } catch {
    return !1
  }
}
export { c as a, o as b, y as c, F as d, ie as e, ae as f, ce as g }

import f from 'cli-table3'
import m from 'kleur'
import i from 'zod'

import { c as g, b as t, d as y } from './chunk-OBQ3PQY4.js'

import f from 'cli-table3'
import m from 'kleur'
import i from 'zod'
var u = i.object({
  category: i.string().optional(),
  search: i.string().optional(),
})
async function x(p) {
  try {
    let o = u.parse(p),
      c = await y()
    if (!c) {
      t.error('Failed to fetch registry index.')
      return
    }
    let n = new f({
        head: ['Name', 'Category', 'Description'],
        colWidths: [35, 15, 60],
        style: { head: ['cyan'], border: ['gray'] },
      }),
      r = c.filter((e) => ['registry:ui', 'registry:block'].includes(e.type))
    if (
      (o.category &&
        (r = r.filter((e) =>
          e.subcategory?.toLowerCase().includes(o.category.toLowerCase()),
        )),
      o.search)
    ) {
      let e = o.search.toLowerCase()
      r = r.filter(
        (s) =>
          s.name.toLowerCase().includes(e) ||
          s.description?.toLowerCase().includes(e) ||
          s.category?.toLowerCase().includes(e) ||
          s.subcategory?.toLowerCase().includes(e),
      )
    }
    r = r.sort((e, s) =>
      e.subcategory !== s.subcategory
        ? e.subcategory?.localeCompare(s.subcategory || '') || 0
        : e.name.localeCompare(s.name),
    )
    for (let e of r)
      n.push([e.name, e.subcategory || '-', e.description || '-'])
    t.log('')
    let l = 'Available Components:',
      a = []
    ;(o.category && a.push(`subcategory: ${o.category}`),
      o.search && a.push(`search: "${o.search}"`),
      a.length > 0 && (l += ` (filtered by ${a.join(', ')})`),
      t.log(m.bold(l)),
      t.log(''),
      t.log(n.toString()),
      t.log(''),
      t.log(`Total: ${m.green(r.length)} components`),
      t.log(''))
  } catch (o) {
    g(o)
  }
}
export { x as list }

import { buildApplication, buildRouteMap } from '@stricli/core'

import { description, name, version } from '../package.json'
import { addCommand } from './commands/add/command'
import { diffCommand } from './commands/diff/command'
import { initCommand } from './commands/init/command'
import { listCommand } from './commands/list/command'

const routes = buildRouteMap({
  routes: {
    init: initCommand,
    add: addCommand,
    diff: diffCommand,
    list: listCommand,
  },
  docs: {
    brief: description,
  },
})

export const app = buildApplication(routes, {
  name,
  versionInfo: {
    currentVersion: version,
  },
})

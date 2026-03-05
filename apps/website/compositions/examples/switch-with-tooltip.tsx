'use client'

import { useId } from 'react'

import { Switch, Tooltip } from '@sonia/ui'

export const SwitchWithTooltip = () => {
  const id = useId()
  return (
    <Tooltip ids={{ trigger: id }} content="This is a tooltip">
      <Switch ids={{ root: id }}>Switch with tooltip </Switch>
    </Tooltip>
  )
}

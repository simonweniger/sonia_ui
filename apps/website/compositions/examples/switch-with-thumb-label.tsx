'use client'

import { HiCheck, HiX } from 'react-icons/hi'

import { Switch } from '@sonia/ui'

export const SwitchWithThumbLabel = () => {
  return (
    <Switch size="lg" thumbLabel={{ on: <HiCheck />, off: <HiX /> }}>
      Switch me
    </Switch>
  )
}

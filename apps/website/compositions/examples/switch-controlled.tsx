'use client'

import { useState } from 'react'

import { Switch } from '@sonia/ui'

export const SwitchControlled = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Switch checked={checked} onCheckedChange={(e) => setChecked(e.checked)} />
  )
}

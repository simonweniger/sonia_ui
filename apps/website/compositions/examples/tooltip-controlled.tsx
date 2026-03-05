'use client'

import { useState } from 'react'

import { Button, Tooltip } from '@sonia/ui'

export const TooltipControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <Tooltip
      content="Tooltip Content"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Button size="sm">{open ? 'Hide' : 'Show'} tooltip</Button>
    </Tooltip>
  )
}

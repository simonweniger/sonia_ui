'use client'

import { Button, Tooltip } from '@sonia/ui'

export const TooltipWithInteractive = () => {
  return (
    <Tooltip content="This is the tooltip content" interactive>
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

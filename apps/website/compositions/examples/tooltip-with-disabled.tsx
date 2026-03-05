'use client'

import { Button, Tooltip } from '@sonia/ui'

export const TooltipWithDisabled = () => {
  return (
    <Tooltip content="This is the tooltip content" disabled>
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

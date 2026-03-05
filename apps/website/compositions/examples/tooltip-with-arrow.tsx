'use client'

import { Button } from '@sonia/ui'
import { Tooltip } from '@sonia/ui'

export const TooltipWithArrow = () => {
  return (
    <Tooltip showArrow content="This is the tooltip content">
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

'use client'

import { HStack } from '@sonia/ui'
import { Button, Tooltip } from '@sonia/ui'

export const TooltipMultiple = () => {
  return (
    <HStack>
      <Tooltip content="Tooltip Content - 1">
        <Button variant="outline" size="sm">
          Button 1
        </Button>
      </Tooltip>
      <Tooltip content="Tooltip Content - 2">
        <Button variant="outline" size="sm">
          Button 2
        </Button>
      </Tooltip>
    </HStack>
  )
}

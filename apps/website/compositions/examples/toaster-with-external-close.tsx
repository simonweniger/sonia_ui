'use client'

import { Button, HStack } from '@sonia/ui'
import { toast } from '@sonia/ui'

export const ToasterWithExternalClose = () => {
  return (
    <HStack>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast.create({
            description: 'File saved successfully',
            type: 'info',
          })
        }
      >
        Show Toast
      </Button>

      <Button variant="outline" size="sm" onClick={() => toast.dismiss()}>
        Close Toasts
      </Button>
    </HStack>
  )
}

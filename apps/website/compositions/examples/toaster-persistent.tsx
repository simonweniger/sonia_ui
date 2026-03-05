'use client'

import { Button } from '@sonia/ui'
import { toast } from '@sonia/ui'

export const ToasterPersistent = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toast.create({
          description: 'File saved successfully',
          type: 'loading',
        })
      }
    >
      Show Toast
    </Button>
  )
}

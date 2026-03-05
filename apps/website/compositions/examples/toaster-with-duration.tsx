'use client'

import { Button } from '@sonia/ui'
import { toast } from '@sonia/ui'

export const ToasterWithDuration = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toast.create({
          description: 'File saved successfully',
          duration: 6000,
        })
      }
    >
      Show Toast
    </Button>
  )
}

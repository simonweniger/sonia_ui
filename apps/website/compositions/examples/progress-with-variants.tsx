'use client'

import { Stack } from '@sonia/ui'
import { Progress } from '@sonia/ui'

export const ProgressWithVariants = () => {
  return (
    <Stack gap="4" maxW="200px">
      <Progress.Root variant="subtle">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root variant="outline">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Stack>
  )
}

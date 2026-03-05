'use client'

import { Progress } from '@sonia/ui'

export const ProgressWithStripes = () => {
  return (
    <Progress.Root maxW="240px" striped>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}

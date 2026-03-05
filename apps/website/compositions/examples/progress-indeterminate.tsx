'use client'

import { Progress } from '@sonia/ui'

export const ProgressIndeterminate = () => {
  return (
    <Progress.Root maxW="240px" value={null}>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}

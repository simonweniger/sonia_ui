'use client'

import { Progress } from '@sonia/ui'

export const ProgressBasic = () => {
  return (
    <Progress.Root maxW="240px" value={50}>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}

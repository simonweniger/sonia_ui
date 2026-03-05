'use client'

import { ProgressCircle } from '@sonia/ui'

export const ProgressCircleWithRangeColor = () => {
  return (
    <ProgressCircle.Root value={75}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range stroke="orange" />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  )
}

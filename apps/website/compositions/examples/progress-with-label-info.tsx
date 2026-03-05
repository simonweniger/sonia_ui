'use client'

import { InfoTip, Progress } from '@sonia/ui'

export const ProgressWithLabelInfo = () => {
  return (
    <Progress.Root maxW="240px">
      <Progress.Label mb="2">
        Uploading <InfoTip>Uploading document to the server</InfoTip>
      </Progress.Label>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}

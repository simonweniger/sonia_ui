'use client'

import { HStack } from '@sonia/ui'
import { Progress } from '@sonia/ui'

export const ProgressBarWithLabel = () => {
  return (
    <Progress.Root defaultValue={40}>
      <HStack justify="space-between" mb="1">
        <Progress.Label>Token usage</Progress.Label>
        <Progress.ValueText />
      </HStack>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}

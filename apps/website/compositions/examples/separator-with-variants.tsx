'use client'

import { Stack } from '@sonia/ui'
import { Separator } from '@sonia/ui'

export const SeparatorWithVariants = () => {
  return (
    <Stack>
      <Separator variant="solid" />
      <Separator variant="dashed" />
      <Separator variant="dotted" />
    </Stack>
  )
}

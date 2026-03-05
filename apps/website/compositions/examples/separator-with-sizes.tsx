'use client'

import { Stack } from '@sonia/ui'
import { Separator } from '@sonia/ui'

export const SeparatorWithSizes = () => {
  return (
    <Stack gap="4">
      <Separator size="xs" />
      <Separator size="sm" />
      <Separator size="md" />
      <Separator size="lg" />
    </Stack>
  )
}

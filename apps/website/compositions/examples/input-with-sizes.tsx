'use client'

import { Stack } from '@sonia/ui'
import { Input } from '@sonia/ui'

export const InputWithSizes = () => {
  return (
    <Stack gap="4">
      <Input placeholder="size (xs)" size="xs" />
      <Input placeholder="size (sm)" size="sm" />
      <Input placeholder="size (md)" size="md" />
      <Input placeholder="size (lg)" size="lg" />
    </Stack>
  )
}

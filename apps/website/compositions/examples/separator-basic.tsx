'use client'

import { Stack, Text } from '@sonia/ui'
import { Separator } from '@sonia/ui'

export const SeparatorBasic = () => {
  return (
    <Stack>
      <Text>First</Text>
      <Separator />
      <Text>Second</Text>
      <Separator />
      <Text>Third</Text>
    </Stack>
  )
}

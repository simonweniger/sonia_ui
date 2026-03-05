'use client'

import { HStack, Text } from '@sonia/ui'
import { Separator } from '@sonia/ui'

export const SeparatorVertical = () => {
  return (
    <HStack gap="4">
      <Text>First</Text>
      <Separator orientation="vertical" height="4" />
      <Text>Second</Text>
    </HStack>
  )
}

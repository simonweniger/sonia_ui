'use client'

import { HStack } from '@sonia/ui'
import { Switch } from '@sonia/ui'

export const SwitchWithSizes = () => {
  return (
    <HStack gap="8">
      <Switch size="xs" />
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </HStack>
  )
}

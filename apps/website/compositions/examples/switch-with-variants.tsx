'use client'

import { HStack } from '@sonia/ui'
import { Switch } from '@sonia/ui'

export const SwitchWithVariants = () => {
  return (
    <HStack gap="8">
      <Switch variant="raised" />
      <Switch variant="solid" />
    </HStack>
  )
}

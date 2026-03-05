'use client'

import { HStack } from '@sonia/ui'
import { CloseButton } from '@sonia/ui'

export const CloseButtonWithVariants = () => {
  return (
    <HStack>
      <CloseButton variant="ghost" colorPalette="indigo" />
      <CloseButton variant="outline" colorPalette="indigo" />
      <CloseButton variant="subtle" colorPalette="indigo" />
      <CloseButton variant="solid" colorPalette="indigo" />
      <CloseButton variant="glass" colorPalette="indigo" />
    </HStack>
  )
}

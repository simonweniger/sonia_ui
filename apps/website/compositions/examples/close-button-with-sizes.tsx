'use client'

import { For, HStack } from '@sonia/ui'
import { CloseButton } from '@sonia/ui'

export const CloseButtonWithSizes = () => {
  return (
    <HStack gap="4" wrap="wrap">
      <For each={['xs', 'sm', 'md', 'lg', 'xl']}>
        {(size) => <CloseButton variant="outline" size={size} />}
      </For>
    </HStack>
  )
}

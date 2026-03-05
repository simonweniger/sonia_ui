'use client'

import { HStack } from '@sonia/ui'
import { ColorSwatch } from '@sonia/ui'
import { For } from '@sonia/ui'

export const ColorSwatchWithSizes = () => {
  return (
    <HStack>
      <For each={['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']}>
        {(size) => <ColorSwatch key={size} value="#bada55" size={size} />}
      </For>
    </HStack>
  )
}

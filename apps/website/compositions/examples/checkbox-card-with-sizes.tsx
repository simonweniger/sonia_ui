'use client'

import { For, Stack } from '@sonia/ui'
import { CheckboxCard } from '@sonia/ui'

export const CheckboxCardWithSizes = () => {
  return (
    <Stack maxW="320px">
      <For each={['sm', 'md', 'lg']}>
        {(size) => <CheckboxCard label={`Checkbox (${size})`} size={size} />}
      </For>
    </Stack>
  )
}

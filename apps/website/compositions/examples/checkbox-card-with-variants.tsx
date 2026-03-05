'use client'

import { For, Stack } from '@sonia/ui'
import { CheckboxCard } from '@sonia/ui'

export const CheckboxCardWithVariants = () => {
  return (
    <Stack maxW="320px">
      <For each={['subtle', 'surface', 'outline']}>
        {(variant) => (
          <CheckboxCard
            defaultChecked
            label={`Checkbox (${variant})`}
            colorPalette="teal"
            variant={variant}
          />
        )}
      </For>
    </Stack>
  )
}

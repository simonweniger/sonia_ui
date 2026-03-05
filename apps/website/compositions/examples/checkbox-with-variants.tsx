'use client'

import { For, HStack, Stack, Text } from '@sonia/ui'
import { Checkbox } from '@sonia/ui'

export const CheckboxWithVariants = () => {
  return (
    <HStack align="flex-start">
      <For each={['outline', 'subtle', 'solid']}>
        {(variant) => (
          <Stack align="flex-start" flex="1" key={variant}>
            <Text>{variant}</Text>
            <Checkbox defaultChecked variant={variant}>
              Checkbox
            </Checkbox>
          </Stack>
        )}
      </For>
    </HStack>
  )
}

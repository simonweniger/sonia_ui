'use client'

import { HiCheck } from 'react-icons/hi'

import { For, HStack, Stack } from '@sonia/ui'
import { Tag } from '@sonia/ui'

export const TagWithVariants = () => {
  return (
    <Stack gap="8">
      <For each={['subtle', 'solid', 'outline', 'surface']}>
        {(variant) => (
          <HStack key={variant}>
            <Tag variant={variant}>{variant}</Tag>
            <Tag variant={variant} closable>
              {variant}
            </Tag>
            <Tag endElement={<HiCheck />} variant={variant}>
              {variant}
            </Tag>
          </HStack>
        )}
      </For>
    </Stack>
  )
}

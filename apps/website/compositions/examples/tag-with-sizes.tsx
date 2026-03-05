'use client'

import { HiCheck } from 'react-icons/hi'

import { For, HStack, Stack } from '@sonia/ui'
import { Tag } from '@sonia/ui'

export const TagWithSizes = () => {
  return (
    <Stack gap="8">
      <For each={['sm', 'md', 'lg']}>
        {(size) => (
          <HStack key={size}>
            <Tag size={size}>Gray</Tag>
            <Tag size={size} closable>
              Gray
            </Tag>
            <Tag endElement={<HiCheck />} size={size}>
              Gray
            </Tag>
          </HStack>
        )}
      </For>
    </Stack>
  )
}

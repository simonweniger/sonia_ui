'use client'

import { LuActivity } from 'react-icons/lu'

import { HStack } from '@sonia/ui'
import { Tag } from '@sonia/ui'

export const TagWithClose = () => {
  return (
    <HStack>
      <Tag startElement={<LuActivity />} closable>
        Tag 1
      </Tag>
      <Tag closable>Tag 2</Tag>
    </HStack>
  )
}

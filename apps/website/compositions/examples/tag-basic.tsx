'use client'

import { HStack } from '@sonia/ui'
import { Tag } from '@sonia/ui'

export const TagBasic = () => {
  return (
    <HStack>
      <Tag>Plain Tag</Tag>
      <Tag closable>Closable Tag</Tag>
    </HStack>
  )
}

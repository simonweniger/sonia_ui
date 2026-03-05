'use client'

import { LuCircleUser, LuFileBadge } from 'react-icons/lu'

import { HStack } from '@sonia/ui'
import { Tag } from '@sonia/ui'

export const TagWithIcon = () => {
  return (
    <HStack>
      <Tag startElement={<LuCircleUser />}>Tag 2</Tag>
      <Tag startElement={<LuFileBadge />}>Top Rated</Tag>
    </HStack>
  )
}

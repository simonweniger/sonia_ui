'use client'

import { LuCheck } from 'react-icons/lu'

import { Tag } from '@sonia/ui'

export const TagAsButton = () => {
  return (
    <Tag as="button" variant="solid" endElement={<LuCheck />}>
      Fish
    </Tag>
  )
}

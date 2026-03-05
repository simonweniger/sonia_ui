'use client'

import { RiCloseLine } from 'react-icons/ri'

import { CloseButton } from '@sonia/ui'

export const CloseButtonWithCustomIcon = () => {
  return (
    <CloseButton variant="ghost">
      <RiCloseLine />
    </CloseButton>
  )
}

'use client'

import { CheckboxCard } from '@sonia/ui'

export const CheckboxCardDisabled = () => {
  return (
    <CheckboxCard
      disabled
      label="Disabled"
      description="This is a disabled checkbox"
      maxW="320px"
    />
  )
}

'use client'

import { Badge, HStack } from '@sonia/ui'
import { CheckboxCard } from '@sonia/ui'

export const CheckboxCardWithAddon = () => {
  return (
    <CheckboxCard
      label="With Addon"
      description="Some description"
      maxW="300px"
      addon={
        <HStack>
          Some supporting text
          <Badge variant="solid">New</Badge>
        </HStack>
      }
    />
  )
}

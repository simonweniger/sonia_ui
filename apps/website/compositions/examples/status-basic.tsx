'use client'

import { HStack } from '@sonia/ui'
import { Status } from '@sonia/ui'

export const StatusBasic = () => {
  return (
    <HStack gap="6">
      <Status value="error" />
      <Status value="info" />
      <Status value="warning" />
      <Status value="success" />
    </HStack>
  )
}

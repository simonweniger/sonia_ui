'use client'

import { HStack } from '@sonia/ui'
import { Status } from '@sonia/ui'

export const StatusWithLabel = () => {
  return (
    <HStack gap="6">
      <Status value="error">Error</Status>
      <Status value="info">Info</Status>
      <Status value="warning">Warning</Status>
      <Status value="success">Success</Status>
    </HStack>
  )
}

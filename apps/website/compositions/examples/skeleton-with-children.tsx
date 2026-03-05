'use client'

import { Badge, HStack } from '@sonia/ui'
import { Skeleton } from '@sonia/ui'

export const SkeletonWithChildren = () => {
  return (
    <HStack gap="4">
      <Skeleton asChild loading={true}>
        <Badge>Select</Badge>
      </Skeleton>

      <Skeleton loading={false}>
        <Badge>Select</Badge>
      </Skeleton>
    </HStack>
  )
}

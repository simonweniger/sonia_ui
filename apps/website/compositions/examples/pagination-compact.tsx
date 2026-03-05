'use client'

import { HStack } from '@sonia/ui'
import { Pagination } from '@sonia/ui'

export const PaginationCompact = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <HStack gap="4">
        <Pagination.PrevTrigger />
        <Pagination.PageText />
        <Pagination.NextTrigger />
      </HStack>
    </Pagination.Root>
  )
}

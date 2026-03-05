'use client'

import { HStack } from '@sonia/ui'
import { Pagination } from '@sonia/ui'

export const PaginationBasic = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1}>
      <HStack>
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </HStack>
    </Pagination.Root>
  )
}

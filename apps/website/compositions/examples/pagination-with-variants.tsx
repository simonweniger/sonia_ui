'use client'

import { HStack } from '@sonia/ui'
import { Pagination } from '@sonia/ui'

export const PaginationWithVariants = () => {
  return (
    <Pagination.Root count={20} pageSize={2} defaultPage={1} variant="solid">
      <HStack>
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </HStack>
    </Pagination.Root>
  )
}

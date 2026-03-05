'use client'

import { useState } from 'react'

import { HStack } from '@sonia/ui'
import { Pagination } from '@sonia/ui'

export const PaginationControlled = () => {
  const [page, setPage] = useState(1)

  return (
    <Pagination.Root
      count={20}
      pageSize={2}
      page={page}
      onPageChange={(e) => setPage(e.page)}
    >
      <HStack>
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </HStack>
    </Pagination.Root>
  )
}

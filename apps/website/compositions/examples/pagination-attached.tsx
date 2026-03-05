'use client'

import { Group } from '@sonia/ui'
import { Pagination } from '@sonia/ui'

export const PaginationAttached = () => {
  return (
    <Pagination.Root count={10} pageSize={2} defaultPage={1} variant="solid">
      <Group attached>
        <Pagination.PrevTrigger />
        <Pagination.Items />
        <Pagination.NextTrigger />
      </Group>
    </Pagination.Root>
  )
}

'use client'

import { LuSearch } from 'react-icons/lu'

import { List } from '@sonia/ui'
import { EmptyState } from '@sonia/ui'

export const EmptyStateWithList = () => {
  return (
    <EmptyState
      icon={<LuSearch />}
      title="No results found"
      description="Try adjusting your search"
    >
      <List.Root variant="marker">
        <List.Item>Try removing filters</List.Item>
        <List.Item>Try different keywords</List.Item>
      </List.Root>
    </EmptyState>
  )
}

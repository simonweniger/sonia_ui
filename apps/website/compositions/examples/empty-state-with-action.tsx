'use client'

import { HiColorSwatch } from 'react-icons/hi'

import { Button, ButtonGroup, EmptyState } from '@sonia/ui'

export const EmptyStateWithAction = () => {
  return (
    <EmptyState
      icon={<HiColorSwatch />}
      title="Start adding tokens"
      description="Add a new design token to get started"
    >
      <ButtonGroup>
        <Button variant="outline">Create token</Button>
        <Button variant="solid">Import</Button>
      </ButtonGroup>
    </EmptyState>
  )
}

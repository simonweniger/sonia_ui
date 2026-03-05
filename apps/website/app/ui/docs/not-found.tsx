'use client'

import { TbError404 } from 'react-icons/tb'

import { EmptyState } from '@sonia/ui'

export default function NotFound() {
  return (
    <EmptyState
      minH="90dvh"
      icon={<TbError404 />}
      title="Page not found"
      description="The page you are looking for does not exist."
    />
  )
}

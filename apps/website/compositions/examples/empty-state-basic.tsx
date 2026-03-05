'use client'

import { LuShoppingCart } from 'react-icons/lu'

import { EmptyState } from '@sonia/ui'

export const EmptyStateBasic = () => {
  return (
    <EmptyState
      icon={<LuShoppingCart />}
      title="Your cart is empty"
      description="Explore our products and add items to your cart"
    />
  )
}

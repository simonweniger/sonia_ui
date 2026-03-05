'use client'

import { LuShoppingCart } from 'react-icons/lu'

import { For, Stack } from '@sonia/ui'
import { EmptyState } from '@sonia/ui'

export const EmptyStateSizes = () => {
  return (
    <Stack>
      <For each={['sm', 'md', 'lg']}>
        {(size) => (
          <EmptyState
            size={size}
            icon={<LuShoppingCart />}
            title="Your cart is empty"
            description="Explore our products and add items to your cart"
          />
        )}
      </For>
    </Stack>
  )
}

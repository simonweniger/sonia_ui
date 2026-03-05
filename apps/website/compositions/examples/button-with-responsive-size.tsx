'use client'

import { Button } from '@sonia/ui'

export const ButtonWithResponsiveSize = () => {
  return (
    <Button rounded="3xl" size={{ base: 'md', md: 'lg' }}>
      Button
    </Button>
  )
}

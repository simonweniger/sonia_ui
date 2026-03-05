'use client'

import { Input } from '@sonia/ui'

export const InputWithPlaceholderStyle = () => {
  return (
    <Input
      color="teal"
      placeholder="custom placeholder"
      _placeholder={{ color: 'inherit' }}
    />
  )
}

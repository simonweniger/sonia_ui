'use client'

import { withMask } from 'use-mask-input'

import { Input } from '@sonia/ui'

export const InputWithMask = () => {
  return (
    <Input placeholder="(99) 99999-9999" ref={withMask('(99) 99999-9999')} />
  )
}

'use client'

import { Editable } from '@sonia/ui'

export const EditableInvalid = () => {
  return (
    <Editable.Root invalid defaultValue="Click to edit">
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}

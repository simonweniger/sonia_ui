'use client'

import { Editable, Input } from '@sonia/ui'

export const EditableWithCustomComponent = () => {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Preview>
        <Input />
      </Editable.Preview>
    </Editable.Root>
  )
}

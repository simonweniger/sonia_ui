'use client'

import { Field, Input } from '@sonia/ui'

export const FieldWithRequired = () => {
  return (
    <Field.Root required>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}

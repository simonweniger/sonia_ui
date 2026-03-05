'use client'

import { Field, Input } from '@sonia/ui'

export const FieldWithDisabled = () => {
  return (
    <Field.Root disabled>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}

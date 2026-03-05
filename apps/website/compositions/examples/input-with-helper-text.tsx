'use client'

import { Field, Input } from '@sonia/ui'

export const InputWithHelperText = () => {
  return (
    <Field.Root required>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" />
      <Field.HelperText>We'll never share your email.</Field.HelperText>
    </Field.Root>
  )
}

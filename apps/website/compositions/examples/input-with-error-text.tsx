'use client'

import { Field, Input } from '@sonia/ui'

export const InputWithErrorText = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" />
      <Field.ErrorText>This field is required</Field.ErrorText>
    </Field.Root>
  )
}

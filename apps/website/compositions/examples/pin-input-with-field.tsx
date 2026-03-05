'use client'

import { Field } from '@sonia/ui'
import { PinInput } from '@sonia/ui'

export const PinInputWithField = () => {
  return (
    <Field.Root>
      <Field.Label>Enter otp</Field.Label>
      <PinInput />
    </Field.Root>
  )
}

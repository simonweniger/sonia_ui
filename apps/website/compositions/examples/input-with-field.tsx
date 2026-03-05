'use client'

import { HStack } from '@sonia/ui'
import { Field, Input } from '@sonia/ui'

export const InputWithField = () => {
  return (
    <HStack gap="10" width="full">
      <Field.Root required>
        <Field.Label>Email</Field.Label>
        <Input placeholder="me@example.com" variant="subtle" />
      </Field.Root>
    </HStack>
  )
}

'use client'

import { HStack } from '@sonia/ui'
import { Field, Textarea } from '@sonia/ui'

export const TextareaWithField = () => {
  return (
    <HStack gap="10" width="full">
      <Field.Root required>
        <Field.Label>Comment</Field.Label>
        <Textarea placeholder="Start typing..." variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>Comment</Field.Label>
        <Textarea placeholder="Start typing..." variant="outline" />
      </Field.Root>
    </HStack>
  )
}

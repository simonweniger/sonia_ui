'use client'

import { HStack } from '@sonia/ui'
import { Field, Textarea } from '@sonia/ui'

export const TextareaWithErrorText = () => {
  return (
    <HStack gap="10" width="full">
      <Field.Root invalid required>
        <Field.Label>Comment</Field.Label>
        <Textarea placeholder="Start typing..." variant="subtle" />
        <Field.ErrorText>Field is required</Field.ErrorText>
      </Field.Root>
      <Field.Root invalid required>
        <Field.Label>Comment</Field.Label>
        <Textarea placeholder="Start typing..." variant="outline" />
        <Field.ErrorText>Field is required</Field.ErrorText>
      </Field.Root>
    </HStack>
  )
}

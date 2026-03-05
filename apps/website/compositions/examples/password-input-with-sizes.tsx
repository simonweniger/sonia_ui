'use client'

import { Stack } from '@sonia/ui'
import { PasswordInput } from '@sonia/ui'

export const PasswordInputWithSizes = () => {
  return (
    <Stack maxW="300px">
      <PasswordInput placeholder="xs" size="xs" />
      <PasswordInput placeholder="sm" size="sm" />
      <PasswordInput placeholder="md" size="md" />
      <PasswordInput placeholder="lg" size="lg" />
    </Stack>
  )
}

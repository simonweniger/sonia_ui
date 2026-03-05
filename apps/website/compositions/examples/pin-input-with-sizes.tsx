'use client'

import { Stack } from '@sonia/ui'
import { PinInput } from '@sonia/ui'

export const PinInputWithSizes = () => {
  return (
    <Stack gap="4">
      <PinInput size="sm" />
      <PinInput size="md" />
      <PinInput size="lg" />
    </Stack>
  )
}

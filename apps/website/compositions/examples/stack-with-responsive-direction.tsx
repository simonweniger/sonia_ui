import { Stack } from '@sonia/ui'

import { DecorativeBox } from '../lib/decorative-box'

export const StackWithResponsiveDirection = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap="10">
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
    </Stack>
  )
}

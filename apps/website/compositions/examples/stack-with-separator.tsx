import { Stack, StackSeparator } from '@sonia/ui'

import { DecorativeBox } from '../lib/decorative-box'

export const StackWithSeparator = () => {
  return (
    <Stack separator={<StackSeparator />}>
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Stack>
  )
}

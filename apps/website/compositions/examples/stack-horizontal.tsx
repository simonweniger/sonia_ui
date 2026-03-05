import { Stack } from '@sonia/ui'

import { DecorativeBox } from '../lib/decorative-box'

export const StackHorizontal = () => {
  return (
    <Stack direction="row" h="20">
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
    </Stack>
  )
}

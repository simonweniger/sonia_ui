import { Flex } from '@sonia/ui'

import { DecorativeBox } from '../lib/decorative-box'

export const FlexWithAutoMargin = () => {
  return (
    <Flex gap="4" justify="space-between">
      <DecorativeBox height="10" width="40" />
      <DecorativeBox height="10" width="40" marginEnd="auto" />
      <DecorativeBox height="10" width="40" />
    </Flex>
  )
}

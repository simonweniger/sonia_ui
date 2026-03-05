import { Flex } from '@sonia/ui'

import { DecorativeBox } from '../lib/decorative-box'

export const FlexWithAlign = () => {
  return (
    <Flex gap="4" align="center">
      <DecorativeBox height="4" />
      <DecorativeBox height="8" />
      <DecorativeBox height="10" />
    </Flex>
  )
}

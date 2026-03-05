import { Flex } from '@sonia/ui'

import { DecorativeBox } from '../lib/decorative-box'

export const FlexWithDirection = () => {
  return (
    <Flex gap="4" direction="column">
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  )
}

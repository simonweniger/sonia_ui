import { LuUser } from 'react-icons/lu'

import { HStack } from '@sonia/ui'
import { Input, InputGroup } from '@sonia/ui'

export const InputWithLeftElement = () => {
  return (
    <HStack gap="10" width="full">
      <InputGroup flex="1" startElement={<LuUser />}>
        <Input placeholder="Username" />
      </InputGroup>

      <InputGroup flex="1" startElement="https://">
        <Input ps="4.75em" placeholder="yoursite.com" />
      </InputGroup>
    </HStack>
  )
}

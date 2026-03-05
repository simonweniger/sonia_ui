import { LuSearch } from 'react-icons/lu'

import { HStack, Kbd } from '@sonia/ui'
import { Input, InputGroup, NativeSelect } from '@sonia/ui'

const DomainSelect = () => (
  <NativeSelect size="xs" variant="plain" width="auto" me="-1">
    <option value=".com">.com</option>
    <option value=".org">.org</option>
    <option value=".net">.net</option>
  </NativeSelect>
)

export const InputWithLeftAndRightElement = () => {
  return (
    <HStack gap="10" width="full">
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={<Kbd>⌘K</Kbd>}
      >
        <Input placeholder="Search contacts" />
      </InputGroup>

      <InputGroup
        flex="1"
        startElement="https://"
        endElement={<DomainSelect />}
      >
        <Input ps="4.75em" pe="0" placeholder="yoursite.com" />
      </InputGroup>
    </HStack>
  )
}

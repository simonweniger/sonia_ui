'use client'

import { Clipboard, InputGroup } from '@sonia/ui'

export const ClipboardWithInput = () => {
  return (
    <Clipboard.Root
      maxW="300px"
      value="https://sonia-ui.dev/docs/components/clipboard"
    >
      <InputGroup
        width="full"
        endElement={<Clipboard.IconButton me="-2" variant="ghost" />}
      >
        <Clipboard.Input />
      </InputGroup>
    </Clipboard.Root>
  )
}

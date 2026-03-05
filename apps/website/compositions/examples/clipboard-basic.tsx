'use client'

import { Clipboard } from '@sonia/ui'

export const ClipboardBasic = () => {
  return (
    <Clipboard.Root value="https://sonia-ui.dev">
      <Clipboard.IconButton />
    </Clipboard.Root>
  )
}

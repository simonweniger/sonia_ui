'use client'

import { Clipboard } from '@sonia/ui'

export const ClipboardWithButton = () => {
  return (
    <Clipboard.Root value="https://sonia-ui.dev">
      <Clipboard.Button />
    </Clipboard.Root>
  )
}

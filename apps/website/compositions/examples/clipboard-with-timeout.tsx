'use client'

import { Clipboard } from '@sonia/ui'

export const ClipboardWithTimeout = () => {
  return (
    <Clipboard.Root value="https://sonia-ui.dev" timeout={1000}>
      <Clipboard.Button />
    </Clipboard.Root>
  )
}

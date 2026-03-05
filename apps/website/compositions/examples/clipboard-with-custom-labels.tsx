'use client'

import { Clipboard } from '@sonia/ui'

export const ClipboardWithCustomLabels = () => {
  return (
    <Clipboard.Root value="https://sonia-ui.dev">
      <Clipboard.Button copied="Gekopiëerd">Kopiëer</Clipboard.Button>
    </Clipboard.Root>
  )
}

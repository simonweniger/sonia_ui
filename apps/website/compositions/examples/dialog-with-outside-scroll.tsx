'use client'

import Lorem from 'react-lorem-ipsum'

import { Button, Dialog } from '@sonia/ui'

export const DialogWithOutsideScroll = () => {
  return (
    <Dialog.Root size="sm" scrollBehavior="outside">
      <Dialog.Trigger asChild>
        <Button variant="outline">Outside Scroll</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>With Outside Scroll</Dialog.Title>
          <Dialog.CloseButton />
        </Dialog.Header>

        <Dialog.Body>
          <Lorem p={8} />
        </Dialog.Body>
      </Dialog.Content>
    </Dialog.Root>
  )
}

'use client'

import { Text } from '@sonia/ui'
import { Button, Popover } from '@sonia/ui'

export const PopoverLazyMounted = () => {
  return (
    <Popover.Root lazyMount unmountOnExit>
      <Popover.Trigger asChild>
        <Button size="sm" variant="outline">
          Click me
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Body>
          <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
          <Text my="4">
            Naruto is a Japanese manga series written and illustrated by Masashi
            Kishimoto.
          </Text>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

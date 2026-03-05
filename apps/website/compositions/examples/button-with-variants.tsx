'use client'

import { HStack } from '@sonia/ui'
import { Button } from '@sonia/ui'

export const ButtonWithVariants = () => {
  return (
    <HStack wrap="wrap" gap="6">
      <Button variant="glass">Glass</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>
    </HStack>
  )
}

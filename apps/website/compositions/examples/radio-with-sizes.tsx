'use client'

import { HStack } from '@sonia/ui'
import { Radio, RadioGroup } from '@sonia/ui'

export const RadioWithSizes = () => {
  return (
    <HStack gap="4">
      <RadioGroup.Root size="sm">
        <Radio value="react">Radio (sm)</Radio>
      </RadioGroup.Root>
      <RadioGroup.Root size="md">
        <Radio value="react">Radio (md)</Radio>
      </RadioGroup.Root>
      <RadioGroup.Root size="lg">
        <Radio value="react">Radio (lg)</Radio>
      </RadioGroup.Root>
    </HStack>
  )
}

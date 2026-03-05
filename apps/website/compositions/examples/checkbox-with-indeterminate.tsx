'use client'

import { Stack } from '@sonia/ui'
import { Checkbox } from '@sonia/ui'

export const CheckboxWithIndeterminate = () => {
  return (
    <Stack>
      <Checkbox defaultChecked="indeterminate" variant="subtle">
        Subtle
      </Checkbox>
      <Checkbox defaultChecked="indeterminate" variant="outline">
        Outline
      </Checkbox>
    </Stack>
  )
}

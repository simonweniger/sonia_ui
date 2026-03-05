'use client'

import { Stack } from '@sonia/ui'
import { Checkbox } from '@sonia/ui'

export const CheckboxWithStates = () => {
  return (
    <Stack>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox defaultChecked disabled>
        Disabled
      </Checkbox>
      <Checkbox readOnly>Readonly</Checkbox>
      <Checkbox invalid>Invalid</Checkbox>
    </Stack>
  )
}

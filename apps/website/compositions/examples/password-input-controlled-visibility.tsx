'use client'

import { useState } from 'react'

import { Stack, Text } from '@sonia/ui'
import { PasswordInput } from '@sonia/ui'

export const PasswordInputControlledVisibility = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Stack>
      <PasswordInput
        defaultValue="secret"
        visible={visible}
        onVisibleChange={setVisible}
      />
      <Text>Password is {visible ? 'visible' : 'hidden'}</Text>
    </Stack>
  )
}

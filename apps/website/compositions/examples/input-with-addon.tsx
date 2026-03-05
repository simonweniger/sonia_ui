'use client'

import { Group, Stack } from '@sonia/ui'
import { Input, InputAddon } from '@sonia/ui'

export const InputWithAddon = () => (
  <Stack gap="10">
    <Group attached>
      <InputAddon>https://</InputAddon>
      <Input placeholder="Phone number..." />
    </Group>

    <Group attached>
      <Input placeholder="Placeholder" />
      <InputAddon>.com</InputAddon>
    </Group>
  </Stack>
)

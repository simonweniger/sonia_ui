'use client'

import { useState } from 'react'

import { Button, Show, Stack } from '@chakra-ui/react'

export const ShowBasic = () => {
  const [count, setCount] = useState(0)
  return (
    <Stack align="flex-start">
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Value: {count}
      </Button>
      <Show when={count > 3}>
        <div>My Content</div>
      </Show>
    </Stack>
  )
}

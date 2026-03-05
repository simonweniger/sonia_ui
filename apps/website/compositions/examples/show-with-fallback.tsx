'use client'

import { useState } from 'react'

import { Button, Show, Stack, Text } from '@chakra-ui/react'

export const ShowWithFallback = () => {
  const [count, setCount] = useState(0)
  return (
    <Stack align="flex-start">
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Value: {count}
      </Button>
      <Show
        when={count > 3}
        fallback={<Text>Not there yet. Keep clicking...</Text>}
      >
        <div>Congrats! I am here</div>
      </Show>
    </Stack>
  )
}

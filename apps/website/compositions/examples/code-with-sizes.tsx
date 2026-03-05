'use client'

import { Code, Stack } from '@sonia/ui'

export const CodeWithSizes = () => {
  return (
    <Stack gap="2" align="flex-start">
      <Code size="xs">console.log()</Code>
      <Code size="sm">console.log()</Code>
      <Code size="md">console.log()</Code>
      <Code size="lg">console.log()</Code>
    </Stack>
  )
}

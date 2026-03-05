'use client'

import { Box, Float } from '@sonia/ui'
import { Avatar, Badge } from '@sonia/ui'

export const FloatWithAvatar = () => {
  return (
    <Box display="inline-block" pos="relative">
      <Avatar size="lg" shape="rounded" src="https://bit.ly/dan-abramov" />
      <Float placement="bottom-end">
        <Badge size="sm" variant="solid" colorPalette="teal">
          New
        </Badge>
      </Float>
    </Box>
  )
}

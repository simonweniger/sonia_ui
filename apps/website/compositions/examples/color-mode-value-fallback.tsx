'use client'

import { LuMoon, LuSun } from 'react-icons/lu'

import { ClientOnly, IconButton, Skeleton, useColorMode } from '@sonia/ui'

export const ColorModeValueFallback = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === 'light' ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  )
}

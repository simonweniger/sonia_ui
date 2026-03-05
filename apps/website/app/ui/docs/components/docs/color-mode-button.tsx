'use client'

import { useTheme } from 'next-themes'
import { LuMoon, LuSun } from 'react-icons/lu'

import { ClientOnly, IconButton, Skeleton } from '@sonia/ui'

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={handleClick}
        variant="ghost"
        size="sm"
        color="inherit"
      >
        {theme === 'light' ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  )
}

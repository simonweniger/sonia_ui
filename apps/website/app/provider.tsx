'use client'

import { ThemeProvider } from 'next-themes'

import { SoniaProvider } from '@sonia/ui'
import { Toaster } from '@sonia/ui/toaster'

import { system } from './theme'

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <SoniaProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
        <Toaster />
      </ThemeProvider>
    </SoniaProvider>
  )
}

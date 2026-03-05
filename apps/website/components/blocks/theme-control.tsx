import React, { useState } from 'react'

import { LuPaintbrush } from 'react-icons/lu'

import { Button, Menu } from '@sonia/ui'

interface ColorControlProps {
  onChange(color: string): void
  value: string
}

const themes: Record<string, string> = {
  '@sonia/ui': 'Sonia UI',
  glass: 'Glass',
}

export function ThemeControl({ onChange, value }: ColorControlProps) {
  // @todo remove this hack to prevent hydration errors
  const initializedRef = React.useRef(false)
  React.useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true
    }
  }, [])

  if (!initializedRef.current) {
    return null
  }

  return (
    <Menu.Root>
      <Menu.Button as={Button} leftIcon={<LuPaintbrush />} variant="tertiary">
        {themes[value]}
      </Menu.Button>
      <Menu.Content>
        <Menu.RadioItemGroup
          value={value}
          onValueChange={({ value }) => onChange(value)}
        >
          <Menu.RadioItem value="@sonia/ui">Sonia UI (default)</Menu.RadioItem>
          <Menu.RadioItem value="glass">Glass</Menu.RadioItem>
        </Menu.RadioItemGroup>
      </Menu.Content>
    </Menu.Root>
  )
}

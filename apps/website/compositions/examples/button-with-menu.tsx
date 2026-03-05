'use client'

import { LuChevronDown } from 'react-icons/lu'

import { Button, ButtonGroup, IconButton, Menu } from '@sonia/ui'

export const ButtonWithMenu = () => {
  return (
    <Menu.Root positioning={{ placement: 'bottom-end' }}>
      <ButtonGroup attached>
        <Button size="sm" variant="outline">
          Accept
        </Button>
        <Menu.Trigger asChild>
          <IconButton size="sm" variant="outline">
            <LuChevronDown />
          </IconButton>
        </Menu.Trigger>
      </ButtonGroup>
      <Menu.Content>
        <Menu.Item value="all">Accept All</Menu.Item>
        <Menu.Item value="selected">Accept Selected</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  )
}

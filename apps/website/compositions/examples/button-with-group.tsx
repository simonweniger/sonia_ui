'use client'

import { LuChevronDown } from 'react-icons/lu'

import { Button, ButtonGroup, IconButton } from '@sonia/ui'

export const ButtonWithGroup = () => {
  return (
    <ButtonGroup attached>
      <Button variant="outline" size="sm">
        Button
      </Button>
      <IconButton variant="outline" size="sm">
        <LuChevronDown />
      </IconButton>
    </ButtonGroup>
  )
}

'use client'

import { RiArrowRightLine, RiMailLine } from 'react-icons/ri'

import { HStack } from '@sonia/ui'
import { Button } from '@sonia/ui'

export const ButtonWithIcons = () => {
  return (
    <HStack>
      <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button colorPalette="teal" variant="outline">
        Call us <RiArrowRightLine />
      </Button>
    </HStack>
  )
}

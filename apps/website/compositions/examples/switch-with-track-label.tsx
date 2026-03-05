'use client'

import { FaMoon, FaSun } from 'react-icons/fa'

import { Icon } from '@sonia/ui'
import { Switch } from '@sonia/ui'

export const SwitchWithTrackLabel = () => {
  return (
    <Switch
      colorPalette="blue"
      size="lg"
      trackLabel={{
        on: (
          <Icon color="yellow.400">
            <FaSun />
          </Icon>
        ),
        off: (
          <Icon color="gray.400">
            <FaMoon />
          </Icon>
        ),
      }}
    />
  )
}

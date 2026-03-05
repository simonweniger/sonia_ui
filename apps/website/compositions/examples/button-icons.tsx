'use client'

import { RiPhoneLine, RiSearchLine } from 'react-icons/ri'

import { Stack } from '@sonia/ui'
import { IconButton } from '@sonia/ui'

export const ButtonIcons = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database">
      <RiSearchLine />
    </IconButton>

    <IconButton colorPalette="blue" aria-label="Search database">
      <RiSearchLine />
    </IconButton>

    <IconButton colorPalette="teal" aria-label="Call Segun" size="lg">
      <RiPhoneLine />
    </IconButton>
  </Stack>
)

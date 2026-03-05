'use client'

import { Spinner } from '@sonia/ui'

export const SpinnerWithTrackColor = () => (
  <Spinner
    color="red.500"
    css={{ '--spinner-track-color': 'colors.gray.200' }}
  />
)

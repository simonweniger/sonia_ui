'use client'

import { Slider } from '@sonia/ui'

export const SliderThumbContained = () => {
  return (
    <Slider
      width="200px"
      thumbAlignment="contain"
      thumbSize={{ width: 16, height: 16 }}
      defaultValue={[40]}
    />
  )
}

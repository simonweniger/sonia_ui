'use client'

import { SegmentedControl } from '@sonia/ui'

export const SegmentedControlBasic = () => {
  return (
    <SegmentedControl defaultValue="React" items={['React', 'Vue', 'Solid']} />
  )
}

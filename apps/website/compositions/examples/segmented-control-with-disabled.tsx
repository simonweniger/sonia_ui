'use client'

import { SegmentedControl } from '@sonia/ui'

export const SegmentedControlWithDisabled = () => {
  return (
    <SegmentedControl
      disabled
      defaultValue="React"
      items={['React', 'Vue', 'Solid']}
    />
  )
}

'use client'

import { SegmentedControl } from '@sonia/ui'

export const SegmentedControlWithDisabledItem = () => {
  return (
    <SegmentedControl
      defaultValue="React"
      items={[
        { label: 'React', value: 'React' },
        { label: 'Vue', value: 'Vue', disabled: true },
        { label: 'Solid', value: 'Solid' },
      ]}
    />
  )
}

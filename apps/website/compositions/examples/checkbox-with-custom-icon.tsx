'use client'

import { HiOutlinePlus } from 'react-icons/hi'

import { Checkbox } from '@sonia/ui'

export const CheckboxWithCustomIcon = () => {
  return (
    <Checkbox defaultChecked icon={<HiOutlinePlus />}>
      With Custom Icon
    </Checkbox>
  )
}

'use client'

import { Link } from '@sonia/ui'
import { Checkbox } from '@sonia/ui'

export const CheckboxWithLink = () => {
  return (
    <Checkbox>
      I agree to the{' '}
      <Link colorPalette="teal" href="https://google.com">
        terms and conditions
      </Link>
    </Checkbox>
  )
}

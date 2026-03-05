import { LuDollarSign } from 'react-icons/lu'

import { NumberInput } from '@sonia/ui'

export const NumberInputWithElement = () => {
  return (
    <NumberInput
      defaultValue="10"
      width="200px"
      startElement={<LuDollarSign />}
    />
  )
}

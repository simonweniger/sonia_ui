import { HiAtSymbol, HiStar } from 'react-icons/hi'

import { Stack } from '@sonia/ui'
import { Badge } from '@sonia/ui'

export const BadgeWithIcon = () => {
  return (
    <Stack align="flex-start">
      <Badge variant="solid" colorPalette="blue">
        <HiStar />
        New
      </Badge>
      <Badge variant="solid" colorPalette="green">
        New
        <HiAtSymbol />
      </Badge>
    </Stack>
  )
}

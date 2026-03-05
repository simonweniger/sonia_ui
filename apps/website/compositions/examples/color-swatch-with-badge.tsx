'use client'

import { Badge, ColorSwatch } from '@sonia/ui'

export const ColorSwatchWithBadge = () => {
  return (
    <Badge>
      <ColorSwatch value="#bada55" boxSize="0.82em" />
      #bada55
    </Badge>
  )
}

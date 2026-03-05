import { TbArrowRight } from 'react-icons/tb'

import { Icon } from '@sonia/ui'

export function ActionArrow() {
  return (
    <Icon
      transform="translateX(-4px)"
      transition="transform 0.2s ease-in-out"
      _parentHover={{
        transform: 'translateX(0)',
      }}
    >
      <TbArrowRight />
    </Icon>
  )
}

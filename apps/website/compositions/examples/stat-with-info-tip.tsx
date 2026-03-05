'use client'

import { InfoTip, Stat } from '@sonia/ui'

export const StatWithInfoTip = () => {
  return (
    <Stat.Root>
      <Stat.Label>
        Unique <InfoTip>Some info</InfoTip>
      </Stat.Label>
      <Stat.ValueText>192.1k</Stat.ValueText>
    </Stat.Root>
  )
}

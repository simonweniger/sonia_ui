'use client'

import { LuDollarSign } from 'react-icons/lu'

import { HStack, Icon } from '@sonia/ui'
import { Stat } from '@sonia/ui'

export const StatWithIcon = () => {
  return (
    <Stat.Root maxW="240px" borderWidth="1px" p="4" rounded="md">
      <HStack justify="space-between">
        <Stat.Label>Sales</Stat.Label>
        <Icon color="fg.muted">
          <LuDollarSign />
        </Icon>
      </HStack>
      <Stat.ValueText>$4.24k</Stat.ValueText>
    </Stat.Root>
  )
}

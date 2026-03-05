'use client'

import { LuGrid2X2, LuList, LuTable } from 'react-icons/lu'

import { HStack } from '@sonia/ui'
import { SegmentedControl } from '@sonia/ui'

export const SegmentedControlWithIcon = () => {
  return (
    <SegmentedControl
      defaultValue="table"
      items={[
        {
          value: 'table',
          label: (
            <HStack>
              <LuTable />
              Table
            </HStack>
          ),
        },
        {
          value: 'board',
          label: (
            <HStack>
              <LuGrid2X2 />
              Board
            </HStack>
          ),
        },
        {
          value: 'list',
          label: (
            <HStack>
              <LuList />
              List
            </HStack>
          ),
        },
      ]}
    />
  )
}

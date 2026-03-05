'use client'

import { FormatByte, HStack, Text } from '@sonia/ui'
import { InfoTip } from '@sonia/ui'

export const ToggleTipInfoTip = () => {
  return (
    <HStack justify="center">
      <Text textStyle="lg">
        File size: <FormatByte value={1450.45} />
      </Text>
      <InfoTip>The file size for content.tsx is 1.45kb</InfoTip>
    </HStack>
  )
}

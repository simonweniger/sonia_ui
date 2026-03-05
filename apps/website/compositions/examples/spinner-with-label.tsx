'use client'

import { Text, VStack } from '@sonia/ui'
import { Spinner } from '@sonia/ui'

export const SpinnerWithLabel = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Loading...</Text>
    </VStack>
  )
}

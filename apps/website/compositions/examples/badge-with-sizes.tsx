import { HStack } from '@sonia/ui'
import { Badge } from '@sonia/ui'

export const BadgeWithSizes = () => {
  return (
    <HStack>
      <Badge size="xs">New</Badge>
      <Badge size="sm">New</Badge>
      <Badge size="md">New</Badge>
      <Badge size="lg">New</Badge>
    </HStack>
  )
}

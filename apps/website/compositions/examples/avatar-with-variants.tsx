import { HStack } from '@sonia/ui'
import { Avatar } from '@sonia/ui'

export const AvatarWithVariants = () => {
  return (
    <HStack gap="3">
      <Avatar variant="solid" name="David Wilson" />
      <Avatar variant="outline" name="David Wilson" />
      <Avatar variant="subtle" name="David Wilson" />
    </HStack>
  )
}

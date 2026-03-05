import { Group } from '@sonia/ui'
import { Badge, BadgePropsProvider } from '@sonia/ui'

export const BadgeWithContext = () => {
  return (
    <BadgePropsProvider value={{ size: 'sm', variant: 'outline' }}>
      <Group>
        <Badge>Badge</Badge>
        <Badge variant="solid">Badge</Badge>
      </Group>
    </BadgePropsProvider>
  )
}

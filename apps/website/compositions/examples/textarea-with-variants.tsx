import { Stack } from '@sonia/ui'
import { Textarea } from '@sonia/ui'

export const TextareaWithVariants = () => {
  return (
    <Stack gap="4">
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="subtle" placeholder="subtle" />
      <Textarea variant="flushed" placeholder="flushed" />
    </Stack>
  )
}

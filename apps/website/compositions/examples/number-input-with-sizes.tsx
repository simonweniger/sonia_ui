import { For, Stack } from '@sonia/ui'
import { NumberInput } from '@sonia/ui'

export const NumberInputWithSizes = () => {
  return (
    <Stack gap="5" width="200px">
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => <NumberInput size={size} key={size} defaultValue="10" />}
      </For>
    </Stack>
  )
}

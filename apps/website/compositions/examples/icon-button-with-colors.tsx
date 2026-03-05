import { LuSearch } from 'react-icons/lu'

import { For, HStack, IconButton } from '@sonia/ui'

import { colorPalettes } from '../lib/color-palettes'

export const IconButtonWithColors = () => {
  return (
    <HStack wrap="wrap">
      <For each={colorPalettes}>
        {(c) => (
          <IconButton aria-label="Search database" key={c} colorPalette={c}>
            <LuSearch />
          </IconButton>
        )}
      </For>
    </HStack>
  )
}

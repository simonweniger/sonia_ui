'use client'

import { LuQuote } from 'react-icons/lu'

import { Circle, Float } from '@sonia/ui'
import { Blockquote } from '@sonia/ui'

export const BlockquoteWithCustomIcon = () => {
  return (
    <Blockquote
      cite="Uzumaki Naruto"
      colorPalette="blue"
      ps="8"
      icon={
        <Float placement="middle-start">
          <Circle bg="blue.600" size="8" color="white">
            <LuQuote />
          </Circle>
        </Float>
      }
    >
      If anyone thinks he is something when he is nothing, he deceives himself.
      Each one should test his own actions. Then he can take pride in himself,
      without comparing himself to anyone else.
    </Blockquote>
  )
}

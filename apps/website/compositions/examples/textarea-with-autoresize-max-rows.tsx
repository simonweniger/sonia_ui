'use client'

import { Textarea } from '@sonia/ui'

export const TextareaWithAutoresizeMaxRows = () => {
  return <Textarea placeholder="Limits to 4 rows" autoresize maxH="5lh" />
}

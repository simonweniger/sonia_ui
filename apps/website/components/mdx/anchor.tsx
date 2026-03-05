'use client'

import Link, { type LinkProps } from 'next/link'

import { Box } from '@sonia/ui'

export const Anchor = (props: LinkProps & { children: React.ReactNode }) => {
  return (
    <Box
      asChild
      css={{
        color: 'fg',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationThickness: '2px',
        textDecorationColor: 'border.emphasized',
        fontWeight: 'medium',
      }}
    >
      <Link {...props}>
        <>{props.children}</>
      </Link>
    </Box>
  )
}

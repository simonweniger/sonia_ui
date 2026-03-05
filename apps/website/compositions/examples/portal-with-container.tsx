'use client'

import { useRef } from 'react'

import { Portal } from '@chakra-ui/react'

export const PortalWithContainer = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <Portal container={ref}>
        <span>This text has been portaled</span>
      </Portal>
      <div ref={ref} />
    </>
  )
}

'use client'

import { Container } from '@sonia/ui'

import { DecorativeBox } from '../lib/decorative-box'

export const ContainerWithFluid = () => {
  return (
    <Container fluid>
      <DecorativeBox px="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
      </DecorativeBox>
    </Container>
  )
}

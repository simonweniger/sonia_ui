'use client'

import { LuHouse, LuShirt } from 'react-icons/lu'

import { Breadcrumb } from '@sonia/ui'

export const BreadcrumbWithIcon = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Link href="#">
        <LuHouse /> Home
      </Breadcrumb.Link>
      <Breadcrumb.Link href="#">
        <LuShirt /> Men Wear
      </Breadcrumb.Link>
      <Breadcrumb.CurrentLink>Trousers</Breadcrumb.CurrentLink>
    </Breadcrumb.Root>
  )
}

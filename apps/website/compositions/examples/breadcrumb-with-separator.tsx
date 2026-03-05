'use client'

import { LiaSlashSolid } from 'react-icons/lia'

import { Breadcrumb } from '@sonia/ui'

export const BreadcrumbWithSeparator = () => {
  return (
    <Breadcrumb.Root separator={<LiaSlashSolid />}>
      <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
      <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
    </Breadcrumb.Root>
  )
}

'use client'

import { LuChevronDown } from 'react-icons/lu'

import { Breadcrumb, Menu } from '@sonia/ui'

export const BreadcrumbWithMenu = () => {
  return (
    <Breadcrumb.Root separator="/" separatorGap="4">
      <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Breadcrumb.Link as="button">
            Components <LuChevronDown />
          </Breadcrumb.Link>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item value="theme">Theme</Menu.Item>
          <Menu.Item value="props">Props</Menu.Item>
          <Menu.Item value="custom">Customization</Menu.Item>
        </Menu.Content>
      </Menu.Root>
      <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
    </Breadcrumb.Root>
  )
}

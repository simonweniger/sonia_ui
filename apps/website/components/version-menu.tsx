import Link from 'next/link'
import { LuChevronDown } from 'react-icons/lu'

import { Span } from '@sonia/ui'
import { Button, LinkProps, Menu } from '@sonia/ui'

interface VersionItem {
  title: string
  value: string
  url: NonNullable<LinkProps['href']>
}

interface Props {
  items: VersionItem[]
  containerRef?: React.RefObject<HTMLElement | null>
}

export const VersionMenu = (props: Props) => {
  const { items, containerRef } = props
  const [currentItem, ...restItems] = items
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline" gap="1" pe="2">
          {currentItem.value}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Content portalled>
        {restItems.map((item, index) => (
          <Menu.Item value={item.value} key={index} asChild>
            <Link href={item.url}>
              <Span fontWeight="medium" flex="1">
                {item.title}
              </Span>
              <Span color="fg.subtle">{item.value}</Span>
            </Link>
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  )
}

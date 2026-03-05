'use client'

import { LuTrophy } from 'react-icons/lu'
import { LoremIpsum } from 'react-lorem-ipsum'

import { Badge, HStack } from '@sonia/ui'
import { Accordion, Avatar } from '@sonia/ui'

export const AccordionWithAvatar = () => {
  return (
    <Accordion.Root collapsible defaultValue={['b']}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.name}>
          <Accordion.ItemTrigger>
            <Avatar shape="rounded" src={item.image} name={item.name} />
            <HStack>
              {item.name}{' '}
              {item.topRated && (
                <Badge colorPalette="green">
                  <LuTrophy />
                  Top Rated
                </Badge>
              )}
            </HStack>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item.bio}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  {
    name: 'Alex',
    bio: <LoremIpsum />,
    image: 'https://i.pravatar.cc/150?u=a',
    topRated: false,
  },
  {
    name: 'Benji',
    bio: <LoremIpsum />,
    image: 'https://i.pravatar.cc/150?u=b',
    topRated: true,
  },
  {
    name: 'Charlie',
    bio: <LoremIpsum />,
    image: 'https://i.pravatar.cc/150?u=c',
    topRated: false,
  },
]

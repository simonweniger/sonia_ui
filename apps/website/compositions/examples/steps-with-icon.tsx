'use client'

import { LuCalendar, LuUser, LuWallet } from 'react-icons/lu'

import { Group } from '@sonia/ui'
import { Button, Steps } from '@sonia/ui'

export const StepsWithIcon = () => {
  return (
    <Steps.Root defaultStep={1} count={3}>
      <Steps.List>
        <Steps.Item index={0} icon={<LuUser />} />
        <Steps.Item index={1} icon={<LuWallet />} />
        <Steps.Item index={2} icon={<LuCalendar />} />
      </Steps.List>

      <Steps.Content index={0}>Contact Details</Steps.Content>
      <Steps.Content index={1}>Payment</Steps.Content>
      <Steps.Content index={2}>Book an Appointment</Steps.Content>
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <Group>
        <Steps.PrevTrigger asChild>
          <Button variant="outline" size="sm">
            Prev
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </Steps.NextTrigger>
      </Group>
    </Steps.Root>
  )
}

'use client'

import { Stack } from '@sonia/ui'
import { CheckboxCard, type CheckboxCardProps } from '@sonia/ui'

export const CheckboxCardWithStates = () => {
  return (
    <Stack>
      <DemoCheckboxCard />
      <DemoCheckboxCard defaultChecked />
      <DemoCheckboxCard disabled />
      <DemoCheckboxCard defaultChecked disabled />
      <DemoCheckboxCard invalid />
    </Stack>
  )
}

const DemoCheckboxCard = (props: CheckboxCardProps) => {
  return (
    <CheckboxCard
      label="Next.js"
      description="Best for apps"
      maxW="240px"
      {...props}
    />
  )
}

'use client'

import { Stack } from '@sonia/ui'
import { Card } from '@sonia/ui'
import { SubmitButton, useForm } from '@sonia/ui/forms'

export const CardWithForm = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  return (
    <form.Form onSubmit={(values) => console.log(values)}>
      <Card.Root maxW="sm">
        <Card.Header>
          <Card.Title>Sign up</Card.Title>
          <Card.Description>
            Fill in the form below to create an account
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <form.Field name="firstName" label="First Name" />
            <form.Field name="lastName" label="Last Name" />
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <SubmitButton>Save</SubmitButton>
        </Card.Footer>
      </Card.Root>
    </form.Form>
  )
}

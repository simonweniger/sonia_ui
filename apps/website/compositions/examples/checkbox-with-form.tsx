'use client'

import { Stack } from '@sonia/ui'
import { Button } from '@sonia/ui'
import { useForm } from '@sonia/ui/forms'

export const CheckboxWithForm = () => {
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
  })

  return (
    <form.Form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(e.currentTarget.elements)
      }}
    >
      <Stack maxW="sm" gap="4" align="flex-start">
        <form.Field name="username" label="User name" />
        <form.Field name="password" label="Password" />

        <form.Field name="remember" label="Remember me" type="checkbox" />

        <Button variant="solid" mt="3">
          Submit
        </Button>
      </Stack>
    </form.Form>
  )
}

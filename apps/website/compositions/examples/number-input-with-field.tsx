import { Field, NumberInput } from '@sonia/ui'

export const NumberInputWithField = () => {
  return (
    <Field.Root width="200px">
      <Field.Label>Enter Number</Field.Label>
      <NumberInput />
      <Field.HelperText>Enter a number between 1 and 10</Field.HelperText>
    </Field.Root>
  )
}

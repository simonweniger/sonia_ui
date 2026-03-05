import { Alert, Spinner } from '@sonia/ui'

export const AlertWithSpinner = () => {
  return (
    <Alert
      icon={<Spinner size="sm" />}
      maxW="xl"
      borderStartWidth="3px"
      borderStartColor="colorPalette.600"
      title="We are loading something"
    />
  )
}

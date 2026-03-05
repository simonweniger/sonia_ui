import { LuAlarmClockPlus } from 'react-icons/lu'

import { Alert } from '@sonia/ui'

export const AlertWithCustomIcon = () => {
  return (
    <Alert
      icon={<LuAlarmClockPlus />}
      status="warning"
      title="Submitting this form will delete your account"
    />
  )
}

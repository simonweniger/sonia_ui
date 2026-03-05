'use client'

import { HiCamera } from 'react-icons/hi'

import { Button, FileUpload } from '@sonia/ui'

export const FileUploadMediaCapture = () => {
  return (
    <FileUpload.Root capture="environment">
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiCamera /> Open Camera
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}

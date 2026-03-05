'use client'

import { HiUpload } from 'react-icons/hi'

import { Button, FileUpload } from '@sonia/ui'

export const FileUploadMultiple = () => {
  return (
    <FileUpload.Root maxFiles={5}>
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List showSize clearable />
    </FileUpload.Root>
  )
}

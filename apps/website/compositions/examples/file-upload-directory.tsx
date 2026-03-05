'use client'

import { HiUpload } from 'react-icons/hi'

import { Button, FileUpload } from '@sonia/ui'

export const FileUploadDirectory = () => {
  return (
    <FileUpload.Root directory>
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}

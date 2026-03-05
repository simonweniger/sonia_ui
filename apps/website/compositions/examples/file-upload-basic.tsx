'use client'

import { HiUpload } from 'react-icons/hi'

import { Button, FileUpload } from '@sonia/ui'

export const FileUploadBasic = () => {
  return (
    <FileUpload.Root>
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}

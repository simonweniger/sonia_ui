'use client'

import { HiUpload } from 'react-icons/hi'

import { Button, FileUpload } from '@sonia/ui'

export const FileUploadAcceptedFiles = () => {
  return (
    <FileUpload.Root accept={['image/png']}>
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}

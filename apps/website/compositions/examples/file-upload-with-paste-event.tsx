'use client'

import { HiX } from 'react-icons/hi'

import {
  FileUpload as ChakraFileUpload,
  Float,
  HStack,
  Input,
  type InputProps,
} from '@sonia/ui'
import { FileUpload, useFileUploadContext } from '@sonia/ui'

const FilePasteInput = (props: InputProps) => {
  const fileUpload = useFileUploadContext()
  return (
    <Input
      {...props}
      onPaste={(e) => {
        fileUpload.setClipboardFiles(e.clipboardData)
      }}
    />
  )
}

const FileImageList = () => {
  const fileUpload = useFileUploadContext()
  return (
    <HStack wrap="wrap" gap="3">
      {fileUpload.acceptedFiles.map((file) => (
        <ChakraFileUpload.Item
          p="2"
          width="auto"
          key={file.name}
          file={file}
          pos="relative"
        >
          <Float placement="top-start">
            <ChakraFileUpload.ItemDeleteTrigger
              p="0.5"
              rounded="l1"
              bg="bg"
              borderWidth="1px"
            >
              <HiX />
            </ChakraFileUpload.ItemDeleteTrigger>
          </Float>
          <ChakraFileUpload.ItemPreviewImage
            boxSize="12"
            rounded="l1"
            objectFit="cover"
          />
        </ChakraFileUpload.Item>
      ))}
    </HStack>
  )
}

export const FileUploadWithPasteEvent = () => {
  return (
    <FileUpload.Root maxFiles={3} accept="image/*">
      <FileImageList />
      <FilePasteInput placeholder="Paste image here..." />
    </FileUpload.Root>
  )
}

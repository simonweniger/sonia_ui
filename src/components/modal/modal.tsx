"use client";

import type {ComponentPropsWithRef, ReactNode} from "react";

import {Box, Dialog as ChakraDialog} from "@chakra-ui/react";
import React from "react";

import {CloseButton} from "../close-button";

/* -------------------------------------------------------------------------------------------------
 * Modal Root
 * -----------------------------------------------------------------------------------------------*/
interface ModalRootProps extends ComponentPropsWithRef<typeof ChakraDialog.Root> {}

const ModalRoot = ({children, ...props}: ModalRootProps) => {
  return (
    <ChakraDialog.Root data-slot="modal-root" {...props}>
      {children}
    </ChakraDialog.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Trigger
 * -----------------------------------------------------------------------------------------------*/
interface ModalTriggerProps extends ComponentPropsWithRef<typeof ChakraDialog.Trigger> {}

const ModalTrigger = ({children, className, ...props}: ModalTriggerProps) => {
  return (
    <ChakraDialog.Trigger
      _active={{transform: "scale(0.97)"}}
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      className={className}
      cursor="pointer"
      data-slot="modal-trigger"
      css={{
        transition:
          "transform 250ms var(--ease-out-quart), background-color 150ms var(--ease-smooth), box-shadow 150ms var(--ease-out)",
      }}
      {...props}
    >
      {children}
    </ChakraDialog.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Backdrop
 * -----------------------------------------------------------------------------------------------*/
type ModalBackdropVariant = "opaque" | "blur" | "transparent";

interface ModalBackdropProps extends ComponentPropsWithRef<typeof ChakraDialog.Backdrop> {
  backdropVariant?: ModalBackdropVariant;
}

const ModalBackdrop = ({
  backdropVariant = "opaque",
  children,
  className,
  ...props
}: ModalBackdropProps) => {
  return (
    <ChakraDialog.Backdrop
      alignItems="center"
      className={className}
      data-slot="modal-backdrop"
      display="flex"
      flexDir="row"
      inset="0"
      justifyContent="center"
      position="fixed"
      w="100%"
      zIndex="50"
      {...(backdropVariant === "opaque" ? {bg: "black/50"} : {})}
      {...(backdropVariant === "blur" ? {bg: "black/50", backdropFilter: "blur(12px)"} : {})}
      {...(backdropVariant === "transparent" ? {bg: "transparent"} : {})}
      css={{height: "var(--visual-viewport-height)"}}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Content (replaces Container + Dialog)
 * -----------------------------------------------------------------------------------------------*/
type ModalSize = "xs" | "sm" | "md" | "lg" | "cover" | "full";

interface ModalContentProps extends ComponentPropsWithRef<typeof ChakraDialog.Content> {
  modalSize?: ModalSize;
}

const modalSizeStyles: Record<ModalSize, Record<string, string>> = {
  xs: {maxW: "xs"},
  sm: {maxW: "sm"},
  md: {maxW: "md"},
  lg: {maxW: "lg"},
  cover: {h: "100%", minH: "100%", w: "100%"},
  full: {h: "100%", minH: "100%", w: "100%", rounded: "none", shadow: "none"},
};

const ModalContent = ({children, className, modalSize = "md", ...props}: ModalContentProps) => {
  const sizeProps = modalSizeStyles[modalSize] ?? {};

  return (
    <ChakraDialog.Content
      className={className}
      data-slot="modal-content"
      css={{
        /* Sibling spacing */
        "& [data-slot=modal-header] + [data-slot=modal-body]": {
          marginTop: "var(--chakra-spacing-2)",
        },
        "& [data-slot=modal-header] + [data-slot=modal-footer]": {
          marginTop: "var(--chakra-spacing-5)",
        },
        "& [data-slot=modal-body] + [data-slot=modal-footer]": {
          marginTop: "var(--chakra-spacing-5)",
        },
      }}
      {...sizeProps}
      {...props}
    >
      {children}
    </ChakraDialog.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Header
 * -----------------------------------------------------------------------------------------------*/
interface ModalHeaderProps extends ComponentPropsWithRef<typeof ChakraDialog.Header> {}

const ModalHeader = ({children, className, ...props}: ModalHeaderProps) => {
  return (
    <ChakraDialog.Header
      className={className}
      data-slot="modal-header"
      display="flex"
      flexDir="column"
      gap="3"
      mb="0"
      {...props}
    >
      {children}
    </ChakraDialog.Header>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Body
 * -----------------------------------------------------------------------------------------------*/
interface ModalBodyProps extends ComponentPropsWithRef<typeof ChakraDialog.Body> {}

const ModalBody = ({children, className, ...props}: ModalBodyProps) => {
  return (
    <ChakraDialog.Body
      className={className}
      color="fg.muted"
      data-slot="modal-body"
      flex="1"
      fontSize="sm"
      lineHeight="1.43"
      minH="0"
      my="0"
      {...props}
    >
      {children}
    </ChakraDialog.Body>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Footer
 * -----------------------------------------------------------------------------------------------*/
interface ModalFooterProps extends ComponentPropsWithRef<typeof ChakraDialog.Footer> {}

const ModalFooter = ({children, className, ...props}: ModalFooterProps) => {
  return (
    <ChakraDialog.Footer
      alignItems="center"
      className={className}
      data-slot="modal-footer"
      display="flex"
      flexDir="row"
      gap="2"
      justifyContent="flex-end"
      mt="0"
      {...props}
    >
      {children}
    </ChakraDialog.Footer>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Heading (Title)
 * -----------------------------------------------------------------------------------------------*/
interface ModalHeadingProps extends ComponentPropsWithRef<typeof ChakraDialog.Title> {}

const ModalHeading = ({children, className, ...props}: ModalHeadingProps) => {
  return (
    <ChakraDialog.Title
      className={className}
      color="fg"
      data-slot="modal-heading"
      fontSize="md"
      fontWeight="medium"
      verticalAlign="middle"
      {...props}
    >
      {children}
    </ChakraDialog.Title>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Description
 * -----------------------------------------------------------------------------------------------*/
interface ModalDescriptionProps extends ComponentPropsWithRef<typeof ChakraDialog.Description> {}

const ModalDescription = ({children, className, ...props}: ModalDescriptionProps) => {
  return (
    <ChakraDialog.Description className={className} data-slot="modal-description" {...props}>
      {children}
    </ChakraDialog.Description>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Icon
 * -----------------------------------------------------------------------------------------------*/
interface ModalIconProps extends ComponentPropsWithRef<"div"> {}

const ModalIcon = ({children, className, ...props}: ModalIconProps) => {
  return (
    <Box
      alignItems="center"
      boxSize="10"
      className={className}
      data-slot="modal-icon"
      display="flex"
      flexShrink={0}
      justifyContent="center"
      rounded="full"
      userSelect="none"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Modal Close Trigger
 * -----------------------------------------------------------------------------------------------*/
interface ModalCloseTriggerProps extends ComponentPropsWithRef<typeof ChakraDialog.CloseTrigger> {
  children?: ReactNode;
}

const ModalCloseTrigger = ({children, className, ...rest}: ModalCloseTriggerProps) => {
  return (
    <ChakraDialog.CloseTrigger
      className={className}
      data-slot="modal-close-trigger"
      position="absolute"
      right="4"
      top="4"
      {...rest}
    >
      {children ?? <CloseButton />}
    </ChakraDialog.CloseTrigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  ModalRoot,
  ModalTrigger,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalDescription,
  ModalIcon,
  ModalCloseTrigger,
};

export type {
  ModalRootProps,
  ModalTriggerProps,
  ModalBackdropProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalIconProps,
  ModalHeadingProps,
  ModalDescriptionProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseTriggerProps,
};

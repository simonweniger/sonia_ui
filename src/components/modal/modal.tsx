"use client";

import type {ComponentPropsWithRef, ReactNode} from "react";

import React from "react";
import {Box, Dialog as ChakraDialog} from "@chakra-ui/react";

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
      data-slot="modal-trigger"
      className={className}
      cursor="pointer"
      css={{
        transition:
          "transform 250ms var(--ease-out-quart), background-color 150ms var(--ease-smooth), box-shadow 150ms var(--ease-out)",
      }}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      _active={{transform: "scale(0.97)"}}
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

const ModalBackdrop = ({children, className, backdropVariant = "opaque", ...props}: ModalBackdropProps) => {
  return (
    <ChakraDialog.Backdrop
      data-slot="modal-backdrop"
      className={className}
      position="fixed"
      inset="0"
      zIndex="50"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      w="100%"
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
      data-slot="modal-content"
      className={className}
      css={{
        /* Sibling spacing */
        "& [data-slot=modal-header] + [data-slot=modal-body]": {marginTop: "var(--chakra-spacing-2)"},
        "& [data-slot=modal-header] + [data-slot=modal-footer]": {marginTop: "var(--chakra-spacing-5)"},
        "& [data-slot=modal-body] + [data-slot=modal-footer]": {marginTop: "var(--chakra-spacing-5)"},
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
      data-slot="modal-header"
      className={className}
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
      data-slot="modal-body"
      className={className}
      minH="0"
      flex="1"
      fontSize="sm"
      lineHeight="1.43"
      color="fg.muted"
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
      data-slot="modal-footer"
      className={className}
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="flex-end"
      gap="2"
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
      data-slot="modal-heading"
      className={className}
      verticalAlign="middle"
      fontSize="md"
      fontWeight="medium"
      color="fg"
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
    <ChakraDialog.Description data-slot="modal-description" className={className} {...props}>
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
      data-slot="modal-icon"
      className={className}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSize="10"
      flexShrink={0}
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

const ModalCloseTrigger = ({className, children, ...rest}: ModalCloseTriggerProps) => {
  return (
    <ChakraDialog.CloseTrigger
      data-slot="modal-close-trigger"
      className={className}
      position="absolute"
      top="4"
      right="4"
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

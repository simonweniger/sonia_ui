"use client";

import type {ComponentPropsWithRef, ReactNode} from "react";
import type {SystemStyleObject} from "@chakra-ui/react";

import React from "react";
import {Box, Dialog as ChakraDialog} from "@chakra-ui/react";

import {CloseButton} from "../close-button";
import {DangerIcon, InfoIcon, SuccessIcon, WarningIcon} from "../icons";

type AlertDialogStatus = "default" | "accent" | "success" | "warning" | "danger";
type AlertDialogSize = "xs" | "sm" | "md" | "lg" | "cover";
type AlertDialogBackdropVariant = "transparent" | "opaque" | "blur";
type AlertDialogPlacement = "auto" | "top" | "center" | "bottom";

/* -------------------------------------------------------------------------------------------------
 * Icon variant styles
 * -----------------------------------------------------------------------------------------------*/
const iconVariantStyles: Record<AlertDialogStatus, SystemStyleObject> = {
  default: {bg: "bg", color: "fg"},
  accent: {bg: "accent.subtle", color: "accent.fg"},
  success: {bg: "success.subtle", color: "success.fg"},
  warning: {bg: "warning.subtle", color: "warning.fg"},
  danger: {bg: "danger.subtle", color: "danger.fg"},
};

/* -------------------------------------------------------------------------------------------------
 * Size styles
 * -----------------------------------------------------------------------------------------------*/
const sizeStyles: Record<AlertDialogSize, SystemStyleObject> = {
  xs: {maxW: "xs"},
  sm: {maxW: "sm"},
  md: {maxW: "md"},
  lg: {maxW: "lg"},
  cover: {h: "full", minH: "full", w: "full"},
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Root
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogRootProps extends ComponentPropsWithRef<typeof ChakraDialog.Root> {
  role?: "alertdialog";
}

const AlertDialogRoot = ({children, ...props}: AlertDialogRootProps) => {
  return (
    <ChakraDialog.Root data-slot="alert-dialog-root" role="alertdialog" {...props}>
      {children}
    </ChakraDialog.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Trigger
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogTriggerProps extends ComponentPropsWithRef<typeof ChakraDialog.Trigger> {}

const AlertDialogTrigger = ({children, ...props}: AlertDialogTriggerProps) => {
  return (
    <ChakraDialog.Trigger
      data-slot="alert-dialog-trigger"
      cursor="pointer"
      css={{
        WebkitTapHighlightColor: "transparent",
        transition:
          "transform 250ms var(--ease-out-quart), background-color 150ms var(--ease-smooth), box-shadow 150ms var(--ease-out)",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
        "&:active, &[data-pressed='true']": {
          transform: "scale(0.97)",
        },
      }}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      {...props}
    >
      {children}
    </ChakraDialog.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Backdrop
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogBackdropProps extends ComponentPropsWithRef<typeof ChakraDialog.Backdrop> {
  variant?: AlertDialogBackdropVariant;
}

const backdropVariantStyles: Record<AlertDialogBackdropVariant, SystemStyleObject> = {
  transparent: {bg: "transparent"},
  opaque: {bg: "black/50", _dark: {bg: "black/60"}},
  blur: {bg: "black/50", backdropFilter: "blur(12px)", _dark: {bg: "black/60"}},
};

const AlertDialogBackdrop = ({variant = "opaque", ...props}: AlertDialogBackdropProps) => {
  const variantProps = backdropVariantStyles[variant] ?? {};

  return (
    <ChakraDialog.Backdrop
      data-slot="alert-dialog-backdrop"
      pos="fixed"
      inset="0"
      zIndex="50"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      w="full"
      css={{
        height: "var(--visual-viewport-height)",
        "&[data-entering='true']": {
          animation: "fadeIn 150ms ease-out",
          willChange: "opacity",
        },
        "&[data-exiting='true']": {
          animation: "fadeOut 100ms ease-out",
          willChange: "opacity",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&[data-entering='true'], &[data-exiting='true']": {
            animation: "none",
          },
        },
      }}
      {...variantProps}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Content
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogContentProps extends ComponentPropsWithRef<typeof ChakraDialog.Content> {
  size?: AlertDialogSize;
  placement?: AlertDialogPlacement;
}

const AlertDialogContent = ({
  children,
  size = "md",
  placement = "auto",
  ...props
}: AlertDialogContentProps) => {
  const sizeProps = sizeStyles[size] ?? {};

  return (
    <ChakraDialog.Content
      data-slot="alert-dialog-content"
      data-placement={placement}
      overflow="hidden"
      {...sizeProps}
      css={{
        "&[data-placement='auto']": {
          marginTop: "auto",
        },
        "@media (min-width: 640px)": {
          "&[data-placement='auto']": {
            marginTop: "auto",
            marginBottom: "auto",
          },
        },
        "&[data-placement='center']": {
          marginTop: "auto",
          marginBottom: "auto",
        },
        "&[data-placement='bottom']": {
          marginTop: "auto",
        },
        "&[data-placement='top']": {
          marginTop: 0,
        },
      }}
      role="alertdialog"
      {...props}
    >
      {children}
    </ChakraDialog.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Header
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogHeaderProps extends ComponentPropsWithRef<typeof ChakraDialog.Header> {}

const AlertDialogHeader = ({children, ...props}: AlertDialogHeaderProps) => {
  return (
    <ChakraDialog.Header
      data-slot="alert-dialog-header"
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
 * AlertDialog Heading
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogHeadingProps extends ComponentPropsWithRef<typeof ChakraDialog.Title> {}

const AlertDialogHeading = ({children, ...props}: AlertDialogHeadingProps) => {
  return (
    <ChakraDialog.Title
      data-slot="alert-dialog-heading"
      verticalAlign="middle"
      textStyle="md"
      fontWeight="medium"
      color="fg"
      {...props}
    >
      {children}
    </ChakraDialog.Title>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Body
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogBodyProps extends ComponentPropsWithRef<typeof ChakraDialog.Body> {}

const AlertDialogBody = ({children, ...props}: AlertDialogBodyProps) => {
  return (
    <ChakraDialog.Body
      data-slot="alert-dialog-body"
      minH="0"
      flex="1"
      textStyle="sm"
      lineHeight="1.43"
      color="fg.muted"
      my="0"
      overflowY="auto"
      css={{
        WebkitOverflowScrolling: "touch",
        "[data-slot='alert-dialog-header'] + &": {
          marginTop: "0.5rem",
        },
      }}
      {...props}
    >
      {children}
    </ChakraDialog.Body>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Footer
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogFooterProps extends ComponentPropsWithRef<typeof ChakraDialog.Footer> {}

const AlertDialogFooter = ({children, ...props}: AlertDialogFooterProps) => {
  return (
    <ChakraDialog.Footer
      data-slot="alert-dialog-footer"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="flex-end"
      gap="2"
      mt="0"
      css={{
        "[data-slot='alert-dialog-header'] + &": {
          marginTop: "1.25rem",
        },
        "[data-slot='alert-dialog-body'] + &": {
          marginTop: "1.25rem",
        },
      }}
      {...props}
    >
      {children}
    </ChakraDialog.Footer>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Icon
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogIconProps extends ComponentPropsWithRef<"div"> {
  /**
   * The semantic status of the icon, affects background color and default icon
   * @default "danger"
   */
  status?: AlertDialogStatus;
}

const AlertDialogIcon = ({
  children,
  status = "danger",
  ...props
}: AlertDialogIconProps) => {
  const getDefaultIcon = () => {
    switch (status) {
      case "default":
        return <InfoIcon data-slot="alert-dialog-default-icon" />;
      case "accent":
        return <InfoIcon data-slot="alert-dialog-default-icon" />;
      case "success":
        return <SuccessIcon data-slot="alert-dialog-default-icon" />;
      case "warning":
        return <WarningIcon data-slot="alert-dialog-default-icon" />;
      case "danger":
        return <DangerIcon data-slot="alert-dialog-default-icon" />;
      default:
        return <DangerIcon data-slot="alert-dialog-default-icon" />;
    }
  };

  const variantProps = iconVariantStyles[status] ?? {};

  return (
    <Box
      data-slot="alert-dialog-icon"
      data-status={status}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSize="10"
      flexShrink={0}
      rounded="full"
      userSelect="none"
      {...variantProps}
      css={{
        "& [data-slot='alert-dialog-default-icon']": {
          boxSizing: "content-box",
          width: "1.25rem",
          height: "1.25rem",
        },
      }}
      {...props}
    >
      {children ?? getDefaultIcon()}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog Close Trigger
 * -----------------------------------------------------------------------------------------------*/
interface AlertDialogCloseTriggerProps extends ComponentPropsWithRef<typeof ChakraDialog.CloseTrigger> {
  children?: ReactNode;
}

const AlertDialogCloseTrigger = ({children, ...rest}: AlertDialogCloseTriggerProps) => {
  return (
    <ChakraDialog.CloseTrigger
      data-slot="alert-dialog-close-trigger"
      pos="absolute"
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
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogIcon,
  AlertDialogCloseTrigger,
};

export type {
  AlertDialogRootProps,
  AlertDialogTriggerProps,
  AlertDialogBackdropProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogHeadingProps,
  AlertDialogBodyProps,
  AlertDialogFooterProps,
  AlertDialogIconProps,
  AlertDialogCloseTriggerProps,
  AlertDialogStatus,
};

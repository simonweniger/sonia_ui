"use client";

import type {SystemStyleObject} from "@chakra-ui/react";
import type {ComponentPropsWithRef, ReactNode} from "react";

import {Box, Dialog as ChakraDialog} from "@chakra-ui/react";
import React from "react";

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
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      cursor="pointer"
      data-slot="alert-dialog-trigger"
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
      alignItems="center"
      data-slot="alert-dialog-backdrop"
      display="flex"
      flexDir="row"
      inset="0"
      justifyContent="center"
      pos="fixed"
      w="full"
      zIndex="50"
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
  placement = "auto",
  size = "md",
  ...props
}: AlertDialogContentProps) => {
  const sizeProps = sizeStyles[size] ?? {};

  return (
    <ChakraDialog.Content
      data-placement={placement}
      data-slot="alert-dialog-content"
      overflow="hidden"
      {...sizeProps}
      role="alertdialog"
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
      color="fg"
      data-slot="alert-dialog-heading"
      fontWeight="medium"
      textStyle="md"
      verticalAlign="middle"
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
      color="fg.muted"
      data-slot="alert-dialog-body"
      flex="1"
      lineHeight="1.43"
      minH="0"
      my="0"
      overflowY="auto"
      textStyle="sm"
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
      alignItems="center"
      data-slot="alert-dialog-footer"
      display="flex"
      flexDir="row"
      gap="2"
      justifyContent="flex-end"
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

const AlertDialogIcon = ({children, status = "danger", ...props}: AlertDialogIconProps) => {
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
      alignItems="center"
      boxSize="10"
      data-slot="alert-dialog-icon"
      data-status={status}
      display="flex"
      flexShrink={0}
      justifyContent="center"
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
interface AlertDialogCloseTriggerProps extends ComponentPropsWithRef<
  typeof ChakraDialog.CloseTrigger
> {
  children?: ReactNode;
}

const AlertDialogCloseTrigger = ({children, ...rest}: AlertDialogCloseTriggerProps) => {
  return (
    <ChakraDialog.CloseTrigger
      data-slot="alert-dialog-close-trigger"
      pos="absolute"
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

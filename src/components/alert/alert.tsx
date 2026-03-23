"use client";

import type {SystemStyleObject} from "@chakra-ui/react";
import type {ComponentPropsWithRef} from "react";

import {Box, Alert as ChakraAlert} from "@chakra-ui/react";
import React from "react";

/* ------------------------------------------------------------------------------------------------
 * Variant Style Maps
 * --------------------------------------------------------------------------------------------- */
type AlertVariant = "default" | "accent" | "success" | "warning" | "danger";

const indicatorVariantStyles: Record<AlertVariant, SystemStyleObject> = {
  default: {color: "fg"},
  accent: {color: "accent"},
  success: {color: "success"},
  warning: {color: "warning"},
  danger: {color: "danger"},
};

const titleVariantStyles: Record<AlertVariant, SystemStyleObject> = {
  default: {color: "fg"},
  accent: {color: "accent"},
  success: {color: "success"},
  warning: {color: "warning"},
  danger: {color: "danger"},
};

/* ------------------------------------------------------------------------------------------------
 * Alert Context
 * --------------------------------------------------------------------------------------------- */
const AlertContext = React.createContext<{variant: AlertVariant}>({variant: "default"});

/* ------------------------------------------------------------------------------------------------
 * Alert Root
 * --------------------------------------------------------------------------------------------- */
interface AlertRootProps extends Omit<ComponentPropsWithRef<typeof ChakraAlert.Root>, "variant"> {
  variant?: AlertVariant;
}

const AlertRoot = ({children, variant = "default", ...rest}: AlertRootProps) => {
  return (
    <AlertContext.Provider value={{variant}}>
      <ChakraAlert.Root
        alignItems="flex-start"
        bg="surface"
        data-slot="alert-root"
        display="flex"
        flexDir="row"
        gap="4"
        justifyContent="flex-start"
        px="4"
        py="3"
        rounded="3xl"
        shadow="surface"
        w="full"
        {...rest}
      >
        {children}
      </ChakraAlert.Root>
    </AlertContext.Provider>
  );
};

/* ------------------------------------------------------------------------------------------------
 * Alert Indicator
 * --------------------------------------------------------------------------------------------- */
type AlertIndicatorProps = ComponentPropsWithRef<typeof ChakraAlert.Indicator>;

const AlertIndicator = ({children, ...rest}: AlertIndicatorProps) => {
  const {variant} = React.useContext(AlertContext);
  const variantProps = indicatorVariantStyles[variant] ?? {};

  return (
    <ChakraAlert.Indicator
      alignItems="center"
      data-slot="alert-indicator"
      display="flex"
      justifyContent="center"
      p="1"
      userSelect="none"
      {...variantProps}
      css={{
        "& [data-slot='alert-default-icon']": {
          boxSizing: "content-box",
          width: "1rem",
          height: "1rem",
        },
      }}
      {...rest}
    >
      {children}
    </ChakraAlert.Indicator>
  );
};

/* ------------------------------------------------------------------------------------------------
 * Alert Content
 * --------------------------------------------------------------------------------------------- */
type AlertContentProps = ComponentPropsWithRef<"div">;

const AlertContent = ({children, ...rest}: AlertContentProps) => {
  return (
    <Box
      alignItems="flex-start"
      data-slot="alert-content"
      display="flex"
      flexDir="column"
      flexGrow={1}
      h="full"
      {...rest}
    >
      {children}
    </Box>
  );
};

/* ------------------------------------------------------------------------------------------------
 * Alert Title
 * --------------------------------------------------------------------------------------------- */
type AlertTitleProps = ComponentPropsWithRef<typeof ChakraAlert.Title>;

const AlertTitle = ({children, ...rest}: AlertTitleProps) => {
  const {variant} = React.useContext(AlertContext);
  const variantProps = titleVariantStyles[variant] ?? {};

  return (
    <ChakraAlert.Title
      data-slot="alert-title"
      fontWeight="medium"
      lineHeight="1.5rem"
      textStyle="sm"
      {...variantProps}
      {...rest}
    >
      {children}
    </ChakraAlert.Title>
  );
};

/* ------------------------------------------------------------------------------------------------
 * Alert Description
 * --------------------------------------------------------------------------------------------- */
type AlertDescriptionProps = ComponentPropsWithRef<typeof ChakraAlert.Description>;

const AlertDescription = ({children, ...rest}: AlertDescriptionProps) => {
  return (
    <ChakraAlert.Description
      color="fg.muted"
      data-slot="alert-description"
      textStyle="sm"
      {...rest}
    >
      {children}
    </ChakraAlert.Description>
  );
};

/* ------------------------------------------------------------------------------------------------
 * Exports
 * --------------------------------------------------------------------------------------------- */
export {AlertRoot, AlertIndicator, AlertContent, AlertTitle, AlertDescription};

export type {
  AlertRootProps,
  AlertIndicatorProps,
  AlertContentProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertVariant,
};

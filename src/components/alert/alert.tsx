"use client";

import type {ComponentPropsWithRef} from "react";
import type {SystemStyleObject} from "@chakra-ui/react";

import {Alert as ChakraAlert, Box} from "@chakra-ui/react";
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
        data-slot="alert-root"
        display="flex"
        w="full"
        flexDir="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        gap="4"
        rounded="3xl"
        bg="surface"
        px="4"
        py="3"
        shadow="surface"
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
      data-slot="alert-indicator"
      display="flex"
      alignItems="center"
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
      data-slot="alert-content"
      display="flex"
      h="full"
      flexGrow={1}
      flexDir="column"
      alignItems="flex-start"
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
      textStyle="sm"
      lineHeight="1.5rem"
      fontWeight="medium"
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
      data-slot="alert-description"
      textStyle="sm"
      color="fg.muted"
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

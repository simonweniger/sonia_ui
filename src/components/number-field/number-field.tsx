"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, NumberInput} from "@chakra-ui/react";
import React, {createContext, useContext} from "react";

import {IconMinus, IconPlus} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * NumberField Context
 * -----------------------------------------------------------------------------------------------*/
type NumberFieldContextValue = {
  variant?: string;
};

const NumberFieldContext = createContext<NumberFieldContextValue>({});

/* -------------------------------------------------------------------------------------------------
 * Style definitions
 * -----------------------------------------------------------------------------------------------*/
const groupBaseStyles = {
  display: "inline-flex",
  height: "9",
  alignItems: "center",
  overflow: "hidden",
  rounded: "xl",
  bg: "white",
  color: "fg",
  shadow: "field",
  outline: "none",
  borderWidth: "0px",
  borderColor: "transparent",
  fontSize: "sm",
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease",
  _hover: {
    bg: "bg.muted",
    borderColor: "border.emphasized",
  },
  _focusWithin: {
    ring: "2px",
    ringColor: "accent",
    borderColor: "accent",
    bg: "bg.subtle",
  },
  _invalid: {
    outline: "1px solid",
    outlineColor: "danger",
    bg: "bg.subtle",
  },
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none" as const,
  },
} as const;

const groupVariantStyles = {
  primary: {
    borderWidth: "1px",
    borderColor: "border",
    shadow: "field",
  },
  secondary: {
    bg: "bg.muted",
    shadow: "none",
    borderColor: "transparent",
    _hover: {
      bg: "bg.emphasized",
    },
    _focusWithin: {
      bg: "bg.muted",
    },
    _invalid: {
      outline: "1px solid",
      outlineColor: "danger",
      bg: "bg.muted",
    },
  },
} as const;

const inputStyles = {
  flex: "1",
  rounded: "none",
  borderWidth: "0",
  bg: "transparent",
  px: "3",
  py: "2",
  fontSize: {base: "md", sm: "sm"},
  fontVariantNumeric: "tabular-nums",
  shadow: "none",
  outline: "none",
  _focus: {outline: "none"},
  _focusVisible: {outline: "none"},
} as const;

const stepperButtonBaseStyles = {
  display: "flex",
  height: "100%",
  width: "10",
  alignItems: "center",
  justifyContent: "center",
  rounded: "none",
  bg: "transparent",
  color: "fg",
  outline: "none",
  borderWidth: "0px",
  borderColor: "transparent",
  cursor: "pointer",
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease",
  _active: {
    bg: "blackAlpha.100",
    transform: "scale(0.97)",
  },
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none" as const,
  },
} as const;

/* -------------------------------------------------------------------------------------------------
 * NumberField Root
 * -----------------------------------------------------------------------------------------------*/
interface NumberFieldRootProps
  extends Omit<ComponentPropsWithRef<typeof NumberInput.Root>, "variant"> {
  fullWidth?: boolean;
  variant?: string;
}

const NumberFieldRoot = ({children, fullWidth, variant, ...props}: NumberFieldRootProps) => {
  return (
    <NumberFieldContext value={{variant}}>
      <NumberInput.Root
        data-slot="number-field"
        display="flex"
        flexDirection="column"
        gap="1"
        width={fullWidth ? "100%" : undefined}
        {...props}
      >
        {children}
      </NumberInput.Root>
    </NumberFieldContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * NumberField Group
 * -----------------------------------------------------------------------------------------------*/
interface NumberFieldGroupProps extends ComponentPropsWithRef<"div"> {
  fullWidth?: boolean;
}

const NumberFieldGroup = ({children, fullWidth, ...props}: NumberFieldGroupProps) => {
  const {variant} = useContext(NumberFieldContext);
  const resolvedVariantStyles =
    variant === "secondary" ? groupVariantStyles.secondary : groupVariantStyles.primary;

  return (
    <Box
      data-slot="number-field-group"
      {...groupBaseStyles}
      {...resolvedVariantStyles}
      width={fullWidth ? "100%" : undefined}
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * NumberField Input
 * -----------------------------------------------------------------------------------------------*/
interface NumberFieldInputProps extends ComponentPropsWithRef<typeof NumberInput.Input> {}

const NumberFieldInput = ({...props}: NumberFieldInputProps) => {
  return <NumberInput.Input data-slot="number-field-input" {...inputStyles} {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * NumberField Increment Button
 * -----------------------------------------------------------------------------------------------*/
interface NumberFieldIncrementButtonProps
  extends ComponentPropsWithRef<typeof NumberInput.IncrementTrigger> {}

const NumberFieldIncrementButton = ({
  children,
  ...props
}: NumberFieldIncrementButtonProps) => {
  return (
    <NumberInput.IncrementTrigger
      data-slot="number-field-increment-button"
      {...stepperButtonBaseStyles}
      roundedLeft="none"
      roundedRight="xl"
      borderLeftWidth="1px"
      borderLeftColor="blackAlpha.100"
      {...props}
    >
      {children ?? <IconPlus data-slot="number-field-increment-button-icon" />}
    </NumberInput.IncrementTrigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * NumberField Decrement Button
 * -----------------------------------------------------------------------------------------------*/
interface NumberFieldDecrementButtonProps
  extends ComponentPropsWithRef<typeof NumberInput.DecrementTrigger> {}

const NumberFieldDecrementButton = ({
  children,
  ...props
}: NumberFieldDecrementButtonProps) => {
  return (
    <NumberInput.DecrementTrigger
      data-slot="number-field-decrement-button"
      {...stepperButtonBaseStyles}
      roundedLeft="xl"
      roundedRight="none"
      borderRightWidth="1px"
      borderRightColor="blackAlpha.100"
      {...props}
    >
      {children ?? <IconMinus data-slot="number-field-decrement-button-icon" />}
    </NumberInput.DecrementTrigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  NumberFieldRoot,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrementButton,
  NumberFieldDecrementButton,
};

export type {
  NumberFieldRootProps,
  NumberFieldGroupProps,
  NumberFieldInputProps,
  NumberFieldIncrementButtonProps,
  NumberFieldDecrementButtonProps,
};

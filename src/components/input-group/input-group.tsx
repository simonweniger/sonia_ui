"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Group, Input, Textarea} from "@chakra-ui/react";
import React, {createContext, useContext} from "react";

import {TextFieldContext} from "../textfield";

/* -------------------------------------------------------------------------------------------------
 * InputGroup Context
 * -----------------------------------------------------------------------------------------------*/
type InputGroupContext = {
  variant?: string;
  fullWidth?: boolean;
};

const InputGroupContext = createContext<InputGroupContext>({});

/* -------------------------------------------------------------------------------------------------
 * Style definitions
 * -----------------------------------------------------------------------------------------------*/
const groupBaseStyles = {
  display: "inline-flex",
  minHeight: "9",
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
  shadow: "none",
  outline: "none",
  _placeholder: {color: "fg.muted"},
  _focus: {outline: "none"},
  _focusVisible: {outline: "none"},
} as const;

const prefixStyles = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  roundedLeft: "xl",
  roundedRight: "none",
  bg: "transparent",
  px: "3",
  color: "fg.muted",
  borderWidth: "0px",
  borderRightWidth: "0px",
  borderColor: "transparent",
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease",
} as const;

const suffixStyles = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  roundedLeft: "none",
  roundedRight: "xl",
  bg: "transparent",
  px: "3",
  color: "fg.muted",
  borderWidth: "0px",
  borderLeftWidth: "0px",
  borderColor: "transparent",
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease",
} as const;

/* -------------------------------------------------------------------------------------------------
 * InputGroup Root
 * -----------------------------------------------------------------------------------------------*/
interface InputGroupRootProps extends Omit<ComponentPropsWithRef<"div">, "size"> {
  fullWidth?: boolean;
  variant?: string;
}

const InputGroupRoot = ({
  children,
  fullWidth,
  onClick,
  variant,
  ...props
}: InputGroupRootProps) => {
  const textFieldContext = useContext(TextFieldContext);
  const resolvedVariant = variant ?? textFieldContext?.variant;
  const groupRef = React.useRef<HTMLDivElement>(null);
  const resolvedVariantStyles =
    resolvedVariant === "secondary" ? groupVariantStyles.secondary : groupVariantStyles.primary;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const input = groupRef.current?.querySelector("input");

    if (input && target !== input && !input.contains(target)) {
      input.focus();
    }

    onClick?.(e);
  };

  return (
    <InputGroupContext value={{variant: resolvedVariant, fullWidth}}>
      <Group
        {...props}
        ref={groupRef}
        data-slot="input-group"
        data-variant={resolvedVariant}
        data-full-width={fullWidth || undefined}
        {...groupBaseStyles}
        {...resolvedVariantStyles}
        width={fullWidth ? "100%" : undefined}
        onClick={handleClick}
      >
        {children}
      </Group>
    </InputGroupContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * InputGroup Input
 * -----------------------------------------------------------------------------------------------*/
interface InputGroupInputProps extends Omit<ComponentPropsWithRef<typeof Input>, "size"> {}

const InputGroupInput = ({...props}: InputGroupInputProps) => {
  return <Input data-slot="input-group-input" {...inputStyles} {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * InputGroup Prefix
 * -----------------------------------------------------------------------------------------------*/
interface InputGroupPrefixProps extends ComponentPropsWithRef<"div"> {}

const InputGroupPrefix = ({children, ...props}: InputGroupPrefixProps) => {
  return (
    <Box data-slot="input-group-prefix" {...prefixStyles} {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * InputGroup TextArea
 * -----------------------------------------------------------------------------------------------*/
interface InputGroupTextAreaProps extends ComponentPropsWithRef<"textarea"> {}

const InputGroupTextArea = ({...props}: InputGroupTextAreaProps) => {
  return (
    <Textarea
      data-slot="input-group-textarea"
      {...inputStyles}
      minHeight="38px"
      resize="vertical"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * InputGroup Suffix
 * -----------------------------------------------------------------------------------------------*/
interface InputGroupSuffixProps extends ComponentPropsWithRef<"div"> {}

const InputGroupSuffix = ({children, ...props}: InputGroupSuffixProps) => {
  return (
    <Box data-slot="input-group-suffix" {...suffixStyles} {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {InputGroupRoot, InputGroupInput, InputGroupTextArea, InputGroupPrefix, InputGroupSuffix};

export type {
  InputGroupRootProps,
  InputGroupInputProps,
  InputGroupTextAreaProps,
  InputGroupPrefixProps,
  InputGroupSuffixProps,
};

"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Input as ChakraInput, InputGroup} from "@chakra-ui/react";
import React, {createContext, useContext} from "react";

import {CloseButton} from "../close-button";
import {IconSearch} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * SearchField Context
 * -----------------------------------------------------------------------------------------------*/
type SearchFieldContextValue = {
  variant?: string;
};

const SearchFieldContext = createContext<SearchFieldContextValue>({});

/* -------------------------------------------------------------------------------------------------
 * Style definitions
 * -----------------------------------------------------------------------------------------------*/
const groupBaseStyles = {
  position: "relative" as const,
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
  _focus: {outline: "none"},
  _focusVisible: {outline: "none"},
} as const;

/* -------------------------------------------------------------------------------------------------
 * SearchField Root
 * -----------------------------------------------------------------------------------------------*/
interface SearchFieldRootProps extends ComponentPropsWithRef<"div"> {
  fullWidth?: boolean;
  variant?: string;
}

const SearchFieldRoot = ({children, fullWidth, variant, ...props}: SearchFieldRootProps) => {
  return (
    <SearchFieldContext value={{variant}}>
      <Box
        data-slot="search-field"
        display="flex"
        flexDirection="column"
        gap="1"
        width={fullWidth ? "100%" : undefined}
        {...props}
      >
        {children}
      </Box>
    </SearchFieldContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * SearchField Group
 * -----------------------------------------------------------------------------------------------*/
interface SearchFieldGroupProps extends ComponentPropsWithRef<typeof InputGroup> {
  fullWidth?: boolean;
}

const SearchFieldGroup = ({children, fullWidth, ...props}: SearchFieldGroupProps) => {
  const {variant} = useContext(SearchFieldContext);
  const resolvedVariantStyles =
    variant === "secondary" ? groupVariantStyles.secondary : groupVariantStyles.primary;

  return (
    <InputGroup
      data-slot="search-field-group"
      {...groupBaseStyles}
      {...resolvedVariantStyles}
      width={fullWidth ? "100%" : undefined}
      {...props}
    >
      {children}
    </InputGroup>
  );
};

/* -------------------------------------------------------------------------------------------------
 * SearchField Input
 * -----------------------------------------------------------------------------------------------*/
interface SearchFieldInputProps extends ComponentPropsWithRef<typeof ChakraInput> {}

const SearchFieldInput = ({...props}: SearchFieldInputProps) => {
  return (
    <ChakraInput
      type="search"
      data-slot="search-field-input"
      {...inputStyles}
      css={{
        "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
          WebkitAppearance: "none",
          appearance: "none",
        },
      }}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * SearchField Search Icon
 * -----------------------------------------------------------------------------------------------*/
interface SearchFieldSearchIconProps extends ComponentPropsWithRef<"svg"> {
  children?: React.ReactNode;
}

const SearchFieldSearchIcon = ({children, ...props}: SearchFieldSearchIconProps) => {
  if (children && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{
        "data-slot"?: string;
      }>,
      {
        ...props,
        "data-slot": "search-field-search-icon",
      },
    );
  }

  return <IconSearch data-slot="search-field-search-icon" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * SearchField Clear Button
 * -----------------------------------------------------------------------------------------------*/
interface SearchFieldClearButtonProps extends ComponentPropsWithRef<typeof CloseButton> {}

const SearchFieldClearButton = ({...props}: SearchFieldClearButtonProps) => {
  return (
    <CloseButton
      data-slot="search-field-clear-button"
      size="sm"
      mr="2"
      flexShrink={0}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  SearchFieldRoot,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldSearchIcon,
  SearchFieldClearButton,
};

export type {
  SearchFieldRootProps,
  SearchFieldGroupProps,
  SearchFieldInputProps,
  SearchFieldSearchIconProps,
  SearchFieldClearButtonProps,
};

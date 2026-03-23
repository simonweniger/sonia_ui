"use client";

import type {ComponentPropsWithRef} from "react";

import {DatePicker} from "@ark-ui/react";
import {Box, Group} from "@chakra-ui/react";
import React, {createContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * DateInputGroup Context
 * -----------------------------------------------------------------------------------------------*/
type DateInputGroupContextValue = {
  variant?: string;
  fullWidth?: boolean;
};

const DateInputGroupContext = createContext<DateInputGroupContextValue>({});

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

const segmentStyles = {
  display: "inline-block",
  rounded: "md",
  px: "0.5",
  textAlign: "end" as const,
  whiteSpace: "nowrap" as const,
  outline: "none",
} as const;

/* -------------------------------------------------------------------------------------------------
 * DateInputGroup Root
 * -----------------------------------------------------------------------------------------------*/
interface DateInputGroupRootProps extends ComponentPropsWithRef<"div"> {
  fullWidth?: boolean;
  variant?: string;
}

const DateInputGroupRoot = ({
  children,
  className,
  fullWidth,
  variant,
  ...props
}: DateInputGroupRootProps) => {
  const resolvedVariantStyles =
    variant === "secondary" ? groupVariantStyles.secondary : groupVariantStyles.primary;

  return (
    <DateInputGroupContext value={{fullWidth, variant}}>
      <Group
        className={className}
        data-slot="date-input-group"
        {...groupBaseStyles}
        {...resolvedVariantStyles}
        width={fullWidth ? "100%" : undefined}
        {...props}
      >
        {children}
      </Group>
    </DateInputGroupContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * DateInputGroup Prefix
 * -----------------------------------------------------------------------------------------------*/
interface DateInputGroupPrefixProps extends ComponentPropsWithRef<"div"> {}

const DateInputGroupPrefix = ({children, className, ...props}: DateInputGroupPrefixProps) => {
  return (
    <Box
      alignItems="center"
      className={className}
      color="fg.muted"
      data-slot="date-input-group-prefix"
      display="flex"
      flexShrink={0}
      ml="3"
      pointerEvents="none"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * DateInputGroup Input
 * -----------------------------------------------------------------------------------------------*/
interface DateInputGroupInputProps extends ComponentPropsWithRef<typeof DatePicker.Input> {}

const DateInputGroupInput = ({className, ...props}: DateInputGroupInputProps) => {
  return (
    <DatePicker.Input
      className={className}
      data-slot="date-input-group-input"
      style={{
        display: "flex",
        flex: "1",
        cursor: "text",
        alignItems: "center",
        gap: "1px",
        borderRadius: "0",
        borderWidth: "0",
        backgroundColor: "transparent",
        paddingInline: "0.75rem",
        paddingBlock: "0.5rem",
        boxShadow: "none",
        outline: "none",
      }}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * DateInputGroup Segment
 * -----------------------------------------------------------------------------------------------*/
interface DateInputGroupSegmentProps extends ComponentPropsWithRef<"span"> {
  segment?: Record<string, unknown>;
  className?: string;
}

const DateInputGroupSegment = ({className, segment, ...props}: DateInputGroupSegmentProps) => {
  return (
    <Box
      as="span"
      className={className}
      data-slot="date-input-group-segment"
      {...segmentStyles}
      _focus={{
        bg: "accent.subtle",
        color: "accent.fg",
      }}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * DateInputGroup InputContainer
 * -----------------------------------------------------------------------------------------------*/
interface DateInputGroupInputContainerProps extends ComponentPropsWithRef<"div"> {}

const DateInputGroupInputContainer = ({
  children,
  className,
  ...props
}: DateInputGroupInputContainerProps) => {
  return (
    <Box
      alignItems="center"
      className={className}
      data-slot="date-input-group-input-container"
      display="flex"
      flex="1"
      overflowX="auto"
      overflowY="clip"
      width="fit-content"
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {display: "none"},
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * DateInputGroup Suffix
 * -----------------------------------------------------------------------------------------------*/
interface DateInputGroupSuffixProps extends ComponentPropsWithRef<"div"> {}

const DateInputGroupSuffix = ({children, className, ...props}: DateInputGroupSuffixProps) => {
  return (
    <Box
      alignItems="center"
      className={className}
      color="fg.muted"
      data-slot="date-input-group-suffix"
      display="flex"
      flexShrink={0}
      mr="3"
      pointerEvents="none"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  DateInputGroupRoot,
  DateInputGroupInput,
  DateInputGroupInputContainer,
  DateInputGroupSegment,
  DateInputGroupPrefix,
  DateInputGroupSuffix,
};

export type {
  DateInputGroupRootProps,
  DateInputGroupInputProps,
  DateInputGroupInputContainerProps,
  DateInputGroupSegmentProps,
  DateInputGroupPrefixProps,
  DateInputGroupSuffixProps,
};

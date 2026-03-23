"use client";

import type {ComponentPropsWithRef, ReactNode} from "react";

import {Combobox} from "@ark-ui/react";
import {Box} from "@chakra-ui/react";
import React, {createContext} from "react";

import {IconChevronDown} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * ComboBox Context
 * -----------------------------------------------------------------------------------------------*/
type ComboBoxContext = {
  isOpen?: boolean;
};

const ComboBoxContext = createContext<ComboBoxContext>({});

/* -------------------------------------------------------------------------------------------------
 * ComboBox Root
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxRootProps extends ComponentPropsWithRef<typeof Combobox.Root> {
  className?: string;
}

const ComboBoxRoot = ({children, className, ...props}: ComboBoxRootProps) => {
  return (
    <Combobox.Root
      className={className}
      data-slot="combo-box"
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        ...props.style,
      }}
    >
      {children}
    </Combobox.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ComboBox InputGroup
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxInputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const ComboBoxInputGroup = ({children, className, ...props}: ComboBoxInputGroupProps) => {
  return (
    <Box
      alignItems="center"
      className={className}
      data-slot="combo-box-input-group"
      display="inline-flex"
      isolation="isolate"
      position="relative"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ComboBox Trigger
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxTriggerProps extends ComponentPropsWithRef<typeof Combobox.Trigger> {
  className?: string;
  children?: ReactNode;
}

const ComboBoxTrigger = ({children, className, ...rest}: ComboBoxTriggerProps) => {
  return (
    <Combobox.Trigger
      className={className}
      data-slot="combo-box-trigger"
      {...rest}
      style={{
        position: "absolute",
        top: "50%",
        right: 0,
        display: "flex",
        height: "100%",
        flexShrink: 0,
        transform: "translateY(-50%)",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "0.5rem",
        color: "var(--color-field-placeholder)",
        transition: "all 150ms",
        border: "none",
        backgroundColor: "transparent",
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        ...rest.style,
      }}
    >
      {children ?? <IconChevronDown data-slot="combo-box-trigger-default-icon" />}
    </Combobox.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ComboBox Popover
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxPopoverProps extends ComponentPropsWithRef<typeof Combobox.Content> {
  children: React.ReactNode;
}

const ComboBoxPopover = ({children, className, ...props}: ComboBoxPopoverProps) => {
  return (
    <Combobox.Content
      className={className}
      data-slot="combo-box-popover"
      {...props}
      style={{
        minWidth: "var(--trigger-width)",
        transformOrigin: "var(--trigger-anchor-point)",
        scrollPaddingBlock: "0.25rem",
        overflowY: "auto",
        overscrollBehavior: "contain",
        borderRadius: "1.5rem",
        backgroundColor: "var(--color-overlay)",
        padding: 0,
        fontSize: "0.875rem",
        boxShadow: "var(--shadow-overlay)",
        ...props.style,
      }}
    >
      {children}
    </Combobox.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ComboBoxRoot, ComboBoxInputGroup, ComboBoxTrigger, ComboBoxPopover};

export type {
  ComboBoxRootProps,
  ComboBoxInputGroupProps,
  ComboBoxTriggerProps,
  ComboBoxPopoverProps,
};

"use client";

import type {ComponentPropsWithRef, RefObject} from "react";

import {Combobox} from "@ark-ui/react";
import React, {createContext, useContext, useRef} from "react";

import {CloseIcon, IconChevronDown} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Context
 * -----------------------------------------------------------------------------------------------*/
type AutocompleteVariant = "primary" | "secondary";

type AutocompleteContextValue = {
  variant: AutocompleteVariant;
  onClear?: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  clearButtonRef: RefObject<HTMLButtonElement | null>;
};

const AutocompleteContext = createContext<AutocompleteContextValue>({
  variant: "primary",
  triggerRef: {current: null} as RefObject<HTMLElement | null>,
  clearButtonRef: {current: null} as RefObject<HTMLButtonElement | null>,
});

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Root
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteRootProps extends ComponentPropsWithRef<typeof Combobox.Root> {
  className?: string;
  onClear?: () => void;
  variant?: AutocompleteVariant;
  fullWidth?: boolean;
}

const AutocompleteRoot = ({
  children,
  className,
  onClear,
  variant = "primary",
  fullWidth,
  ...props
}: AutocompleteRootProps) => {
  const triggerRef = useRef<HTMLElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AutocompleteContext value={{variant, triggerRef, clearButtonRef, onClear}}>
      <Combobox.Root
        className={className}
        data-slot="autocomplete"
        data-variant={variant}
        {...props}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          ...(fullWidth ? {width: "100%"} : {}),
          ...props.style,
        }}
      >
        {children}
      </Combobox.Root>
    </AutocompleteContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Trigger
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteTriggerProps extends ComponentPropsWithRef<typeof Combobox.Control> {}

const AutocompleteTrigger = ({children, className, ...props}: AutocompleteTriggerProps) => {
  const {variant} = useContext(AutocompleteContext);

  const isSecondary = variant === "secondary";

  return (
    <Combobox.Control
      className={className}
      data-slot="autocomplete-trigger"
      {...props}
      style={{
        position: "relative",
        isolation: "isolate",
        display: "inline-flex",
        alignItems: "center",
        minHeight: "2.25rem",
        borderRadius: "var(--chakra-radii-xl, 0.75rem)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--chakra-colors-border, hsl(0 0% 89%))",
        backgroundColor: isSecondary
          ? "var(--chakra-colors-bg-muted, hsl(0 0% 96%))"
          : "var(--chakra-colors-bg, #fff)",
        paddingInline: "0.75rem",
        paddingBlock: "0.5rem",
        fontSize: "0.875rem",
        color: "var(--chakra-colors-fg, hsl(0 0% 9%))",
        boxShadow: isSecondary ? "none" : undefined,
        outline: "none",
        userSelect: "none",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
        transition:
          "background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease-out",
        ...props.style,
      }}
    >
      {children}
    </Combobox.Control>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Value (Input)
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteValueProps extends ComponentPropsWithRef<typeof Combobox.Input> {}

const AutocompleteValue = ({className, ...props}: AutocompleteValueProps) => {
  return (
    <Combobox.Input
      className={className}
      data-slot="autocomplete-value"
      {...props}
      style={{
        flex: 1,
        textAlign: "left",
        fontSize: "0.875rem",
        color: "currentColor",
        overflowWrap: "break-word",
        background: "transparent",
        border: "none",
        outline: "none",
        padding: 0,
        margin: 0,
        width: "100%",
        minWidth: 0,
        fontFamily: "inherit",
        ...props.style,
      }}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Indicator
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteIndicatorProps {
  children?: React.ReactNode;
  className?: string;
}

const AutocompleteIndicator = ({children, className}: AutocompleteIndicatorProps) => {
  const indicatorStyle: React.CSSProperties = {
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    color: "var(--chakra-colors-fg-muted, hsl(0 0% 45%))",
    transition: "transform 150ms ease",
    cursor: "pointer",
    marginLeft: "auto",
    pointerEvents: "none",
  };

  if (children && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{
        className?: string;
        style?: React.CSSProperties;
        "data-slot"?: "autocomplete-indicator";
      }>,
      {
        className,
        style: indicatorStyle,
        "data-slot": "autocomplete-indicator",
      },
    );
  }

  return (
    <Combobox.Trigger
      style={indicatorStyle}
      data-slot="autocomplete-indicator"
    >
      <IconChevronDown
        className={className}
        data-slot="autocomplete-default-indicator"
        style={{
          width: "1rem",
          height: "1rem",
        }}
      />
    </Combobox.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Popover
 * -----------------------------------------------------------------------------------------------*/
interface AutocompletePopoverProps extends ComponentPropsWithRef<typeof Combobox.Content> {
  children: React.ReactNode;
}

const AutocompletePopover = ({children, className, ...props}: AutocompletePopoverProps) => {
  return (
    <Combobox.Positioner>
      <Combobox.Content
        className={className}
        data-slot="autocomplete-popover"
        {...props}
        style={{
          overflowY: "auto",
          overscrollBehavior: "contain",
          borderRadius: "1.5rem",
          backgroundColor: "var(--chakra-colors-overlay, #fff)",
          padding: 0,
          fontSize: "0.875rem",
          boxShadow:
            "var(--chakra-shadows-overlay, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1))",
          scrollPaddingBlock: "0.25rem",
          ...props.style,
        }}
      >
        {children}
      </Combobox.Content>
    </Combobox.Positioner>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Item Group
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteItemGroupProps extends ComponentPropsWithRef<typeof Combobox.ItemGroup> {}

const AutocompleteItemGroup = ({children, className, ...props}: AutocompleteItemGroupProps) => {
  return (
    <Combobox.ItemGroup
      className={className}
      data-slot="autocomplete-item-group"
      {...props}
      style={{
        padding: "0.375rem",
        outline: "none",
        ...props.style,
      }}
    >
      {children}
    </Combobox.ItemGroup>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Item
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteItemProps extends ComponentPropsWithRef<typeof Combobox.Item> {}

const AutocompleteItem = ({children, className, ...props}: AutocompleteItemProps) => {
  return (
    <Combobox.Item
      className={className}
      data-slot="autocomplete-item"
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        paddingInline: "0.625rem",
        paddingBlock: "0.375rem",
        borderRadius: "calc(1.5rem - 0.375rem)",
        fontSize: "0.875rem",
        color: "var(--chakra-colors-fg, hsl(0 0% 9%))",
        cursor: "pointer",
        outline: "none",
        userSelect: "none",
        transition: "background-color 100ms ease",
        ...props.style,
      }}
    >
      {children}
    </Combobox.Item>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Item Text
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteItemTextProps extends ComponentPropsWithRef<typeof Combobox.ItemText> {}

const AutocompleteItemText = ({children, className, ...props}: AutocompleteItemTextProps) => {
  return (
    <Combobox.ItemText
      className={className}
      data-slot="autocomplete-item-text"
      {...props}
      style={{
        flex: 1,
        pointerEvents: "none",
        ...props.style,
      }}
    >
      {children}
    </Combobox.ItemText>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Item Indicator
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteItemIndicatorProps
  extends ComponentPropsWithRef<typeof Combobox.ItemIndicator> {}

const AutocompleteItemIndicator = ({
  children,
  className,
  ...props
}: AutocompleteItemIndicatorProps) => {
  return (
    <Combobox.ItemIndicator
      className={className}
      data-slot="autocomplete-item-indicator"
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...props.style,
      }}
    >
      {children}
    </Combobox.ItemIndicator>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Filter
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteFilterProps extends ComponentPropsWithRef<"div"> {}

const AutocompleteFilter = ({children, ...props}: AutocompleteFilterProps) => {
  return (
    <div
      data-slot="autocomplete-filter"
      {...props}
      style={{
        paddingInline: "0.75rem",
        paddingBlock: "0.25rem",
        outline: "none",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Clear Button
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteClearButtonProps extends ComponentPropsWithRef<typeof Combobox.ClearTrigger> {}

const AutocompleteClearButton = ({className, onClick, ...props}: AutocompleteClearButtonProps) => {
  const {onClear} = useContext(AutocompleteContext);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClear?.();
    onClick?.(e);
  };

  return (
    <Combobox.ClearTrigger
      className={className}
      data-slot="autocomplete-clear-button"
      onClick={handleClick}
      {...props}
      style={{
        position: "relative",
        isolation: "isolate",
        display: "inline-flex",
        width: "1.25rem",
        height: "1.25rem",
        flexShrink: 0,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.75rem",
        padding: "0.25rem",
        color: "var(--chakra-colors-fg-muted, hsl(0 0% 45%))",
        cursor: "pointer",
        userSelect: "none",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        transition: "opacity 150ms ease, background-color 100ms ease, transform 100ms ease",
        ...props.style,
      }}
    >
      <CloseIcon
        data-slot="autocomplete-clear-button-icon"
        style={{width: "0.875rem", height: "0.875rem"}}
      />
    </Combobox.ClearTrigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  AutocompleteRoot,
  AutocompleteTrigger,
  AutocompleteValue,
  AutocompleteIndicator,
  AutocompletePopover,
  AutocompleteFilter,
  AutocompleteClearButton,
  AutocompleteItem,
  AutocompleteItemText,
  AutocompleteItemIndicator,
  AutocompleteItemGroup,
};

export type {
  AutocompleteRootProps,
  AutocompleteTriggerProps,
  AutocompleteValueProps,
  AutocompleteIndicatorProps,
  AutocompletePopoverProps,
  AutocompleteFilterProps,
  AutocompleteClearButtonProps,
  AutocompleteItemProps,
  AutocompleteItemTextProps,
  AutocompleteItemIndicatorProps,
  AutocompleteItemGroupProps,
};

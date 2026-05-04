"use client";

import type {ComponentPropsWithRef} from "react";

import {DatePicker as ArkDatePicker} from "@ark-ui/react";
import {Box} from "@chakra-ui/react";
import React, {createContext, useContext, useEffect, useRef} from "react";

import {IconCalendar} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * DatePicker Context
 * -----------------------------------------------------------------------------------------------*/
type DatePickerContextValue = {
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const DatePickerContext = createContext<DatePickerContextValue>({
  triggerRef: {current: null},
});

/* -------------------------------------------------------------------------------------------------
 * DatePicker Root
 * -----------------------------------------------------------------------------------------------*/
interface DatePickerRootProps extends ComponentPropsWithRef<typeof ArkDatePicker.Root> {
  isRequired?: boolean;
}

const DatePickerRoot = ({
  children,
  className,
  isRequired,
  onOpenChange,
  ...props
}: DatePickerRootProps) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const shouldRestoreFocusToTriggerRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (!event.metaKey && !event.ctrlKey && !event.altKey) {
        shouldRestoreFocusToTriggerRef.current = true;
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown, true);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown, true);
    };
  }, [isOpen]);

  const handleOpenChange = (details: {open: boolean}) => {
    setIsOpen(details.open);

    if (!details.open && shouldRestoreFocusToTriggerRef.current) {
      window.requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    }

    shouldRestoreFocusToTriggerRef.current = false;
    onOpenChange?.(details);
  };

  return (
    <DatePickerContext value={{triggerRef}}>
      <ArkDatePicker.Root
        data-required={isRequired ? "true" : undefined}
        data-slot="date-picker"
        {...props}
        className={className}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "0.25rem",
          ...props.style,
        }}
        onOpenChange={handleOpenChange}
      >
        {children}
      </ArkDatePicker.Root>
    </DatePickerContext>
  );
};

DatePickerRoot.displayName = "DatePicker";

/* -------------------------------------------------------------------------------------------------
 * DatePicker Trigger
 * -----------------------------------------------------------------------------------------------*/
interface DatePickerTriggerProps extends ComponentPropsWithRef<typeof ArkDatePicker.Trigger> {}

const DatePickerTrigger = React.forwardRef<HTMLButtonElement, DatePickerTriggerProps>(
  ({children, className, ...props}, ref) => {
    const {triggerRef} = useContext(DatePickerContext);

    const mergedRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        triggerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      },
      [triggerRef, ref],
    );

    return (
      <ArkDatePicker.Trigger
        ref={mergedRef}
        className={className}
        data-slot="date-picker-trigger"
        {...props}
        style={{
          display: "inline-flex",
          width: "100%",
          alignItems: "center",
          borderRadius: "var(--radius-xl)",
          padding: "0.25rem",
          fontSize: "0.875rem",
          cursor: "pointer",
          transition: "box-shadow 150ms",
          WebkitTapHighlightColor: "transparent",
          ...props.style,
        }}
      >
        {children}
      </ArkDatePicker.Trigger>
    );
  },
);

DatePickerTrigger.displayName = "DatePicker.Trigger";

/* -------------------------------------------------------------------------------------------------
 * DatePicker Trigger Indicator
 * -----------------------------------------------------------------------------------------------*/
interface DatePickerTriggerIndicatorProps extends Omit<ComponentPropsWithRef<"span">, "children"> {
  children?: React.ReactNode;
}

const DatePickerTriggerIndicator = ({
  children,
  className,
  ...props
}: DatePickerTriggerIndicatorProps) => {
  return (
    <Box
      alignItems="center"
      aria-hidden="true"
      as="span"
      className={className}
      color="fg.muted"
      data-slot="date-picker-trigger-indicator"
      display="inline-flex"
      h="4"
      justifyContent="center"
      w="4"
      {...props}
    >
      {children || <IconCalendar />}
    </Box>
  );
};

DatePickerTriggerIndicator.displayName = "DatePicker.TriggerIndicator";

/* -------------------------------------------------------------------------------------------------
 * DatePicker Popover
 * -----------------------------------------------------------------------------------------------*/
interface DatePickerPopoverProps extends ComponentPropsWithRef<typeof ArkDatePicker.Content> {
  children: React.ReactNode;
  placement?: string;
}

const DatePickerPopover = ({
  children,
  className,
  placement: _placement = "bottom",
  ...props
}: DatePickerPopoverProps) => {
  return (
    <ArkDatePicker.Positioner>
      <ArkDatePicker.Content
        className={className}
        data-slot="date-picker-popover"
        {...props}
        style={{
          maxWidth: "var(--trigger-width)",
          transformOrigin: "var(--trigger-anchor-point)",
          overflowX: "hidden",
          overflowY: "auto",
          overscrollBehavior: "contain",
          backgroundColor: "var(--color-overlay)",
          padding: "0.75rem",
          boxShadow: "var(--shadow-overlay)",
          borderRadius: "calc(var(--radius) * 2.5)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          ...props.style,
        }}
      >
        {children}
      </ArkDatePicker.Content>
    </ArkDatePicker.Positioner>
  );
};

DatePickerPopover.displayName = "DatePicker.Popover";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {DatePickerRoot, DatePickerTrigger, DatePickerTriggerIndicator, DatePickerPopover};

export type {
  DatePickerRootProps,
  DatePickerTriggerProps,
  DatePickerTriggerIndicatorProps,
  DatePickerPopoverProps,
};

"use client";

import type {ComponentPropsWithRef} from "react";

import {DatePicker as ArkDatePicker} from "@ark-ui/react";
import {Box} from "@chakra-ui/react";
import React, {createContext, useContext, useEffect, useRef} from "react";

import {IconCalendar} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Context
 * -----------------------------------------------------------------------------------------------*/
type DateRangePickerContextValue = {
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const DateRangePickerContext = createContext<DateRangePickerContextValue>({
  triggerRef: {current: null},
});

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Root
 * -----------------------------------------------------------------------------------------------*/
interface DateRangePickerRootProps extends ComponentPropsWithRef<typeof ArkDatePicker.Root> {
  isRequired?: boolean;
}

const DateRangePickerRoot = ({
  children,
  className,
  isRequired,
  onOpenChange,
  ...props
}: DateRangePickerRootProps) => {
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
    <DateRangePickerContext value={{triggerRef}}>
      <ArkDatePicker.Root
        data-required={isRequired ? "true" : undefined}
        data-slot="date-range-picker"
        selectionMode="range"
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
    </DateRangePickerContext>
  );
};

DateRangePickerRoot.displayName = "DateRangePicker";

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Trigger
 * -----------------------------------------------------------------------------------------------*/
interface DateRangePickerTriggerProps extends ComponentPropsWithRef<typeof ArkDatePicker.Trigger> {}

const DateRangePickerTrigger = React.forwardRef<HTMLButtonElement, DateRangePickerTriggerProps>(
  ({children, className, ...props}, ref) => {
    const {triggerRef} = useContext(DateRangePickerContext);

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
        data-slot="date-range-picker-trigger"
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

DateRangePickerTrigger.displayName = "DateRangePicker.Trigger";

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Trigger Indicator
 * -----------------------------------------------------------------------------------------------*/
interface DateRangePickerTriggerIndicatorProps extends Omit<
  ComponentPropsWithRef<"span">,
  "children"
> {
  children?: React.ReactNode;
}

const DateRangePickerTriggerIndicator = ({
  children,
  className,
  ...props
}: DateRangePickerTriggerIndicatorProps) => {
  return (
    <Box
      alignItems="center"
      aria-hidden="true"
      as="span"
      className={className}
      color="fg.muted"
      data-slot="date-range-picker-trigger-indicator"
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

DateRangePickerTriggerIndicator.displayName = "DateRangePicker.TriggerIndicator";

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Range Separator
 * -----------------------------------------------------------------------------------------------*/
interface DateRangePickerRangeSeparatorProps extends ComponentPropsWithRef<"span"> {}

const DateRangePickerRangeSeparator = ({
  children = " - ",
  className,
  ...props
}: DateRangePickerRangeSeparatorProps) => {
  return (
    <Box
      aria-hidden="true"
      as="span"
      className={className}
      color="fg.muted"
      data-slot="date-range-picker-range-separator"
      px="1"
      userSelect="none"
      {...props}
    >
      {children}
    </Box>
  );
};

DateRangePickerRangeSeparator.displayName = "DateRangePicker.RangeSeparator";

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Popover
 * -----------------------------------------------------------------------------------------------*/
interface DateRangePickerPopoverProps extends ComponentPropsWithRef<typeof ArkDatePicker.Content> {
  children: React.ReactNode;
  placement?: string;
}

const DateRangePickerPopover = ({
  children,
  className,
  placement = "bottom",
  ...props
}: DateRangePickerPopoverProps) => {
  return (
    <ArkDatePicker.Positioner>
      <ArkDatePicker.Content
        className={className}
        data-slot="date-range-picker-popover"
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

DateRangePickerPopover.displayName = "DateRangePicker.Popover";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  DateRangePickerRoot,
  DateRangePickerTrigger,
  DateRangePickerTriggerIndicator,
  DateRangePickerRangeSeparator,
  DateRangePickerPopover,
};

export type {
  DateRangePickerRootProps,
  DateRangePickerTriggerProps,
  DateRangePickerTriggerIndicatorProps,
  DateRangePickerRangeSeparatorProps,
  DateRangePickerPopoverProps,
};

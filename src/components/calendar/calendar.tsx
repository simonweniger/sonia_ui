"use client";

import type {DateValue} from "@internationalized/date";
import type {ComponentPropsWithRef} from "react";

import {DatePicker} from "@ark-ui/react";
import {Box} from "@chakra-ui/react";
import {type CalendarIdentifier, CalendarDate, DateFormatter, createCalendar} from "@internationalized/date";
import React, {createContext} from "react";

import {getGregorianYearOffset} from "../../utils/calendar";
import {
  YearPickerContext,
  YearPickerStateContext,
} from "../calendar-year-picker/year-picker-context";
import {IconChevronLeft, IconChevronRight} from "../icons";

/* -------------------------------------------------------------------------------------------------
| * Calendar Context
| * -----------------------------------------------------------------------------------------------*/
interface CalendarContextValue {
  locale: string;
}

const CalendarContext = createContext<CalendarContextValue>({locale: "en-US"});

/* -------------------------------------------------------------------------------------------------
| * Calendar Root
| * -----------------------------------------------------------------------------------------------*/
interface CalendarRootProps extends ComponentPropsWithRef<typeof DatePicker.Root> {
  isYearPickerOpen?: boolean;
  onYearPickerOpenChange?: (isYearPickerOpen: boolean) => void;
  defaultYearPickerOpen?: boolean;
  locale?: string;
  minValue?: DateValue;
  maxValue?: DateValue;
}

function CalendarRoot({
  children,
  className,
  defaultYearPickerOpen: defaultYearPickerOpenProp = false,
  isYearPickerOpen: isYearPickerOpenProp,
  locale: localeProp = "en-US",
  maxValue: maxValueProp,
  minValue: minValueProp,
  onYearPickerOpenChange: onYearPickerOpenChangeProp,
  ...rest
}: CalendarRootProps) {
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const [isYearPickerOpen, setIsYearPickerOpen] = React.useState(
    isYearPickerOpenProp ?? defaultYearPickerOpenProp,
  );

  React.useEffect(() => {
    if (isYearPickerOpenProp !== undefined) {
      setIsYearPickerOpen(isYearPickerOpenProp);
    }
  }, [isYearPickerOpenProp]);

  const handleYearPickerOpenChange = React.useCallback(
    (open: boolean) => {
      setIsYearPickerOpen(open);
      onYearPickerOpenChangeProp?.(open);
    },
    [onYearPickerOpenChangeProp],
  );

  const calendarProp = React.useMemo(() => {
    const calendarIdentifier = new DateFormatter(localeProp).resolvedOptions().calendar as CalendarIdentifier;
    return createCalendar(calendarIdentifier);
  }, [localeProp]);

  const gregorianYearOffset = React.useMemo(
    () => getGregorianYearOffset(calendarProp.identifier),
    [calendarProp.identifier],
  );

  const minDate = minValueProp
    ? undefined
    : new CalendarDate(1900 + gregorianYearOffset, 1, 1);
  const maxDate = maxValueProp
    ? undefined
    : new CalendarDate(2099 + gregorianYearOffset, 12, 31);

  // Build a year-picker state context value from the Ark DatePicker
  const yearPickerStateValue = React.useMemo(() => {
    const now = new Date();
    const focusedDate = new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
    return {
      focusedDate,
      setFocusedDate: (_value: DateValue) => {},
      timeZone: "UTC",
      minValue: minValueProp ?? null,
      maxValue: maxValueProp ?? null,
    };
  }, [minValueProp, maxValueProp]);

  return (
    <YearPickerContext
      value={{
        calendarGridSlot: "calendar-grid",
        isYearPickerOpen,
        setIsYearPickerOpen: handleYearPickerOpenChange,
        calendarRef,
      }}
    >
      <CalendarContext value={{locale: localeProp}}>
        <YearPickerStateContext value={yearPickerStateValue}>
          <DatePicker.Root
            ref={calendarRef}
            data-slot="calendar"
            open
            closeOnSelect={false}
            locale={localeProp}
            min={minDate as ComponentPropsWithRef<typeof DatePicker.Root>["min"]}
            max={maxDate as ComponentPropsWithRef<typeof DatePicker.Root>["max"]}
            {...rest}
            className={className}
            style={{
              width: "15.75rem",
              maxWidth: "100%",
              containerType: "inline-size",
              position: "relative",
              ...rest.style,
            }}
          >
            <DatePicker.Content
              data-slot="calendar-content-wrapper"
              style={{
                position: "static",
                boxShadow: "none",
                background: "transparent",
                border: "none",
                padding: 0,
              }}
            >
              {children}
            </DatePicker.Content>
          </DatePicker.Root>
        </YearPickerStateContext>
      </CalendarContext>
    </YearPickerContext>
  );
}

CalendarRoot.displayName = "Calendar";

/* -------------------------------------------------------------------------------------------------
| * Calendar Header
| * -----------------------------------------------------------------------------------------------*/
interface CalendarHeaderProps extends ComponentPropsWithRef<"header"> {
  className?: string;
}

const CalendarHeader = ({children, className, ...props}: CalendarHeaderProps) => {
  return (
    <Box
      as="header"
      className={className}
      data-slot="calendar-header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="0.5"
      pb="4"
      {...props}
    >
      {children}
    </Box>
  );
};

CalendarHeader.displayName = "Calendar.Header";

/* -------------------------------------------------------------------------------------------------
| * Calendar Heading
| * -----------------------------------------------------------------------------------------------*/
interface CalendarHeadingProps extends ComponentPropsWithRef<"div"> {}

const CalendarHeading = ({className, ...props}: CalendarHeadingProps) => {
  return (
    <DatePicker.ViewControl
      data-slot="calendar-heading"
      className={className}
      {...props}
      style={{
        flex: 1,
        fontSize: "0.875rem",
        fontWeight: 500,
        ...props.style,
      }}
    >
      <DatePicker.RangeText />
    </DatePicker.ViewControl>
  );
};

CalendarHeading.displayName = "Calendar.Heading";

/* -------------------------------------------------------------------------------------------------
| * Calendar Nav Button
| * -----------------------------------------------------------------------------------------------*/
interface CalendarNavButtonProps extends ComponentPropsWithRef<"button"> {
  slot?: "previous" | "next";
}

const CalendarNavButton = ({children, className, slot, ...props}: CalendarNavButtonProps) => {
  const navButtonStyle: React.CSSProperties = {
    display: "flex",
    width: "1.5rem",
    height: "1.5rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    color: "var(--color-accent)",
    cursor: "pointer",
    willChange: "scale",
    transition: "transform 250ms, background-color 100ms, box-shadow 100ms, opacity 150ms",
  };

  if (slot === "previous") {
    return (
      <DatePicker.PrevTrigger
        data-slot="calendar-nav-button"
        className={className}
        {...props}
        style={{...navButtonStyle, ...props.style}}
      >
        {children || (
          <IconChevronLeft data-slot="calendar-nav-button-icon" />
        )}
      </DatePicker.PrevTrigger>
    );
  }

  return (
    <DatePicker.NextTrigger
      data-slot="calendar-nav-button"
      className={className}
      {...props}
      style={{...navButtonStyle, ...props.style}}
    >
      {children || (
        <IconChevronRight data-slot="calendar-nav-button-icon" />
      )}
    </DatePicker.NextTrigger>
  );
};

CalendarNavButton.displayName = "Calendar.NavButton";

/* -------------------------------------------------------------------------------------------------
| * Calendar Grid
| * -----------------------------------------------------------------------------------------------*/
interface CalendarGridProps extends ComponentPropsWithRef<"table"> {}

const CalendarGrid = ({
  children,
  className,
  ...props
}: CalendarGridProps) => {
  return (
    <DatePicker.Table
      data-slot="calendar-grid"
      className={className}
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        width: "100%",
        ...props.style,
      }}
    >
      {children}
    </DatePicker.Table>
  );
};

CalendarGrid.displayName = "Calendar.Grid";

/* -------------------------------------------------------------------------------------------------
| * Calendar Grid Header
| * -----------------------------------------------------------------------------------------------*/
interface CalendarGridHeaderProps extends ComponentPropsWithRef<"thead"> {}

const CalendarGridHeader = ({className, ...props}: CalendarGridHeaderProps) => {
  return (
    <DatePicker.TableHead
      data-slot="calendar-grid-header"
      className={className}
      {...props}
      style={{
        display: "contents",
        ...props.style,
      }}
    />
  );
};

CalendarGridHeader.displayName = "Calendar.GridHeader";

/* -------------------------------------------------------------------------------------------------
| * Calendar Grid Body
| * -----------------------------------------------------------------------------------------------*/
interface CalendarGridBodyProps extends ComponentPropsWithRef<"tbody"> {}

const CalendarGridBody = ({className, ...props}: CalendarGridBodyProps) => {
  return (
    <DatePicker.TableBody
      data-slot="calendar-grid-body"
      className={className}
      {...props}
      style={{
        display: "contents",
        ...props.style,
      }}
    />
  );
};

CalendarGridBody.displayName = "Calendar.GridBody";

/* -------------------------------------------------------------------------------------------------
| * Calendar Header Cell
| * -----------------------------------------------------------------------------------------------*/
interface CalendarHeaderCellProps extends ComponentPropsWithRef<"th"> {}

const CalendarHeaderCell = ({className, ...props}: CalendarHeaderCellProps) => {
  return (
    <DatePicker.TableHeader
      data-slot="calendar-header-cell"
      className={className}
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "0.5rem",
        fontSize: "0.75rem",
        fontWeight: 500,
        color: "var(--color-muted)",
        ...props.style,
      }}
    />
  );
};

CalendarHeaderCell.displayName = "Calendar.HeaderCell";

/* -------------------------------------------------------------------------------------------------
| * Calendar Cell
| * -----------------------------------------------------------------------------------------------*/
interface CalendarCellProps extends ComponentPropsWithRef<typeof DatePicker.TableCellTrigger> {}

const CalendarCell = ({children, className, ...props}: CalendarCellProps) => {
  return (
    <DatePicker.TableCellTrigger
      data-slot="calendar-cell"
      className={className}
      {...props}
      style={{
        position: "relative",
        display: "flex",
        aspectRatio: "1",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "1.5rem",
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: 500,
        outline: "none",
        cursor: "pointer",
        willChange: "scale",
        transition: "transform 250ms, box-shadow 100ms",
        WebkitTapHighlightColor: "transparent",
        ...props.style,
      }}
    >
      {children}
    </DatePicker.TableCellTrigger>
  );
};

CalendarCell.displayName = "Calendar.Cell";

/* -------------------------------------------------------------------------------------------------
| * Calendar Cell Indicator
| * -----------------------------------------------------------------------------------------------*/
interface CalendarCellIndicatorProps extends ComponentPropsWithRef<"span"> {}

const CalendarCellIndicator = ({className, ...props}: CalendarCellIndicatorProps) => {
  return (
    <Box
      as="span"
      aria-hidden="true"
      className={className}
      data-slot="calendar-cell-indicator"
      position="absolute"
      bottom="1"
      left="50%"
      w="3px"
      h="3px"
      transform="translateX(-50%)"
      rounded="full"
      bg="fg.muted"
      {...props}
    />
  );
};

CalendarCellIndicator.displayName = "Calendar.CellIndicator";

/* -------------------------------------------------------------------------------------------------
| * Exports
| * -----------------------------------------------------------------------------------------------*/
export {
  CalendarRoot,
  CalendarHeader,
  CalendarHeading,
  CalendarNavButton,
  CalendarGrid,
  CalendarGridHeader,
  CalendarGridBody,
  CalendarHeaderCell,
  CalendarCell,
  CalendarCellIndicator,
};
export type {
  CalendarRootProps,
  CalendarHeaderProps,
  CalendarHeadingProps,
  CalendarNavButtonProps,
  CalendarGridProps,
  CalendarGridHeaderProps,
  CalendarGridBodyProps,
  CalendarHeaderCellProps,
  CalendarCellProps,
  CalendarCellIndicatorProps,
};

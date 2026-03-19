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
| * RangeCalendar Context
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarContextValue {
  locale: string;
}

const RangeCalendarContext = createContext<RangeCalendarContextValue>({locale: "en-US"});

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Root
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarRootProps extends ComponentPropsWithRef<typeof DatePicker.Root> {
  isYearPickerOpen?: boolean;
  onYearPickerOpenChange?: (isYearPickerOpen: boolean) => void;
  defaultYearPickerOpen?: boolean;
  locale?: string;
  minValue?: DateValue;
  maxValue?: DateValue;
}

function RangeCalendarRoot({
  children,
  className,
  defaultYearPickerOpen: defaultYearPickerOpenProp = false,
  isYearPickerOpen: isYearPickerOpenProp,
  locale: localeProp = "en-US",
  maxValue: maxValueProp,
  minValue: minValueProp,
  onYearPickerOpenChange: onYearPickerOpenChangeProp,
  ...rest
}: RangeCalendarRootProps) {
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
        calendarGridSlot: "range-calendar-grid",
        isYearPickerOpen,
        setIsYearPickerOpen: handleYearPickerOpenChange,
        calendarRef,
      }}
    >
      <RangeCalendarContext value={{locale: localeProp}}>
        <YearPickerStateContext value={yearPickerStateValue}>
          <DatePicker.Root
            ref={calendarRef}
            data-slot="range-calendar"
            open
            closeOnSelect={false}
            selectionMode="range"
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
              data-slot="range-calendar-content-wrapper"
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
      </RangeCalendarContext>
    </YearPickerContext>
  );
}

RangeCalendarRoot.displayName = "RangeCalendar";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Header
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarHeaderProps extends ComponentPropsWithRef<"header"> {
  className?: string;
}

const RangeCalendarHeader = ({children, className, ...props}: RangeCalendarHeaderProps) => {
  return (
    <Box
      as="header"
      className={className}
      data-slot="range-calendar-header"
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

RangeCalendarHeader.displayName = "RangeCalendar.Header";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Heading
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarHeadingProps extends ComponentPropsWithRef<"div"> {}

const RangeCalendarHeading = ({className, ...props}: RangeCalendarHeadingProps) => {
  return (
    <DatePicker.ViewControl
      data-slot="range-calendar-heading"
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

RangeCalendarHeading.displayName = "RangeCalendar.Heading";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Nav Button
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarNavButtonProps extends ComponentPropsWithRef<"button"> {
  slot?: "previous" | "next";
}

const RangeCalendarNavButton = ({
  children,
  className,
  slot,
  ...props
}: RangeCalendarNavButtonProps) => {
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
        data-slot="range-calendar-nav-button"
        className={className}
        {...props}
        style={{...navButtonStyle, ...props.style}}
      >
        {children || (
          <IconChevronLeft data-slot="range-calendar-nav-button-icon" />
        )}
      </DatePicker.PrevTrigger>
    );
  }

  return (
    <DatePicker.NextTrigger
      data-slot="range-calendar-nav-button"
      className={className}
      {...props}
      style={{...navButtonStyle, ...props.style}}
    >
      {children || (
        <IconChevronRight data-slot="range-calendar-nav-button-icon" />
      )}
    </DatePicker.NextTrigger>
  );
};

RangeCalendarNavButton.displayName = "RangeCalendar.NavButton";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Grid
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarGridProps extends ComponentPropsWithRef<"table"> {}

const RangeCalendarGrid = ({
  children,
  className,
  ...props
}: RangeCalendarGridProps) => {
  return (
    <DatePicker.Table
      data-slot="range-calendar-grid"
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

RangeCalendarGrid.displayName = "RangeCalendar.Grid";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Grid Header
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarGridHeaderProps extends ComponentPropsWithRef<"thead"> {}

const RangeCalendarGridHeader = ({className, ...props}: RangeCalendarGridHeaderProps) => {
  return (
    <DatePicker.TableHead
      data-slot="range-calendar-grid-header"
      className={className}
      {...props}
      style={{
        display: "contents",
        ...props.style,
      }}
    />
  );
};

RangeCalendarGridHeader.displayName = "RangeCalendar.GridHeader";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Grid Body
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarGridBodyProps extends ComponentPropsWithRef<"tbody"> {}

const RangeCalendarGridBody = ({className, ...props}: RangeCalendarGridBodyProps) => {
  return (
    <DatePicker.TableBody
      data-slot="range-calendar-grid-body"
      className={className}
      {...props}
      style={{
        display: "contents",
        ...props.style,
      }}
    />
  );
};

RangeCalendarGridBody.displayName = "RangeCalendar.GridBody";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Header Cell
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarHeaderCellProps extends ComponentPropsWithRef<"th"> {}

const RangeCalendarHeaderCell = ({className, ...props}: RangeCalendarHeaderCellProps) => {
  return (
    <DatePicker.TableHeader
      data-slot="range-calendar-header-cell"
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

RangeCalendarHeaderCell.displayName = "RangeCalendar.HeaderCell";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Cell
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarCellProps extends ComponentPropsWithRef<typeof DatePicker.TableCellTrigger> {}

const RangeCalendarCell = ({children, className, ...props}: RangeCalendarCellProps) => {
  return (
    <DatePicker.TableCellTrigger
      data-slot="range-calendar-cell"
      className={className}
      {...props}
      style={{
        position: "relative",
        zIndex: 1,
        marginInline: 0,
        marginBlock: "2px",
        borderRadius: "9999px",
        padding: 0,
        outline: "none",
        cursor: "pointer",
        willChange: "background-color, border-color",
        transition: "box-shadow 100ms, border-color 100ms",
        ...props.style,
      }}
    >
      {children}
    </DatePicker.TableCellTrigger>
  );
};

RangeCalendarCell.displayName = "RangeCalendar.Cell";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Cell Indicator
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarCellIndicatorProps extends ComponentPropsWithRef<"span"> {}

const RangeCalendarCellIndicator = ({className, ...props}: RangeCalendarCellIndicatorProps) => {
  return (
    <Box
      as="span"
      aria-hidden="true"
      className={className}
      data-slot="range-calendar-cell-indicator"
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

RangeCalendarCellIndicator.displayName = "RangeCalendar.CellIndicator";

/* -------------------------------------------------------------------------------------------------
| * Exports
| * -----------------------------------------------------------------------------------------------*/
export {
  RangeCalendarRoot,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNavButton,
  RangeCalendarGrid,
  RangeCalendarGridHeader,
  RangeCalendarGridBody,
  RangeCalendarHeaderCell,
  RangeCalendarCell,
  RangeCalendarCellIndicator,
};
export type {
  RangeCalendarRootProps,
  RangeCalendarHeaderProps,
  RangeCalendarHeadingProps,
  RangeCalendarNavButtonProps,
  RangeCalendarGridProps,
  RangeCalendarGridHeaderProps,
  RangeCalendarGridBodyProps,
  RangeCalendarHeaderCellProps,
  RangeCalendarCellProps,
  RangeCalendarCellIndicatorProps,
};

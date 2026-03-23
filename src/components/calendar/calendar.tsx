"use client";

import type {CalendarIdentifier, DateValue} from "@internationalized/date";
import type {ComponentPropsWithRef} from "react";

import {CalendarDate, DateFormatter, createCalendar} from "@internationalized/date";

import {DatePicker} from "@ark-ui/react";
import {Box} from "@chakra-ui/react";
import React, {createContext, useInsertionEffect} from "react";

import {getGregorianYearOffset} from "../../utils/calendar";
import {
  YearPickerContext,
  YearPickerStateContext,
} from "../calendar-year-picker/year-picker-context";
import {IconChevronLeft, IconChevronRight} from "../icons";

/* -------------------------------------------------------------------------------------------------
| * Calendar Styles
| * -----------------------------------------------------------------------------------------------*/
const calendarCss = `
/* Grid layout — flatten HTML table elements for CSS Grid */
[data-slot="calendar-grid"] {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
}
[data-slot="calendar-grid"] thead,
[data-slot="calendar-grid"] tbody,
[data-slot="calendar-grid"] tr,
[data-slot="calendar-grid"] td {
  display: contents;
}
[data-slot="calendar-grid"][aria-readonly="true"] [data-slot="calendar-cell"] {
  pointer-events: none;
}

/* Nav button */
[data-slot="calendar-nav-button"] {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: var(--chakra-colors-accent);
  cursor: pointer;
  will-change: scale;
  transition: transform 250ms, background-color 100ms, box-shadow 100ms, opacity 150ms;
}
@media (hover: hover) {
  [data-slot="calendar-nav-button"]:hover {
    background: var(--chakra-colors-default);
  }
}
[data-slot="calendar-nav-button"]:active {
  transform: scale(0.95);
}
[data-slot="calendar-nav-button"]:focus-visible {
  outline: 2px solid var(--chakra-colors-accent);
  outline-offset: 2px;
}
[data-slot="calendar-nav-button"][data-disabled] {
  opacity: 0.5;
  pointer-events: none;
}

/* Cell — the clickable day trigger */
[data-slot="calendar-cell"] {
  position: relative;
  display: flex;
  aspect-ratio: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  will-change: scale;
  -webkit-tap-highlight-color: transparent;
  transition: transform 250ms, background-color 100ms, box-shadow 100ms;
}
[data-slot="calendar-cell"]:focus-visible {
  outline: 2px solid var(--chakra-colors-accent);
  outline-offset: 2px;
}
[data-slot="calendar-cell"][data-today] {
  color: var(--chakra-colors-accent);
}
[data-slot="calendar-cell"][data-selected] {
  background: var(--chakra-colors-accent);
  color: var(--chakra-colors-accent-contrast);
}
[data-slot="calendar-cell"]:active {
  transform: scale(0.95);
}
[data-slot="calendar-cell"]:active:not([data-selected]) {
  background: var(--chakra-colors-default);
}
[data-slot="calendar-cell"]:active[data-selected] {
  background: var(--chakra-colors-accent-hover);
}
@media (hover: hover) {
  [data-slot="calendar-cell"]:hover:not([data-selected]) {
    background: var(--chakra-colors-default);
  }
}
[data-slot="calendar-cell"][data-outside-range] {
  color: var(--chakra-colors-muted);
  opacity: 0.5;
}
[data-slot="calendar-cell"][data-selected][data-outside-range] {
  background: var(--chakra-colors-default);
}
[data-slot="calendar-cell"][data-unavailable] {
  opacity: 0.5;
  pointer-events: none;
}
[data-slot="calendar-cell"][data-disabled]:not([data-outside-range]) {
  opacity: 0.5;
  pointer-events: none;
  text-decoration: line-through;
}

/* Cell indicator — small dot below date */
[data-slot="calendar-cell-indicator"] {
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  width: 3px;
  height: 3px;
  transform: translateX(-50%);
  border-radius: 9999px;
  background: var(--chakra-colors-muted);
}
[data-selected] > [data-slot="calendar-cell-indicator"] {
  background: var(--chakra-colors-accent-contrast);
}
`;

let calendarCssInjected = false;

function useCalendarStyles() {
  useInsertionEffect(() => {
    if (calendarCssInjected) return;
    calendarCssInjected = true;
    const style = document.createElement("style");

    style.setAttribute("data-calendar-styles", "");
    style.textContent = calendarCss;
    document.head.appendChild(style);
  }, []);
}

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
  useCalendarStyles();
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
    const calendarIdentifier = new DateFormatter(localeProp).resolvedOptions()
      .calendar as CalendarIdentifier;

    return createCalendar(calendarIdentifier);
  }, [localeProp]);

  const gregorianYearOffset = React.useMemo(
    () => getGregorianYearOffset(calendarProp.identifier),
    [calendarProp.identifier],
  );

  const minDate = minValueProp ? undefined : new CalendarDate(1900 + gregorianYearOffset, 1, 1);
  const maxDate = maxValueProp ? undefined : new CalendarDate(2099 + gregorianYearOffset, 12, 31);

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
            open
            closeOnSelect={false}
            data-slot="calendar"
            locale={localeProp}
            max={maxDate as ComponentPropsWithRef<typeof DatePicker.Root>["max"]}
            min={minDate as ComponentPropsWithRef<typeof DatePicker.Root>["min"]}
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
      alignItems="center"
      as="header"
      className={className}
      data-slot="calendar-header"
      display="flex"
      justifyContent="space-between"
      pb="4"
      px="0.5"
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
      className={className}
      data-slot="calendar-heading"
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
  if (slot === "previous") {
    return (
      <DatePicker.PrevTrigger className={className} data-slot="calendar-nav-button" {...props}>
        {children || <IconChevronLeft data-slot="calendar-nav-button-icon" />}
      </DatePicker.PrevTrigger>
    );
  }

  return (
    <DatePicker.NextTrigger className={className} data-slot="calendar-nav-button" {...props}>
      {children || <IconChevronRight data-slot="calendar-nav-button-icon" />}
    </DatePicker.NextTrigger>
  );
};

CalendarNavButton.displayName = "Calendar.NavButton";

/* -------------------------------------------------------------------------------------------------
| * Calendar Grid
| * -----------------------------------------------------------------------------------------------*/
interface CalendarGridProps extends ComponentPropsWithRef<"table"> {}

const CalendarGrid = ({children, className, ...props}: CalendarGridProps) => {
  return (
    <DatePicker.Table className={className} data-slot="calendar-grid" {...props}>
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
  return <DatePicker.TableHead className={className} data-slot="calendar-grid-header" {...props} />;
};

CalendarGridHeader.displayName = "Calendar.GridHeader";

/* -------------------------------------------------------------------------------------------------
| * Calendar Grid Body
| * -----------------------------------------------------------------------------------------------*/
interface CalendarGridBodyProps extends ComponentPropsWithRef<"tbody"> {}

const CalendarGridBody = ({className, ...props}: CalendarGridBodyProps) => {
  return <DatePicker.TableBody className={className} data-slot="calendar-grid-body" {...props} />;
};

CalendarGridBody.displayName = "Calendar.GridBody";

/* -------------------------------------------------------------------------------------------------
| * Calendar Header Cell
| * -----------------------------------------------------------------------------------------------*/
interface CalendarHeaderCellProps extends ComponentPropsWithRef<"th"> {}

const CalendarHeaderCell = ({className, ...props}: CalendarHeaderCellProps) => {
  return (
    <DatePicker.TableHeader
      className={className}
      data-slot="calendar-header-cell"
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "0.5rem",
        fontSize: "0.75rem",
        fontWeight: 500,
        color: "var(--chakra-colors-muted)",
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
    <DatePicker.TableCellTrigger className={className} data-slot="calendar-cell" {...props}>
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
    <span aria-hidden="true" className={className} data-slot="calendar-cell-indicator" {...props} />
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

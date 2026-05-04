"use client";

import type {CalendarIdentifier, DateValue} from "@internationalized/date";
import type {ComponentPropsWithRef} from "react";

import {DatePicker} from "@ark-ui/react";
import {Box} from "@chakra-ui/react";
import {CalendarDate, DateFormatter, createCalendar} from "@internationalized/date";
import React, {createContext} from "react";

import {getGregorianYearOffset} from "../../utils/calendar";
import {
  YearPickerContext,
  YearPickerStateContext,
} from "../calendar-year-picker/year-picker-context";
import {IconChevronLeft, IconChevronRight} from "../icons";

/* -------------------------------------------------------------------------------------------------
| * Ark → YearPicker State Bridge
| * -----------------------------------------------------------------------------------------------*/
interface ArkYearPickerStateBridgeProps {
  children: React.ReactNode;
  minValue: DateValue;
  maxValue: DateValue;
}

const ArkYearPickerStateBridge = ({
  children,
  maxValue,
  minValue,
}: ArkYearPickerStateBridgeProps) => {
  return (
    <DatePicker.Context>
      {(api) => {
        // Ark's focusedValue is a plain {year,month,day} object without
        // @internationalized/date methods like .set(). Convert it so the
        // year picker can call focusedDate.set({year}).
        const arkFocused = api.focusedValue;
        const focusedDate = new CalendarDate(arkFocused.year, arkFocused.month, arkFocused.day);

        const yearPickerStateValue = {
          focusedDate,
          setFocusedDate: (value: DateValue) => {
            // Convert @internationalized/date DateValue to plain object for Ark
            api.setFocusedValue({
              year: value.year,
              month: value.month,
              day: value.day,
            } as Parameters<typeof api.setFocusedValue>[0]);
          },
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          minValue,
          maxValue,
        };

        return (
          <YearPickerStateContext value={yearPickerStateValue}>{children}</YearPickerStateContext>
        );
      }}
    </DatePicker.Context>
  );
};

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
    const calendarIdentifier = new DateFormatter(localeProp).resolvedOptions()
      .calendar as CalendarIdentifier;

    return createCalendar(calendarIdentifier);
  }, [localeProp]);

  const gregorianYearOffset = React.useMemo(
    () => getGregorianYearOffset(calendarProp.identifier),
    [calendarProp.identifier],
  );

  const minDate = minValueProp ?? new CalendarDate(1900 + gregorianYearOffset, 1, 1);
  const maxDate = maxValueProp ?? new CalendarDate(2099 + gregorianYearOffset, 12, 31);

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
        <DatePicker.Root
          ref={calendarRef}
          open
          closeOnSelect={false}
          data-slot="range-calendar"
          locale={localeProp}
          selectionMode="range"
          max={
            {year: maxDate.year, month: maxDate.month, day: maxDate.day} as ComponentPropsWithRef<
              typeof DatePicker.Root
            >["max"]
          }
          min={
            {year: minDate.year, month: minDate.month, day: minDate.day} as ComponentPropsWithRef<
              typeof DatePicker.Root
            >["min"]
          }
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
            <ArkYearPickerStateBridge maxValue={maxDate} minValue={minDate}>
              {children}
            </ArkYearPickerStateBridge>
          </DatePicker.Content>
        </DatePicker.Root>
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
      alignItems="center"
      as="header"
      className={className}
      data-slot="range-calendar-header"
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

RangeCalendarHeader.displayName = "RangeCalendar.Header";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Heading
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarHeadingProps extends ComponentPropsWithRef<"div"> {}

const RangeCalendarHeading = ({className, ...props}: RangeCalendarHeadingProps) => {
  return (
    <DatePicker.ViewControl
      className={className}
      data-slot="range-calendar-heading"
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
        className={className}
        data-slot="range-calendar-nav-button"
        {...props}
        style={{...navButtonStyle, ...props.style}}
      >
        {children || <IconChevronLeft data-slot="range-calendar-nav-button-icon" />}
      </DatePicker.PrevTrigger>
    );
  }

  return (
    <DatePicker.NextTrigger
      className={className}
      data-slot="range-calendar-nav-button"
      {...props}
      style={{...navButtonStyle, ...props.style}}
    >
      {children || <IconChevronRight data-slot="range-calendar-nav-button-icon" />}
    </DatePicker.NextTrigger>
  );
};

RangeCalendarNavButton.displayName = "RangeCalendar.NavButton";

/* -------------------------------------------------------------------------------------------------
| * RangeCalendar Grid
| * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarGridProps extends ComponentPropsWithRef<"table"> {}

const RangeCalendarGrid = ({children, className, ...props}: RangeCalendarGridProps) => {
  return (
    <DatePicker.Table
      className={className}
      data-slot="range-calendar-grid"
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
      className={className}
      data-slot="range-calendar-grid-header"
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
      className={className}
      data-slot="range-calendar-grid-body"
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
      className={className}
      data-slot="range-calendar-header-cell"
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
interface RangeCalendarCellProps extends ComponentPropsWithRef<
  typeof DatePicker.TableCellTrigger
> {}

const RangeCalendarCell = ({children, className, ...props}: RangeCalendarCellProps) => {
  return (
    <DatePicker.TableCellTrigger
      className={className}
      data-slot="range-calendar-cell"
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
      aria-hidden="true"
      as="span"
      bg="fg.muted"
      bottom="1"
      className={className}
      data-slot="range-calendar-cell-indicator"
      h="3px"
      left="50%"
      position="absolute"
      rounded="full"
      transform="translateX(-50%)"
      w="3px"
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

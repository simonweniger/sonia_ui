"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Grid, chakra} from "@chakra-ui/react";
import React from "react";

import {getYearRange} from "../../utils/calendar";
import {IconChevronRight} from "../icons";

import {useYearPicker, useYearPickerState} from "./year-picker-context";

/* -------------------------------------------------------------------------------------------------
 * CalendarYearPickerTrigger
 *
 * Replaces Calendar.Heading. Shows "Month Year" with a chevron that rotates
 * when the year picker is open. Toggles isYearPickerOpen from CalendarBaseContext.
 * -----------------------------------------------------------------------------------------------*/
interface CalendarYearPickerTriggerProps {
  children: React.ReactNode | ((values: CalendarYearPickerTriggerRenderProps) => React.ReactNode);
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

interface CalendarYearPickerTriggerRenderProps {
  isOpen: boolean;
  monthYear: string;
  toggle: () => void;
}

interface CalendarYearPickerTriggerHeadingProps
  extends Omit<ComponentPropsWithRef<"span">, "children"> {
  children?: React.ReactNode | ((values: CalendarYearPickerTriggerRenderProps) => React.ReactNode);
}

interface CalendarYearPickerTriggerIndicatorProps
  extends Omit<ComponentPropsWithRef<"span">, "children"> {
  children?: React.ReactNode | ((values: CalendarYearPickerTriggerRenderProps) => React.ReactNode);
}

interface CalendarYearPickerTriggerContextValue extends CalendarYearPickerTriggerRenderProps {}

const CalendarYearPickerTriggerContext =
  React.createContext<CalendarYearPickerTriggerContextValue | null>(null);

function useCalendarYearPickerTriggerContext(): CalendarYearPickerTriggerContextValue {
  const context = React.useContext(CalendarYearPickerTriggerContext);

  if (!context) {
    throw new Error(
      "CalendarYearPicker trigger components must be used within <CalendarYearPicker.Trigger>.",
    );
  }

  return context;
}

const CalendarYearPickerTrigger = ({
  children,
  className,
  onKeyDown,
  onClick,
}: CalendarYearPickerTriggerProps) => {
  const {isYearPickerOpen, setIsYearPickerOpen} = useYearPicker();
  const state = useYearPickerState();

  // Format "Month Year" from the focused date
  const focusedDate = state.focusedDate;
  const monthYear = React.useMemo(() => {
    try {
      const date = new Date(focusedDate.year, focusedDate.month - 1, focusedDate.day);
      return new Intl.DateTimeFormat("en-US", {month: "long", year: "numeric"}).format(date);
    } catch {
      return `${focusedDate.month}/${focusedDate.year}`;
    }
  }, [focusedDate]);

  const handleToggle = React.useCallback(() => {
    setIsYearPickerOpen(!isYearPickerOpen);
  }, [isYearPickerOpen, setIsYearPickerOpen]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    onKeyDown?.(e);

    if (e.defaultPrevented) {
      return;
    }

    if (e.key === "Escape" && isYearPickerOpen) {
      e.preventDefault();
      setIsYearPickerOpen(false);
    }
  };

  const values: CalendarYearPickerTriggerRenderProps = React.useMemo(
    () => ({
      isOpen: isYearPickerOpen,
      monthYear,
      toggle: handleToggle,
    }),
    [handleToggle, isYearPickerOpen, monthYear],
  );

  return (
    <CalendarYearPickerTriggerContext value={values}>
      <chakra.button
        type="button"
        aria-expanded={isYearPickerOpen}
        aria-label={`${monthYear}, year selector`}
        className={className}
        data-open={isYearPickerOpen || undefined}
        data-slot="calendar-year-picker-trigger"
        display="flex"
        flex="1"
        alignItems="center"
        justifyContent="flex-start"
        gap="0.5"
        rounded="lg"
        outline="none"
        cursor="pointer"
        css={{touchAction: "manipulation"}}
        _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
        onKeyDown={handleKeyDown}
        onClick={(event) => {
          onClick?.(event);
          handleToggle();
        }}
      >
        {typeof children === "function" ? children(values) : children}
      </chakra.button>
    </CalendarYearPickerTriggerContext>
  );
};

CalendarYearPickerTrigger.displayName = "CalendarYearPicker.Trigger";

/* -------------------------------------------------------------------------------------------------
 * CalendarYearPickerTriggerHeading
 * -----------------------------------------------------------------------------------------------*/
const CalendarYearPickerTriggerHeading = ({
  children,
  className,
  ...props
}: CalendarYearPickerTriggerHeadingProps) => {
  const {monthYear, ...values} = useCalendarYearPickerTriggerContext();

  return (
    <Box
      as="span"
      className={className}
      data-slot="calendar-year-picker-trigger-heading"
      fontWeight="medium"
      fontSize="sm"
      transition="colors"
      transitionDuration="150ms"
      {...props}
    >
      {typeof children === "function" ? children({monthYear, ...values}) : children || monthYear}
    </Box>
  );
};

CalendarYearPickerTriggerHeading.displayName = "CalendarYearPicker.TriggerHeading";

/* -------------------------------------------------------------------------------------------------
 * CalendarYearPickerTriggerIndicator
 * -----------------------------------------------------------------------------------------------*/
const CalendarYearPickerTriggerIndicator = ({
  children,
  className,
  ...props
}: CalendarYearPickerTriggerIndicatorProps) => {
  const {monthYear, ...values} = useCalendarYearPickerTriggerContext();

  return (
    <Box
      as="span"
      aria-hidden="true"
      className={className}
      data-slot="calendar-year-picker-trigger-indicator"
      display="inline-flex"
      w="3"
      h="3"
      color="accent"
      transition="transform 150ms"
      transform={values.isOpen ? "rotate(90deg)" : undefined}
      {...props}
    >
      {typeof children === "function"
        ? children({monthYear, ...values})
        : children || <IconChevronRight />}
    </Box>
  );
};

CalendarYearPickerTriggerIndicator.displayName = "CalendarYearPicker.TriggerIndicator";

/* -------------------------------------------------------------------------------------------------
 * CalendarYearPickerGrid
 *
 * Renders a 3-column grid of year buttons. Hidden via CSS opacity when closed,
 * visible when data-open="true". tabIndex is toggled so only the active view
 * receives keyboard focus.
 * -----------------------------------------------------------------------------------------------*/
interface CalendarYearPickerGridProps extends ComponentPropsWithRef<"div"> {}

interface CalendarYearPickerCellRenderProps {
  year: number;
  formattedYear: string;
  isSelected: boolean;
  isCurrentYear: boolean;
  isOpen: boolean;
  selectYear: () => void;
}

interface CalendarYearPickerGridBodyProps {
  children?: (values: CalendarYearPickerCellRenderProps) => React.ReactNode;
}

interface CalendarYearPickerCellProps {
  year: number;
  children?: React.ReactNode | ((values: CalendarYearPickerCellRenderProps) => React.ReactNode);
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
}

interface CalendarYearPickerGridContextValue {
  isYearPickerOpen: boolean;
  activeYear: number;
  focusedYear: number;
  years: number[];
  formatYear: (year: number) => string;
  selectYear: (year: number) => void;
  setActiveYear: (year: number) => void;
}

const CalendarYearPickerGridContext =
  React.createContext<CalendarYearPickerGridContextValue | null>(null);

function useCalendarYearPickerGridContext(): CalendarYearPickerGridContextValue {
  const context = React.useContext(CalendarYearPickerGridContext);

  if (!context) {
    throw new Error("CalendarYearPicker components must be used within <CalendarYearPicker.Grid>.");
  }

  return context;
}

const CalendarYearPickerGrid = ({
  children,
  className,
  onKeyDown,
  ...props
}: CalendarYearPickerGridProps) => {
  const {calendarGridSlot, calendarRef, isYearPickerOpen, setIsYearPickerOpen} = useYearPicker();
  const state = useYearPickerState();
  const gridRef = React.useRef<HTMLDivElement>(null);

  const focusedYear = state.focusedDate.year;

  // Build calendar-aware year list using DateValue arithmetic
  const yearDates = React.useMemo(
    () => getYearRange(state.minValue, state.maxValue),
    [state.minValue, state.maxValue],
  );

  const years = React.useMemo(() => yearDates.map((d) => d.year), [yearDates]);

  const formatYear = React.useCallback(
    (year: number) => String(year),
    [],
  );

  const [activeYear, setActiveYear] = React.useState(focusedYear);

  // Position the year grid to overlay the day grid
  React.useEffect(() => {
    const yearGrid = gridRef.current;

    if (!yearGrid) return;

    const calendar = calendarRef.current;
    const calendarGrid = calendar?.querySelector(
      `[data-slot='${calendarGridSlot}']`,
    ) as HTMLElement | null;

    if (calendarGrid) {
      yearGrid.style.top = `${calendarGrid.offsetTop}px`;
      yearGrid.style.height = `${calendarGrid.offsetHeight}px`;
    }
  }, [calendarGridSlot, calendarRef, state.focusedDate]);

  const focusYearCell = React.useCallback((year: number) => {
    const yearGrid = gridRef.current;

    if (!yearGrid) return;

    const yearCell = yearGrid.querySelector<HTMLElement>(`[data-year='${year}']`);

    if (yearCell) {
      yearCell.focus();
    }
  }, []);

  // Keep keyboard navigation anchored to the currently selected year when opening.
  React.useEffect(() => {
    if (!isYearPickerOpen || years.length === 0) return;

    const [firstYear] = years;

    if (firstYear == null) return;

    const nextActiveYear = years.includes(focusedYear) ? focusedYear : firstYear;

    setActiveYear(nextActiveYear);

    // Focus after DOM updates so tab navigation lands directly on a year cell.
    const rafId = requestAnimationFrame(() => {
      focusYearCell(nextActiveYear);
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isYearPickerOpen, focusedYear, years, focusYearCell]);

  React.useEffect(() => {
    if (!isYearPickerOpen || years.length === 0) return;

    const [firstYear] = years;

    if (firstYear == null) return;

    if (!years.includes(activeYear)) {
      setActiveYear(firstYear);
    }
  }, [activeYear, isYearPickerOpen, years]);

  const handleYearSelect = React.useCallback(
    (year: number) => {
      const newDate = state.focusedDate.set({year});

      state.setFocusedDate(newDate);
      setIsYearPickerOpen(false);
    },
    [setIsYearPickerOpen, state],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e);

    if (e.defaultPrevented) {
      return;
    }

    if (e.key === "Escape" && isYearPickerOpen) {
      e.preventDefault();
      setIsYearPickerOpen(false);

      return;
    }

    if (!isYearPickerOpen || years.length === 0) {
      return;
    }

    const currentIndex = years.indexOf(activeYear);

    if (currentIndex === -1) {
      return;
    }

    let nextIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
        nextIndex = Math.min(currentIndex + 1, years.length - 1);
        break;
      case "ArrowLeft":
        nextIndex = Math.max(currentIndex - 1, 0);
        break;
      case "ArrowDown":
        nextIndex = Math.min(currentIndex + 3, years.length - 1);
        break;
      case "ArrowUp":
        nextIndex = Math.max(currentIndex - 3, 0);
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = years.length - 1;
        break;
      default:
        return;
    }

    if (nextIndex !== currentIndex) {
      const nextYear = years[nextIndex];

      if (nextYear == null) return;

      e.preventDefault();
      setActiveYear(nextYear);
      focusYearCell(nextYear);
    }
  };

  const contextValue = React.useMemo(
    () => ({
      focusedYear,
      isYearPickerOpen,
      activeYear,
      selectYear: handleYearSelect,
      setActiveYear,
      years,
      formatYear,
    }),
    [activeYear, focusedYear, formatYear, handleYearSelect, isYearPickerOpen, years],
  );

  return (
    <CalendarYearPickerGridContext value={contextValue}>
      <Grid
        ref={gridRef}
        aria-hidden={!isYearPickerOpen}
        aria-label="Year selector"
        className={className}
        data-open={isYearPickerOpen || undefined}
        data-slot="calendar-year-picker-grid"
        role="listbox"
        tabIndex={-1}
        templateColumns="repeat(3, 1fr)"
        gap="1"
        overflowY="auto"
        position="absolute"
        insetX="0"
        p="1"
        alignContent="flex-start"
        opacity={isYearPickerOpen ? 1 : 0}
        pointerEvents={isYearPickerOpen ? "auto" : "none"}
        willChange="opacity"
        transition={isYearPickerOpen ? "opacity 200ms 50ms" : undefined}
        css={{
          scrollbarWidth: "thin",
          scrollbarColor: "oklch(0% 0 0 / 0.15) transparent",
          "&::-webkit-scrollbar": {width: "6px"},
          "&::-webkit-scrollbar-track": {background: "transparent"},
          "&::-webkit-scrollbar-thumb": {
            background: "oklch(0% 0 0 / 0.15)",
            borderRadius: "3px",
          },
        }}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </Grid>
    </CalendarYearPickerGridContext>
  );
};

CalendarYearPickerGrid.displayName = "CalendarYearPicker.Grid";

/* -------------------------------------------------------------------------------------------------
 * CalendarYearPickerGridBody
 * -----------------------------------------------------------------------------------------------*/
const CalendarYearPickerGridBody = ({children}: CalendarYearPickerGridBodyProps) => {
  const {focusedYear, formatYear, isYearPickerOpen, selectYear, years} =
    useCalendarYearPickerGridContext();
  const currentYear = new Date().getFullYear();

  return (
    <>
      {years.map((year) => {
        const isSelected = year === focusedYear;
        const formattedYear = formatYear(year);
        const values: CalendarYearPickerCellRenderProps = {
          formattedYear,
          isCurrentYear: year === currentYear,
          isOpen: isYearPickerOpen,
          isSelected,
          selectYear: () => selectYear(year),
          year,
        };

        return (
          <React.Fragment key={year}>
            {typeof children === "function" ? (
              children(values)
            ) : (
              <CalendarYearPickerCell year={year} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

CalendarYearPickerGridBody.displayName = "CalendarYearPicker.GridBody";

/* -------------------------------------------------------------------------------------------------
 * CalendarYearPickerCell
 * -----------------------------------------------------------------------------------------------*/
const CalendarYearPickerCell = ({
  children,
  className,
  onFocus,
  onClick,
  year,
}: CalendarYearPickerCellProps) => {
  const {activeYear, focusedYear, formatYear, isYearPickerOpen, selectYear, setActiveYear} =
    useCalendarYearPickerGridContext();
  const isSelected = year === focusedYear;
  const isActive = year === activeYear;
  const formattedYear = formatYear(year);
  const values: CalendarYearPickerCellRenderProps = {
    formattedYear,
    isCurrentYear: year === new Date().getFullYear(),
    isOpen: isYearPickerOpen,
    isSelected,
    selectYear: () => selectYear(year),
    year,
  };

  return (
    <chakra.button
      type="button"
      aria-label={formattedYear}
      aria-selected={isSelected}
      className={className}
      data-selected={isSelected || undefined}
      data-slot="calendar-year-picker-year-cell"
      data-year={year}
      tabIndex={isYearPickerOpen && isActive ? 0 : -1}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      rounded="full"
      py="1.5"
      px="2.5"
      fontSize="sm"
      fontWeight="medium"
      outline="none"
      userSelect="none"
      cursor="pointer"
      css={{
        WebkitTapHighlightColor: "transparent",
        touchAction: "manipulation",
        transition: "color 100ms, scale 100ms, opacity 100ms, background-color 100ms, box-shadow 100ms",
        transformOrigin: "center",
      }}
      bg={isSelected ? "accent" : undefined}
      color={isSelected ? "accent.fg" : undefined}
      _hover={{bg: isSelected ? "accent/90" : "bg.muted"}}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      onFocus={(event) => {
        onFocus?.(event);
        setActiveYear(year);
      }}
      onClick={(event) => {
        onClick?.(event);
        selectYear(year);
      }}
    >
      {typeof children === "function" ? children(values) : children || formattedYear}
    </chakra.button>
  );
};

CalendarYearPickerCell.displayName = "CalendarYearPicker.Cell";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  CalendarYearPickerTrigger,
  CalendarYearPickerTriggerHeading,
  CalendarYearPickerTriggerIndicator,
  CalendarYearPickerGrid,
  CalendarYearPickerGridBody,
  CalendarYearPickerCell,
};
export type {
  CalendarYearPickerTriggerProps,
  CalendarYearPickerTriggerHeadingProps,
  CalendarYearPickerTriggerIndicatorProps,
  CalendarYearPickerTriggerRenderProps,
  CalendarYearPickerGridProps,
  CalendarYearPickerGridBodyProps,
  CalendarYearPickerCellProps,
  CalendarYearPickerCellRenderProps,
};

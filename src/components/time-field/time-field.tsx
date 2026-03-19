"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Input} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * TimeField Root
 *
 * No direct Ark UI equivalent exists for time-only input.
 * This uses a native time input styled with Chakra UI.
 * -----------------------------------------------------------------------------------------------*/
interface TimeFieldRootProps extends Omit<ComponentPropsWithRef<"div">, "onChange" | "defaultValue"> {
  fullWidth?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  hourCycle?: 12 | 24;
  granularity?: "hour" | "minute" | "second";
  name?: string;
}

function TimeFieldRoot({
  children,
  className,
  fullWidth,
  isRequired,
  isDisabled,
  isReadOnly,
  value,
  defaultValue,
  onChange,
  hourCycle,
  granularity = "minute",
  name,
  ...props
}: TimeFieldRootProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const controlledValue = value ?? internalValue;

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
    },
    [onChange],
  );

  // Determine step from granularity
  const step = granularity === "second" ? 1 : granularity === "hour" ? 3600 : 60;

  return (
    <Box
      data-required={isRequired ? "true" : undefined}
      data-slot="time-field"
      className={className}
      display="flex"
      flexDirection="column"
      gap="1"
      width={fullWidth ? "100%" : undefined}
      {...props}
    >
      {children || (
        <Input
          type="time"
          name={name}
          value={controlledValue}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          step={step}
          width={fullWidth ? "100%" : undefined}
        />
      )}
    </Box>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TimeFieldRoot};

export type {TimeFieldRootProps};

"use client";

import type {ComponentPropsWithRef} from "react";

import {DatePicker} from "@ark-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * DateField Root
 * -----------------------------------------------------------------------------------------------*/
interface DateFieldRootProps extends ComponentPropsWithRef<typeof DatePicker.Root> {
  fullWidth?: boolean;
  isRequired?: boolean;
}

function DateFieldRoot({
  children,
  className,
  fullWidth,
  isRequired,
  ...props
}: DateFieldRootProps) {
  return (
    <DatePicker.Root
      data-required={isRequired ? "true" : undefined}
      data-slot="date-field"
      {...props}
      className={className}
    >
      <DatePicker.Control
        data-slot="date-field-control"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          ...(fullWidth ? {width: "100%"} : {}),
        }}
      >
        {children}
      </DatePicker.Control>
    </DatePicker.Root>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {DateFieldRoot};

export type {DateFieldRootProps};

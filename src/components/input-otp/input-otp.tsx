"use client";

import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import {OTPInput, OTPInputContext} from "input-otp";
import React, {createContext, useContext} from "react";

import {dataAttr} from "../../utils/assertion";

/* -------------------------------------------------------------------------------------------------
 * Input OTP Context
 * -----------------------------------------------------------------------------------------------*/
interface InputOTPContextValue {
  isDisabled?: boolean;
  isInvalid?: boolean;
  variant?: string;
}

const InputOTPContext = createContext<InputOTPContextValue>({
  isDisabled: false,
  isInvalid: false,
});

/* -------------------------------------------------------------------------------------------------
 * Style definitions
 * -----------------------------------------------------------------------------------------------*/
const slotBaseStyles = {
  position: "relative" as const,
  display: "flex",
  height: "10",
  width: "9.5",
  flex: "1",
  alignItems: "center",
  justifyContent: "center",
  rounded: "xl",
  bg: "white",
  color: "fg",
  shadow: "field",
  outline: "none",
  borderWidth: "0px",
  borderColor: "transparent",
  fontSize: "sm",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease",
} as const;

const slotVariantStyles = {
  primary: {
    borderWidth: "1px",
    borderColor: "border",
    shadow: "field",
  },
  secondary: {
    bg: "bg.muted",
    shadow: "none",
    borderColor: "transparent",
  },
} as const;

/* -------------------------------------------------------------------------------------------------
 * Input OTP Root
 * -----------------------------------------------------------------------------------------------*/
interface InputOTPRootProps extends Omit<
  ComponentPropsWithRef<typeof OTPInput>,
  "disabled" | "containerClassName" | "render"
> {
  isDisabled?: boolean;
  isInvalid?: boolean;
  validationErrors?: string[];
  validationDetails?: ValidityState;
  inputClassName?: string;
  variant?: string;
  children: React.ReactNode;
}

const InputOTPRoot = ({
  className,
  inputClassName,
  isDisabled = false,
  isInvalid = false,
  validationDetails: _validationDetails,
  validationErrors: _validationErrors = [],
  variant,
  ...props
}: InputOTPRootProps) => {
  return (
    <InputOTPContext value={{isDisabled, isInvalid, variant}}>
      <OTPInput
        className={inputClassName}
        containerClassName={className}
        data-disabled={dataAttr(isDisabled)}
        data-invalid={dataAttr(isInvalid)}
        data-slot="input-otp"
        disabled={isDisabled}
        {...props}
      />
    </InputOTPContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Input OTP Group
 * -----------------------------------------------------------------------------------------------*/

interface InputOTPGroupProps extends ComponentPropsWithRef<"div"> {}

const InputOTPGroup = ({className, ...props}: InputOTPGroupProps) => {
  return (
    <Box
      alignItems="center"
      className={className}
      data-slot="input-otp-group"
      display="inline-flex"
      gap="2"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Input OTP Slot
 * -----------------------------------------------------------------------------------------------*/
interface InputOTPSlotProps extends ComponentPropsWithRef<"div"> {
  index: number;
}

const InputOTPSlot = ({className, index, ...props}: InputOTPSlotProps) => {
  const {isDisabled, isInvalid, variant} = useContext(InputOTPContext);

  const inputOTPContext = useContext(OTPInputContext);
  const {char, hasFakeCaret, isActive} = inputOTPContext?.slots[index] ?? {};

  const resolvedVariantStyles =
    variant === "secondary" ? slotVariantStyles.secondary : slotVariantStyles.primary;

  return (
    <Box
      {...props}
      className={className}
      data-active={dataAttr(isActive)}
      data-disabled={dataAttr(isDisabled)}
      data-filled={dataAttr(!!char)}
      data-invalid={dataAttr(isInvalid)}
      data-slot="input-otp-slot"
      {...slotBaseStyles}
      {...resolvedVariantStyles}
      {...(isActive
        ? {
            zIndex: 10,
            bg: "bg.subtle",
            ring: "2px",
            ringColor: "accent",
          }
        : {})}
      {...(char && !isActive ? {bg: "bg.subtle"} : {})}
      {...(isInvalid
        ? {
            outline: "1px solid",
            outlineColor: "danger",
            bg: "bg.subtle",
          }
        : {})}
      {...(isDisabled
        ? {
            opacity: 0.5,
            cursor: "not-allowed",
            pointerEvents: "none" as const,
          }
        : {})}
    >
      {char ? (
        <Box data-slot="input-otp-slot-value" fontSize="lg" letterSpacing="-0.27px" lineHeight="6">
          {char}
        </Box>
      ) : null}
      {hasFakeCaret && isActive ? (
        <Box
          animation="blink 1s step-end infinite"
          bg="fg.muted"
          data-slot="input-otp-caret"
          height="4"
          position="absolute"
          rounded="sm"
          width="2px"
        />
      ) : null}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Input OTP Separator
 * -----------------------------------------------------------------------------------------------*/
interface InputOTPSeparatorProps extends ComponentPropsWithRef<"div"> {
  className?: string;
}

const InputOTPSeparator = ({className, ...props}: InputOTPSeparatorProps) => {
  return (
    <Box
      bg="border"
      className={className}
      data-slot="input-otp-separator"
      flexShrink={0}
      height="2px"
      rounded="sm"
      width="6px"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {InputOTPRoot, InputOTPGroup, InputOTPSlot, InputOTPSeparator};

export type {InputOTPRootProps, InputOTPGroupProps, InputOTPSlotProps, InputOTPSeparatorProps};

"use client";

import type {ComponentPropsWithRef} from "react";

import {Input as ChakraInput} from "@chakra-ui/react";
import {useContext} from "react";

import {TextFieldContext} from "../textfield";

/* -------------------------------------------------------------------------------------------------
 * Input Root
 * -----------------------------------------------------------------------------------------------*/
type InputVariant = "primary" | "secondary";

const variantMap: Record<InputVariant, "outline" | "subtle"> = {
  primary: "outline",
  secondary: "subtle",
};

interface InputRootProps extends Omit<ComponentPropsWithRef<typeof ChakraInput>, "variant"> {
  fullWidth?: boolean;
  variant?: InputVariant;
}

const InputRoot = ({fullWidth, variant: variantProp, ...rest}: InputRootProps) => {
  const context = useContext(TextFieldContext);
  const variant = variantProp ?? (context.variant as InputVariant | undefined);
  const chakraVariant = variantMap[variant ?? "primary"];

  return (
    <ChakraInput
      data-slot="input"
      variant={chakraVariant}
      width={fullWidth ? "100%" : undefined}
      {...rest}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {InputRoot};

export type {InputRootProps};

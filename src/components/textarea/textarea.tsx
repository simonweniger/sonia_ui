"use client";

import type {ComponentPropsWithRef} from "react";

import {Textarea as ChakraTextarea} from "@chakra-ui/react";
import {useContext} from "react";

import {TextFieldContext} from "../textfield";

/* -------------------------------------------------------------------------------------------------
 * TextArea Root
 * -----------------------------------------------------------------------------------------------*/
type TextAreaVariant = "primary" | "secondary";

const variantMap: Record<TextAreaVariant, "outline" | "subtle"> = {
  primary: "outline",
  secondary: "subtle",
};

interface TextAreaRootProps extends Omit<ComponentPropsWithRef<typeof ChakraTextarea>, "variant"> {
  fullWidth?: boolean;
  variant?: string;
}

const TextAreaRoot = ({fullWidth, variant, ...rest}: TextAreaRootProps) => {
  const textFieldContext = useContext(TextFieldContext);
  const resolvedVariant = variant ?? textFieldContext?.variant;
  const chakraVariant = variantMap[(resolvedVariant as TextAreaVariant) ?? "primary"] ?? "outline";

  return (
    <ChakraTextarea
      data-slot="textarea"
      variant={chakraVariant}
      width={fullWidth ? "100%" : undefined}
      {...rest}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TextAreaRoot};

export type {TextAreaRootProps};

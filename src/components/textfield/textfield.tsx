"use client";

import type {ComponentPropsWithRef} from "react";

import {Field} from "@chakra-ui/react";
import React, {createContext} from "react";

/* ------------------------------------------------------------------------------------------------
 * TextField Context
 * --------------------------------------------------------------------------------------------- */
type TextFieldContext = {
  variant?: "primary" | "secondary";
};

const TextFieldContext = createContext<TextFieldContext>({});

/* -------------------------------------------------------------------------------------------------
 * TextField Root
 * -----------------------------------------------------------------------------------------------*/
interface TextFieldRootProps extends ComponentPropsWithRef<typeof Field.Root> {
  /**
   * The variant of the text field.
   * @default "primary"
   */
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  /** HTML name attribute for the field */
  name?: string;
}

const TextFieldRoot = ({children, fullWidth, variant, ...props}: TextFieldRootProps) => {
  return (
    <TextFieldContext value={{variant}}>
      <Field.Root
        data-full-width={fullWidth || undefined}
        data-slot="textfield"
        display="flex"
        flexDirection="column"
        gap="1"
        width={fullWidth ? "100%" : undefined}
        css={
          fullWidth
            ? {
                "& [data-slot='input'], & [data-slot='textarea']": {
                  width: "100%",
                },
              }
            : undefined
        }
        {...props}
      >
        {children}
      </Field.Root>
    </TextFieldContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TextFieldRoot, TextFieldContext};

export type {TextFieldRootProps};

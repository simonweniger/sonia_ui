"use client";

import type {ComponentPropsWithRef} from "react";

import {Field} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Field Error Root
 * -----------------------------------------------------------------------------------------------*/
interface FieldErrorRootProps extends ComponentPropsWithRef<typeof Field.ErrorText> {}

const FieldErrorRoot = ({children, ...props}: FieldErrorRootProps) => {
  return (
    <Field.ErrorText
      color="fg.error"
      data-slot="field-error"
      fontSize="xs"
      h="0"
      opacity={0}
      overflowWrap="break-word"
      px="1"
      css={{
        "&[data-visible='true']": {height: "auto", opacity: 1},
        transition: "opacity 150ms ease-out, height 350ms ease",
      }}
      {...props}
    >
      {children}
    </Field.ErrorText>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {FieldErrorRoot};

export type {FieldErrorRootProps};

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
      data-slot="field-error"
      h="0"
      px="1"
      fontSize="xs"
      overflowWrap="break-word"
      color="fg.error"
      opacity={0}
      css={{
        "&[data-visible='true']": {height: "auto", opacity: 1},
        transition:
          "opacity 150ms ease-out, height 350ms ease",
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

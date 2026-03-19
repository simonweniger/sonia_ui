"use client";

import type {ComponentPropsWithRef} from "react";

import {chakra} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Label Root
 * -----------------------------------------------------------------------------------------------*/
const ChakraLabel = chakra("label");

interface LabelRootProps extends ComponentPropsWithRef<typeof ChakraLabel> {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
}

const LabelRoot = ({children, isDisabled, isInvalid, isRequired, ...rest}: LabelRootProps) => {
  return (
    <ChakraLabel
      data-slot="label"
      data-disabled={isDisabled || undefined}
      data-invalid={isInvalid || undefined}
      data-required={isRequired || undefined}
      fontSize="sm"
      fontWeight="medium"
      color="fg"
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      css={{
        "&[data-invalid='true']": {color: "var(--chakra-colors-fg-error)"},
        "&[data-required='true']::after": {
          content: "'*'",
          marginLeft: "0.125rem",
          color: "var(--chakra-colors-fg-error)",
        },
      }}
      {...rest}
    >
      {children}
    </ChakraLabel>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {LabelRoot};

export type {LabelRootProps};

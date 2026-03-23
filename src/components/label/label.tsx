"use client";

import type {ComponentPropsWithRef} from "react";

import {chakra} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Label Root
 * -----------------------------------------------------------------------------------------------*/
const ChakraLabel = chakra("label");
const ChakraSpan = chakra("span");

interface LabelRootProps extends ComponentPropsWithRef<typeof ChakraLabel> {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
}

const LabelRoot = ({
  children,
  htmlFor,
  isDisabled,
  isInvalid,
  isRequired,
  ...rest
}: LabelRootProps) => {
  /* Render as <label> only when htmlFor is provided (standalone label for a form control).
     Otherwise render as <span> so it can safely nest inside compound components like
     Switch or Checkbox whose root already renders as a <label>. */
  const Comp = htmlFor ? ChakraLabel : ChakraSpan;

  return (
    <Comp
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      color="fg"
      data-disabled={isDisabled || undefined}
      data-invalid={isInvalid || undefined}
      data-required={isRequired || undefined}
      data-slot="label"
      fontSize="sm"
      fontWeight="medium"
      htmlFor={htmlFor}
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
    </Comp>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {LabelRoot};

export type {LabelRootProps};

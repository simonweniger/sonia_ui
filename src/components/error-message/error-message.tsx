"use client";

import type {ComponentPropsWithRef} from "react";

import {Text} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Error Message Root
 * -----------------------------------------------------------------------------------------------*/
interface ErrorMessageRootProps extends ComponentPropsWithRef<typeof Text> {}

const ErrorMessageRoot = ({children, ...props}: ErrorMessageRootProps) => {
  return (
    <Text
      color="fg.error"
      data-slot="error-message"
      fontSize="xs"
      h="auto"
      overflowWrap="break-word"
      css={{
        transition: "opacity 150ms ease-out, height 350ms ease",
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ErrorMessageRoot};

export type {ErrorMessageRootProps};

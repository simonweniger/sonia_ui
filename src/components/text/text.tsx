"use client";

import type {ComponentPropsWithRef} from "react";

import {Text as ChakraText} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Text Root
 * -----------------------------------------------------------------------------------------------*/
interface TextRootProps extends ComponentPropsWithRef<typeof ChakraText> {}

const TextRoot = ({children, ...props}: TextRootProps) => {
  return (
    <ChakraText data-slot="text" {...props}>
      {children}
    </ChakraText>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TextRoot};

export type {TextRootProps};

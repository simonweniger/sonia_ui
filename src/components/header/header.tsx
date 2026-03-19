"use client";

import type {ComponentPropsWithRef} from "react";

import {Heading} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Header Root
 * -----------------------------------------------------------------------------------------------*/
interface HeaderRootProps extends ComponentPropsWithRef<typeof Heading> {}

const HeaderRoot = ({children, ...props}: HeaderRootProps) => {
  return (
    <Heading
      data-slot="header"
      w="full"
      px="2"
      pt="1.5"
      pb="1"
      textAlign="left"
      fontSize="xs"
      fontWeight="medium"
      color="fg.muted"
      {...props}
    >
      {children}
    </Heading>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {HeaderRoot};

export type {HeaderRootProps};

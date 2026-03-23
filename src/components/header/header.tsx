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
      color="fg.muted"
      data-slot="header"
      fontSize="xs"
      fontWeight="medium"
      pb="1"
      pt="1.5"
      px="2"
      textAlign="left"
      w="full"
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

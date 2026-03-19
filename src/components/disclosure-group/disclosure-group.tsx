"use client";

import type {ComponentPropsWithRef} from "react";

import {Accordion as ChakraAccordion} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Disclosure Group Root
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureGroupRootProps extends ComponentPropsWithRef<typeof ChakraAccordion.Root> {}

const DisclosureGroupRoot = ({children, ...props}: DisclosureGroupRootProps) => {
  return (
    <ChakraAccordion.Root
      data-slot="disclosure-group"
      w="full"
      css={{contain: "layout style"}}
      {...props}
    >
      {children}
    </ChakraAccordion.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {DisclosureGroupRoot};

export type {DisclosureGroupRootProps};

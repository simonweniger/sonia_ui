"use client";

import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * ListBox Section Root
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxSectionRootProps extends ComponentPropsWithRef<typeof Box> {
  className?: string;
}

const ListBoxSectionRoot = ({children, className, ...props}: ListBoxSectionRootProps) => {
  return (
    <Box
      as="li"
      role="group"
      className={className}
      data-slot="list-box-section"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="0"
      {...props}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ListBoxSectionRoot};

export type {ListBoxSectionRootProps};

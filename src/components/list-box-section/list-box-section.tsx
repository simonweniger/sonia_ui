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
      alignItems="flex-start"
      as="li"
      className={className}
      data-slot="list-box-section"
      display="flex"
      flexDirection="column"
      gap="0"
      role="group"
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

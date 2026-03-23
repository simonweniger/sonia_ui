"use client";

import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * ListBox Root
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxRootProps extends ComponentPropsWithRef<typeof Box> {
  className?: string;
}

function ListBoxRoot({className, ...props}: ListBoxRootProps) {
  return (
    <Box
      as="ul"
      className={className}
      data-slot="list-box"
      display="flex"
      flexDirection="column"
      gap="1"
      overflow="clip"
      p="1"
      position="relative"
      role="listbox"
      w="full"
      css={{
        "& [data-slot='separator'][data-orientation='horizontal']": {
          marginLeft: "3%",
          width: "94%",
        },
      }}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ListBoxRoot};

export type {ListBoxRootProps};

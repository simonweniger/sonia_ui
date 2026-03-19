"use client";

import type {ComponentPropsWithRef} from "react";

import {EmptyState as ChakraEmptyState} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * EmptyState Root
 * -----------------------------------------------------------------------------------------------*/
interface EmptyStateRootProps extends ComponentPropsWithRef<typeof ChakraEmptyState.Root> {}

const EmptyStateRoot = ({children, ...props}: EmptyStateRootProps) => {
  return (
    <ChakraEmptyState.Root data-slot="empty-state" size="sm" {...props}>
      <ChakraEmptyState.Content>{children || "No results found"}</ChakraEmptyState.Content>
    </ChakraEmptyState.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {EmptyStateRoot};

export type {EmptyStateRootProps};

"use client";

import type {Tag as ChakraTag} from "@chakra-ui/react";
import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import React, {createContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * TagGroup Context
 * -----------------------------------------------------------------------------------------------*/
type TagGroupContext = {
  size?: ComponentPropsWithRef<typeof ChakraTag.Root>["size"];
  variant?: ComponentPropsWithRef<typeof ChakraTag.Root>["variant"];
};

const TagGroupContext = createContext<TagGroupContext>({});

/* -------------------------------------------------------------------------------------------------
 * TagGroup Root
 * -----------------------------------------------------------------------------------------------*/
interface TagGroupRootProps extends ComponentPropsWithRef<"div"> {
  size?: TagGroupContext["size"];
  variant?: TagGroupContext["variant"];
}

const TagGroupRoot = ({children, size, variant, ...restProps}: TagGroupRootProps) => {
  return (
    <TagGroupContext value={{size, variant}}>
      <Box
        data-slot="tag-group"
        display="flex"
        flexDirection="column"
        gap="1"
        position="relative"
        {...restProps}
      >
        {children}
      </Box>
    </TagGroupContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * TagGroup List
 * -----------------------------------------------------------------------------------------------*/
interface TagGroupListProps extends ComponentPropsWithRef<"div"> {}

const TagGroupList = ({children, ...restProps}: TagGroupListProps) => {
  return (
    <Box
      data-slot="tag-group-list"
      display="flex"
      flexWrap="wrap"
      gap="1.5"
      position="relative"
      {...restProps}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TagGroupRoot, TagGroupList, TagGroupContext};

export type {TagGroupRootProps, TagGroupListProps};

"use client";

import type {ComponentPropsWithRef} from "react";

import React from "react";
import {Menu as ChakraMenu} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Menu Root
 * -----------------------------------------------------------------------------------------------*/
interface MenuRootProps extends ComponentPropsWithRef<typeof ChakraMenu.Root> {}

const MenuRoot = ({children, ...props}: MenuRootProps) => {
  return (
    <ChakraMenu.Root data-slot="menu" {...props}>
      {children}
    </ChakraMenu.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Menu Content
 * -----------------------------------------------------------------------------------------------*/
interface MenuContentProps extends ComponentPropsWithRef<typeof ChakraMenu.Content> {}

const MenuContent = ({children, className, ...props}: MenuContentProps) => {
  return (
    <ChakraMenu.Content
      data-slot="menu-content"
      className={className}
      position="relative"
      display="flex"
      w="100%"
      flexDir="column"
      gap="1"
      overflow="clip"
      p="1"
      {...props}
    >
      {children}
    </ChakraMenu.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {MenuRoot, MenuContent};

export type {MenuRootProps, MenuContentProps};

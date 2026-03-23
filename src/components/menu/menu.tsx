"use client";

import type {ComponentPropsWithRef} from "react";

import {Menu as ChakraMenu} from "@chakra-ui/react";
import React from "react";

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
      className={className}
      data-slot="menu-content"
      display="flex"
      flexDir="column"
      gap="1"
      overflow="clip"
      p="1"
      position="relative"
      w="100%"
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

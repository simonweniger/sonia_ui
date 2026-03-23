"use client";

import type {ComponentPropsWithRef} from "react";

import {Menu as ChakraMenu} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Menu Section Root
 * -----------------------------------------------------------------------------------------------*/
interface MenuSectionRootProps extends ComponentPropsWithRef<typeof ChakraMenu.ItemGroup> {}

const MenuSectionRoot = ({children, className, ...props}: MenuSectionRootProps) => {
  return (
    <ChakraMenu.ItemGroup
      alignItems="flex-start"
      className={className}
      data-slot="menu-section"
      display="flex"
      flexDir="column"
      gap="0"
      {...props}
    >
      {children}
    </ChakraMenu.ItemGroup>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Menu Section Label
 * -----------------------------------------------------------------------------------------------*/
interface MenuSectionLabelProps extends ComponentPropsWithRef<typeof ChakraMenu.ItemGroupLabel> {}

const MenuSectionLabel = ({children, className, ...props}: MenuSectionLabelProps) => {
  return (
    <ChakraMenu.ItemGroupLabel className={className} data-slot="menu-section-label" {...props}>
      {children}
    </ChakraMenu.ItemGroupLabel>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {MenuSectionRoot, MenuSectionLabel};

export type {MenuSectionRootProps, MenuSectionLabelProps};

"use client";

import type {ComponentPropsWithRef} from "react";

import React from "react";
import {Menu as ChakraMenu} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Menu Section Root
 * -----------------------------------------------------------------------------------------------*/
interface MenuSectionRootProps extends ComponentPropsWithRef<typeof ChakraMenu.ItemGroup> {}

const MenuSectionRoot = ({children, className, ...props}: MenuSectionRootProps) => {
  return (
    <ChakraMenu.ItemGroup
      data-slot="menu-section"
      className={className}
      display="flex"
      flexDir="column"
      alignItems="flex-start"
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
    <ChakraMenu.ItemGroupLabel data-slot="menu-section-label" className={className} {...props}>
      {children}
    </ChakraMenu.ItemGroupLabel>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {MenuSectionRoot, MenuSectionLabel};

export type {MenuSectionRootProps, MenuSectionLabelProps};

"use client";

import type {ComponentPropsWithRef} from "react";

import {Menu as ChakraMenu} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Menu Item Root — recipe handles base item styles (rounded, gap, transitions, press-scale)
 * -----------------------------------------------------------------------------------------------*/
interface MenuItemRootProps extends ComponentPropsWithRef<typeof ChakraMenu.Item> {}

const MenuItemRoot = ({children, className, ...props}: MenuItemRootProps) => {
  return (
    <ChakraMenu.Item
      className={className}
      data-slot="menu-item"
      css={{
        "[data-slot=label]": {pointerEvents: "none", width: "fit-content", userSelect: "none"},
        "[data-slot=description]": {pointerEvents: "none", textWrap: "wrap", userSelect: "none"},
        "&:has([data-slot=menu-item-indicator])": {paddingLeft: "var(--chakra-spacing-7)"},
        "@media (hover: hover)": {
          "&:hover, &[data-hovered=true]": {bg: "var(--chakra-colors-bg-subtle)"},
        },
      }}
      {...props}
    >
      {children}
    </ChakraMenu.Item>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Menu Item Indicator
 * -----------------------------------------------------------------------------------------------*/
interface MenuItemIndicatorProps extends ComponentPropsWithRef<typeof ChakraMenu.ItemIndicator> {}

const MenuItemIndicator = ({children, className, ...props}: MenuItemIndicatorProps) => {
  return (
    <ChakraMenu.ItemIndicator
      alignItems="center"
      boxSize="4"
      className={className}
      color="fg.muted"
      data-slot="menu-item-indicator"
      display="flex"
      flexShrink={0}
      justifyContent="center"
      left="2"
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      css={{
        transition: "all 250ms",
      }}
      {...props}
    >
      {children}
    </ChakraMenu.ItemIndicator>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Menu Item Command (keyboard shortcut)
 * -----------------------------------------------------------------------------------------------*/
interface MenuItemCommandProps extends ComponentPropsWithRef<typeof ChakraMenu.ItemCommand> {}

const MenuItemCommand = ({children, className, ...props}: MenuItemCommandProps) => {
  return (
    <ChakraMenu.ItemCommand
      className={className}
      color="fg.muted"
      data-slot="menu-item-command"
      {...props}
    >
      {children}
    </ChakraMenu.ItemCommand>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {MenuItemRoot, MenuItemIndicator, MenuItemCommand};

export type {MenuItemRootProps, MenuItemIndicatorProps, MenuItemCommandProps};

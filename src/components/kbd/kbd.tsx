"use client";

import type {KbdKey} from "./kbd.constants";
import type {ComponentPropsWithRef} from "react";

import {Kbd as ChakraKbd} from "@chakra-ui/react";

import {kbdKeysLabelMap, kbdKeysMap} from "./kbd.constants";

/* -------------------------------------------------------------------------------------------------
 * Kbd Root
 * -----------------------------------------------------------------------------------------------*/
interface KbdRootProps extends ComponentPropsWithRef<typeof ChakraKbd> {
  children: React.ReactNode;
}

const KbdRoot = ({children, ...props}: KbdRootProps) => {
  return (
    <ChakraKbd data-slot="kbd" {...props}>
      {children}
    </ChakraKbd>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Kbd Abbr
 * -----------------------------------------------------------------------------------------------*/
interface KbdAbbrProps extends ComponentPropsWithRef<"abbr"> {
  keyValue: KbdKey;
}

const KbdAbbr = ({keyValue, ...props}: KbdAbbrProps) => {
  return (
    <abbr
      data-slot="kbd-abbr"
      title={kbdKeysLabelMap[keyValue]}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        textDecoration: "none",
      }}
      {...props}
    >
      {kbdKeysMap[keyValue]}
    </abbr>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Kbd Content
 * -----------------------------------------------------------------------------------------------*/
interface KbdContentProps extends ComponentPropsWithRef<"span"> {
  children: React.ReactNode;
}

const KbdContent = ({children, ...props}: KbdContentProps) => {
  return (
    <span
      data-slot="kbd-content"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {KbdRoot, KbdAbbr, KbdContent};

export type {KbdRootProps, KbdAbbrProps, KbdContentProps};

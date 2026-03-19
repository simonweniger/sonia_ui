"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Link as ChakraLink} from "@chakra-ui/react";
import React from "react";

import {ExternalLinkIcon} from "../icons";

/* ------------------------------------------------------------------------------------------------
 * Link Root
 * --------------------------------------------------------------------------------------------- */
interface LinkRootProps extends ComponentPropsWithRef<typeof ChakraLink> {}

const LinkRoot = ({children, ...props}: LinkRootProps) => {
  return (
    <ChakraLink data-slot="link" {...props}>
      {children}
    </ChakraLink>
  );
};

/* ------------------------------------------------------------------------------------------------
 * Link Icon
 * --------------------------------------------------------------------------------------------- */
type LinkIconProps = ComponentPropsWithRef<"span">;

const LinkIcon = ({children, ...props}: LinkIconProps) => {
  return (
    <Box
      as="span"
      data-slot="link-icon"
      pointerEvents="none"
      display="inline-flex"
      boxSize="2"
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
      color="current"
      opacity={0.6}
      css={{
        transition: "opacity 150ms ease-out",
        "& svg": {transform: "translateZ(0)"},
      }}
      {...props}
    >
      {children ?? <ExternalLinkIcon data-slot="link-default-icon" />}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {LinkRoot, LinkIcon};

export type {LinkRootProps, LinkIconProps};

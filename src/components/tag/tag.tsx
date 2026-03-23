"use client";

import type {ComponentPropsWithRef} from "react";

import {Tag as ChakraTag} from "@chakra-ui/react";
import React, {useContext} from "react";

import {TagGroupContext} from "../tag-group";

/* -------------------------------------------------------------------------------------------------
 * Tag Root
 * -----------------------------------------------------------------------------------------------*/
interface TagRootProps extends ComponentPropsWithRef<typeof ChakraTag.Root> {
  selected?: boolean;
}

const TagRoot = ({children, selected, size, variant, ...restProps}: TagRootProps) => {
  const tagGroupCtx = useContext(TagGroupContext);
  const effectiveSize = size ?? tagGroupCtx.size ?? "md";
  const effectiveVariant = variant ?? tagGroupCtx.variant ?? "subtle";

  return (
    <ChakraTag.Root
      data-selected={selected ? "true" : undefined}
      data-slot="tag"
      size={effectiveSize}
      variant={effectiveVariant}
      {...restProps}
    >
      {children}
    </ChakraTag.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tag Label
 * -----------------------------------------------------------------------------------------------*/
interface TagLabelProps extends ComponentPropsWithRef<typeof ChakraTag.Label> {}

const TagLabel = ({children, ...restProps}: TagLabelProps) => {
  return (
    <ChakraTag.Label data-slot="tag-label" {...restProps}>
      {children}
    </ChakraTag.Label>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tag Start Element
 * -----------------------------------------------------------------------------------------------*/
interface TagStartElementProps extends ComponentPropsWithRef<typeof ChakraTag.StartElement> {}

const TagStartElement = ({children, ...restProps}: TagStartElementProps) => {
  return (
    <ChakraTag.StartElement data-slot="tag-start-element" {...restProps}>
      {children}
    </ChakraTag.StartElement>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tag End Element
 * -----------------------------------------------------------------------------------------------*/
interface TagEndElementProps extends ComponentPropsWithRef<typeof ChakraTag.EndElement> {}

const TagEndElement = ({children, ...restProps}: TagEndElementProps) => {
  return (
    <ChakraTag.EndElement data-slot="tag-end-element" {...restProps}>
      {children}
    </ChakraTag.EndElement>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tag Close Trigger (Remove Button)
 * -----------------------------------------------------------------------------------------------*/
interface TagCloseTriggerProps extends ComponentPropsWithRef<typeof ChakraTag.CloseTrigger> {}

const TagCloseTrigger = ({children, ...restProps}: TagCloseTriggerProps) => {
  return (
    <ChakraTag.CloseTrigger data-slot="tag-close-trigger" {...restProps}>
      {children}
    </ChakraTag.CloseTrigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TagRoot, TagLabel, TagStartElement, TagEndElement, TagCloseTrigger};

export type {
  TagRootProps,
  TagLabelProps,
  TagStartElementProps,
  TagEndElementProps,
  TagCloseTriggerProps,
};

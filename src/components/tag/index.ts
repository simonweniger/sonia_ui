import type {ComponentProps} from "react";

import {TagCloseTrigger, TagEndElement, TagLabel, TagRoot, TagStartElement} from "./tag";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Tag = Object.assign(TagRoot, {
  Root: TagRoot,
  Label: TagLabel,
  StartElement: TagStartElement,
  EndElement: TagEndElement,
  CloseTrigger: TagCloseTrigger,
});

export type Tag = {
  Props: ComponentProps<typeof TagRoot>;
  RootProps: ComponentProps<typeof TagRoot>;
  LabelProps: ComponentProps<typeof TagLabel>;
  StartElementProps: ComponentProps<typeof TagStartElement>;
  EndElementProps: ComponentProps<typeof TagEndElement>;
  CloseTriggerProps: ComponentProps<typeof TagCloseTrigger>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {TagRoot, TagLabel, TagStartElement, TagEndElement, TagCloseTrigger};

export type {
  TagRootProps,
  TagRootProps as TagProps,
  TagLabelProps,
  TagStartElementProps,
  TagEndElementProps,
  TagCloseTriggerProps,
} from "./tag";

"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Fieldset as ChakraFieldset} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Fieldset Root
 * -----------------------------------------------------------------------------------------------*/
interface FieldsetRootProps extends ComponentPropsWithRef<typeof ChakraFieldset.Root> {}

const FieldsetRoot = ({...props}: FieldsetRootProps) => {
  return (
    <ChakraFieldset.Root
      data-slot="fieldset"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Fieldset Legend
 * -----------------------------------------------------------------------------------------------*/
interface FieldsetLegendProps extends ComponentPropsWithRef<typeof ChakraFieldset.Legend> {}

const FieldsetLegend = ({...props}: FieldsetLegendProps) => {
  return (
    <ChakraFieldset.Legend
      data-slot="fieldset-legend"
      fontSize="md"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Field Group
 * -----------------------------------------------------------------------------------------------*/
interface FieldGroupProps extends ComponentPropsWithRef<typeof ChakraFieldset.Content> {}

const FieldGroup = ({...props}: FieldGroupProps) => {
  return (
    <ChakraFieldset.Content
      data-slot="fieldset-field-group"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Field Actions
 * -----------------------------------------------------------------------------------------------*/
interface FieldsetActionsProps extends ComponentPropsWithRef<"div"> {}

const FieldsetActions = ({children, ...rest}: FieldsetActionsProps) => {
  return (
    <Box
      data-slot="fieldset-actions"
      display="flex"
      alignItems="center"
      gap="2"
      pt="1"
      {...rest}
    >
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {FieldsetRoot, FieldsetLegend, FieldGroup, FieldsetActions};

export type {FieldsetRootProps, FieldsetLegendProps, FieldGroupProps, FieldsetActionsProps};

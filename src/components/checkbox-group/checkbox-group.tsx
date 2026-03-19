"use client";

import type {ComponentPropsWithRef} from "react";

import {CheckboxGroup as ChakraCheckboxGroup} from "@chakra-ui/react";
import React, {createContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * CheckboxGroup Context
 * -----------------------------------------------------------------------------------------------*/
interface CheckboxGroupContext {
  variant?: string;
}

const CheckboxGroupContext = createContext<CheckboxGroupContext>({});

/* -------------------------------------------------------------------------------------------------
 * CheckboxGroup
 * -----------------------------------------------------------------------------------------------*/
interface CheckboxGroupProps extends ComponentPropsWithRef<typeof ChakraCheckboxGroup> {
  variant?: string;
}

const CheckboxGroup = ({children, variant, ...props}: CheckboxGroupProps) => {
  return (
    <CheckboxGroupContext.Provider value={{variant}}>
      <ChakraCheckboxGroup
        data-slot="checkbox-group"
        display="flex"
        flexDirection="column"
        css={{
          "& [data-slot=checkbox]": {marginTop: "1rem"},
        }}
        {...props}
      >
        {children}
      </ChakraCheckboxGroup>
    </CheckboxGroupContext.Provider>
  );
};

export {CheckboxGroup, CheckboxGroupContext};
export type {CheckboxGroupProps};

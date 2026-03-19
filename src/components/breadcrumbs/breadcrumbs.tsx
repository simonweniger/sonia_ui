"use client";

import type {ComponentPropsWithRef} from "react";

import {Breadcrumb as ChakraBreadcrumb} from "@chakra-ui/react";
import React, {createContext} from "react";


/* -------------------------------------------------------------------------------------------------
 * Breadcrumbs Context
 * -----------------------------------------------------------------------------------------------*/
type BreadcrumbsContext = {
  separator?: React.ReactNode;
};

const BreadcrumbsContext = createContext<BreadcrumbsContext>({});

/* -------------------------------------------------------------------------------------------------
 * Breadcrumbs Root
 * -----------------------------------------------------------------------------------------------*/
interface BreadcrumbsRootProps extends Omit<ComponentPropsWithRef<typeof ChakraBreadcrumb.Root>, 'separator'> {
  separator?: React.ReactNode;
}

const BreadcrumbsRoot = ({children, separator, ...props}: BreadcrumbsRootProps) => {
  return (
    <BreadcrumbsContext.Provider value={{separator}}>
      <ChakraBreadcrumb.Root
        data-slot="breadcrumbs"
        display="flex"
        alignItems="center"
        {...props}
      >
        {children}
      </ChakraBreadcrumb.Root>
    </BreadcrumbsContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Breadcrumbs Item
 * -----------------------------------------------------------------------------------------------*/
interface BreadcrumbsItemProps extends ComponentPropsWithRef<typeof ChakraBreadcrumb.Link> {
  current?: boolean;
}

const BreadcrumbsItem = ({children, current, ...props}: BreadcrumbsItemProps) => {
  return (
    <ChakraBreadcrumb.Link
      data-slot="breadcrumbs-item"
      data-current={current ? "true" : undefined}
      pos="relative"
      px="0.5"
      textStyle="sm"
      lineHeight="1.25rem"
      fontWeight="medium"
      color={current ? "accent" : "fg.muted"}
      opacity={1}
      {...props}
    >
      {children}
    </ChakraBreadcrumb.Link>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {BreadcrumbsRoot, BreadcrumbsItem};

export type {BreadcrumbsRootProps, BreadcrumbsItemProps};

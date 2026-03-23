"use client";

import type {ComponentPropsWithRef} from "react";

import {Text} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Description Root
 * -----------------------------------------------------------------------------------------------*/
interface DescriptionRootProps extends ComponentPropsWithRef<typeof Text> {}

const DescriptionRoot = ({children, ...props}: DescriptionRootProps) => {
  return (
    <Text
      color="fg.muted"
      data-slot="description"
      fontSize="xs"
      overflowWrap="break-word"
      textWrap="wrap"
      {...props}
    >
      {children}
    </Text>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {DescriptionRoot};

export type {DescriptionRootProps};

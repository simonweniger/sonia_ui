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
      data-slot="description"
      color="fg.muted"
      fontSize="xs"
      textWrap="wrap"
      overflowWrap="break-word"
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

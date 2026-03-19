"use client";

import type {ComponentPropsWithRef} from "react";

import {CloseButton as ChakraCloseButton} from "@chakra-ui/react";

/* -------------------------------------------------------------------------------------------------
 * Close Button Root
 * -----------------------------------------------------------------------------------------------*/
interface CloseButtonRootProps extends ComponentPropsWithRef<typeof ChakraCloseButton> {}

const CloseButtonRoot = ({children, ...rest}: CloseButtonRootProps) => {
  return (
    <ChakraCloseButton
      data-slot="close-button"
      h="6"
      w="6"
      rounded="xl"
      p="1"
      bg="bg.subtle"
      color="fg.muted"
      css={{
        WebkitTapHighlightColor: "transparent",
        transition:
          "transform 250ms var(--ease-out-quart, ease), color 150ms ease-out, background-color 100ms ease-out, box-shadow 150ms ease-out",
      }}
      _hover={{bg: "bg.emphasized"}}
      _active={{transform: "scale(0.93)"}}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      {...rest}
    >
      {children}
    </ChakraCloseButton>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {CloseButtonRoot};

export type {CloseButtonRootProps};

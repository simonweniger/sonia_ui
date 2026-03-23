"use client";

import type {ComponentPropsWithRef} from "react";

import {Box} from "@chakra-ui/react";
import React, {createContext, useContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * ListBox Item Context
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxItemContext {
  isSelected?: boolean;
  variant?: "default" | "danger";
}

const ListBoxItemContext = createContext<ListBoxItemContext>({});

/* -------------------------------------------------------------------------------------------------
 * ListBox Item Root
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxItemRootProps extends ComponentPropsWithRef<typeof Box> {
  className?: string;
  isSelected?: boolean;
  variant?: "default" | "danger";
}

const ListBoxItemRoot = ({
  children,
  className,
  isSelected,
  variant = "default",
  ...props
}: ListBoxItemRootProps) => {
  return (
    <ListBoxItemContext value={{isSelected, variant}}>
      <Box
        _active={{transform: "scale(0.98)"}}
        _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
        _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
        _hover={{bg: "bg.muted"}}
        alignItems="center"
        aria-selected={isSelected}
        as="li"
        className={className}
        cursor="pointer"
        data-slot="list-box-item"
        data-variant={variant}
        display="flex"
        gap="3"
        justifyContent="flex-start"
        minH="9"
        outline="none"
        position="relative"
        pr="7"
        px="2"
        py="1.5"
        role="option"
        rounded="2xl"
        w="full"
        css={{
          WebkitTapHighlightColor: "transparent",
          transition:
            "transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 150ms ease-out",
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
          },
          "& [data-slot='label']": {
            pointerEvents: "none",
            width: "fit-content",
            userSelect: "none",
          },
          "& [data-slot='description']": {
            pointerEvents: "none",
            textWrap: "wrap",
            userSelect: "none",
          },
        }}
        {...props}
      >
        {children}
      </Box>
    </ListBoxItemContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ListBox Item Indicator
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxItemIndicatorProps extends Omit<ComponentPropsWithRef<"span">, "children"> {
  children?: React.ReactNode | ((props: {isSelected: boolean}) => React.ReactNode);
}

const ListBoxItemIndicator = ({children, className, ...props}: ListBoxItemIndicatorProps) => {
  const {isSelected, variant} = useContext(ListBoxItemContext);
  const hasCustomChildren = typeof children === "function" || !!children;

  const content =
    typeof children === "function" ? (
      children({isSelected: !!isSelected})
    ) : children ? (
      children
    ) : (
      <svg
        aria-hidden="true"
        data-slot="list-box-item-indicator--checkmark"
        fill="none"
        role="presentation"
        stroke="currentColor"
        strokeDasharray={22}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 17 18"
        style={{
          width: "0.625rem",
          height: "0.625rem",
          strokeDashoffset: isSelected ? 44 : 66,
          transition: "stroke-dashoffset 250ms linear",
        }}
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    );

  return (
    <Box
      alignItems="center"
      aria-hidden="true"
      as="span"
      className={className}
      color={variant === "danger" ? "fg.error" : "fg"}
      data-slot="list-box-item-indicator"
      data-visible={isSelected || undefined}
      display="flex"
      flexShrink={0}
      h="4"
      justifyContent="center"
      opacity={hasCustomChildren && !isSelected ? 0 : 1}
      position="absolute"
      right="2"
      top="50%"
      transform="translateY(-50%)"
      w="4"
      css={{
        transition: "all 250ms ease",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
      }}
      {...props}
    >
      {content}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ListBoxItemRoot, ListBoxItemIndicator};

export type {ListBoxItemRootProps, ListBoxItemIndicatorProps};

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
        as="li"
        role="option"
        aria-selected={isSelected}
        className={className}
        data-slot="list-box-item"
        data-variant={variant}
        position="relative"
        display="flex"
        minH="9"
        w="full"
        alignItems="center"
        justifyContent="flex-start"
        gap="3"
        rounded="2xl"
        px="2"
        py="1.5"
        pr="7"
        outline="none"
        cursor="pointer"
        css={{
          WebkitTapHighlightColor: "transparent",
          transition: "transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 150ms ease-out",
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
        _hover={{bg: "bg.muted"}}
        _active={{transform: "scale(0.98)"}}
        _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
        _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
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
      as="span"
      aria-hidden="true"
      className={className}
      data-slot="list-box-item-indicator"
      data-visible={isSelected || undefined}
      position="absolute"
      top="50%"
      right="2"
      display="flex"
      w="4"
      h="4"
      flexShrink={0}
      transform="translateY(-50%)"
      alignItems="center"
      justifyContent="center"
      color={variant === "danger" ? "fg.error" : "fg"}
      opacity={hasCustomChildren && !isSelected ? 0 : 1}
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

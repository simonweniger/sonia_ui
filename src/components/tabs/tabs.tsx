"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Tabs as ChakraTabs} from "@chakra-ui/react";
import React, {createContext, useContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * Tabs Context — variant propagation
 * -----------------------------------------------------------------------------------------------*/
type TabsVariant = "primary" | "secondary";

type TabsContextValue = {
  variant: TabsVariant;
};

const TabsContext = createContext<TabsContextValue>({variant: "primary"});

/* -------------------------------------------------------------------------------------------------
 * Tabs Root
 * -----------------------------------------------------------------------------------------------*/
interface TabsRootProps extends Omit<ComponentPropsWithRef<typeof ChakraTabs.Root>, "variant"> {
  children: React.ReactNode;
  className?: string;
  variant?: TabsVariant;
}

const TabsRoot = ({children, className, variant = "primary", ...props}: TabsRootProps) => {
  return (
    <TabsContext value={{variant}}>
      <ChakraTabs.Root
        className={className}
        data-slot="tabs"
        data-variant={variant}
        display="flex"
        gap="2"
        css={{
          "&[data-orientation=horizontal]": {flexDirection: "column"},
          "&[data-orientation=vertical]": {flexDirection: "row"},
        }}
        {...props}
      >
        {children}
      </ChakraTabs.Root>
    </TabsContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tabs List Container
 * -----------------------------------------------------------------------------------------------*/
interface TabListContainerProps extends ComponentPropsWithRef<"div"> {
  className?: string;
}

const TabListContainer = ({children, className, ...props}: TabListContainerProps) => {
  return (
    <Box className={className} data-slot="tabs-list-container" position="relative" {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tabs List
 * -----------------------------------------------------------------------------------------------*/
interface TabListProps extends ComponentPropsWithRef<typeof ChakraTabs.List> {
  children: React.ReactNode;
  className?: string;
}

const TabList = ({children, className, ...props}: TabListProps) => {
  const {variant} = useContext(TabsContext);

  return (
    <ChakraTabs.List
      className={className}
      data-slot="tabs-list"
      display="inline-flex"
      {...(variant === "primary"
        ? {
            bg: "bg.muted",
            p: "1",
          }
        : {
            bg: "transparent",
            p: "0",
          })}
      css={{
        ...(variant === "primary" ? {borderRadius: "calc(var(--chakra-radii-2xl) + 0.25rem)"} : {}),
        ...(variant === "secondary"
          ? {
              borderRadius: 0,
              "&[data-orientation=horizontal]": {
                borderBottom: "1px solid var(--chakra-colors-border)",
                maxWidth: "100%",
                overflowX: "auto",
                overflowY: "clip",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {display: "none"},
              },
              "&[data-orientation=vertical]": {
                borderLeft: "1px solid var(--chakra-colors-border)",
              },
            }
          : {}),
        "&[data-orientation=horizontal]": {
          width: "100%",
          flexDirection: "row",
          ...(variant === "secondary"
            ? {
                maxWidth: "100%",
                overflowX: "auto",
                overflowY: "clip",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {display: "none"},
              }
            : {}),
        },
        "&[data-orientation=vertical]": {
          flexDirection: "column",
          gap: variant === "primary" ? "0.25rem" : undefined,
          ...(variant === "primary" ? {"& [data-slot=tabs-tab]": {minWidth: "5rem"}} : {}),
        },
      }}
      {...props}
    >
      {children}
    </ChakraTabs.List>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tab
 * -----------------------------------------------------------------------------------------------*/
interface TabProps extends ComponentPropsWithRef<typeof ChakraTabs.Trigger> {
  className?: string;
}

const Tab = ({children, className, ...props}: TabProps) => {
  const {variant} = useContext(TabsContext);

  return (
    <ChakraTabs.Trigger
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      alignItems="center"
      className={className}
      color="fg.muted"
      cursor="pointer"
      data-slot="tabs-tab"
      display="flex"
      fontSize="sm"
      fontWeight="medium"
      h="8"
      justifyContent="center"
      outline="none"
      position="relative"
      px="4"
      rounded={variant === "secondary" ? "none" : "3xl"}
      textAlign="center"
      w="100%"
      zIndex="1"
      css={{
        WebkitTapHighlightColor: "transparent",
        transition:
          "color 150ms var(--ease-smooth, ease), background-color 150ms var(--ease-smooth, ease), box-shadow 150ms var(--ease-out, ease-out), opacity 150ms var(--ease-smooth, ease)",
        /* Selected state */
        '&[data-selected="true"]': {
          color: variant === "secondary" ? "var(--chakra-colors-fg)" : "var(--chakra-colors-fg)",
        },
        /* Hide separator when this tab is selected */
        '&[data-selected="true"] [data-slot=tabs-separator]': {opacity: 0},
        /* Hide separator on the next tab after selected */
        '&[data-selected="true"] + [data-slot=tabs-tab] [data-slot=tabs-separator]': {opacity: 0},
        /* Hover when not selected or disabled */
        "@media (hover: hover)": {
          '&:not([data-selected="true"]):not([data-disabled="true"]):hover, &[data-hovered="true"]:not([data-selected="true"]):not([data-disabled="true"])':
            {
              opacity: 0.7,
            },
        },
      }}
      {...props}
    >
      {children}
    </ChakraTabs.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tab Indicator
 * -----------------------------------------------------------------------------------------------*/
interface TabIndicatorProps extends ComponentPropsWithRef<typeof ChakraTabs.Indicator> {
  className?: string;
}

const TabIndicator = ({className, ...props}: TabIndicatorProps) => {
  const {variant} = useContext(TabsContext);

  if (variant === "secondary") {
    return (
      <ChakraTabs.Indicator
        bg="accent"
        className={className}
        data-slot="tabs-indicator"
        css={{
          boxShadow: "none",
          borderRadius: 0,
          transitionDuration: "250ms",
          transitionProperty: "translate, width, height",
          transitionTimingFunction: "var(--ease-out-fluid, ease-out)",
          /* Horizontal: bottom line */
          "[data-orientation=horizontal] &": {
            top: "auto",
            bottom: 0,
            height: "2px",
          },
          /* Vertical: left line */
          "[data-orientation=vertical] &": {
            left: 0,
            top: 0,
            width: "2px",
            height: "100%",
          },
        }}
        {...props}
      />
    );
  }

  return (
    <ChakraTabs.Indicator
      bg="surface"
      className={className}
      data-slot="tabs-indicator"
      h="100%"
      left="0"
      position="absolute"
      rounded="3xl"
      shadow="surface"
      top="0"
      w="100%"
      zIndex={-1}
      css={{
        transitionDuration: "250ms",
        transitionProperty: "translate, width, height",
        transitionTimingFunction: "var(--ease-out-fluid, ease-out)",
      }}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tab Panel
 * -----------------------------------------------------------------------------------------------*/
interface TabPanelProps extends ComponentPropsWithRef<typeof ChakraTabs.Content> {
  children: React.ReactNode;
  className?: string;
}

const TabPanel = ({children, className, ...props}: TabPanelProps) => {
  return (
    <ChakraTabs.Content
      className={className}
      data-slot="tabs-panel"
      outline="none"
      p="2"
      w="100%"
      css={{
        "&[data-orientation=horizontal]": {marginTop: "var(--chakra-spacing-4)"},
        "&[data-orientation=vertical]": {marginLeft: "var(--chakra-spacing-4)"},
      }}
      {...props}
    >
      {children}
    </ChakraTabs.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Tab Separator
 * -----------------------------------------------------------------------------------------------*/
interface TabSeparatorProps extends ComponentPropsWithRef<"span"> {
  className?: string;
}

const TabSeparator = ({className, ...props}: TabSeparatorProps) => {
  const {variant} = useContext(TabsContext);

  if (variant === "secondary") {
    return null;
  }

  return (
    <Box
      aria-hidden="true"
      as="span"
      bg="fg.muted/25"
      className={className}
      data-slot="tabs-separator"
      pointerEvents="none"
      position="absolute"
      rounded="sm"
      css={{
        transition: "opacity 150ms var(--ease-smooth, ease)",
        /* Horizontal tabs: vertical separator */
        "[data-orientation=horizontal] &": {
          left: 0,
          top: "25%",
          width: "1px",
          height: "50%",
        },
        /* Vertical tabs: horizontal separator */
        "[data-orientation=vertical] &": {
          top: 0,
          left: "5%",
          width: "90%",
          height: "1px",
        },
      }}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {TabsRoot, TabListContainer, TabList, Tab, TabIndicator, TabPanel, TabSeparator};

export type {
  TabsRootProps,
  TabListContainerProps,
  TabListProps,
  TabProps,
  TabIndicatorProps,
  TabPanelProps,
  TabSeparatorProps,
};

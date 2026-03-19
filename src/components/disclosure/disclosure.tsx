"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Collapsible, chakra} from "@chakra-ui/react";
import React, {createContext, useContext} from "react";

import {IconChevronDown} from "../icons";

/* ------------------------------------------------------------------------------------------------
 * Disclosure Context
 * --------------------------------------------------------------------------------------------- */
type DisclosureContext = {
  open?: boolean;
};

const DisclosureContext = createContext<DisclosureContext>({});

/* -------------------------------------------------------------------------------------------------
 * Disclosure Root
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureRootProps extends ComponentPropsWithRef<typeof Collapsible.Root> {}

const DisclosureRoot = ({children, open, ...props}: DisclosureRootProps) => {
  return (
    <DisclosureContext value={{open}}>
      <Collapsible.Root
        data-slot="disclosure"
        pos="relative"
        open={open}
        {...props}
      >
        {children}
      </Collapsible.Root>
    </DisclosureContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Disclosure Heading
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureHeadingProps extends ComponentPropsWithRef<"h3"> {
  className?: string;
}

const DisclosureHeading = ({...props}: DisclosureHeadingProps) => {
  return <chakra.h3 data-slot="disclosure-heading" display="flex" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Disclosure Trigger
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureTriggerProps extends ComponentPropsWithRef<typeof Collapsible.Trigger> {}

const DisclosureTrigger = ({...props}: DisclosureTriggerProps) => {
  return (
    <Collapsible.Trigger
      data-slot="disclosure-trigger"
      cursor="pointer"
      css={{
        WebkitTapHighlightColor: "transparent",
      }}
      _focusVisible={{ring: "2px", ringColor: "accent", ringOffset: "2px"}}
      _disabled={{opacity: 0.5, cursor: "not-allowed", pointerEvents: "none"}}
      {...props}
    >
      {props.children}
    </Collapsible.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Disclosure Content
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureContentProps extends ComponentPropsWithRef<typeof Collapsible.Content> {}

const DisclosureContent = ({children, ...props}: DisclosureContentProps) => {
  const {open} = useContext(DisclosureContext);

  return (
    <Collapsible.Content
      data-expanded={open ? "" : undefined}
      data-slot="disclosure-content"
      css={{
        opacity: 0,
        height: "var(--disclosure-panel-height)",
        overflow: "clip",
        transition: "height 200ms var(--ease-out-quad), opacity 200ms var(--ease-out)",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
        "&[data-expanded]": {
          willChange: "height, opacity",
          opacity: 1,
        },
      }}
      {...props}
    >
      {children}
    </Collapsible.Content>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Disclosure Body
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureBodyContentProps extends ComponentPropsWithRef<"div"> {
  className?: string;
}

const DisclosureBody = ({children, ...props}: DisclosureBodyContentProps) => {
  return (
    <Box data-slot="disclosure-body" p="2" {...props}>
      {children}
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Disclosure Indicator
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureIndicatorProps extends ComponentPropsWithRef<"svg"> {
  className?: string;
}

const DisclosureIndicator = ({children, className, ...props}: DisclosureIndicatorProps) => {
  const {open} = useContext(DisclosureContext);

  if (children && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{
        className?: string;
        "data-slot"?: "disclosure-indicator";
        "data-expanded"?: "";
      }>,
      {
        ...props,
        "data-expanded": open ? "" : undefined,
        className,
        "data-slot": "disclosure-indicator",
      },
    );
  }

  return (
    <Box
      ml="auto"
      boxSize="4"
      flexShrink={0}
      color="inherit"
      data-expanded={open ? "" : undefined}
      data-slot="disclosure-indicator"
      css={{
        transition: "transform 250ms",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
        "&[data-expanded]": {
          transform: "rotate(-180deg)",
        },
      }}
    >
      <IconChevronDown className={className} {...props} />
    </Box>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  DisclosureRoot,
  DisclosureHeading,
  DisclosureTrigger,
  DisclosureContent,
  DisclosureBody,
  DisclosureIndicator,
};

export type {
  DisclosureRootProps,
  DisclosureContentProps,
  DisclosureHeadingProps,
  DisclosureTriggerProps,
  DisclosureIndicatorProps,
  DisclosureBodyContentProps,
};

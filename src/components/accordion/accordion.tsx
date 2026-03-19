"use client";

import type {ComponentPropsWithRef} from "react";
import type {SystemStyleObject} from "@chakra-ui/react";

import {Accordion as ChakraAccordion, chakra} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Accordion Root
 * -----------------------------------------------------------------------------------------------*/
interface AccordionRootProps extends Omit<ComponentPropsWithRef<typeof ChakraAccordion.Root>, "variant"> {
  /** Visual variant */
  variant?: "default" | "surface";
}

const accordionVariantStyles: Record<string, SystemStyleObject> = {
  default: {},
  surface: {
    rounded: "3xl",
    bg: "surface",
  },
};

const AccordionRoot = ({children, variant = "default", ...props}: AccordionRootProps) => {
  const variantProps = accordionVariantStyles[variant] ?? {};

  return (
    <ChakraAccordion.Root
      data-slot="accordion"
      data-variant={variant}
      w="full"
      css={{contain: "layout style"}}
      {...variantProps}
      {...props}
    >
      {children}
    </ChakraAccordion.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AccordionItem
 * -----------------------------------------------------------------------------------------------*/
interface AccordionItemProps extends ComponentPropsWithRef<typeof ChakraAccordion.Item> {
  hideSeparator?: boolean;
}

const AccordionItem = ({hideSeparator, ...props}: AccordionItemProps) => {
  return (
    <ChakraAccordion.Item
      data-slot="accordion-item"
      data-hide-separator={hideSeparator ? "true" : undefined}
      css={{
        "&:not(:last-child)::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          width: "100%",
          borderRadius: "9999px",
          bg: "border.muted",
        },
        "&:last-child::after": {
          content: "none",
        },
        "&[data-hide-separator='true']::after": {
          display: "none",
        },
        /* Surface variant overrides (applied via parent data-variant) */
        "[data-variant='surface'] &::after": {
          left: "3%",
          width: "94%",
          bg: "fg/6",
        },
        "[data-variant='surface'] &:first-child [data-slot='accordion-trigger']": {
          borderTopRadius: "3xl",
        },
        "[data-variant='surface'] &:last-child:not(:has([data-slot='accordion-trigger'][aria-expanded='true'])) [data-slot='accordion-trigger']": {
          borderBottomRadius: "3xl",
        },
      }}
      {...props}
    >
      {props.children}
    </ChakraAccordion.Item>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AccordionIndicator
 * -----------------------------------------------------------------------------------------------*/
interface AccordionIndicatorProps extends ComponentPropsWithRef<typeof ChakraAccordion.ItemIndicator> {}

const AccordionIndicator = ({children, ...props}: AccordionIndicatorProps) => {
  return (
    <ChakraAccordion.ItemIndicator
      data-slot="accordion-indicator"
      ml="auto"
      boxSize="4"
      flexShrink={0}
      color="fg.muted"
      transition="transform 0.25s"
      css={{
        "&[data-expanded='true']": {
          transform: "rotate(-180deg)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
      }}
      {...props}
    >
      {children}
    </ChakraAccordion.ItemIndicator>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AccordionHeading
 * -----------------------------------------------------------------------------------------------*/
interface AccordionHeadingProps extends ComponentPropsWithRef<"h3"> {
  className?: string;
}

const AccordionHeading = ({...props}: AccordionHeadingProps) => {
  return <chakra.h3 data-slot="accordion-heading" display="flex" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger
 * -----------------------------------------------------------------------------------------------*/
interface AccordionTriggerProps extends ComponentPropsWithRef<typeof ChakraAccordion.ItemTrigger> {}

const AccordionTrigger = ({...props}: AccordionTriggerProps) => {
  return (
    <ChakraAccordion.ItemTrigger
      data-slot="accordion-trigger"
      textStyle="sm"
      css={{
        transition: "opacity 150ms var(--ease-out), box-shadow 150ms var(--ease-out)",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
        "@media (hover: hover)": {
          "&:hover:not([aria-expanded='true']), &[data-hovered='true']:not([aria-expanded='true'])": {
            backgroundColor: "color-mix(in oklab, var(--colors-fg) 3%, transparent 90%)",
          },
        },
        "[data-variant='surface'] &": {
          "@media (hover: hover)": {
            "&:hover:not([aria-expanded='true']), &[data-hovered='true']:not([aria-expanded='true'])": {
              bg: "bg",
            },
          },
        },
      }}
      {...props}
    >
      {props.children}
    </ChakraAccordion.ItemTrigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AccordionBody
 * -----------------------------------------------------------------------------------------------*/
interface AccordionBodyProps extends ComponentPropsWithRef<typeof ChakraAccordion.ItemBody> {}

const AccordionBody = ({children, ...props}: AccordionBodyProps) => {
  return (
    <ChakraAccordion.ItemBody
      data-slot="accordion-body"
      {...props}
    >
      {children}
    </ChakraAccordion.ItemBody>
  );
};

/* -------------------------------------------------------------------------------------------------
 * AccordionPanel
 * -----------------------------------------------------------------------------------------------*/
interface AccordionPanelProps extends ComponentPropsWithRef<typeof ChakraAccordion.ItemContent> {}

const AccordionPanel = ({children, ...props}: AccordionPanelProps) => {
  return (
    <ChakraAccordion.ItemContent
      data-slot="accordion-panel"
      css={{
        opacity: 0,
        height: "var(--disclosure-panel-height)",
        overflow: "clip",
        transition: "height 200ms var(--ease-out-quad), opacity 200ms var(--ease-out)",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
        "&[data-expanded='true']": {
          willChange: "height, opacity",
          opacity: 1,
        },
      }}
      {...props}
    >
      {children}
    </ChakraAccordion.ItemContent>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
  AccordionIndicator,
  AccordionBody,
  AccordionHeading,
};

export type {
  AccordionRootProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionPanelProps,
  AccordionIndicatorProps,
  AccordionBodyProps,
  AccordionHeadingProps,
};

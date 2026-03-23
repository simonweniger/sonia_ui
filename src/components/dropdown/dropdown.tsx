"use client";

import type {ComponentPropsWithRef} from "react";

import {Menu as ChakraMenu, Portal} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Dropdown Root
 * -----------------------------------------------------------------------------------------------*/
interface DropdownRootProps extends ComponentPropsWithRef<typeof ChakraMenu.Root> {}

const DropdownRoot = ({children, ...props}: DropdownRootProps) => {
  return (
    <ChakraMenu.Root data-slot="dropdown-root" variant="subtle" {...props}>
      {children}
    </ChakraMenu.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Trigger
 * -----------------------------------------------------------------------------------------------*/
interface DropdownTriggerProps extends ComponentPropsWithRef<typeof ChakraMenu.Trigger> {}

const DropdownTrigger = ({children, className, ...props}: DropdownTriggerProps) => {
  return (
    <ChakraMenu.Trigger asChild className={className} data-slot="dropdown-trigger" {...props}>
      {children}
    </ChakraMenu.Trigger>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Content — recipe handles overlay styles (bg, shadow, rounded-3xl, animations)
 * -----------------------------------------------------------------------------------------------*/
interface DropdownContentProps extends ComponentPropsWithRef<typeof ChakraMenu.Content> {}

const DropdownContent = ({children, className, ...props}: DropdownContentProps) => {
  return (
    <Portal>
      <ChakraMenu.Positioner>
        <ChakraMenu.Content
          className={className}
          data-slot="dropdown-content"
          display="flex"
          flexDir="column"
          gap="0.5"
          maxW="48svw"
          md={{minW: "55"}}
          p="1.5"
          css={{
            scrollPaddingBlock: "0.25rem",
            /* Dropdown items get slightly more horizontal padding than default menu items */
            "& [data-slot=menu-item]": {paddingInline: "var(--chakra-spacing-2\\.5)"},
            /* Make separator visible against overlay background */
            "& [data-slot=dropdown-separator]": {
              marginInline: "3%",
              width: "94%",
              bg: "var(--chakra-colors-border)",
            },
          }}
          {...props}
        >
          {children}
        </ChakraMenu.Content>
      </ChakraMenu.Positioner>
    </Portal>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Shared item CSS for indicator-aware items
 * -----------------------------------------------------------------------------------------------*/
const itemBaseCss = {
  "[data-slot=label]": {pointerEvents: "none", width: "fit-content", userSelect: "none"},
  "[data-slot=description]": {pointerEvents: "none", textWrap: "wrap", userSelect: "none"},
} as const;

/** Indicator animation CSS — placed on each item so `&` = the item with `data-state` */
const indicatorAnimationCss = {
  /* Checkmark: hidden via stroke-dashoffset, drawn when checked */
  "& [data-slot=menu-item-indicator--checkmark]": {
    width: "0.625rem",
    height: "0.625rem",
    strokeDashoffset: 66,
    transition: "stroke-dashoffset 100ms linear",
  },
  "&[data-state=checked] [data-slot=menu-item-indicator--checkmark], &[aria-checked=true] [data-slot=menu-item-indicator--checkmark]":
    {
      strokeDashoffset: 44,
    },
  /* Dot: hidden via scale/opacity, shown when checked */
  "& [data-slot=menu-item-indicator--dot]": {
    width: "0.5rem",
    height: "0.5rem",
    transform: "scale(0.7)",
    opacity: 0,
    transition: "all 250ms",
  },
  "&[data-state=checked] [data-slot=menu-item-indicator--dot], &[aria-checked=true] [data-slot=menu-item-indicator--dot]":
    {
      transform: "scale(1)",
      opacity: 1,
    },
  /* Custom children: hidden by default, shown when checked */
  "& [data-type=custom]": {
    opacity: 0,
    transition: "opacity 250ms",
  },
  "&[data-state=checked] [data-type=custom], &[aria-checked=true] [data-type=custom]": {
    opacity: 1,
  },
} as const;

/* -------------------------------------------------------------------------------------------------
 * Dropdown Item — recipe handles item styles
 * -----------------------------------------------------------------------------------------------*/
interface DropdownItemProps extends ComponentPropsWithRef<typeof ChakraMenu.Item> {}

const DropdownItem = ({children, className, ...props}: DropdownItemProps) => {
  return (
    <ChakraMenu.Item className={className} css={itemBaseCss} data-slot="menu-item" {...props}>
      {children}
    </ChakraMenu.Item>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Item Group (Section)
 * -----------------------------------------------------------------------------------------------*/
interface DropdownSectionProps extends ComponentPropsWithRef<typeof ChakraMenu.ItemGroup> {}

const DropdownSection = ({children, className, ...props}: DropdownSectionProps) => {
  return (
    <ChakraMenu.ItemGroup
      className={className}
      data-slot="menu-section"
      display="flex"
      flexDir="column"
      gap="0"
      {...props}
    >
      {children}
    </ChakraMenu.ItemGroup>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Section Label (Header)
 * -----------------------------------------------------------------------------------------------*/
interface DropdownSectionLabelProps extends ComponentPropsWithRef<
  typeof ChakraMenu.ItemGroupLabel
> {}

const DropdownSectionLabel = ({children, className, ...props}: DropdownSectionLabelProps) => {
  return (
    <ChakraMenu.ItemGroupLabel className={className} data-slot="menu-section-label" {...props}>
      {children}
    </ChakraMenu.ItemGroupLabel>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Separator
 * -----------------------------------------------------------------------------------------------*/
interface DropdownSeparatorProps extends ComponentPropsWithRef<typeof ChakraMenu.Separator> {}

const DropdownSeparator = ({className, ...props}: DropdownSeparatorProps) => {
  return <ChakraMenu.Separator className={className} data-slot="dropdown-separator" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Item Indicator
 *
 * Always rendered in the DOM (like original HeroUI MenuItemIndicator).
 * Visibility is CSS-driven via parent's [data-state=checked] attribute:
 *  - Checkmark: animated stroke-dashoffset (66 → 44)
 *  - Dot: animated scale/opacity
 *  - Custom children: opacity toggle
 * -----------------------------------------------------------------------------------------------*/

const DefaultCheckmark = () => (
  <svg
    aria-hidden="true"
    data-slot="menu-item-indicator--checkmark"
    fill="none"
    role="presentation"
    stroke="currentColor"
    strokeDasharray={22}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 17 18"
  >
    <polyline points="1 9 7 14 15 4" />
  </svg>
);

const DefaultDot = () => (
  <svg
    aria-hidden="true"
    data-slot="menu-item-indicator--dot"
    fill="currentColor"
    fillRule="evenodd"
    role="presentation"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path clipRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" fillRule="evenodd" />
  </svg>
);

interface DropdownItemIndicatorProps extends Omit<ComponentPropsWithRef<"span">, "children"> {
  children?: React.ReactNode;
  type?: "checkmark" | "dot";
}

const DropdownItemIndicator = ({
  children,
  className,
  type = "checkmark",
  ...props
}: DropdownItemIndicatorProps) => {
  const hasCustomChildren = children != null;

  return (
    <span
      aria-hidden="true"
      className={className}
      data-slot="menu-item-indicator"
      data-type={hasCustomChildren ? "custom" : type}
      style={{
        display: "flex",
        width: "1rem",
        height: "1rem",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        color: "var(--chakra-colors-fg-muted)",
        transition: "all 250ms",
      }}
      {...props}
    >
      {children ? children : type === "dot" ? <DefaultDot /> : <DefaultCheckmark />}
    </span>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Checkbox Item
 * -----------------------------------------------------------------------------------------------*/
interface DropdownCheckboxItemProps extends ComponentPropsWithRef<typeof ChakraMenu.CheckboxItem> {}

const DropdownCheckboxItem = ({children, className, ...props}: DropdownCheckboxItemProps) => {
  return (
    <ChakraMenu.CheckboxItem
      className={className}
      css={{...itemBaseCss, ...indicatorAnimationCss}}
      data-slot="menu-item"
      {...props}
    >
      {children}
    </ChakraMenu.CheckboxItem>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Radio Item Group
 * -----------------------------------------------------------------------------------------------*/
interface DropdownRadioItemGroupProps extends ComponentPropsWithRef<
  typeof ChakraMenu.RadioItemGroup
> {}

const DropdownRadioItemGroup = ({children, className, ...props}: DropdownRadioItemGroupProps) => {
  return (
    <ChakraMenu.RadioItemGroup
      className={className}
      data-slot="dropdown-radio-item-group"
      {...props}
    >
      {children}
    </ChakraMenu.RadioItemGroup>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Radio Item
 * -----------------------------------------------------------------------------------------------*/
interface DropdownRadioItemProps extends ComponentPropsWithRef<typeof ChakraMenu.RadioItem> {}

const DropdownRadioItem = ({children, className, ...props}: DropdownRadioItemProps) => {
  return (
    <ChakraMenu.RadioItem
      className={className}
      css={{...itemBaseCss, ...indicatorAnimationCss}}
      data-slot="menu-item"
      {...props}
    >
      {children}
    </ChakraMenu.RadioItem>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Dropdown Trigger Item (for submenus)
 * -----------------------------------------------------------------------------------------------*/
interface DropdownTriggerItemProps extends ComponentPropsWithRef<typeof ChakraMenu.TriggerItem> {}

const DropdownTriggerItem = ({children, className, ...props}: DropdownTriggerItemProps) => {
  return (
    <ChakraMenu.TriggerItem
      className={className}
      data-slot="menu-item"
      css={{
        "[data-slot=label]": {pointerEvents: "none", width: "fit-content", userSelect: "none"},
      }}
      {...props}
    >
      {children}
    </ChakraMenu.TriggerItem>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  DropdownCheckboxItem,
  DropdownContent,
  DropdownItem,
  DropdownItemIndicator,
  DropdownRadioItem,
  DropdownRadioItemGroup,
  DropdownRoot,
  DropdownSection,
  DropdownSectionLabel,
  DropdownSeparator,
  DropdownTrigger,
  DropdownTriggerItem,
};

export type {
  DropdownCheckboxItemProps,
  DropdownContentProps,
  DropdownItemIndicatorProps,
  DropdownItemProps,
  DropdownRadioItemGroupProps,
  DropdownRadioItemProps,
  DropdownRootProps,
  DropdownSectionLabelProps,
  DropdownSectionProps,
  DropdownSeparatorProps,
  DropdownTriggerItemProps,
  DropdownTriggerProps,
};

"use client";

import type {ComponentPropsWithRef} from "react";

import {Group} from "@chakra-ui/react";
import {createContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * ButtonGroup Context
 * -----------------------------------------------------------------------------------------------*/
type ButtonGroupContext = {
  size?: string;
  variant?: string;
  colorPalette?: string;
  isDisabled?: boolean;
  fullWidth?: boolean;
  hideSeparator?: boolean;
};

const ButtonGroupContext = createContext<ButtonGroupContext>({});

/* -------------------------------------------------------------------------------------------------
 * ButtonGroup Root
 * -----------------------------------------------------------------------------------------------*/
interface ButtonGroupRootProps extends ComponentPropsWithRef<"div"> {
  size?: string;
  variant?: string;
  colorPalette?: string;
  isDisabled?: boolean;
  fullWidth?: boolean;
  hideSeparator?: boolean;
  orientation?: "horizontal" | "vertical";
}

const ButtonGroupRoot = ({
  children,
  colorPalette,
  fullWidth,
  hideSeparator = false,
  isDisabled,
  orientation = "horizontal",
  size,
  variant,
  ...rest
}: ButtonGroupRootProps) => {
  const isVertical = orientation === "vertical";

  return (
    <ButtonGroupContext value={{size, variant, colorPalette, isDisabled, fullWidth, hideSeparator}}>
      <Group
        data-hide-separator={hideSeparator ? "true" : undefined}
        data-slot="button-group"
        data-orientation={orientation}
        data-full-width={fullWidth || undefined}
        display="inline-flex"
        flexDirection={isVertical ? "column" : "row"}
        h="auto"
        alignItems="center"
        justifyContent="center"
        gap="0"
        width={fullWidth ? "100%" : undefined}
        css={{
          /* Remove border radius from all buttons */
          "& [data-slot='button']": {
            borderRadius: "0",
          },

          /* ---- Horizontal orientation ---- */
          /* First button: direct child or nested in first child (e.g. Dropdown.Trigger) */
          "&[data-orientation='horizontal'] > [data-slot='button']:first-child, &[data-orientation='horizontal'] > :first-child [data-slot='button']": {
            borderStartRadius: "3xl",
          },
          /* Last button: direct child or nested in last child */
          "&[data-orientation='horizontal'] > [data-slot='button']:last-child, &[data-orientation='horizontal'] > :last-child [data-slot='button']": {
            borderEndRadius: "3xl",
          },
          /* Only child */
          "&[data-orientation='horizontal'] > [data-slot='button']:only-child, &[data-orientation='horizontal'] > :only-child [data-slot='button']": {
            borderRadius: "3xl",
          },

          /* ---- Vertical orientation ---- */
          "&[data-orientation='vertical'] > [data-slot='button']:first-child, &[data-orientation='vertical'] > :first-child [data-slot='button']": {
            borderTopRadius: "3xl",
          },
          "&[data-orientation='vertical'] > [data-slot='button']:last-child, &[data-orientation='vertical'] > :last-child [data-slot='button']": {
            borderBottomRadius: "3xl",
          },
          "&[data-orientation='vertical'] > [data-slot='button']:only-child, &[data-orientation='vertical'] > :only-child [data-slot='button']": {
            borderRadius: "3xl",
          },

          /* Remove scale on active/pressed */
          "& [data-slot='button']:active, & [data-slot='button'][data-pressed='true']": {
            transform: "none",
          },

          /* Focus-visible: inset ring so it stays within button bounds */
          "& [data-slot='button']:focus-visible, & [data-slot='button'][data-focus-visible='true']":
            {
              ringOffset: "0px",
              outlineOffset: "-2px",
            },

          /* ---- Separator (horizontal) ----
           * Two selectors to handle:
           * 1. Direct button children that aren't first
           * 2. Buttons nested in non-first wrappers (e.g. Dropdown.Trigger) */
          "&[data-orientation='horizontal'] > [data-slot='button']:not(:first-child)::before, &[data-orientation='horizontal'] > :not(:first-child) [data-slot='button']::before": {
            content: '""',
            borderRadius: "4px",
            position: "absolute",
            left: "-1px",
            top: "20%",
            width: "1px",
            height: "60%",
            bg: "currentColor",
            opacity: 0.2,
            pointerEvents: "none",
            transition: "opacity 150ms ease",
          },

          /* ---- Separator (vertical) ---- */
          "&[data-orientation='vertical'] > [data-slot='button']:not(:first-child)::before, &[data-orientation='vertical'] > :not(:first-child) [data-slot='button']::before": {
            content: '""',
            borderRadius: "4px",
            position: "absolute",
            left: "20%",
            top: "-1px",
            width: "60%",
            height: "1px",
            bg: "currentColor",
            opacity: 0.2,
            pointerEvents: "none",
            transition: "opacity 150ms ease",
          },

          /* Hide separator when prop is set */
          "&[data-hide-separator='true'] [data-slot='button']::before": {
            display: "none",
          },

          /* ---- Outline border dedup (horizontal) ---- */
          "&[data-orientation='horizontal'] [data-slot='button'][data-variant='outline']:first-child":
            {
              borderInlineEndWidth: "0",
            },
          "&[data-orientation='horizontal'] [data-slot='button'][data-variant='outline']:last-child":
            {
              borderInlineStartWidth: "0",
            },
          "&[data-orientation='horizontal'] [data-slot='button'][data-variant='outline']:not(:first-child):not(:last-child)":
            {
              borderInlineWidth: "0",
            },

          /* ---- Outline border dedup (vertical) ---- */
          "&[data-orientation='vertical'] [data-slot='button'][data-variant='outline']:first-child":
            {
              borderBottomWidth: "0",
            },
          "&[data-orientation='vertical'] [data-slot='button'][data-variant='outline']:last-child":
            {
              borderTopWidth: "0",
            },
          "&[data-orientation='vertical'] [data-slot='button'][data-variant='outline']:not(:first-child):not(:last-child)":
            {
              borderBlockWidth: "0",
            },
        }}
        {...rest}
      >
        {children}
      </Group>
    </ButtonGroupContext>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ButtonGroupRoot, ButtonGroupContext};

export type {ButtonGroupRootProps};

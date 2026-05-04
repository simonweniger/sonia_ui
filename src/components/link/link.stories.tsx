import type {LinkProps} from "./index";
import type {Meta} from "@storybook/react-vite";

import {Flex, Text} from "@chakra-ui/react";
import React from "react";

import {ExternalLinkIcon} from "../icons";

import {Link} from "./index";

export default {
  argTypes: {},
  component: Link,
  parameters: {
    layout: "centered",
  },
  title: "Components/Navigation/Link",
} as Meta<typeof Link>;

const DefaultTemplate = (_props: Link["RootProps"]) => (
  <Flex align="center" gap="4">
    <Link href="#">
      Call to action
      <Link.Icon />
    </Link>
    <Link aria-disabled="true" href="#">
      Call to action
      <Link.Icon />
    </Link>
    <Link
      gap="0"
      href="https://sonia.so"
      px="3"
      py="0.5"
      rel="noopener noreferrer"
      target="_blank"
      textDecoration="none"
    >
      SoniaUI
      <Link.Icon style={{height: "0.5rem", width: "0.5rem"}} />
    </Link>
  </Flex>
);

const CustomIconTemplate = (_props: Link["RootProps"]) => (
  <Flex align="center" gap="4">
    <Link href="#">
      External Link
      <Link.Icon>
        <ExternalLinkIcon style={{height: "0.75rem", width: "0.75rem"}} />
      </Link.Icon>
    </Link>
    <Link href="#">
      <Link.Icon>
        <svg fill="currentColor" style={{height: "1rem", width: "1rem"}} viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      </Link.Icon>
      Info Link
    </Link>
  </Flex>
);

const IconPlacementTemplate = (_props: Link["RootProps"]) => (
  <Flex direction="column" gap="4">
    <Link href="#">
      Icon at end (default)
      <Link.Icon />
    </Link>
    <Link href="#">
      <Link.Icon />
      Icon at start
    </Link>
  </Flex>
);

const UnderlineVariantsTemplate = (_props: LinkProps) => (
  <Flex direction="column" gap="6">
    <Flex direction="column" gap="2">
      <Text color="fg.muted" fontSize="sm">
        Always visible underline
      </Text>
      <Link href="#" textDecoration="underline">
        Underline always visible
        <Link.Icon />
      </Link>
    </Flex>

    <Flex direction="column" gap="2">
      <Text color="fg.muted" fontSize="sm">
        Underline visible on hover
      </Text>
      <Link _hover={{textDecoration: "underline"}} href="#" textDecoration="none">
        Hover to see the underline
        <Link.Icon />
      </Link>
    </Flex>

    <Flex direction="column" gap="2">
      <Text color="fg.muted" fontSize="sm">
        No underline
      </Text>
      <Link href="#" textDecoration="none">
        Link without any underline
        <Link.Icon />
      </Link>
    </Flex>

    <Flex direction="column" gap="2">
      <Text color="fg.muted" fontSize="sm">
        Changing the underline offset
      </Text>
      <Flex direction="column" gap="3">
        <Link
          _hover={{textDecoration: "underline"}}
          href="#"
          textDecoration="none"
          textUnderlineOffset="1px"
        >
          Offset 1 (1px space)
          <Link.Icon />
        </Link>
        <Link
          _hover={{textDecoration: "underline"}}
          href="#"
          textDecoration="none"
          textUnderlineOffset="2px"
        >
          Offset 2 (2px space)
          <Link.Icon />
        </Link>
        <Link
          _hover={{textDecoration: "underline"}}
          href="#"
          textDecoration="none"
          textUnderlineOffset="3px"
        >
          Offset 3 (3px space)
          <Link.Icon />
        </Link>
        <Link
          _hover={{textDecoration: "underline"}}
          href="#"
          textDecoration="none"
          textUnderlineOffset="4px"
        >
          Offset 4 (4px space)
          <Link.Icon />
        </Link>
      </Flex>
    </Flex>
  </Flex>
);

export const Default = {
  args: {},
  render: DefaultTemplate,
};

export const CustomIcon = {
  args: {},
  render: CustomIconTemplate,
};

export const IconPlacement = {
  args: {},
  render: IconPlacementTemplate,
};

export const UnderlineVariants = {
  args: {},
  render: UnderlineVariantsTemplate,
};

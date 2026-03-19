import type {LinkProps} from "./index";
import type {Meta} from "@storybook/react";

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
      href="https://heroui.com"
      rel="noopener noreferrer"
      target="_blank"
      gap="0"
      px="3"
      py="0.5"
      textDecoration="none"
    >
      HeroUI
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
        <svg style={{height: "1rem", width: "1rem"}} fill="currentColor" viewBox="0 0 20 20">
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
      <Text fontSize="sm" color="fg.muted">Always visible underline</Text>
      <Link textDecoration="underline" href="#">
        Underline always visible
        <Link.Icon />
      </Link>
    </Flex>

    <Flex direction="column" gap="2">
      <Text fontSize="sm" color="fg.muted">Underline visible on hover</Text>
      <Link textDecoration="none" _hover={{textDecoration: "underline"}} href="#">
        Hover to see the underline
        <Link.Icon />
      </Link>
    </Flex>

    <Flex direction="column" gap="2">
      <Text fontSize="sm" color="fg.muted">No underline</Text>
      <Link textDecoration="none" href="#">
        Link without any underline
        <Link.Icon />
      </Link>
    </Flex>

    <Flex direction="column" gap="2">
      <Text fontSize="sm" color="fg.muted">Changing the underline offset</Text>
      <Flex direction="column" gap="3">
        <Link textUnderlineOffset="1px" textDecoration="none" _hover={{textDecoration: "underline"}} href="#">
          Offset 1 (1px space)
          <Link.Icon />
        </Link>
        <Link textUnderlineOffset="2px" textDecoration="none" _hover={{textDecoration: "underline"}} href="#">
          Offset 2 (2px space)
          <Link.Icon />
        </Link>
        <Link textUnderlineOffset="3px" textDecoration="none" _hover={{textDecoration: "underline"}} href="#">
          Offset 3 (3px space)
          <Link.Icon />
        </Link>
        <Link textUnderlineOffset="4px" textDecoration="none" _hover={{textDecoration: "underline"}} href="#">
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

import type {Meta, StoryObj} from "@storybook/react";

import {Box, chakra, Flex, Text} from "@chakra-ui/react";
import React from "react";

import {Separator} from "./index";

const meta: Meta<typeof Separator> = {
  title: "Components/Layout/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: {type: "radio"},
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Box maxW="md">
      <Box spaceY="1">
        <Box as="h4" fontSize="md" fontWeight="medium">Sonia UI Components</Box>
        <Text fontSize="sm" color="fg.muted">Beautiful, fast and modern React UI library.</Text>
      </Box>
      <Separator my="4" />
      <Flex fontSize="sm" height="5" align="center" spaceX="4">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </Flex>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Flex fontSize="sm" height="5" align="center" spaceX="4">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </Flex>
  ),
};

const items = [
  {
    iconUrl: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/bell-small.png",
    subtitle: "Receive account activity updates",
    title: "Set Up Notifications",
  },
  {
    iconUrl: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/compass-small.png",
    subtitle: "Connect your browser to your account",
    title: "Set up Browser Extension",
  },
  {
    iconUrl:
      "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/mint-collective-small.png",
    subtitle: "Create your first collectible",
    title: "Mint Collectible",
  },
];

export const WithContent: Story = {
  render: () => (
    <Box maxW="md" spaceY="4" rounded="3xl" bg="surface" p="4" shadow="surface">
      {items.map((item, index) => (
        <div key={index}>
          <Flex align="center" gap="3">
            <chakra.img alt={item.title} boxSize="12" src={item.iconUrl} />
            <Box flex="1" spaceY="0">
              <Box as="h4" fontSize="sm" fontWeight="medium">{item.title}</Box>
              <Text fontSize="sm" color="fg.muted">{item.subtitle}</Text>
            </Box>
          </Flex>
          {index < items.length - 1 && <Separator my="4" />}
        </div>
      ))}
    </Box>
  ),
};

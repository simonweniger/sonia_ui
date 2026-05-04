import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex, Text, chakra} from "@chakra-ui/react";
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
        <Box as="h4" fontSize="md" fontWeight="medium">
          Sonia UI Components
        </Box>
        <Text color="fg.muted" fontSize="sm">
          Beautiful, fast and modern React UI library.
        </Text>
      </Box>
      <Separator my="4" />
      <Flex align="center" fontSize="sm" height="5" spaceX="4">
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
    <Flex align="center" fontSize="sm" height="5" spaceX="4">
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
    iconUrl: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/bell-small.png",
    subtitle: "Receive account activity updates",
    title: "Set Up Notifications",
  },
  {
    iconUrl:
      "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/compass-small.png",
    subtitle: "Connect your browser to your account",
    title: "Set up Browser Extension",
  },
  {
    iconUrl:
      "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/mint-collective-small.png",
    subtitle: "Create your first collectible",
    title: "Mint Collectible",
  },
];

export const WithContent: Story = {
  render: () => (
    <Box bg="surface" maxW="md" p="4" rounded="3xl" shadow="surface" spaceY="4">
      {items.map((item, index) => (
        <div key={index}>
          <Flex align="center" gap="3">
            <chakra.img alt={item.title} boxSize="12" src={item.iconUrl} />
            <Box flex="1" spaceY="0">
              <Box as="h4" fontSize="sm" fontWeight="medium">
                {item.title}
              </Box>
              <Text color="fg.muted" fontSize="sm">
                {item.subtitle}
              </Text>
            </Box>
          </Flex>
          {index < items.length - 1 && <Separator my="4" />}
        </div>
      ))}
    </Box>
  ),
};

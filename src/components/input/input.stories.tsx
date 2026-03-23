import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

import {Surface} from "../surface";

import {Input} from "./index";

export default {
  argTypes: {},
  component: Input,
  parameters: {
    layout: "centered",
  },
  title: "Components/Forms/Input",
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input placeholder="Your name" />,
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="2" w="240px">
      <Input fullWidth placeholder="Primary input" variant="primary" />
      <Input fullWidth placeholder="Secondary input" variant="secondary" />
    </Flex>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box spaceY="3" w="400px">
      <Input fullWidth placeholder="Full width input" />
      <Flex align="center" bg="surface" h="180px" justify="center" p="4" rounded="3xl">
        <Box w="full">
          <Surface>
            <Input fullWidth placeholder="Full width input on surface" variant="secondary" />
          </Surface>
        </Box>
      </Flex>
    </Box>
  ),
};

export const OnSurfaces: Story = {
  render: () => (
    <Flex direction="column" gap="8">
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Default Surface
        </Text>
        <Flex direction="column" gap="3" minW="320px" p="6" rounded="3xl">
          <Surface variant="default">
            <Flex direction="column" gap="3">
              <Input placeholder="Your name" variant="primary" w="full" />
              <Input placeholder="Your name" variant="secondary" w="full" />
            </Flex>
          </Surface>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Secondary Surface
        </Text>
        <Flex direction="column" gap="3" minW="320px" p="6" rounded="3xl">
          <Surface variant="secondary">
            <Flex direction="column" gap="3">
              <Input placeholder="Your name" variant="primary" w="full" />
              <Input placeholder="Your name" variant="secondary" w="full" />
            </Flex>
          </Surface>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Tertiary Surface
        </Text>
        <Flex direction="column" gap="3" minW="320px" p="6" rounded="3xl">
          <Surface variant="tertiary">
            <Flex direction="column" gap="3">
              <Input placeholder="Your name" variant="primary" w="full" />
              <Input placeholder="Your name" variant="secondary" w="full" />
            </Flex>
          </Surface>
        </Flex>
      </Flex>
    </Flex>
  ),
};

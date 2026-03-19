import type {Meta, StoryObj} from "@storybook/react";

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
    <Flex w="240px" direction="column" gap="2">
      <Input fullWidth placeholder="Primary input" variant="primary" />
      <Input fullWidth placeholder="Secondary input" variant="secondary" />
    </Flex>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box w="400px" spaceY="3">
      <Input fullWidth placeholder="Full width input" />
      <Flex h="180px" align="center" justify="center" rounded="3xl" bg="surface" p="4">
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
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Default Surface</Text>
        <Flex minW="320px" direction="column" gap="3" rounded="3xl" p="6">
          <Surface variant="default">
            <Flex direction="column" gap="3">
              <Input w="full" placeholder="Your name" variant="primary" />
              <Input w="full" placeholder="Your name" variant="secondary" />
            </Flex>
          </Surface>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2">
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Secondary Surface</Text>
        <Flex minW="320px" direction="column" gap="3" rounded="3xl" p="6">
          <Surface variant="secondary">
            <Flex direction="column" gap="3">
              <Input w="full" placeholder="Your name" variant="primary" />
              <Input w="full" placeholder="Your name" variant="secondary" />
            </Flex>
          </Surface>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2">
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Tertiary Surface</Text>
        <Flex minW="320px" direction="column" gap="3" rounded="3xl" p="6">
          <Surface variant="tertiary">
            <Flex direction="column" gap="3">
              <Input w="full" placeholder="Your name" variant="primary" />
              <Input w="full" placeholder="Your name" variant="secondary" />
            </Flex>
          </Surface>
        </Flex>
      </Flex>
    </Flex>
  ),
};

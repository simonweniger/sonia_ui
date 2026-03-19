import type {Meta, StoryObj} from "@storybook/react";

import {Box} from "@chakra-ui/react";
import React from "react";

import {Surface} from "../surface";

import {TextArea} from "./index";

export default {
  argTypes: {},
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  title: "Components/Forms/Textarea",
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => <TextArea placeholder="Describe your product" />,
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" w="280px" flexDirection="column" gap="2">
      <TextArea fullWidth placeholder="Primary textarea" variant="primary" />
      <TextArea fullWidth placeholder="Secondary textarea" variant="secondary" />
    </Box>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box w="400px" spaceY="3">
      <TextArea fullWidth placeholder="Full width textarea" />
      <Box w="full" rounded="3xl" p="6">
        <Surface>
          <TextArea fullWidth placeholder="Full width textarea on surface" variant="secondary" />
        </Surface>
      </Box>
    </Box>
  ),
};

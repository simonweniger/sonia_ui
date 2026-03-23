import type {Meta, StoryObj} from "@storybook/react-vite";

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
    <Box display="flex" flexDirection="column" gap="2" w="280px">
      <TextArea fullWidth placeholder="Primary textarea" variant="primary" />
      <TextArea fullWidth placeholder="Secondary textarea" variant="secondary" />
    </Box>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box spaceY="3" w="400px">
      <TextArea fullWidth placeholder="Full width textarea" />
      <Box p="6" rounded="3xl" w="full">
        <Surface>
          <TextArea fullWidth placeholder="Full width textarea on surface" variant="secondary" />
        </Surface>
      </Box>
    </Box>
  ),
};

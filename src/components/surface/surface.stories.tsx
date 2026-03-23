import type {Meta, StoryObj} from "@storybook/react-vite";

import {Flex, Text} from "@chakra-ui/react";
import React from "react";

import {Input} from "../input";
import {Label} from "../label";
import {TextField} from "../textfield";

import {Surface} from "./index";

const meta: Meta<typeof Surface> = {
  argTypes: {},
  component: Surface,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/Surface",
};

export default meta;
type Story = StoryObj<typeof Surface>;

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Default
        </Text>
        <Surface
          variant="default"
          style={{
            display: "flex",
            minWidth: "320px",
            flexDirection: "column",
            gap: "0.75rem",
            borderRadius: "var(--radii-3xl)",
            padding: "1.5rem",
          }}
        >
          <Text as="h3" color="foreground" fontSize="base" fontWeight="semibold">
            Surface Content
          </Text>
          <TextField required name="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" width="280px" />
          </TextField>
          <Text color="fg.muted" fontSize="sm">
            This is a default surface variant. It uses bg-surface styling.
          </Text>
        </Surface>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Secondary
        </Text>
        <Surface
          variant="secondary"
          style={{
            display: "flex",
            minWidth: "320px",
            flexDirection: "column",
            gap: "0.75rem",
            borderRadius: "var(--radii-3xl)",
            padding: "1.5rem",
          }}
        >
          <Text as="h3" color="foreground" fontSize="base" fontWeight="semibold">
            Surface Content
          </Text>
          <TextField required name="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" width="280px" />
          </TextField>
          <Text color="fg.muted" fontSize="sm">
            This is a secondary surface variant. It uses bg-surface-secondary styling.
          </Text>
        </Surface>
      </Flex>

      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Tertiary
        </Text>
        <Surface
          variant="tertiary"
          style={{
            display: "flex",
            minWidth: "320px",
            flexDirection: "column",
            gap: "0.75rem",
            borderRadius: "var(--radii-3xl)",
            padding: "1.5rem",
          }}
        >
          <Text as="h3" color="foreground" fontSize="base" fontWeight="semibold">
            Surface Content
          </Text>
          <TextField required name="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" width="280px" />
          </TextField>
          <Text color="fg.muted" fontSize="sm">
            This is a tertiary surface variant. It uses bg-surface-tertiary styling.
          </Text>
        </Surface>
      </Flex>
    </Flex>
  ),
};

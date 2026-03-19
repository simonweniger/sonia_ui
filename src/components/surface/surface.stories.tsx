import type {Meta, StoryObj} from "@storybook/react";

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
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Default</Text>
        <Surface style={{display: "flex", minWidth: "320px", flexDirection: "column", gap: "0.75rem", borderRadius: "var(--radii-3xl)", padding: "1.5rem"}} variant="default">
          <Text as="h3" fontSize="base" fontWeight="semibold" color="foreground">Surface Content</Text>
          <TextField required name="email">
            <Label>Email</Label>
            <Input width="280px" placeholder="john@example.com" />
          </TextField>
          <Text fontSize="sm" color="fg.muted">
            This is a default surface variant. It uses bg-surface styling.
          </Text>
        </Surface>
      </Flex>
      <Flex direction="column" gap="2">
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Secondary</Text>
        <Surface style={{display: "flex", minWidth: "320px", flexDirection: "column", gap: "0.75rem", borderRadius: "var(--radii-3xl)", padding: "1.5rem"}} variant="secondary">
          <Text as="h3" fontSize="base" fontWeight="semibold" color="foreground">Surface Content</Text>
          <TextField required name="email">
            <Label>Email</Label>
            <Input width="280px" placeholder="john@example.com" />
          </TextField>
          <Text fontSize="sm" color="fg.muted">
            This is a secondary surface variant. It uses bg-surface-secondary styling.
          </Text>
        </Surface>
      </Flex>

      <Flex direction="column" gap="2">
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Tertiary</Text>
        <Surface style={{display: "flex", minWidth: "320px", flexDirection: "column", gap: "0.75rem", borderRadius: "var(--radii-3xl)", padding: "1.5rem"}} variant="tertiary">
          <Text as="h3" fontSize="base" fontWeight="semibold" color="foreground">Surface Content</Text>
          <TextField required name="email">
            <Label>Email</Label>
            <Input width="280px" placeholder="john@example.com" />
          </TextField>
          <Text fontSize="sm" color="fg.muted">
            This is a tertiary surface variant. It uses bg-surface-tertiary styling.
          </Text>
        </Surface>
      </Flex>
    </Flex>
  ),
};

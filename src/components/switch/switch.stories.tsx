import type {Meta, StoryObj} from "@storybook/react";

import {Box, Text} from "@chakra-ui/react";
import React from "react";

import {Description} from "../description";
import {Label} from "../label";

import {Switch} from "./index";

export default {
  argTypes: {},
  component: Switch,
  parameters: {
    layout: "centered",
  },
  title: "Components/Controls/Switch",
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <Switch>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label fontSize="sm">Enable notifications</Label>
      </Switch.Content>
    </Switch>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Switch disabled>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label fontSize="sm">Enable notifications</Label>
      </Switch.Content>
    </Switch>
  ),
};

export const DefaultSelected: Story = {
  render: () => (
    <Switch defaultChecked>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label fontSize="sm">Enable notifications</Label>
      </Switch.Content>
    </Switch>
  ),
};

export const DisabledDefaultSelected: Story = {
  render: () => (
    <Switch defaultChecked disabled>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch>
  ),
};

export const Controlled: Story = {
  render: function ControlledSwitch() {
    const [checked, setChecked] = React.useState(false);

    return (
      <Box display="flex" flexDirection="column" gap="4">
        <Switch checked={checked} onCheckedChange={(e) => setChecked(!!e.checked)}>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Content>
            <Label fontSize="sm">Enable notifications</Label>
          </Switch.Content>
        </Switch>
        <Text fontSize="sm" color="fg.muted">Switch is {checked ? "on" : "off"}</Text>
      </Box>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => (
    <Switch aria-label="Enable notifications">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap="6">
      <Switch size="sm">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label fontSize="xs">Small</Label>
        </Switch.Content>
      </Switch>
      <Switch size="md">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label fontSize="sm">Medium</Label>
        </Switch.Content>
      </Switch>
      <Switch size="lg">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label fontSize="md">Large</Label>
        </Switch.Content>
      </Switch>
    </Box>
  ),
};

export const LabelBefore: Story = {
  render: () => (
    <Switch>
      <Switch.Content>
        <Label fontSize="sm">Enable notifications</Label>
      </Switch.Content>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Box maxW="sm">
      <Switch>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label fontSize="sm">Public profile</Label>
          <Description>Allow others to see your profile information</Description>
        </Switch.Content>
      </Switch>
    </Box>
  ),
};

import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box} from "@chakra-ui/react";
import React from "react";

import {Button} from "../button";
import {Label} from "../label";
import {Switch} from "../switch";

import {SwitchGroup} from "./index";

export default {
  argTypes: {},
  component: SwitchGroup,
  parameters: {
    layout: "centered",
  },
  title: "Components/Controls/SwitchGroup",
} as Meta<typeof SwitchGroup>;

type Story = StoryObj<typeof SwitchGroup>;

export const Default: Story = {
  render: () => (
    <SwitchGroup>
      <Switch name="notifications">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Label fontSize="sm">Allow Notifications</Label>
      </Switch>
      <Switch name="marketing">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Label fontSize="sm">Marketing emails</Label>
      </Switch>
      <Switch name="social">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Label fontSize="sm">Social media updates</Label>
      </Switch>
    </SwitchGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Box overflow="auto">
      <SwitchGroup orientation="horizontal">
        <Switch name="notifications">
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Label fontSize="sm">Notifications</Label>
        </Switch>
        <Switch name="marketing">
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Label fontSize="sm">Marketing</Label>
        </Switch>
        <Switch name="social">
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Label fontSize="sm">Social</Label>
        </Switch>
      </SwitchGroup>
    </Box>
  ),
};

export const Form: Story = {
  render: function FormExample() {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);

      alert(
        `Form submitted with:\n${Array.from(formData.entries())
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n")}`,
      );
    };

    return (
      <Box as="form" display="flex" flexDirection="column" gap="4" onSubmit={handleSubmit}>
        <SwitchGroup>
          <Switch name="notifications" value="on">
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Label fontSize="sm">Enable notifications</Label>
          </Switch>
          <Switch defaultChecked name="newsletter" value="on">
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Label fontSize="sm">Subscribe to newsletter</Label>
          </Switch>
          <Switch name="marketing" value="on">
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Label fontSize="sm">Receive marketing updates</Label>
          </Switch>
        </SwitchGroup>
        <Button mt="4" size="sm" type="submit" variant="solid">
          Submit
        </Button>
      </Box>
    );
  },
};

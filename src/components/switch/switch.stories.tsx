import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Switch as ChakraSwitch, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
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
        <Text color="fg.muted" fontSize="sm">
          Switch is {checked ? "on" : "off"}
        </Text>
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

export const WithCustomStyles: Story = {
  render: () => (
    <Switch>
      <ChakraSwitch.Context>
        {(api) => (
          <>
            <Switch.Control
              css={{
                height: "31px",
                width: "51px",
                bg: "blue.500",
                ...(api.checked ? {bg: "cyan.500", boxShadow: "0 0 12px rgba(6,182,212,0.5)"} : {}),
              }}
            >
              <Switch.Thumb
                css={{
                  width: "27px",
                  height: "27px",
                  bg: "white",
                  ...(api.checked ? {ms: "22px", boxShadow: "lg"} : {}),
                }}
              >
                <Switch.Icon>
                  <Icon
                    icon={api.checked ? "gravity-ui:check" : "gravity-ui:power"}
                    style={{
                      width: "1rem",
                      height: "1rem",
                      color: api.checked ? "#0891b2" : "#2563eb",
                    }}
                  />
                </Switch.Icon>
              </Switch.Thumb>
            </Switch.Control>
          </>
        )}
      </ChakraSwitch.Context>
    </Switch>
  ),
};

export const WithIcons: Story = {
  render: () => {
    const icons = {
      volume: {
        off: "gravity-ui:volume-fill",
        on: "gravity-ui:volume-slash-fill",
        controlColor: "blue.500",
        iconColor: "#2563eb",
      },
      microphone: {
        off: "gravity-ui:microphone",
        on: "gravity-ui:microphone-slash",
        controlColor: "red.500",
        iconColor: "#dc2626",
      },
      check: {
        off: "gravity-ui:power",
        on: "gravity-ui:check",
        controlColor: "green.500",
        iconColor: "#16a34a",
      },
      darkMode: {
        off: "gravity-ui:moon",
        on: "gravity-ui:sun",
        controlColor: "accent",
        iconColor: "currentColor",
      },
      notification: {
        off: "gravity-ui:bell-slash",
        on: "gravity-ui:bell-fill",
        controlColor: "purple.500",
        iconColor: "#9333ea",
      },
    };

    return (
      <Box display="flex" gap="3">
        {Object.entries(icons).map(([key, value]) => (
          <Switch key={key} defaultChecked size="lg">
            <ChakraSwitch.Context>
              {(api) => (
                <Switch.Control css={api.checked ? {bg: value.controlColor} : {}}>
                  <Switch.Thumb>
                    <Switch.Icon>
                      <Icon
                        icon={api.checked ? value.on : value.off}
                        style={{
                          width: "0.75rem",
                          height: "0.75rem",
                          color: api.checked ? value.iconColor : "inherit",
                          opacity: api.checked ? 1 : 0.7,
                        }}
                      />
                    </Switch.Icon>
                  </Switch.Thumb>
                </Switch.Control>
              )}
            </ChakraSwitch.Context>
          </Switch>
        ))}
      </Box>
    );
  },
};

export const RenderProps: Story = {
  render: () => (
    <Switch>
      <ChakraSwitch.Context>
        {(api) => (
          <>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Content>
              <Label fontSize="sm">{api.checked ? "Enabled" : "Disabled"}</Label>
            </Switch.Content>
          </>
        )}
      </ChakraSwitch.Context>
    </Switch>
  ),
};

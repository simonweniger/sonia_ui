import type {Meta, StoryObj} from "@storybook/react";

import {Icon} from "@iconify/react";
import {Box, Text} from "@chakra-ui/react";
import React from "react";

import {CheckboxGroup} from "../checkbox-group";
import {Description} from "../description";
import {Label} from "../label";

import {Checkbox} from "./index";

export default {
  argTypes: {},
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  title: "Components/Forms/Checkbox",
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <Checkbox id="terms">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </Checkbox.Content>
    </Checkbox>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4" px="4">
      <Box display="flex" flexDirection="column" gap="2">
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Primary variant</Text>
        <Checkbox id="primary" variant="primary">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="primary">Primary checkbox</Label>
            <Description>Standard styling with default background</Description>
          </Checkbox.Content>
        </Checkbox>
      </Box>
      <Box display="flex" flexDirection="column" gap="2">
        <Text fontSize="sm" fontWeight="medium" color="fg.muted">Secondary variant</Text>
        <Checkbox id="secondary" variant="secondary">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="secondary">Secondary checkbox</Label>
            <Description>Lower emphasis variant for use in surfaces</Description>
          </Checkbox.Content>
        </Checkbox>
      </Box>
    </Box>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Checkbox id="terms">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="terms">Accept terms and conditions</Label>
        <Description>I agree to the terms and privacy policy</Description>
      </Checkbox.Content>
    </Checkbox>
  ),
};

export const WithCustomIndicator: Story = {
  render: () => (
    <Box display="flex" gap="4" px="4">
      <Checkbox defaultChecked id="heart">
        <Checkbox.Control>
          <Checkbox.Indicator>
            <svg fill="fill" viewBox="0 0 24 24">
              <path
                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                fill="currentColor"
              />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="heart">Heart</Label>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox defaultChecked id="plus">
        <Checkbox.Control>
          <Checkbox.Indicator>
            <svg fill="none" viewBox="0 0 24 24">
              <path
                d="M6 12H18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                d="M12 18V6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="plus">Plus</Label>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox checked="indeterminate" id="indeterminate">
        <Checkbox.Control>
          <Checkbox.Indicator>
            <svg stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <line x1="21" x2="3" y1="12" y2="12" />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="indeterminate">Indeterminate</Label>
        </Checkbox.Content>
      </Checkbox>
    </Box>
  ),
};

export const Indeterminate: Story = {
  render: () => {
    return (
      <Checkbox checked="indeterminate" id="select-all">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="select-all">Select all</Label>
          <Description>Shows indeterminate state</Description>
        </Checkbox.Content>
      </Checkbox>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Checkbox disabled id="feature">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="feature">Feature</Label>
        <Description>This feature is coming soon</Description>
      </Checkbox.Content>
    </Checkbox>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true);

    return (
      <Box display="flex" flexDirection="column" gap="3" px="4">
        <Checkbox
          id="notifications"
          checked={checked}
          onCheckedChange={(e) => setChecked(!!e.checked)}
        >
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="notifications">Email notifications</Label>
          </Checkbox.Content>
        </Checkbox>
        <Text mt="2" fontSize="sm" color="fg.muted">
          Status: <Text as="span" fontWeight="medium">{checked ? "Enabled" : "Disabled"}</Text>
        </Text>
      </Box>
    );
  },
};

export const Invalid: Story = {
  render: () => (
    <Checkbox invalid id="agreement">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="agreement">I agree to the terms</Label>
        <Description>You must accept the terms to continue</Description>
      </Checkbox.Content>
    </Checkbox>
  ),
};

export const FeaturesAndAddOnsExample: Story = {
  render: () => {
    const addOns = [
      {
        title: "Email Notifications",
        value: "email",
        description: "Receive updates via email",
        icon: "gravity-ui:envelope",
      },
      {
        title: "SMS Alerts",
        value: "sms",
        description: "Get instant SMS notifications",
        icon: "gravity-ui:comment",
      },
      {
        title: "Push Notifications",
        value: "push",
        description: "Browser and mobile push alerts",
        icon: "gravity-ui:bell",
      },
    ];

    return (
      <Box display="flex" w="100%" flexDirection="column" alignItems="center" gap="10" px="4" py="8">
        <Box as="section" display="flex" w="100%" minW="320px" flexDirection="column" gap="4">
          <CheckboxGroup name="notification-preferences">
            <Label htmlFor="notification-preferences">Notification preferences</Label>
            <Description>Choose how you want to receive updates</Description>
            <Box display="flex" flexDirection="column" gap="2">
              {addOns.map((addon) => (
                <Checkbox
                  key={addon.value}
                  id={addon.value}
                  value={addon.value}
                  css={{"&": {position: "relative", flexDirection: "column", gap: "1rem", borderRadius: "var(--radii-3xl)", bg: "var(--colors-bg-subtle)", paddingInline: "1.25rem", paddingBlock: "1rem", transition: "all"}, "&[data-selected=true]": {bg: "color-mix(in oklch, var(--colors-accent) 10%, transparent)"}}}
                >
                  <Checkbox.Control css={{"&": {position: "absolute", top: "0.75rem", right: "1rem", width: "1.25rem", height: "1.25rem", borderRadius: "9999px"}, "&::before": {borderRadius: "9999px"}}}>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content style={{display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: "1rem"}}>
                    <Icon className="size-5 text-accent" icon={addon.icon} />
                    <Box display="flex" flexDirection="column" gap="1">
                      <Label>{addon.title}</Label>
                      <Description>{addon.description}</Description>
                    </Box>
                  </Checkbox.Content>
                </Checkbox>
              ))}
            </Box>
          </CheckboxGroup>
        </Box>
      </Box>
    );
  },
};

import type {Meta, StoryObj} from "@storybook/react";

import {Box, Flex, Grid, Text} from "@chakra-ui/react";
import React from "react";

import {Kbd} from "./index";

const meta: Meta<typeof Kbd> = {
  title: "Components/Typography/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Kbd>
      <Kbd.Abbr keyValue="command" />
      <Kbd.Content>K</Kbd.Content>
    </Kbd>
  ),
};

export const WithSingleKey: Story = {
  render: () => (
    <Kbd>
      <Kbd.Abbr keyValue="command" />
      <Kbd.Content>K</Kbd.Content>
    </Kbd>
  ),
};

export const WithMultipleKeys: Story = {
  render: () => (
    <Kbd>
      <Kbd.Abbr keyValue="command" />
      <Kbd.Abbr keyValue="shift" />
      <Kbd.Content>K</Kbd.Content>
    </Kbd>
  ),
};

export const KeyCombinations: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex align="center" gap="2">
        <span>Copy:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>C</Kbd.Content>
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Paste:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>V</Kbd.Content>
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Cut:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>X</Kbd.Content>
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Undo:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>Z</Kbd.Content>
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Redo:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Abbr keyValue="shift" />
          <Kbd.Content>Z</Kbd.Content>
        </Kbd>
      </Flex>
    </Flex>
  ),
};

export const NavigationKeys: Story = {
  render: () => (
    <Flex align="center" gap="4">
      <Kbd>
        <Kbd.Abbr keyValue="up" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="down" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="left" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="right" />
      </Kbd>
    </Flex>
  ),
};

export const SpecialKeys: Story = {
  render: () => (
    <Grid templateColumns="repeat(4, 1fr)" gap="4">
      <Kbd>
        <Kbd.Abbr keyValue="enter" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="delete" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="escape" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="tab" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="capslock" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="space" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="pageup" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="pagedown" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="home" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="end" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="help" />
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="fn" />
      </Kbd>
    </Grid>
  ),
};

export const ComplexShortcuts: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex align="center" gap="2">
        <span>Open Spotlight:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Abbr keyValue="space" />
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Force Quit:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Abbr keyValue="option" />
          <Kbd.Abbr keyValue="escape" />
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Screenshot:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Abbr keyValue="shift" />
          <Kbd.Content>3</Kbd.Content>
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Switch Apps:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Abbr keyValue="tab" />
        </Kbd>
      </Flex>
    </Flex>
  ),
};

export const InlineUsage: Story = {
  render: () => (
    <Box spaceY="2">
      <Text fontSize="sm">
        Press{" "}
        <Kbd>
          <Kbd.Content>Esc</Kbd.Content>
        </Kbd>{" "}
        to close the dialog.
      </Text>
      <Text fontSize="sm">
        Use{" "}
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>K</Kbd.Content>
        </Kbd>{" "}
        to open the command palette.
      </Text>
      <Text fontSize="sm">
        Navigate with{" "}
        <Kbd>
          <Kbd.Abbr keyValue="up" />
        </Kbd>{" "}
        and{" "}
        <Kbd>
          <Kbd.Abbr keyValue="down" />
        </Kbd>{" "}
        arrow keys.
      </Text>
    </Box>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex align="center" gap="2">
        <span>Select word:</span>
        <Kbd>
          <Kbd.Abbr keyValue="option" />
          <Kbd.Abbr keyValue="left" />
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Delete line:</span>
        <Kbd>
          <Kbd.Abbr keyValue="ctrl" />
          <Kbd.Content>K</Kbd.Content>
        </Kbd>
      </Flex>
      <Flex align="center" gap="2">
        <span>Multiple modifiers:</span>
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Abbr keyValue="option" />
          <Kbd.Abbr keyValue="shift" />
          <Kbd.Content>4</Kbd.Content>
        </Kbd>
      </Flex>
    </Flex>
  ),
};

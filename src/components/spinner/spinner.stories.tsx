import type {SpinnerProps} from "./index";
import type {Meta} from "@storybook/react";

import {Flex, Text} from "@chakra-ui/react";
import React from "react";

import {Spinner} from "./index";

export default {
  argTypes: {
    color: {
      control: "select",
      options: ["accent", "current", "danger", "success", "warning"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xl"],
    },
  },
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  title: "Components/Feedback/Spinner",
} as Meta<typeof Spinner>;

const defaultArgs: SpinnerProps = {};

const Template = (props: SpinnerProps) => (
  <Flex align="center" gap="3">
    <Spinner {...props} />
  </Flex>
);

const ColorsTemplate = (props: SpinnerProps) => (
  <Flex align="center" gap="8">
    <Flex direction="column" align="center" gap="2">
      <Spinner color="accent" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Accent</Text>
    </Flex>
    <Flex direction="column" align="center" gap="2">
      <Spinner color="current" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Current</Text>
    </Flex>
    <Flex direction="column" align="center" gap="2">
      <Spinner color="success" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Success</Text>
    </Flex>
    <Flex direction="column" align="center" gap="2">
      <Spinner color="warning" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Warning</Text>
    </Flex>
    <Flex direction="column" align="center" gap="2">
      <Spinner color="danger" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Danger</Text>
    </Flex>
  </Flex>
);

const SizesTemplate = (props: SpinnerProps) => (
  <Flex align="center" gap="8">
    <Flex direction="column" align="center" gap="2">
      <Spinner size="sm" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Small</Text>
    </Flex>
    <Flex direction="column" align="center" gap="2">
      <Spinner size="md" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Medium</Text>
    </Flex>
    <Flex direction="column" align="center" gap="2">
      <Spinner size="lg" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Large</Text>
    </Flex>
    <Flex direction="column" align="center" gap="2">
      <Spinner size="xl" {...props} />
      <Text as="span" fontSize="xs" color="fg.muted">Extra Large</Text>
    </Flex>
  </Flex>
);

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const Colors = {
  args: defaultArgs,
  render: ColorsTemplate,
};

export const Sizes = {
  args: defaultArgs,
  render: SizesTemplate,
};

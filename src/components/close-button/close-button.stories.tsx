import type {CloseButtonProps} from "./index";
import type {Meta} from "@storybook/react-vite";

import {Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {CloseButton} from "./index";

export default {
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  component: CloseButton,
  parameters: {
    layout: "centered",
  },
  title: "Components/Buttons/CloseButton",
} as Meta<typeof CloseButton>;

const defaultArgs: CloseButtonProps = {
  disabled: false,
};

const Template = (args: CloseButtonProps) => (
  <Flex gap="3">
    <CloseButton {...args} />
  </Flex>
);

const TemplateWithCustomIcon = (args: CloseButtonProps) => (
  <Flex gap="3">
    <CloseButton {...args}>
      <Icon icon="gravity-ui:circle-xmark" />
    </CloseButton>
  </Flex>
);

const InteractiveTemplate = (args: CloseButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <Flex align="center" direction="column" gap="4" justify="center">
      <CloseButton
        {...args}
        aria-label={`Close (clicked ${count} times)`}
        onClick={() => setCount(count + 1)}
      />

      <Text as="span" fontSize="sm">
        Clicked: {count} times
      </Text>
    </Flex>
  );
};

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const WithCustomIcon = {
  args: defaultArgs,
  render: TemplateWithCustomIcon,
};

export const Interactive = {
  args: defaultArgs,
  render: InteractiveTemplate,
};

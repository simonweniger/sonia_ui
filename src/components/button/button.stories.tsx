import type {Meta} from "@storybook/react-vite";

import {Box, Flex} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {Spinner} from "../spinner";

import {Button} from "./index";

export default {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: [
        "solid",
        "subtle",
        "surface",
        "outline",
        "ghost",
        "plain",
        "glass",
        "primary",
        "secondary",
        "tertiary",
        "danger",
        "danger-soft",
      ],
    },
    colorPalette: {
      control: "select",
      options: ["accent", "gray", "red", "green", "blue", "orange"],
    },
  },
  component: Button,
  parameters: {
    layout: "centered",
  },
  title: "Components/Buttons/Button",
} as Meta<typeof Button>;

const defaultArgs: Button["RootProps"] = {
  size: "md",
};

const Template = ({disabled, size}: Button["RootProps"]) => (
  <Flex flexWrap="wrap" gap="3">
    <Button disabled={disabled} size={size} variant="primary">
      Primary
    </Button>
    <Button disabled={disabled} size={size} variant="secondary">
      Secondary
    </Button>
    <Button disabled={disabled} size={size} variant="tertiary">
      Tertiary
    </Button>
    <Button disabled={disabled} size={size} variant="outline">
      Outline
    </Button>
    <Button disabled={disabled} size={size} variant="ghost">
      Ghost
    </Button>
    <Button disabled={disabled} size={size} variant="danger">
      Danger
    </Button>
    <Button disabled={disabled} size={size} variant="danger-soft">
      Danger Soft
    </Button>
    <Button disabled={disabled} size={size} variant="glass">
      Glass
    </Button>
  </Flex>
);

const TemplateWithIcon = ({disabled, size}: Button["RootProps"]) => (
  <Flex gap="3">
    <Button disabled={disabled} size={size}>
      <Icon icon="gravity-ui:globe" />
      Search
    </Button>
    <Button disabled={disabled} size={size} variant="subtle">
      <Icon icon="gravity-ui:plus" />
      Add Member
    </Button>
    <Button disabled={disabled} size={size} variant="outline">
      <Icon icon="gravity-ui:envelope" />
      Email
    </Button>
    <Button disabled={disabled} size={size} variant="ghost">
      <Icon icon="gravity-ui:trash-bin" />
      Delete
    </Button>
  </Flex>
);

const TemplateWithIconOnly = ({disabled, size, variant}: Button["RootProps"]) => (
  <Flex gap="3">
    <Button isIconOnly disabled={disabled} size={size} variant={variant ?? "ghost"}>
      <Icon icon="gravity-ui:ellipsis" />
    </Button>
  </Flex>
);

const TemplateWithSpinner = ({size, variant}: Button["RootProps"]) => (
  <Flex gap="3">
    <Button disabled size={size} variant={variant}>
      <Spinner color="current" size="sm" />
      Loading
    </Button>
  </Flex>
);

const TemplateWithLoadingState = ({size, variant}: Button["RootProps"]) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  };

  return (
    <Button disabled={isLoading} size={size} variant={variant ?? "ghost"} onClick={handleClick}>
      {isLoading ? <Spinner color="current" size="sm" /> : <Icon icon="gravity-ui:paperclip" />}
      {isLoading ? "Uploading..." : "Upload File"}
    </Button>
  );
};

const SizesTemplate = () => (
  <Flex direction="column" gap="6">
    <Flex align="center" gap="3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Flex>
    <Flex align="center" gap="3">
      <Button size="sm" variant="secondary">
        <Icon icon="gravity-ui:plus" />
        Small
      </Button>
      <Button size="md" variant="secondary">
        <Icon icon="gravity-ui:plus" />
        Medium
      </Button>
      <Button size="lg" variant="secondary">
        <Icon icon="gravity-ui:plus" />
        Large
      </Button>
    </Flex>
    <Flex align="center" gap="3">
      <Button isIconOnly colorPalette="gray" size="sm" variant="subtle">
        <Icon icon="gravity-ui:ellipsis" />
      </Button>
      <Button isIconOnly colorPalette="gray" size="md" variant="subtle">
        <Icon icon="gravity-ui:ellipsis" />
      </Button>
      <Button isIconOnly colorPalette="gray" size="lg" variant="subtle">
        <Icon icon="gravity-ui:ellipsis" />
      </Button>
    </Flex>
  </Flex>
);

const TemplateWithSocialButton = ({size, variant}: Button["RootProps"]) => (
  <Flex direction="column" gap="3" maxW="xs" width="full">
    <Button size={size} variant={variant ?? "ghost"}>
      <Icon icon="devicon:google" />
      Sign in with Google
    </Button>
    <Button size={size} variant={variant ?? "ghost"}>
      <Icon icon="mdi:github" />
      Sign in with GitHub
    </Button>
    <Button size={size} variant={variant ?? "ghost"}>
      <Icon icon="ion:logo-apple" />
      Sign in with Apple
    </Button>
    <Button size={size} variant={variant ?? "ghost"}>
      <Icon icon="typcn:social-linkedin" />
      Sign in with LinkedIn
    </Button>
  </Flex>
);

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const Sizes = {
  args: {
    variant: "solid",
  },
  render: SizesTemplate,
};

export const FullWidth = {
  render: () => (
    <Box spaceY="3" width="400px">
      <Button fullWidth>Solid</Button>
      <Button fullWidth variant="subtle">
        Subtle
      </Button>
      <Button fullWidth variant="ghost">
        Ghost
      </Button>
      <Button fullWidth size="sm">
        Small
      </Button>
      <Button fullWidth size="lg">
        Large
      </Button>
      <Button fullWidth>
        <Icon icon="gravity-ui:plus" />
        With Icon
      </Button>
    </Box>
  ),
};

export const WithIcon = {
  args: defaultArgs,
  render: TemplateWithIcon,
};

export const WithIconOnly = {
  args: defaultArgs,
  render: TemplateWithIconOnly,
};

export const WithSpinner = {
  args: defaultArgs,
  render: TemplateWithSpinner,
};

export const WithLoadingState = {
  args: defaultArgs,
  render: TemplateWithLoadingState,
};

export const WithSocialButton = {
  args: defaultArgs,
  render: TemplateWithSocialButton,
};

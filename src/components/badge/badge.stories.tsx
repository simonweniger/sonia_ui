import type {BadgeProps} from "./index";
import type {Meta} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Avatar} from "../avatar";
import {Separator} from "../separator";

import {Badge} from "./index";

export default {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "subtle", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  component: Badge,
  parameters: {
    layout: "centered",
  },
  title: "Components/Data Display/Badge",
} as Meta<typeof Badge>;

const AVATAR_URL = "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg";

const defaultArgs: BadgeProps = {
  variant: "solid",
  size: "sm",
};

const Template = (props: BadgeProps) => (
  <Badge.Anchor>
    <Avatar>
      <Avatar.Image src={AVATAR_URL} />
    </Avatar>
    <Badge {...props}>5</Badge>
  </Badge.Anchor>
);

const SizesTemplate = (props: BadgeProps) => (
  <Flex align="center" gap="8">
    <Flex align="center" direction="column" gap="2">
      <Badge.Anchor>
        <Avatar size="lg">
          <Avatar.Image src={AVATAR_URL} />
        </Avatar>
        <Badge {...props} size="lg">
          99+
        </Badge>
      </Badge.Anchor>
      <Text as="span" color="fg.muted" fontSize="xs">
        Large
      </Text>
    </Flex>
    <Flex align="center" direction="column" gap="2">
      <Badge.Anchor>
        <Avatar size="md">
          <Avatar.Image src={AVATAR_URL} />
        </Avatar>
        <Badge {...props} size="md">
          99+
        </Badge>
      </Badge.Anchor>
      <Text as="span" color="fg.muted" fontSize="xs">
        Medium
      </Text>
    </Flex>
    <Flex align="center" direction="column" gap="2">
      <Badge.Anchor>
        <Avatar size="sm">
          <Avatar.Image src={AVATAR_URL} />
        </Avatar>
        <Badge {...props} size="sm">
          99+
        </Badge>
      </Badge.Anchor>
      <Text as="span" color="fg.muted" fontSize="xs">
        Small
      </Text>
    </Flex>
  </Flex>
);

const ColorPalettesTemplate = (props: BadgeProps) => {
  const palettes = ["accent", "gray", "green", "orange", "red"] as const;

  return (
    <Flex align="center" gap="8">
      {palettes.map((palette) => (
        <Flex key={palette} align="center" direction="column" gap="2">
          <Badge.Anchor>
            <Avatar>
              <Avatar.Image src={AVATAR_URL} />
            </Avatar>
            <Badge {...props} colorPalette={palette} />
          </Badge.Anchor>
          <Text as="span" color="fg.muted" fontSize="xs" textTransform="capitalize">
            {palette}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

const WithContentTemplate = (props: BadgeProps) => (
  <Flex align="center" gap="8">
    <Flex align="center" direction="column" gap="2">
      <Badge.Anchor>
        <Avatar>
          <Avatar.Image src={AVATAR_URL} />
        </Avatar>
        <Badge {...props} colorPalette="red">
          5
        </Badge>
      </Badge.Anchor>
      <Text as="span" color="fg.muted" fontSize="xs">
        Number
      </Text>
    </Flex>
    <Flex align="center" direction="column" gap="2">
      <Badge.Anchor>
        <Avatar>
          <Avatar.Image src={AVATAR_URL} />
        </Avatar>
        <Badge {...props} colorPalette="red">
          New
        </Badge>
      </Badge.Anchor>
      <Text as="span" color="fg.muted" fontSize="xs">
        Text
      </Text>
    </Flex>
    <Flex align="center" direction="column" gap="2">
      <Badge.Anchor>
        <Avatar>
          <Avatar.Image src={AVATAR_URL} />
        </Avatar>
        <Badge {...props} colorPalette="red">
          99+
        </Badge>
      </Badge.Anchor>
      <Text as="span" color="fg.muted" fontSize="xs">
        Overflow
      </Text>
    </Flex>
    <Flex align="center" direction="column" gap="2">
      <Badge.Anchor>
        <Avatar>
          <Avatar.Image src={AVATAR_URL} />
        </Avatar>
        <Badge {...props} colorPalette="accent">
          <Icon icon="gravity-ui:bell" />
        </Badge>
      </Badge.Anchor>
      <Text as="span" color="fg.muted" fontSize="xs">
        Icon
      </Text>
    </Flex>
  </Flex>
);

const VariantsTemplate = () => {
  const variants = ["solid", "subtle", "outline"] as const;
  const palettes = ["accent", "gray", "green", "orange", "red"] as const;

  return (
    <Flex direction="column" gap="8">
      {variants.map((variant, index) => (
        <React.Fragment key={variant}>
          <Flex direction="column" gap="4">
            <Box
              as="h3"
              color="fg.muted"
              fontSize="sm"
              fontWeight="semibold"
              textTransform="capitalize"
            >
              {variant}
            </Box>
            <Flex align="center" gap="8">
              {palettes.map((palette) => (
                <Flex key={palette} align="center" direction="column" gap="2">
                  <Badge.Anchor>
                    <Avatar>
                      <Avatar.Image src={AVATAR_URL} />
                    </Avatar>
                    <Badge colorPalette={palette} size="sm" variant={variant}>
                      5
                    </Badge>
                  </Badge.Anchor>
                  <Text as="span" color="fg.muted" fontSize="xs" textTransform="capitalize">
                    {palette}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          {index < variants.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </Flex>
  );
};

const DotBadgeTemplate = () => {
  const palettes = ["accent", "green", "orange", "red"] as const;

  return (
    <Flex direction="column" gap="8">
      <Flex direction="column" gap="4">
        <Box as="h3" color="fg.muted" fontSize="sm" fontWeight="semibold">
          Status Indicators
        </Box>
        <Flex align="center" gap="8">
          {palettes.map((palette) => (
            <Badge.Anchor key={palette}>
              <Avatar size="sm">
                <Avatar.Image src={AVATAR_URL} />
              </Avatar>
              <Badge colorPalette={palette} size="sm" />
            </Badge.Anchor>
          ))}
        </Flex>
      </Flex>
      <Separator />
      <Flex direction="column" gap="4">
        <Box as="h3" color="fg.muted" fontSize="sm" fontWeight="semibold">
          Sizes
        </Box>
        <Flex align="center" gap="8">
          <Flex align="center" direction="column" gap="2">
            <Badge.Anchor>
              <Avatar size="lg">
                <Avatar.Image src={AVATAR_URL} />
              </Avatar>
              <Badge colorPalette="green" size="lg" />
            </Badge.Anchor>
            <Text as="span" color="fg.muted" fontSize="xs">
              Large
            </Text>
          </Flex>
          <Flex align="center" direction="column" gap="2">
            <Badge.Anchor>
              <Avatar size="md">
                <Avatar.Image src={AVATAR_URL} />
              </Avatar>
              <Badge colorPalette="green" size="md" />
            </Badge.Anchor>
            <Text as="span" color="fg.muted" fontSize="xs">
              Medium
            </Text>
          </Flex>
          <Flex align="center" direction="column" gap="2">
            <Badge.Anchor>
              <Avatar size="sm">
                <Avatar.Image src={AVATAR_URL} />
              </Avatar>
              <Badge colorPalette="green" size="sm" />
            </Badge.Anchor>
            <Text as="span" color="fg.muted" fontSize="xs">
              Small
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const Sizes = {
  args: defaultArgs,
  render: SizesTemplate,
};

export const ColorPalettes = {
  args: defaultArgs,
  render: ColorPalettesTemplate,
};

export const WithContent = {
  args: defaultArgs,
  render: WithContentTemplate,
};

export const Variants = {
  render: VariantsTemplate,
};

export const DotBadge = {
  render: DotBadgeTemplate,
};

import type {ChipProps} from "./index";
import type {Meta} from "@storybook/react";

import {Icon} from "@iconify/react";
import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

import {Separator} from "../separator";

import {Chip} from "./index";

export default {
  argTypes: {
    color: {
      control: "select",
      options: ["accent", "default", "success", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "soft", "solid", "subtle", "outline", "surface"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  component: Chip,
  parameters: {
    layout: "centered",
  },
  title: "Components/Data Display/Chip",
} as Meta<typeof Chip>;

const defaultArgs: ChipProps = {
  children: "Label",
  color: "accent",
  variant: "subtle",
};

const Template = (props: ChipProps) => (
  <Flex align="center" gap="3">
    <Chip {...props}>Label</Chip>
  </Flex>
);

const SizesTemplate = (props: ChipProps) => (
  <Flex align="center" gap="3">
    <Chip {...props} size="sm">
      Small
    </Chip>
    <Chip {...props} size="md">
      Medium
    </Chip>
    <Chip {...props} size="lg">
      Large
    </Chip>
  </Flex>
);

const WithIconTemplate = (props: ChipProps) => (
  <Flex align="center" gap="3">
    <Chip {...props}>
      <Icon icon="gravity-ui:circle-dashed" />
      <Chip.Label>Label</Chip.Label>
      <Icon icon="gravity-ui:circle-dashed" />
    </Chip>
  </Flex>
);

const StatusesTemplate = (props: ChipProps) => {
  const variants = ["primary", "secondary", "tertiary", "soft"] as const;

  return (
    <Flex direction="column" gap="4">
      {variants.map((variant) => (
        <Flex key={variant} align="center" gap="3">
          <Chip {...props} variant={variant}>
            <Icon icon="gravity-ui:circle-fill" width={6} />
            <Chip.Label>Information</Chip.Label>
          </Chip>
          <Chip {...props} color="success" variant={variant}>
            <Icon icon="gravity-ui:circle-fill" width={6} />
            <Chip.Label>Completed</Chip.Label>
          </Chip>
          <Chip {...props} color="warning" variant={variant}>
            <Icon icon="gravity-ui:circle-fill" width={6} />
            <Chip.Label>Pending</Chip.Label>
          </Chip>
          <Chip {...props} color="danger" variant={variant}>
            <Icon icon="gravity-ui:circle-fill" width={6} />
            <Chip.Label>Failed</Chip.Label>
          </Chip>
        </Flex>
      ))}
    </Flex>
  );
};

const VariantsTemplate = (props: ChipProps) => {
  const sizes = ["lg", "md", "sm"] as const;
  const variants = ["primary", "secondary", "tertiary", "soft"] as const;
  const colors = ["accent", "default", "success", "warning", "danger"] as const;

  return (
    <Flex direction="column" gap="8">
      {sizes.map((size, index) => (
        <React.Fragment key={size}>
          <Flex direction="column" gap="4">
            <Box as="h3" fontSize="sm" fontWeight="semibold" color="fg.muted" textTransform="capitalize">{size}</Box>
            {/* Color labels header */}
            <Flex align="center" gap="3">
              <Box width="24" flexShrink="0" />
              {colors.map((color) => (
                <Flex
                  key={color}
                  flexShrink="0"
                  align="center"
                  justify="center"
                  style={{width: "130px"}}
                >
                  <Text as="span" fontSize="xs" color="fg.muted" textTransform="capitalize">{color}</Text>
                </Flex>
              ))}
            </Flex>
            <Flex direction="column" gap="3">
              {variants.map((variant) => (
                <Flex key={variant} align="center" gap="3">
                  <Box width="24" flexShrink="0" fontSize="sm" color="fg.muted" textTransform="capitalize">{variant}</Box>
                  {colors.map((color) => (
                    <Flex
                      key={color}
                      flexShrink="0"
                      align="center"
                      justify="center"
                      style={{width: "130px"}}
                    >
                      <Chip {...props} color={color} size={size} variant={variant}>
                        <Icon icon="gravity-ui:circle-dashed" />
                        <Chip.Label>Label</Chip.Label>
                        <Icon icon="gravity-ui:circle-dashed" />
                      </Chip>
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Flex>
          {index < sizes.length - 1 && <Separator />}
        </React.Fragment>
      ))}
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

export const WithIcon = {
  args: defaultArgs,
  render: WithIconTemplate,
};

export const Statuses = {
  args: defaultArgs,
  render: StatusesTemplate,
};

export const Variants = {
  args: defaultArgs,
  render: VariantsTemplate,
};

import type {Meta} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Button} from "../button";
import {Card} from "../card";

import {Tooltip} from "./index";

export default {
  argTypes: {
    offset: {
      control: "number",
    },
    placement: {
      control: "select",
      options: [
        "bottom",
        "bottom-start",
        "bottom-end",
        "top",
        "top-start",
        "top-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
    },
  },
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  title: "Components/Overlays/Tooltip",
} as Meta<typeof Tooltip>;

const defaultArgs: Omit<Tooltip["ContentProps"], "children"> = {
  showArrow: true,
};

const Template = (props: Tooltip["ContentProps"]) => (
  <Flex align="center" gap="3" justify="center">
    <Tooltip openDelay={0}>
      <Tooltip.Trigger>
        <Button isIconOnly variant="ghost">
          <Icon icon="gravity-ui:circle-info" />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content {...props}>
        <Tooltip.Arrow />
        <Text>Tooltip content</Text>
      </Tooltip.Content>
    </Tooltip>
  </Flex>
);

const TemplateWithTrigger = (props: Tooltip["ContentProps"]) => (
  <Flex align="center" gap="3">
    <Tooltip openDelay={0}>
      <Tooltip.Trigger aria-label="Tooltip trigger">
        <Box bg="accent.soft" p="2" rounded="full">
          <Icon icon="gravity-ui:circle-info" />
        </Box>
      </Tooltip.Trigger>
      <Tooltip.Content {...props}>
        <Tooltip.Arrow />
        <Text>Tooltip content</Text>
      </Tooltip.Content>
    </Tooltip>
  </Flex>
);

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const WithTrigger = {
  args: defaultArgs,
  render: TemplateWithTrigger,
};

const CardWithTooltipTemplate = (props: Tooltip["ContentProps"]) => (
  <Card width="200px">
    <Card.Content alignItems="center" display="flex" justifyContent="center" p="6">
      <Tooltip openDelay={0}>
        <Tooltip.Trigger aria-label="Attach a file">
          <Button isIconOnly aria-label="Attach file" rounded="full" size="lg" variant="outline">
            <Icon icon="gravity-ui:paperclip" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content {...props}>
          <Tooltip.Arrow />
          <Text>Attach a file</Text>
        </Tooltip.Content>
      </Tooltip>
    </Card.Content>
  </Card>
);

export const CardWithTooltip = {
  args: defaultArgs,
  render: CardWithTooltipTemplate,
};

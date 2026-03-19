import type {Meta} from "@storybook/react";

import {Icon} from "@iconify/react";
import React from "react";

import {Box, Flex, Text} from "@chakra-ui/react";

import {Avatar} from "../avatar";
import {Button} from "../button";
import {Card} from "../card";

import {Popover} from "./index";

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
  component: Popover,
  parameters: {
    layout: "centered",
  },
  title: "Components/Overlays/Popover",
} as Meta<typeof Popover>;

const defaultArgs: Omit<Popover["ContentProps"], "children"> = {};

const Template = (props: Popover["ContentProps"]) => (
  <Flex align="center" gap="3">
    <Popover>
      <Popover.Trigger>
        <Button isIconOnly aria-label="Popover trigger" variant="ghost">
          <Icon icon="gravity-ui:circle-info" />
        </Button>
      </Popover.Trigger>
      <Popover.Content {...props}>
        <Popover.Body>
          <Popover.Heading>Popover heading</Popover.Heading>
          <Text>This is the popover content</Text>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  </Flex>
);

const TemplateWithArrow = (props: Popover["ContentProps"]) => (
  <Flex align="center" gap="3">
    <Popover>
      <Popover.Trigger>
        <Button isIconOnly aria-label="Popover trigger" variant="ghost">
          <Icon icon="gravity-ui:circle-info" />
        </Button>
      </Popover.Trigger>
      <Popover.Content {...props}>
        <Popover.Arrow />
        <Popover.Body>
          <Popover.Heading>Popover heading</Popover.Heading>
          <Text>This is the popover content</Text>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  </Flex>
);

const TemplateWithCustomContent = (props: Popover["ContentProps"]) => {
  const [isFollowing, setIsFollowing] = React.useState(false);

  return (
    <Flex align="center" gap="3">
      <Popover>
        <Popover.Trigger aria-label="Popover trigger">
          <Flex align="center" gap="2">
            <Avatar size="sm">
              <Avatar.Image alt="Zoe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=5" />
              <Avatar.Fallback>Z</Avatar.Fallback>
            </Avatar>
            <Flex direction="column" gap="0">
              <Text fontSize="sm" lineHeight="5" fontWeight="medium">Zoe</Text>
              <Text fontSize="xs" lineHeight="none" color="fg.muted">zoe@heroui.com</Text>
            </Flex>
          </Flex>
        </Popover.Trigger>
        <Popover.Content {...props} width="290px">
          <Popover.Body>
            <Flex direction="column" gap="3">
              <Popover.Heading>
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap="3">
                    <Avatar size="md">
                      <Avatar.Image
                        alt="Zoe"
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=5"
                      />
                      <Avatar.Fallback>Z</Avatar.Fallback>
                    </Avatar>
                    <Flex height="full" direction="column" alignItems="flex-start" justify="center">
                      <Text fontSize="sm" fontWeight="medium">Zoey Lang</Text>
                      <Text fontSize="sm" lineHeight="4" fontWeight="normal" letterSpacing="tight" color="fg.muted">
                        @zoe
                      </Text>
                    </Flex>
                  </Flex>
                  <Button
                    rounded="full"
                    fontSize="xs"
                    fontWeight="normal"
                    size="sm"
                    variant={isFollowing ? "ghost" : "solid"}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                </Flex>
              </Popover.Heading>
              <Box>
                <Text pl="px" fontSize="sm">
                  Design Engineer, @hero_ui lover she/her. SF Bay Area&nbsp;
                  <span aria-label="confetti" role="img">
                    🎉
                  </span>
                </Text>
              </Box>
              <Flex gap="3">
                <Flex gap="1">
                  <Text fontSize="sm" fontWeight="semibold">4</Text>
                  <Text fontSize="sm" color="fg.muted">Following</Text>
                </Flex>
                <Flex gap="1">
                  <Text fontSize="sm" fontWeight="semibold">97.1K</Text>
                  <Text fontSize="sm" color="fg.muted">Followers</Text>
                </Flex>
              </Flex>
            </Flex>
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </Flex>
  );
};

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const WithArrow = {
  args: defaultArgs,
  render: TemplateWithArrow,
};

export const WithCustomContent = {
  args: defaultArgs,
  render: TemplateWithCustomContent,
};

const SpringAnimationTemplate = (props: Popover["ContentProps"]) => (
  <Flex direction="column" align="center" gap="8" p="8">
    <Text as="h1" fontSize="xl" fontWeight="semibold">Popover with Spring Animation</Text>
    <Text fontSize="sm" color="fg.muted">
      The popover now uses a spring easing function for a more dynamic feel
    </Text>

    <Flex align="center" gap="8">
      <Popover>
        <Popover.Trigger>
          <Button>Click for Spring Animation</Button>
        </Popover.Trigger>
        <Popover.Content
          {...props}
          className="data-[entering]:ease-spring data-[entering]:animate-in data-[entering]:duration-600 data-[entering]:fade-in-0 data-[entering]:zoom-in-90"
        >
          <Popover.Arrow />
          <Popover.Body>
            <Popover.Heading>Spring Animation 🎉</Popover.Heading>
            <Text mt="2" fontSize="sm" color="fg.muted">
              Notice the subtle bounce effect when the popover appears and disappears.
            </Text>
            <Text mt="4" fontSize="xs" color="fg.muted">Easing: cubic-bezier(0.36, 1.66, 0.04, 1)</Text>
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </Flex>

    <Box spaceY="1" textAlign="center" fontSize="xs" color="fg.muted">
      <Text>Animation classes applied:</Text>
      <Box as="code" rounded="md" bg="surface" px="2" py="1" fontSize="xs">
        data-[entering]:animate-in data-[entering]:zoom-in-90 data-[entering]:fade-in-0
        data-[entering]:ease-spring data-[entering]:duration-600
      </Box>
    </Box>
  </Flex>
);

export const SpringAnimation = {
  args: defaultArgs,
  render: SpringAnimationTemplate,
};

const CardWithHelptextTemplate = (props: Popover["ContentProps"]) => (
  <Card width="400px">
    <Card.Header>
      <Flex align="center" gap="2">
        <Card.Title>Card Title</Card.Title>
        <Popover>
          <Popover.Trigger aria-label="Help information">
            <Button isIconOnly aria-label="Help" size="sm" variant="ghost">
              <Icon style={{color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:circle-info" />
            </Button>
          </Popover.Trigger>
          <Popover.Content {...props} maxW="200px">
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Heading>Help Information</Popover.Heading>
              <Text fontSize="sm" color="fg.muted">
                This is a helptext popover that appears on top of the card surface. It provides
                additional context or information about the card title.
              </Text>
            </Popover.Body>
          </Popover.Content>
        </Popover>
      </Flex>
      <Card.Description>
        This card demonstrates how a popover looks when displayed on top of a card surface.
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <Text fontSize="sm">
        The popover help icon is positioned right after the title, allowing users to access
        additional information without cluttering the main content area.
      </Text>
    </Card.Content>
  </Card>
);

export const CardWithHelptext = {
  args: defaultArgs,
  render: CardWithHelptextTemplate,
};

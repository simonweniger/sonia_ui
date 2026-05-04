import type {Meta} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

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
              <Avatar.Image alt="Zoe" src="https://img.soniaui.chat/image/avatar?w=400&h=400&u=5" />
              <Avatar.Fallback>Z</Avatar.Fallback>
            </Avatar>
            <Flex direction="column" gap="0">
              <Text fontSize="sm" fontWeight="medium" lineHeight="5">
                Zoe
              </Text>
              <Text color="fg.muted" fontSize="xs" lineHeight="none">
                zoe@sonia.so
              </Text>
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
                        src="https://img.soniaui.chat/image/avatar?w=400&h=400&u=5"
                      />
                      <Avatar.Fallback>Z</Avatar.Fallback>
                    </Avatar>
                    <Flex alignItems="flex-start" direction="column" height="full" justify="center">
                      <Text fontSize="sm" fontWeight="medium">
                        Zoey Lang
                      </Text>
                      <Text
                        color="fg.muted"
                        fontSize="sm"
                        fontWeight="normal"
                        letterSpacing="tight"
                        lineHeight="4"
                      >
                        @zoe
                      </Text>
                    </Flex>
                  </Flex>
                  <Button
                    fontSize="xs"
                    fontWeight="normal"
                    rounded="full"
                    size="sm"
                    variant={isFollowing ? "ghost" : "solid"}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                </Flex>
              </Popover.Heading>
              <Box>
                <Text fontSize="sm" pl="px">
                  Design Engineer, @hero_ui lover she/her. SF Bay Area&nbsp;
                  <span aria-label="confetti" role="img">
                    🎉
                  </span>
                </Text>
              </Box>
              <Flex gap="3">
                <Flex gap="1">
                  <Text fontSize="sm" fontWeight="semibold">
                    4
                  </Text>
                  <Text color="fg.muted" fontSize="sm">
                    Following
                  </Text>
                </Flex>
                <Flex gap="1">
                  <Text fontSize="sm" fontWeight="semibold">
                    97.1K
                  </Text>
                  <Text color="fg.muted" fontSize="sm">
                    Followers
                  </Text>
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
  <Flex align="center" direction="column" gap="8" p="8">
    <Text as="h1" fontSize="xl" fontWeight="semibold">
      Popover with Spring Animation
    </Text>
    <Text color="fg.muted" fontSize="sm">
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
            <Text color="fg.muted" fontSize="sm" mt="2">
              Notice the subtle bounce effect when the popover appears and disappears.
            </Text>
            <Text color="fg.muted" fontSize="xs" mt="4">
              Easing: cubic-bezier(0.36, 1.66, 0.04, 1)
            </Text>
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </Flex>

    <Box color="fg.muted" fontSize="xs" spaceY="1" textAlign="center">
      <Text>Animation classes applied:</Text>
      <Box as="code" bg="surface" fontSize="xs" px="2" py="1" rounded="md">
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
              <Icon
                icon="gravity-ui:circle-info"
                style={{color: "var(--chakra-colors-fg-muted)"}}
              />
            </Button>
          </Popover.Trigger>
          <Popover.Content {...props} maxW="200px">
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Heading>Help Information</Popover.Heading>
              <Text color="fg.muted" fontSize="sm">
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

import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Button} from "../button";
import {Chip} from "../chip";
import {Description} from "../description";
import {Dropdown} from "../dropdown";
import {Label} from "../label";

import {ButtonGroup} from "./";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Buttons/ButtonGroup",
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Small
        </Text>
        <ButtonGroup size="sm">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Medium (default)
        </Text>
        <ButtonGroup size="md">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Large
        </Text>
        <ButtonGroup size="lg">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box spaceY="3" width="400px">
      <ButtonGroup fullWidth>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
      <ButtonGroup fullWidth>
        <Button isIconOnly>
          <Icon icon="gravity-ui:text-align-left" />
        </Button>
        <Button isIconOnly>
          <Icon icon="gravity-ui:text-align-center" />
        </Button>
        <Button isIconOnly>
          <Icon icon="gravity-ui:text-align-right" />
        </Button>
      </ButtonGroup>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Primary
        </Text>
        <ButtonGroup variant="primary">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Secondary
        </Text>
        <ButtonGroup variant="secondary">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Tertiary
        </Text>
        <ButtonGroup variant="tertiary">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Outline
        </Text>
        <ButtonGroup variant="outline">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Ghost
        </Text>
        <ButtonGroup variant="ghost">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Danger
        </Text>
        <ButtonGroup variant="danger">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          All buttons disabled
        </Text>
        <ButtonGroup isDisabled>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Group disabled, but one button overrides
        </Text>
        <ButtonGroup isDisabled>
          <Button>First</Button>
          <Button>Second</Button>
          <Button isDisabled={false}>Third (enabled)</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          With icons
        </Text>
        <ButtonGroup variant="subtle">
          <Button>
            <Icon icon="gravity-ui:globe" />
            Search
          </Button>
          <Button>
            <Icon icon="gravity-ui:plus" />
            Add
          </Button>
          <Button>
            <Icon icon="gravity-ui:trash-bin" />
            Delete
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Icon only buttons
        </Text>
        <ButtonGroup variant="ghost">
          <Button isIconOnly>
            <Icon icon="gravity-ui:globe" />
          </Button>
          <Button isIconOnly>
            <Icon icon="gravity-ui:plus" />
          </Button>
          <Button isIconOnly>
            <Icon icon="gravity-ui:trash-bin" />
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  ),
};

export const WithoutSeparator: Story = {
  render: () => (
    <ButtonGroup hideSeparator>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  ),
};

export const Examples: Story = {
  render: () => (
    <Flex align="start" direction="column" gap="8">
      {/* Single button with dropdown */}
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Single button with dropdown
        </Text>
        <ButtonGroup variant="primary">
          <Button>Merge pull request</Button>
          <Dropdown>
            <Dropdown.Trigger>
              <Button isIconOnly aria-label="More options">
                <Icon icon="gravity-ui:chevron-down" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content maxW="290px">
              <Dropdown.Item value="merge">
                <Flex align="start" direction="column" gap="1">
                  <Label>Create a merge commit</Label>
                  <Description>
                    All commits from this branch will be added to the base branch
                  </Description>
                </Flex>
              </Dropdown.Item>
              <Dropdown.Item value="squash-and-merge">
                <Flex align="start" direction="column" gap="1">
                  <Label>Squash and merge</Label>
                  <Description>
                    The 14 commits from this branch will be combined into one commit in the base
                    branch
                  </Description>
                </Flex>
              </Dropdown.Item>
              <Dropdown.Item value="rebase-and-merge">
                <Flex align="start" direction="column" gap="1">
                  <Label>Rebase and merge</Label>
                  <Description>
                    The 14 commits from this branch will be rebased and added to the base branch
                  </Description>
                </Flex>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </ButtonGroup>
      </Flex>

      {/* Individual buttons */}
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Individual buttons
        </Text>
        <Flex gap="2">
          <ButtonGroup variant="tertiary">
            <Button>
              <Icon icon="gravity-ui:code-fork" style={{width: "0.875rem", height: "0.875rem"}} />
              Fork
              <Chip color="accent" size="sm" variant="soft">
                24
              </Chip>
            </Button>
            <Button isIconOnly>
              <Icon icon="gravity-ui:chevron-down" />
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="tertiary">
            <Button isIconOnly>
              <Icon icon="gravity-ui:qr-code" />
            </Button>
            <Button>Scan to pay</Button>
          </ButtonGroup>
          <ButtonGroup variant="tertiary">
            <Button>
              <Icon icon="gravity-ui:thumbs-up" />
              <Text as="span" fontSize="xs" fontWeight="semibold">
                2.4K
              </Text>
            </Button>
            <Button isIconOnly>
              <Icon icon="gravity-ui:thumbs-down" />
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="tertiary">
            <Button>
              <Icon icon="gravity-ui:star" style={{width: "0.875rem", height: "0.875rem"}} />
              Star
            </Button>
            <Button px="2">
              <Chip color="accent" size="sm" variant="soft">
                104
              </Chip>
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="tertiary">
            <Button>
              <Icon icon="gravity-ui:pin" />
              Pinned
            </Button>
            <Button isIconOnly>
              <Icon icon="gravity-ui:chevron-down" />
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>

      {/* Previous/Next Button Group */}
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Previous/Next navigation
        </Text>
        <ButtonGroup variant="tertiary">
          <Button>
            <Icon icon="gravity-ui:chevron-left" />
            Previous
          </Button>
          <Button>
            Next
            <Icon icon="gravity-ui:chevron-right" />
          </Button>
        </ButtonGroup>
      </Flex>

      {/* Content Selection Button Group */}
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Content selection
        </Text>
        <ButtonGroup variant="tertiary">
          <Button>
            <Icon icon="gravity-ui:picture" />
            Photos
          </Button>
          <Button>
            <Icon icon="gravity-ui:video" />
            Videos
          </Button>
          <Button isIconOnly aria-label="More options">
            <Icon icon="gravity-ui:ellipsis" />
          </Button>
        </ButtonGroup>
      </Flex>

      {/* Text Alignment Button Group */}
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Text alignment
        </Text>
        <ButtonGroup variant="tertiary">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Flex>

      {/* Icon-Only Alignment Button Group */}
      <Flex direction="column" gap="2">
        <Text color="fg.muted" fontSize="sm">
          Icon-only alignment
        </Text>
        <ButtonGroup variant="tertiary">
          <Button isIconOnly>
            <Icon icon="gravity-ui:text-align-left" />
          </Button>
          <Button isIconOnly>
            <Icon icon="gravity-ui:text-align-center" />
          </Button>
          <Button isIconOnly>
            <Icon icon="gravity-ui:text-align-right" />
          </Button>
          <Button isIconOnly>
            <Icon icon="gravity-ui:text-align-justify" />
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  ),
};

import type {Meta, StoryObj} from "@storybook/react";

import {Icon} from "@iconify/react";
import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

import {Button} from "../button";
import {Chip} from "../chip";

import {Disclosure} from "./index";

export default {
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    open: {
      control: {
        type: "boolean",
      },
    },
  },
  component: Disclosure,
  parameters: {
    layout: "centered",
  },
  title: "Components/Navigation/Disclosure",
} as Meta<typeof Disclosure>;

const defaultArgs: Disclosure["RootProps"] = {
  disabled: false,
  open: false,
};

const Template = (props: Disclosure["RootProps"]) => {
  const [isOpen, setIsOpen] = React.useState(props.open ?? false);

  return (
    <Box width="full" maxW="md" textAlign="center">
      <Disclosure {...props} open={isOpen} onOpenChange={({open}) => setIsOpen(open)}>
        <Disclosure.Heading>
          <Button slot="trigger" variant="outline">
            <Icon icon="gravity-ui:qr-code" />
            Preview HeroUI Native
            <Disclosure.Indicator />
          </Button>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body style={{display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "var(--radii-3xl)", background: "var(--colors-bg-surface)", padding: "var(--spacing-4)", textAlign: "center", boxShadow: "var(--shadows-surface)"}}>
            <Text fontSize="sm" color="fg.muted">
              Scan this QR code with your camera app to preview the HeroUI native components.
            </Text>
            <img
              alt="Expo Go QR Code"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
              style={{aspectRatio: "1/1", width: "100%", maxWidth: "13.5rem", objectFit: "cover"}}
            />
            <Text fontSize="sm" color="fg.muted">Expo must be installed on your device.</Text>
            <Button mt="4" variant="solid">
              <Icon icon="tabler:brand-apple-filled" />
              Download on App Store
            </Button>
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </Box>
  );
};

const ControlledTemplate = (props: Disclosure["RootProps"]) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box width="full" maxW="md" spaceY="4">
      <Flex align="center" gap="4">
        <Button variant="solid" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Collapse" : "Expand"} from outside
        </Button>
        <Chip color={isOpen ? "success" : "default"}>
          State: {isOpen ? "Expanded" : "Collapsed"}
        </Chip>
      </Flex>
      <Disclosure {...props} open={isOpen} onOpenChange={({open}) => setIsOpen(open)}>
        <Disclosure.Trigger style={{marginBottom: "0.5rem", display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", borderRadius: "var(--radii-md)", border: "1px solid var(--colors-gray-300)", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", textAlign: "left"}}>
          <span>Toggle content</span>
          <Icon
            className="transition-transform duration-200 data-[state=open]:rotate-180"
            icon="gravity-ui:chevron-down"
            style={{width: "1rem", height: "1rem"}}
          />
        </Disclosure.Trigger>
        <Disclosure.Content>
          <Disclosure.Body style={{borderRadius: "var(--radii-lg)", border: "1px solid var(--colors-border)", padding: "1rem"}}>
            <Text fontSize="sm">
              This disclosure is controlled from outside. You can toggle it using the button above
              or by clicking the trigger.
            </Text>
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </Box>
  );
};

const ProductDetailsTemplate = (props: Disclosure["RootProps"]) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box width="full" maxW="md">
      <Disclosure {...props} open={isOpen} onOpenChange={({open}) => setIsOpen(open)}>
        <Disclosure.Trigger style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", borderRadius: "var(--radii-md)", border: "1px solid var(--colors-gray-300)", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", textAlign: "left"}}>
          <Flex as="span" align="center" gap="2">
            <Icon icon="gravity-ui:box" />
            View product details
          </Flex>
          <Icon
            className="transition-transform duration-200"
            icon={isOpen ? "gravity-ui:chevron-up" : "gravity-ui:chevron-down"}
            style={{width: "1rem", height: "1rem"}}
          />
        </Disclosure.Trigger>
        <Disclosure.Content>
          <Disclosure.Body style={{paddingTop: "0.5rem"}}>
            <Box spaceY="4" rounded="lg" borderWidth="1px" p="4">
              <Text as="h3" fontSize="lg" fontWeight="semibold">Product Details</Text>
              <Box display="grid" gap="2" fontSize="sm">
                <Flex justify="space-between">
                  <Text as="span" color="fg.muted">Material:</Text>
                  <span>100% Cotton</span>
                </Flex>
                <Flex justify="space-between">
                  <Text as="span" color="fg.muted">Size:</Text>
                  <span>Medium (38-40)</span>
                </Flex>
                <Flex justify="space-between">
                  <Text as="span" color="fg.muted">Color:</Text>
                  <span>Navy Blue</span>
                </Flex>
                <Flex justify="space-between">
                  <Text as="span" color="fg.muted">Care:</Text>
                  <span>Machine wash cold</span>
                </Flex>
              </Box>
              <Flex gap="2" pt="2">
                <Chip color="success">Free Shipping</Chip>
                <Chip color="accent">1 Year Warranty</Chip>
                <Chip color="warning">Eco-Friendly</Chip>
              </Flex>
            </Box>
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </Box>
  );
};

export const Default: StoryObj<typeof Disclosure> = {
  args: {
    ...defaultArgs,
  },
  render: Template,
};

export const Controlled: StoryObj<typeof Disclosure> = {
  args: {
    ...defaultArgs,
  },
  render: ControlledTemplate,
};

export const ProductDetails: StoryObj<typeof Disclosure> = {
  args: {
    ...defaultArgs,
  },
  render: ProductDetailsTemplate,
};

export const InitiallyExpanded: StoryObj<typeof Disclosure> = {
  args: {
    ...defaultArgs,
    open: true,
  },
  render: Template,
};

export const Disabled: StoryObj<typeof Disclosure> = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  render: Template,
};

import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Accordion} from "./index";

export default {
  argTypes: {
    multiple: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  title: "Components/Navigation/Accordion",
} as Meta<typeof Accordion>;

const defaultArgs: Accordion["RootProps"] = {
  multiple: false,
  disabled: false,
};

const Wrapper = ({children}: {children: React.ReactNode}) => (
  <Box maxW="md" width="full">
    {children}
  </Box>
);

const Template = (props: Accordion["RootProps"]) => (
  <Wrapper>
    <Accordion {...props}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={`item-${index}`}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {item.icon ? (
                <Icon
                  icon={item.icon}
                  style={{
                    marginRight: "0.75rem",
                    width: "1rem",
                    height: "1rem",
                    flexShrink: 0,
                    color: "var(--colors-fg-muted)",
                  }}
                />
              ) : null}
              {item.title}
              <Accordion.Indicator>
                <Icon icon="gravity-ui:chevron-down" />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </Wrapper>
);

const CustomTemplate = (props: Accordion["RootProps"]) => (
  <Flex justify="center" px="4" py="8" width="full">
    <Box maxW="2xl" width="full">
      <Flex direction="column" gap="1">
        <Text as="h2" fontSize="2xl" fontWeight="bold">
          Frequently Asked Questions
        </Text>
        <Text color="fg.muted" fontSize="lg" fontWeight="medium" mb="4">
          Everything you need to know about licensing and usage.
        </Text>
      </Flex>
      <Flex direction="column" gap="6" mt="2">
        {categories.map((category) => (
          <Box key={category.title}>
            <Text color="fg.muted" fontSize="md" fontWeight="medium" mb="2">
              {category.title}
            </Text>
            <Box key={category.title}>
              <Accordion {...props} variant="surface" width="full">
                {category.items.map((item, index) => (
                  <Accordion.Item key={index} value={`item-${index}`}>
                    <Accordion.Heading>
                      <Accordion.Trigger>
                        {item.title}
                        <Accordion.Indicator>
                          <Icon icon="gravity-ui:chevron-down" />
                        </Accordion.Indicator>
                      </Accordion.Trigger>
                    </Accordion.Heading>
                    <Accordion.Panel>
                      <Accordion.Body>{item.content}</Accordion.Body>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  </Flex>
);

export const Default: StoryObj<typeof Accordion> = {
  args: {
    ...defaultArgs,
    multiple: true,
    collapsible: true,
  },
  render: Template,
};

export const SurfaceVariant: StoryObj<typeof Accordion> = {
  args: {
    ...defaultArgs,
    variant: "surface",
    multiple: true,
    collapsible: true,
  },
  render: (args: Accordion["RootProps"]) => (
    <Flex align="center" as="section" height="100vh" justify="center" width="100vw">
      <Template {...args} />
    </Flex>
  ),
};

export const Custom: StoryObj<typeof Accordion> = {
  args: {
    ...defaultArgs,
    multiple: true,
    collapsible: true,
  },
  render: (args: Accordion["RootProps"]) => (
    <Flex align="center" as="section" height="100vh" justify="center" width="100vw">
      <CustomTemplate {...args} />
    </Flex>
  ),
};

const WithoutSeparatorTemplate = ({...props}: Accordion["RootProps"]) => (
  <Wrapper>
    <Accordion {...props} className="[&_[data-slot=accordion-item]:not(:last-child)]:border-b-0">
      {items.map((item, index) => (
        <Accordion.Item key={index} value={`item-${index}`}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {item.icon ? (
                <Icon
                  icon={item.icon}
                  style={{
                    marginRight: "0.75rem",
                    width: "1rem",
                    height: "1rem",
                    flexShrink: 0,
                    color: "var(--colors-fg-muted)",
                  }}
                />
              ) : null}
              {item.title}
              <Accordion.Indicator>
                <Icon icon="gravity-ui:chevron-down" />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </Wrapper>
);

export const WithoutSeparator: StoryObj<typeof Accordion> = {
  args: {
    ...defaultArgs,
    multiple: true,
    collapsible: true,
  },
  render: WithoutSeparatorTemplate,
};

const items = [
  {
    content:
      "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
    icon: "gravity-ui:shopping-bag",
    title: "How do I place an order?",
  },
  {
    content:
      "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
    icon: "gravity-ui:receipt",
    title: "Can I modify or cancel my order?",
  },
  {
    content: "We accept all major credit cards, including Visa, Mastercard, and American Express.",
    icon: "gravity-ui:credit-card",
    title: "What payment methods do you accept?",
  },
  {
    content:
      "Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.",
    icon: "gravity-ui:box",
    title: "How much does shipping cost?",
  },
  {
    content:
      "Yes, we ship to most countries. Please check our shipping rates and policies for more information.",
    icon: "gravity-ui:planet-earth",
    title: "Do you ship internationally?",
  },
  {
    content:
      "If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",
    icon: "gravity-ui:arrows-rotate-left",
    title: "How do I request a refund?",
  },
];

const categories = [
  {
    title: "General",
    items: [
      {
        title: "How do I place an order?",
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
      {
        title: "Can I modify or cancel my order?",
        content:
          "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
      },
    ],
  },
  {
    title: "Licensing",
    items: [
      {
        title: "How do I purchase a license?",
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
      {
        title: "What is the difference between a standard and a pro license?",
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
    ],
  },
  {
    title: "Usage",
    items: [
      {
        title: "How do I use the SoniaUI icon set?",
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
      {
        title: "Can I use it with Tailwind CSS?",
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "How do I get support?",
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        title: "How do I get support?",
        content:
          "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
      },
    ],
  },
];

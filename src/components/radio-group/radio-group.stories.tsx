import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Button} from "../button";
import {Description} from "../description";
import {FieldError} from "../field-error";
import {Form} from "../form";
import {Label} from "../label";
import {Radio} from "../radio";

import {RadioGroup} from "./index";

export default {
  argTypes: {},
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  title: "Components/Forms/RadioGroup",
} as Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <Box px="4">
      <RadioGroup defaultValue="premium" name="plan">
        <Label>Plan selection</Label>
        <Description>Choose the plan that suits you best</Description>
        <Radio value="basic">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Basic Plan</Label>
            <Description>Includes 100 messages per month</Description>
          </Radio.Content>
        </Radio>
        <Radio value="premium">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Premium Plan</Label>
            <Description>Includes 200 messages per month</Description>
          </Radio.Content>
        </Radio>
        <Radio value="business">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Business Plan</Label>
            <Description>Unlimited messages</Description>
          </Radio.Content>
        </Radio>
      </RadioGroup>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="8" px="4">
      <Box display="flex" flexDirection="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Primary variant
        </Text>
        <RadioGroup defaultValue="option1" name="primary-plan" variant="primary">
          <Radio value="option1">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Option 1</Label>
              <Description>Standard styling with default background</Description>
            </Radio.Content>
          </Radio>
          <Radio value="option2">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Option 2</Label>
              <Description>Another option with primary styling</Description>
            </Radio.Content>
          </Radio>
        </RadioGroup>
      </Box>
      <Box display="flex" flexDirection="column" gap="2">
        <Text color="fg.muted" fontSize="sm" fontWeight="medium">
          Secondary variant
        </Text>
        <RadioGroup defaultValue="option1" name="secondary-plan" variant="secondary">
          <Radio value="option1">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Option 1</Label>
              <Description>Lower emphasis variant for use in surfaces</Description>
            </Radio.Content>
          </Radio>
          <Radio value="option2">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Option 2</Label>
              <Description>Another option with secondary styling</Description>
            </Radio.Content>
          </Radio>
        </RadioGroup>
      </Box>
    </Box>
  ),
};

export const WithCustomIndicator: Story = {
  render: () => (
    <Box px="4">
      <RadioGroup defaultValue="premium" name="plan">
        <Label>Plan selection</Label>
        <Description>Choose the plan that suits you best</Description>
        <Radio value="basic">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Basic Plan</Label>
            <Description>Includes 100 messages per month</Description>
          </Radio.Content>
        </Radio>
        <Radio value="premium">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Premium Plan</Label>
            <Description>Includes 200 messages per month</Description>
          </Radio.Content>
        </Radio>
        <Radio value="business">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Business Plan</Label>
            <Description>Unlimited messages</Description>
          </Radio.Content>
        </Radio>
      </RadioGroup>
    </Box>
  ),
};

export const Orientation: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4" px="4">
      <Label>Subscription plan</Label>
      <RadioGroup defaultValue="pro" name="plan-orientation" orientation="horizontal">
        <Radio value="starter">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Starter</Label>
            <Description>For side projects and small teams</Description>
          </Radio.Content>
        </Radio>
        <Radio value="pro">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Pro</Label>
            <Description>Advanced reporting and analytics</Description>
          </Radio.Content>
        </Radio>
        <Radio value="teams">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Teams</Label>
            <Description>Share access with up to 10 teammates</Description>
          </Radio.Content>
        </Radio>
      </RadioGroup>
    </Box>
  ),
};

export const Validation: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap="4" px="4">
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const value = formData.get("plan-validation");

            alert(`Your chosen plan is: ${value}`);
          }}
        >
          <RadioGroup required name="plan-validation">
            <Label>Subscription plan</Label>
            <Radio value="starter">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Starter</Label>
                <Description>For side projects and small teams</Description>
              </Radio.Content>
            </Radio>
            <Radio value="pro">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Pro</Label>
                <Description>Advanced reporting and analytics</Description>
              </Radio.Content>
            </Radio>
            <Radio value="teams">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Teams</Label>
                <Description>Share access with up to 10 teammates</Description>
              </Radio.Content>
            </Radio>
            <FieldError>Choose a subscription before continuing.</FieldError>
          </RadioGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Box>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("pro");

    return (
      <Box display="flex" flexDirection="column" gap="3" px="4">
        <RadioGroup
          name="plan-controlled"
          value={value}
          onValueChange={(e) => setValue(e.value ?? "")}
        >
          <Label>Subscription plan</Label>
          <Radio value="starter">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Starter</Label>
              <Description>For side projects and small teams</Description>
            </Radio.Content>
          </Radio>
          <Radio value="pro">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Pro</Label>
              <Description>Advanced reporting and analytics</Description>
            </Radio.Content>
          </Radio>
          <Radio value="teams">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Teams</Label>
              <Description>Share access with up to 10 teammates</Description>
            </Radio.Content>
          </Radio>
        </RadioGroup>
        <Text color="fg.muted" fontSize="sm" mt="2">
          Selected plan:{" "}
          <Text as="span" fontWeight="medium">
            {value}
          </Text>
        </Text>
      </Box>
    );
  },
};

export const Uncontrolled: Story = {
  render: () => {
    const [selection, setSelection] = React.useState("pro");

    return (
      <Box display="flex" flexDirection="column" gap="3" px="4">
        <RadioGroup
          defaultValue="pro"
          name="plan-uncontrolled"
          onValueChange={(e) => setSelection(e.value ?? "")}
        >
          <Label>Subscription plan</Label>
          <Radio value="starter">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Starter</Label>
              <Description>For side projects and small teams</Description>
            </Radio.Content>
          </Radio>
          <Radio value="pro">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Pro</Label>
              <Description>Advanced reporting and analytics</Description>
            </Radio.Content>
          </Radio>
          <Radio value="teams">
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Radio.Content>
              <Label>Teams</Label>
              <Description>Share access with up to 10 teammates</Description>
            </Radio.Content>
          </Radio>
        </RadioGroup>
        <Text color="fg.muted" fontSize="sm" mt="2">
          Last chosen plan:{" "}
          <Text as="span" fontWeight="medium">
            {selection}
          </Text>
        </Text>
      </Box>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Box px="4">
      <RadioGroup disabled defaultValue="pro" name="plan-disabled">
        <Label>Subscription plan</Label>
        <Description>Plan changes are temporarily paused while we roll out updates.</Description>
        <Radio value="starter">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Starter</Label>
            <Description>For side projects and small teams</Description>
          </Radio.Content>
        </Radio>
        <Radio value="pro">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Pro</Label>
            <Description>Advanced reporting and analytics</Description>
          </Radio.Content>
        </Radio>
        <Radio value="teams">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Teams</Label>
            <Description>Share access with up to 10 teammates</Description>
          </Radio.Content>
        </Radio>
      </RadioGroup>
    </Box>
  ),
};

export const DeliveryAndPaymentExample: Story = {
  render: () => {
    const deliveryOptions = [
      {
        description: "4-10 business days",
        price: "$5.00",
        value: "standard",
        title: "Standard",
      },
      {
        description: "2-5 business days",
        price: "$16.00",
        value: "express",
        title: "Express",
      },
      {
        description: "1 business day",
        price: "$25.00",
        value: "super-fast",
        title: "Super Fast",
      },
    ];

    const paymentOptions = [
      {
        title: "**** 8304",
        value: "mastercard",
        description: "Exp. on 01/2026",
        icon: "uim:master-card",
      },
      {
        title: "**** 0123",
        value: "visa",
        description: "Exp. on 01/2026",
        icon: "streamline-logos:visa-logo-solid",
      },
      {
        title: "PayPal",
        description: "Pay with PayPal",
        value: "paypal",
        icon: "ic:baseline-paypal",
      },
    ];

    return (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap="10"
        px="4"
        py="8"
        w="100%"
      >
        <Box as="section" display="flex" flexDirection="column" gap="4" maxW="lg" w="100%">
          <RadioGroup defaultValue="express" name="delivery">
            <Label>Delivery method</Label>
            <Box display="grid" gap="4" gridTemplateColumns={{md: "repeat(3, 1fr)"}}>
              {deliveryOptions.map((option) => (
                <Radio
                  key={option.value}
                  bg="surface-tertiary"
                  flexDirection="column"
                  gap="4"
                  position="relative"
                  px="5"
                  py="4"
                  rounded="xl"
                  transition="all"
                  value={option.value}
                  css={{
                    "&[data-selected=true]": {
                      borderColor: "var(--colors-accent)",
                      bg: "color-mix(in oklch, var(--colors-accent) 10%, transparent)",
                    },
                    "&[data-focus-visible=true]": {
                      bg: "color-mix(in oklch, var(--colors-accent) 10%, transparent)",
                    },
                  }}
                >
                  <Radio.Control boxSize="5" position="absolute" right="4" top="3">
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content display="flex" flexDirection="column" gap="6">
                    <Box display="flex" flexDirection="column" gap="1">
                      <Label>{option.title}</Label>
                      <Description>{option.description}</Description>
                    </Box>
                    <Text fontSize="sm" fontWeight="semibold">
                      {option.price}
                    </Text>
                  </Radio.Content>
                </Radio>
              ))}
            </Box>
          </RadioGroup>
        </Box>
        <Box as="section" display="flex" flexDirection="column" gap="4" maxW="lg" w="100%">
          <RadioGroup defaultValue="visa" name="payment">
            <Box
              alignItems="center"
              display="flex"
              flexWrap="wrap"
              gap="4"
              justifyContent="space-between"
            >
              <Label>Payment method</Label>
            </Box>
            <Box display="grid" gap="4" gridTemplateColumns={{md: "repeat(2, 1fr)"}}>
              {paymentOptions.map((option) => (
                <Radio
                  key={option.value}
                  bg="surface-tertiary"
                  flexDirection="column"
                  gap="4"
                  position="relative"
                  px="5"
                  py="4"
                  rounded="xl"
                  transition="all"
                  value={option.value}
                  css={{
                    "&[data-selected=true]": {
                      bg: "color-mix(in oklch, var(--colors-accent) 10%, transparent)",
                    },
                  }}
                >
                  <Radio.Control boxSize="5" position="absolute" right="4" top="3">
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content
                    alignItems="start"
                    display="flex"
                    flexDirection="row"
                    gap="4"
                    justifyContent="start"
                  >
                    <Icon
                      icon={option.icon}
                      style={{width: "1.5rem", height: "1.5rem", color: "var(--colors-accent)"}}
                    />
                    <Box display="flex" flexDirection="column" gap="1">
                      <Label>{option.title}</Label>
                      <Description>{option.description}</Description>
                    </Box>
                  </Radio.Content>
                </Radio>
              ))}
            </Box>
          </RadioGroup>
        </Box>
      </Box>
    );
  },
};

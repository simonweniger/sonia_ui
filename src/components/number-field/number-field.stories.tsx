import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex} from "@chakra-ui/react";
import React from "react";

import {Button} from "../button";
import {Description} from "../description";
import {FieldError} from "../field-error";
import {Form} from "../form";
import {Label} from "../label";
import {Spinner} from "../spinner";

import {NumberField} from "./index";

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Forms/NumberField",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NumberField defaultValue="1024" min={0} name="width">
      <Label>Width</Label>
      <NumberField.Group>
        <NumberField.DecrementButton />
        <NumberField.Input width="120px" />
        <NumberField.IncrementButton />
      </NumberField.Group>
    </NumberField>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField defaultValue="100" min={0} name="primary-width" variant="primary">
        <Label>Primary variant</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
      <NumberField defaultValue="100" min={0} name="secondary-width" variant="secondary">
        <Label>Secondary variant</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
    </Box>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box spaceY="4" w="400px">
      <NumberField fullWidth defaultValue="1024" min={0} name="width">
        <Label>Width</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
    </Box>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField defaultValue="1024" min={0} name="width">
        <Label>Width</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Enter the width in pixels</Description>
      </NumberField>
      <NumberField
        defaultValue="0.5"
        formatOptions={{style: "percent"}}
        max={1}
        min={0}
        name="percentage"
        step={0.1}
      >
        <Label>Percentage</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Value must be between 0 and 100</Description>
      </NumberField>
    </Box>
  ),
};

export const Required: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField required min={0} name="quantity">
        <Label>Quantity</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
      <NumberField required defaultValue="1" max={10} min={1} name="rating">
        <Label>Rating</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Rate from 1 to 10</Description>
      </NumberField>
    </Box>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField invalid required min={0} name="quantity" value="-5">
        <Label>Quantity</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <FieldError>Quantity must be greater than or equal to 0</FieldError>
      </NumberField>
      <NumberField
        invalid
        formatOptions={{style: "percent"}}
        max={1}
        min={0}
        name="percentage"
        step={0.1}
        value="1.5"
      >
        <Label>Percentage</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <FieldError>Percentage must be between 0 and 100</FieldError>
      </NumberField>
    </Box>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField disabled defaultValue="1024" min={0} name="width">
        <Label>Width</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Enter the width in pixels</Description>
      </NumberField>
      <NumberField
        disabled
        defaultValue="0.5"
        formatOptions={{style: "percent"}}
        max={1}
        min={0}
        name="percentage"
        step={0.1}
      >
        <Label>Percentage</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Value must be between 0 and 100</Description>
      </NumberField>
    </Box>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("1024");

    return (
      <Box display="flex" flexDirection="column" gap="4">
        <NumberField min={0} name="width" value={value} onValueChange={(e) => setValue(e.value)}>
          <Label>Width</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input width="120px" />
            <NumberField.IncrementButton />
          </NumberField.Group>
          <Description>Current value: {value}</Description>
        </NumberField>
        <Box display="flex" gap="2">
          <Button variant="ghost" onClick={() => setValue("0")}>
            Reset to 0
          </Button>
          <Button variant="ghost" onClick={() => setValue("2048")}>
            Set to 2048
          </Button>
        </Box>
      </Box>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const numValue = value !== undefined ? Number(value) : undefined;
    const isInvalid = numValue !== undefined && (numValue < 0 || numValue > 100);

    return (
      <Box display="flex" flexDirection="column" gap="4">
        <NumberField
          required
          formatOptions={{style: "percent"}}
          invalid={isInvalid}
          max={1}
          min={0}
          name="percentage"
          step={0.1}
          value={value}
          onValueChange={(e) => setValue(e.value)}
        >
          <Label>Percentage</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input width="120px" />
            <NumberField.IncrementButton />
          </NumberField.Group>
          {isInvalid ? (
            <FieldError>Percentage must be between 0 and 100</FieldError>
          ) : (
            <Description>Enter a value between 0 and 100</Description>
          )}
        </NumberField>
      </Box>
    );
  },
};

export const WithStep: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField defaultValue="0" max={100} min={0} name="step1" step={1}>
        <Label>Step: 1</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Increments by 1</Description>
      </NumberField>
      <NumberField defaultValue="0" max={100} min={0} name="step5" step={5}>
        <Label>Step: 5</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Increments by 5</Description>
      </NumberField>
      <NumberField defaultValue="0" max={100} min={0} name="step10" step={10}>
        <Label>Step: 10</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Increments by 10</Description>
      </NumberField>
    </Box>
  ),
};

export const WithFormatOptions: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField
        defaultValue="99"
        min={0}
        name="currency-eur"
        formatOptions={{
          style: "currency",
          currency: "EUR",
          currencySign: "accounting",
        }}
      >
        <Label>Currency (EUR - Accounting)</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Accounting format with EUR currency</Description>
      </NumberField>
      <NumberField
        defaultValue="99.99"
        min={0}
        name="currency-usd"
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
      >
        <Label>Currency (USD)</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Standard USD currency format</Description>
      </NumberField>
      <NumberField
        defaultValue="0.5"
        formatOptions={{style: "percent"}}
        max={1}
        min={0}
        name="percentage"
        step={0.01}
      >
        <Label>Percentage</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Percentage format (0-1, where 0.5 = 50%)</Description>
      </NumberField>
      <NumberField
        defaultValue="1234.56"
        min={0}
        name="decimal"
        formatOptions={{
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      >
        <Label>Decimal (2 decimal places)</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Decimal format with 2 decimal places</Description>
      </NumberField>
      <NumberField
        defaultValue="1000"
        min={0}
        name="unit"
        formatOptions={{
          style: "unit",
          unit: "kilogram",
          unitDisplay: "short",
        }}
      >
        <Label>Unit (Kilograms)</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Unit format with kilograms</Description>
      </NumberField>
    </Box>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <NumberField defaultValue="1024" min={0} name="width">
        <Label>Width (Custom Icons)</Label>
        <NumberField.Group>
          <NumberField.DecrementButton>
            <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M6.75 11a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5m0 1.5a5.73 5.73 0 0 0 3.501-1.188l2.719 2.718a.75.75 0 1 0 1.06-1.06l-2.718-2.719A5.75 5.75 0 1 0 6.75 12.5m-2-6.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </NumberField.DecrementButton>
          <NumberField.Input width="120px" />
          <NumberField.IncrementButton>
            <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M6.75 11a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5m0 1.5a5.73 5.73 0 0 0 3.501-1.188l2.719 2.718a.75.75 0 1 0 1.06-1.06l-2.718-2.719A5.75 5.75 0 1 0 6.75 12.5m.75-7.75a.75.75 0 0 0-1.5 0V6H4.75a.75.75 0 0 0 0 1.5H6v1.25a.75.75 0 0 0 1.5 0V7.5h1.25a.75.75 0 0 0 0-1.5H7.5z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </NumberField.IncrementButton>
        </NumberField.Group>
        <Description>Custom icon children</Description>
      </NumberField>
    </Box>
  ),
};

export const WithChevrons: Story = {
  render: () => (
    <NumberField
      defaultValue="99"
      min={0}
      name="amount"
      formatOptions={{
        style: "currency",
        currency: "EUR",
        currencySign: "accounting",
      }}
    >
      <Label>Number field with chevrons</Label>
      <NumberField.Group>
        <NumberField.Input />
        <Flex
          borderColor="field-placeholder/15"
          borderLeftWidth="1px"
          direction="column"
          height="calc(100% + 2px)"
        >
          <NumberField.IncrementButton
            borderLeftWidth="0"
            borderRightWidth="0"
            display="flex"
            flex="1"
            fontSize="sm"
            height="50%"
            ml="-1px"
            pt="0.5"
            rounded="none"
            width="6"
          >
            <svg
              aria-hidden="true"
              height="11"
              viewBox="0 0 16 16"
              width="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M13.03 10.53a.75.75 0 0 1-1.06 0L8 6.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </NumberField.IncrementButton>
          <NumberField.DecrementButton
            borderLeftWidth="0"
            borderRightWidth="0"
            display="flex"
            flex="1"
            fontSize="sm"
            height="50%"
            ml="-1px"
            pb="0.5"
            rounded="none"
            width="6"
          >
            <svg
              aria-hidden="true"
              height="11"
              viewBox="0 0 16 16"
              width="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </NumberField.DecrementButton>
        </Flex>
      </NumberField.Group>
    </NumberField>
  ),
};

export const FormExample: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const STOCK_AVAILABLE = 3;
    const numValue = value !== undefined ? Number(value) : undefined;
    const isOutOfStock = numValue !== undefined && numValue > STOCK_AVAILABLE;

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (numValue === undefined || numValue < 1 || numValue > STOCK_AVAILABLE) {
        return;
      }

      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("Order submitted:", {quantity: numValue});
        setValue(undefined);
        setIsSubmitting(false);
      }, 1500);
    };

    return (
      <Form
        style={{display: "flex", width: "280px", flexDirection: "column", gap: "1rem"}}
        onSubmit={handleSubmit}
      >
        <NumberField
          {...args}
          required
          invalid={isOutOfStock}
          max={5}
          min={1}
          name="quantity"
          value={value}
          onValueChange={(e) => setValue(e.value)}
        >
          <Label>Order quantity</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input width="120px" />
            <NumberField.IncrementButton />
          </NumberField.Group>
          {isOutOfStock ? (
            <FieldError>Only {STOCK_AVAILABLE} items left in stock</FieldError>
          ) : (
            <Description>Only {STOCK_AVAILABLE} items available</Description>
          )}
        </NumberField>
        <Button
          isDisabled={numValue === undefined || numValue < 1 || numValue > STOCK_AVAILABLE}
          type="submit"
          variant="solid"
          width="full"
        >
          {isSubmitting ? (
            <>
              <Spinner color="current" size="sm" />
              Processing...
            </>
          ) : (
            "Place Order"
          )}
        </Button>
      </Form>
    );
  },
};

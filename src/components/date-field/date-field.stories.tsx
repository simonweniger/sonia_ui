import type {DateValue as ArkDateValue} from "@ark-ui/react/date-picker";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {parseDate as arkParseDate} from "@ark-ui/react/date-picker";
import {Flex} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import {getLocalTimeZone, today} from "@internationalized/date";
import React, {useState} from "react";

import {Button} from "../button";
import {Description} from "../description";
import {Form} from "../form";
import {Label} from "../label";

import {DateField} from "./index";

const meta: Meta<typeof DateField> = {
  component: DateField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Date and Time/DateField",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DateField name="date" style={{width: "256px"}}>
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input />
      </DateField.Group>
    </DateField>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Flex direction="column" gap="4" w="400px">
      <DateField fullWidth name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
      </DateField>
      <DateField fullWidth name="date-icons">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Prefix>
            <Icon
              icon="gravity-ui:calendar"
              style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
            />
          </DateField.Prefix>
          <DateField.Input />
          <DateField.Suffix>
            <Icon
              icon="gravity-ui:chevron-down"
              style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
            />
          </DateField.Suffix>
        </DateField.Group>
      </DateField>
    </Flex>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <DateField name="date" style={{width: "256px"}}>
        <Label>Birth date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
        <Description>Enter your date of birth</Description>
      </DateField>
      <DateField name="appointment-date" style={{width: "256px"}}>
        <Label>Appointment date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
        <Description>Enter a date for your appointment</Description>
      </DateField>
    </Flex>
  ),
};

export const Required: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <DateField isRequired name="date" style={{width: "256px"}}>
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
      </DateField>
      <DateField isRequired name="start-date" style={{width: "256px"}}>
        <Label>Start date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
        <Description>Required field</Description>
      </DateField>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <DateField
        disabled
        defaultValue={[arkParseDate(today(getLocalTimeZone()).toString())]}
        name="date"
        style={{width: "256px"}}
      >
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
        <Description>This date field is disabled</Description>
      </DateField>
      <DateField disabled name="date-empty" style={{width: "256px"}}>
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
        <Description>This date field is disabled</Description>
      </DateField>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<ArkDateValue[]>([]);

    return (
      <Flex direction="column" gap="4">
        <DateField
          name="date"
          style={{width: "256px"}}
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input />
          </DateField.Group>
          <Description>
            Current value: {value.length > 0 ? value[0]?.toString() : "(empty)"}
          </Description>
        </DateField>
        <Flex gap="2">
          <Button
            variant="ghost"
            onClick={() => setValue([arkParseDate(today(getLocalTimeZone()).toString())])}
          >
            Set today
          </Button>
          <Button variant="ghost" onClick={() => setValue([])}>
            Clear
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const WithPrefixIcon: Story = {
  render: () => (
    <DateField name="date" style={{width: "256px"}}>
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Prefix>
          <Icon
            icon="gravity-ui:calendar"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </DateField.Prefix>
        <DateField.Input />
      </DateField.Group>
    </DateField>
  ),
};

export const WithSuffixIcon: Story = {
  render: () => (
    <DateField name="date" style={{width: "256px"}}>
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input />
        <DateField.Suffix>
          <Icon
            icon="gravity-ui:calendar"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </DateField.Suffix>
      </DateField.Group>
    </DateField>
  ),
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <DateField name="date" style={{width: "256px"}}>
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Prefix>
          <Icon
            icon="gravity-ui:calendar"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </DateField.Prefix>
        <DateField.Input />
        <DateField.Suffix>
          <Icon
            icon="gravity-ui:chevron-down"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </DateField.Suffix>
      </DateField.Group>
      <Description>Enter a date</Description>
    </DateField>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [value, setValue] = useState<ArkDateValue[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (value.length === 0) {
        return;
      }

      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("Date submitted:", {date: value});
        setValue([]);
        setIsSubmitting(false);
      }, 1500);
    };

    return (
      <Form
        style={{display: "flex", width: "280px", flexDirection: "column", gap: "16px"}}
        onSubmit={handleSubmit}
      >
        <DateField
          isRequired
          name="date"
          style={{width: "100%"}}
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Appointment date</Label>
          <DateField.Group>
            <DateField.Prefix>
              <Icon
                icon="gravity-ui:calendar"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </DateField.Prefix>
            <DateField.Input />
          </DateField.Group>
          <Description>Enter a date from today onwards</Description>
        </DateField>
        <Button
          isDisabled={value.length === 0}
          loading={isSubmitting}
          style={{width: "100%"}}
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    );
  },
};

export const AllVariations: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="4">
        <DateField isRequired name="date1" style={{width: "256px"}}>
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Prefix>
              <Icon
                icon="gravity-ui:calendar"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </DateField.Prefix>
            <DateField.Input />
          </DateField.Group>
          <Description>Enter a date</Description>
        </DateField>

        <DateField isRequired name="date2" style={{width: "256px"}}>
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input />
            <DateField.Suffix>
              <Icon
                icon="gravity-ui:calendar"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </DateField.Suffix>
          </DateField.Group>
          <Description>Enter a date</Description>
        </DateField>

        <DateField isRequired name="date3" style={{width: "256px"}}>
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Prefix>
              <Icon
                icon="gravity-ui:calendar"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </DateField.Prefix>
            <DateField.Input />
            <DateField.Suffix>
              <Icon
                icon="gravity-ui:chevron-down"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </DateField.Suffix>
          </DateField.Group>
          <Description>Enter a date</Description>
        </DateField>
      </Flex>
    </Flex>
  ),
};

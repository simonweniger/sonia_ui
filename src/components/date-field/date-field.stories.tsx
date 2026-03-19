import type {Meta, StoryObj} from "@storybook/react";

import {type DateValue as ArkDateValue} from "@ark-ui/react/date-picker";
import {Flex} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import React, {useState} from "react";

import {Button} from "../button";
import {Description} from "../description";
import {Form} from "../form";
import {Label} from "../label";

import {DateField} from "./index";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const arkParseDate: (iso: string) => ArkDateValue = require("@ark-ui/react/date-picker").parseDate;

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
    <DateField style={{width: "256px"}} name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input />
      </DateField.Group>
    </DateField>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Flex direction="column" w="400px" gap="4">
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
            <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
          </DateField.Prefix>
          <DateField.Input />
          <DateField.Suffix>
            <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:chevron-down" />
          </DateField.Suffix>
        </DateField.Group>
      </DateField>
    </Flex>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <DateField style={{width: "256px"}} name="date">
        <Label>Birth date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
        <Description>Enter your date of birth</Description>
      </DateField>
      <DateField style={{width: "256px"}} name="appointment-date">
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
      <DateField isRequired style={{width: "256px"}} name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
      </DateField>
      <DateField isRequired style={{width: "256px"}} name="start-date">
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
        style={{width: "256px"}}
        name="date"
        defaultValue={[arkParseDate(today(getLocalTimeZone()).toString())]}
      >
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input />
        </DateField.Group>
        <Description>This date field is disabled</Description>
      </DateField>
      <DateField disabled style={{width: "256px"}} name="date-empty">
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
          style={{width: "256px"}}
          name="date"
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
            onClick={() =>
              setValue([arkParseDate(today(getLocalTimeZone()).toString())])
            }
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
    <DateField style={{width: "256px"}} name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Prefix>
          <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
        </DateField.Prefix>
        <DateField.Input />
      </DateField.Group>
    </DateField>
  ),
};

export const WithSuffixIcon: Story = {
  render: () => (
    <DateField style={{width: "256px"}} name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input />
        <DateField.Suffix>
          <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
        </DateField.Suffix>
      </DateField.Group>
    </DateField>
  ),
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <DateField style={{width: "256px"}} name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Prefix>
          <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
        </DateField.Prefix>
        <DateField.Input />
        <DateField.Suffix>
          <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:chevron-down" />
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
      <Form style={{display: "flex", width: "280px", flexDirection: "column", gap: "16px"}} onSubmit={handleSubmit}>
        <DateField
          isRequired
          style={{width: "100%"}}
          name="date"
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Appointment date</Label>
          <DateField.Group>
            <DateField.Prefix>
              <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
            </DateField.Prefix>
            <DateField.Input />
          </DateField.Group>
          <Description>Enter a date from today onwards</Description>
        </DateField>
        <Button
          style={{width: "100%"}}
          isDisabled={value.length === 0}
          loading={isSubmitting}
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
        <DateField isRequired style={{width: "256px"}} name="date1">
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Prefix>
              <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
            </DateField.Prefix>
            <DateField.Input />
          </DateField.Group>
          <Description>Enter a date</Description>
        </DateField>

        <DateField isRequired style={{width: "256px"}} name="date2">
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input />
            <DateField.Suffix>
              <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
            </DateField.Suffix>
          </DateField.Group>
          <Description>Enter a date</Description>
        </DateField>

        <DateField isRequired style={{width: "256px"}} name="date3">
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Prefix>
              <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:calendar" />
            </DateField.Prefix>
            <DateField.Input />
            <DateField.Suffix>
              <Icon style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}} icon="gravity-ui:chevron-down" />
            </DateField.Suffix>
          </DateField.Group>
          <Description>Enter a date</Description>
        </DateField>
      </Flex>
    </Flex>
  ),
};

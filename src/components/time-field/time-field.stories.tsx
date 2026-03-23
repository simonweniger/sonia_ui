import type {Meta, StoryObj} from "@storybook/react-vite";

import {Flex} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {Button} from "../button";
import {Description} from "../description";
import {Form} from "../form";
import {Label} from "../label";

import {TimeField} from "./index";

const meta: Meta<typeof TimeField> = {
  component: TimeField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Date and Time/TimeField",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TimeField name="time" style={{width: "256px"}}>
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Input />
      </TimeField.Group>
    </TimeField>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Flex direction="column" gap="4" w="400px">
      <TimeField fullWidth name="time">
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input />
        </TimeField.Group>
      </TimeField>
      <TimeField fullWidth name="time-icons">
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Prefix>
            <Icon
              icon="gravity-ui:clock"
              style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
            />
          </TimeField.Prefix>
          <TimeField.Input />
          <TimeField.Suffix>
            <Icon
              icon="gravity-ui:chevron-down"
              style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
            />
          </TimeField.Suffix>
        </TimeField.Group>
      </TimeField>
    </Flex>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TimeField name="time" style={{width: "256px"}}>
        <Label>Start time</Label>
        <TimeField.Group>
          <TimeField.Input />
        </TimeField.Group>
        <Description>Enter the start time</Description>
      </TimeField>
      <TimeField name="end-time" style={{width: "256px"}}>
        <Label>End time</Label>
        <TimeField.Group>
          <TimeField.Input />
        </TimeField.Group>
        <Description>Enter the end time</Description>
      </TimeField>
    </Flex>
  ),
};

export const Required: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TimeField isRequired name="time" style={{width: "256px"}}>
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input />
        </TimeField.Group>
      </TimeField>
      <TimeField isRequired name="appointment-time" style={{width: "256px"}}>
        <Label>Appointment time</Label>
        <TimeField.Group>
          <TimeField.Input />
        </TimeField.Group>
        <Description>Required field</Description>
      </TimeField>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TimeField isDisabled defaultValue="14:30" name="time" style={{width: "256px"}}>
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input />
        </TimeField.Group>
        <Description>This time field is disabled</Description>
      </TimeField>
      <TimeField isDisabled name="time-empty" style={{width: "256px"}}>
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input />
        </TimeField.Group>
        <Description>This time field is disabled</Description>
      </TimeField>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");

    return (
      <Flex direction="column" gap="4">
        <TimeField name="time" style={{width: "256px"}} value={value} onChange={setValue}>
          <Label>Time</Label>
          <TimeField.Group>
            <TimeField.Input />
          </TimeField.Group>
          <Description>Current value: {value || "(empty)"}</Description>
        </TimeField>
        <Flex gap="2">
          <Button
            variant="ghost"
            onClick={() => {
              const now = new Date();
              const hours = String(now.getHours()).padStart(2, "0");
              const minutes = String(now.getMinutes()).padStart(2, "0");

              setValue(`${hours}:${minutes}`);
            }}
          >
            Set now
          </Button>
          <Button variant="ghost" onClick={() => setValue("")}>
            Clear
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const WithPrefixIcon: Story = {
  render: () => (
    <TimeField name="time" style={{width: "256px"}}>
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Prefix>
          <Icon
            icon="gravity-ui:clock"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </TimeField.Prefix>
        <TimeField.Input />
      </TimeField.Group>
    </TimeField>
  ),
};

export const WithSuffixIcon: Story = {
  render: () => (
    <TimeField name="time" style={{width: "256px"}}>
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Input />
        <TimeField.Suffix>
          <Icon
            icon="gravity-ui:clock"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </TimeField.Suffix>
      </TimeField.Group>
    </TimeField>
  ),
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <TimeField name="time" style={{width: "256px"}}>
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Prefix>
          <Icon
            icon="gravity-ui:clock"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </TimeField.Prefix>
        <TimeField.Input />
        <TimeField.Suffix>
          <Icon
            icon="gravity-ui:chevron-down"
            style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
          />
        </TimeField.Suffix>
      </TimeField.Group>
      <Description>Enter a time</Description>
    </TimeField>
  ),
};

export const GranularitySecond: Story = {
  render: () => (
    <TimeField granularity="second" name="time" style={{width: "256px"}}>
      <Label>Precise time</Label>
      <TimeField.Group>
        <TimeField.Input />
      </TimeField.Group>
      <Description>Includes seconds</Description>
    </TimeField>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!value) {
        return;
      }

      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("Time submitted:", {time: value});
        setValue("");
        setIsSubmitting(false);
      }, 1500);
    };

    return (
      <Form
        style={{display: "flex", width: "280px", flexDirection: "column", gap: "16px"}}
        onSubmit={handleSubmit}
      >
        <TimeField isRequired name="time" style={{width: "100%"}} value={value} onChange={setValue}>
          <Label>Appointment time</Label>
          <TimeField.Group>
            <TimeField.Prefix>
              <Icon
                icon="gravity-ui:clock"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </TimeField.Prefix>
            <TimeField.Input />
          </TimeField.Group>
          <Description>Enter a time between 9:00 AM and 5:00 PM</Description>
        </TimeField>
        <Button isDisabled={!value} loading={isSubmitting} style={{width: "100%"}} type="submit">
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
        <TimeField isRequired name="time1" style={{width: "256px"}}>
          <Label>Time</Label>
          <TimeField.Group>
            <TimeField.Prefix>
              <Icon
                icon="gravity-ui:clock"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </TimeField.Prefix>
            <TimeField.Input />
          </TimeField.Group>
          <Description>Enter a time</Description>
        </TimeField>

        <TimeField isRequired name="time2" style={{width: "256px"}}>
          <Label>Time</Label>
          <TimeField.Group>
            <TimeField.Input />
            <TimeField.Suffix>
              <Icon
                icon="gravity-ui:clock"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </TimeField.Suffix>
          </TimeField.Group>
          <Description>Enter a time</Description>
        </TimeField>

        <TimeField isRequired name="time3" style={{width: "256px"}}>
          <Label>Time</Label>
          <TimeField.Group>
            <TimeField.Prefix>
              <Icon
                icon="gravity-ui:clock"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </TimeField.Prefix>
            <TimeField.Input />
            <TimeField.Suffix>
              <Icon
                icon="gravity-ui:chevron-down"
                style={{width: "16px", height: "16px", color: "var(--colors-fg-muted)"}}
              />
            </TimeField.Suffix>
          </TimeField.Group>
          <Description>Enter a time</Description>
        </TimeField>
      </Flex>
    </Flex>
  ),
};

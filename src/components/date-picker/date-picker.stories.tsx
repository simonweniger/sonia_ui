import type {Meta, StoryObj} from "@storybook/react";

import {DatePicker as ArkDatePicker, type DateValue as ArkDateValue} from "@ark-ui/react/date-picker";
import {Flex} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {Button} from "../button";
import {Calendar} from "../calendar";
import {DateField} from "../date-field";
import {Description} from "../description";
import {Form} from "../form";
import {Label} from "../label";

import {DatePicker} from "./index";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Date and Time/DatePicker",
};

export default meta;
type Story = StoryObj<typeof meta>;

const CalendarContent = () => (
  <Calendar aria-label="Selected date">
    <Calendar.Header>
      <Calendar.YearPickerTrigger>
        <Calendar.YearPickerTriggerHeading />
        <Calendar.YearPickerTriggerIndicator />
      </Calendar.YearPickerTrigger>
      <Calendar.NavButton slot="previous" />
      <Calendar.NavButton slot="next" />
    </Calendar.Header>
    <ArkDatePicker.Context>
      {(api) => (
        <Calendar.Grid>
          <Calendar.GridHeader>
            <ArkDatePicker.TableRow>
              {api.weekDays.map((day) => (
                <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
              ))}
            </ArkDatePicker.TableRow>
          </Calendar.GridHeader>
          <Calendar.GridBody>
            {api.weeks.map((week, i) => (
              <ArkDatePicker.TableRow key={i}>
                {week.map((date) => (
                  <ArkDatePicker.TableCell key={date.toString()} value={date}>
                    <Calendar.Cell>{date.day}</Calendar.Cell>
                  </ArkDatePicker.TableCell>
                ))}
              </ArkDatePicker.TableRow>
            ))}
          </Calendar.GridBody>
        </Calendar.Grid>
      )}
    </ArkDatePicker.Context>
    <Calendar.YearPickerGrid>
      <Calendar.YearPickerGridBody>
        {({year}) => <Calendar.YearPickerCell year={year} />}
      </Calendar.YearPickerGridBody>
    </Calendar.YearPickerGrid>
  </Calendar>
);

const DatePickerField = ({showDescription = false}: {showDescription?: boolean}) => (
  <>
    <Label>Date</Label>
    <DateField.Group>
      <DateField.Input />
      <DateField.Suffix>
        <DatePicker.Trigger>
          <DatePicker.TriggerIndicator />
        </DatePicker.Trigger>
      </DateField.Suffix>
    </DateField.Group>
    {showDescription ? <Description>Select a date from the calendar.</Description> : null}
    <DatePicker.Popover>
      <CalendarContent />
    </DatePicker.Popover>
  </>
);

export const Default: Story = {
  render: () => (
    <DatePicker style={{width: "280px"}} name="date">
      <DatePickerField />
    </DatePicker>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<ArkDateValue[]>([]);

    return (
      <Flex w="64" direction="column" gap="2">
        <DatePicker
          name="date"
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <DatePickerField showDescription />
        </DatePicker>
        <Description>
          Current value: {value.length > 0 ? value[0]?.toString() : "(empty)"}
        </Description>
      </Flex>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <DatePicker disabled style={{width: "256px"}} name="date">
      <DatePickerField />
    </DatePicker>
  ),
};

export const WithCustomIndicator: Story = {
  render: () => (
    <DatePicker style={{width: "256px"}} name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input />
        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator>
              <Icon style={{width: "16px", height: "16px"}} icon="gravity-ui:chevron-down" />
            </DatePicker.TriggerIndicator>
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <Description>Use a custom trigger icon while keeping DatePicker behavior.</Description>
      <DatePicker.Popover>
        <CalendarContent />
      </DatePicker.Popover>
    </DatePicker>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [value, setValue] = useState<ArkDateValue[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (value.length === 0) return;

      setIsSubmitting(true);

      setTimeout(() => {
        setValue([]);
        setIsSubmitting(false);
      }, 1200);
    };

    return (
      <Form style={{display: "flex", width: "256px", flexDirection: "column", gap: "12px"}} onSubmit={handleSubmit}>
        <DatePicker
          isRequired
          name="appointmentDate"
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Appointment date</Label>
          <DateField.Group>
            <DateField.Input />
            <DateField.Suffix>
              <DatePicker.Trigger>
                <DatePicker.TriggerIndicator />
              </DatePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>
          <Description>Choose a valid appointment date.</Description>
          <DatePicker.Popover>
            <CalendarContent />
          </DatePicker.Popover>
        </DatePicker>
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

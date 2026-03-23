import type {DateValue as ArkDateValue} from "@ark-ui/react/date-picker";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {DatePicker as ArkDatePicker} from "@ark-ui/react/date-picker";
import {Flex} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {Button} from "../button";
import {DateField} from "../date-field";
import {Description} from "../description";
import {Form} from "../form";
import {Label} from "../label";
import {RangeCalendar} from "../range-calendar";

import {DateRangePicker} from "./index";

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Date and Time/DateRangePicker",
};

export default meta;
type Story = StoryObj<typeof meta>;

const RangeCalendarContent = () => (
  <RangeCalendar aria-label="Selected range">
    <RangeCalendar.Header>
      <RangeCalendar.YearPickerTrigger>
        <RangeCalendar.YearPickerTriggerHeading />
        <RangeCalendar.YearPickerTriggerIndicator />
      </RangeCalendar.YearPickerTrigger>
      <RangeCalendar.NavButton slot="previous" />
      <RangeCalendar.NavButton slot="next" />
    </RangeCalendar.Header>
    <ArkDatePicker.Context>
      {(api) => (
        <RangeCalendar.Grid>
          <RangeCalendar.GridHeader>
            <ArkDatePicker.TableRow>
              {api.weekDays.map((day) => (
                <RangeCalendar.HeaderCell key={day.long}>{day.short}</RangeCalendar.HeaderCell>
              ))}
            </ArkDatePicker.TableRow>
          </RangeCalendar.GridHeader>
          <RangeCalendar.GridBody>
            {api.weeks.map((week, i) => (
              <ArkDatePicker.TableRow key={i}>
                {week.map((date) => (
                  <ArkDatePicker.TableCell key={date.toString()} value={date}>
                    <RangeCalendar.Cell>{date.day}</RangeCalendar.Cell>
                  </ArkDatePicker.TableCell>
                ))}
              </ArkDatePicker.TableRow>
            ))}
          </RangeCalendar.GridBody>
        </RangeCalendar.Grid>
      )}
    </ArkDatePicker.Context>
    <RangeCalendar.YearPickerGrid>
      <RangeCalendar.YearPickerGridBody>
        {({year}) => <RangeCalendar.YearPickerCell year={year} />}
      </RangeCalendar.YearPickerGridBody>
    </RangeCalendar.YearPickerGrid>
  </RangeCalendar>
);

const DateRangePickerField = ({showDescription = false}: {showDescription?: boolean}) => (
  <>
    <Label>Trip dates</Label>
    <DateField.Group>
      <DateField.Input />
      <DateField.Suffix>
        <DateRangePicker.Trigger>
          <DateRangePicker.TriggerIndicator />
        </DateRangePicker.Trigger>
      </DateField.Suffix>
    </DateField.Group>
    {showDescription ? <Description>Select your check-in and check-out dates.</Description> : null}
    <DateRangePicker.Popover>
      <RangeCalendarContent />
    </DateRangePicker.Popover>
  </>
);

export const Default: Story = {
  render: () => (
    <DateRangePicker name="dates" style={{width: "320px"}}>
      <DateRangePickerField />
    </DateRangePicker>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<ArkDateValue[]>([]);

    return (
      <Flex direction="column" gap="2" w="320px">
        <DateRangePicker
          name="dates"
          selectionMode="range"
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <DateRangePickerField showDescription />
        </DateRangePicker>
        <Description>
          Current value:{" "}
          {value.length >= 2 ? `${value[0]?.toString()} -> ${value[1]?.toString()}` : "(empty)"}
        </Description>
      </Flex>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <DateRangePicker disabled name="dates" style={{width: "320px"}}>
      <DateRangePickerField />
    </DateRangePicker>
  ),
};

export const WithCustomIndicator: Story = {
  render: () => (
    <DateRangePicker name="dates" style={{width: "320px"}}>
      <Label>Trip dates</Label>
      <DateField.Group>
        <DateField.Input />
        <DateField.Suffix>
          <DateRangePicker.Trigger>
            <DateRangePicker.TriggerIndicator>
              <Icon icon="gravity-ui:chevron-down" style={{width: "16px", height: "16px"}} />
            </DateRangePicker.TriggerIndicator>
          </DateRangePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <Description>
        Use a custom trigger icon while preserving DateRangePicker behavior.
      </Description>
      <DateRangePicker.Popover>
        <RangeCalendarContent />
      </DateRangePicker.Popover>
    </DateRangePicker>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [value, setValue] = useState<ArkDateValue[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (value.length < 2) return;

      setIsSubmitting(true);

      setTimeout(() => {
        setValue([]);
        setIsSubmitting(false);
      }, 1200);
    };

    return (
      <Form
        style={{display: "flex", width: "320px", flexDirection: "column", gap: "12px"}}
        onSubmit={handleSubmit}
      >
        <DateRangePicker
          isRequired
          name="tripDates"
          selectionMode="range"
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Trip dates</Label>
          <DateField.Group>
            <DateField.Input />
            <DateField.Suffix>
              <DateRangePicker.Trigger>
                <DateRangePicker.TriggerIndicator />
              </DateRangePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>
          <Description>Select your check-in and check-out dates.</Description>
          <DateRangePicker.Popover>
            <RangeCalendarContent />
          </DateRangePicker.Popover>
        </DateRangePicker>
        <Button
          isDisabled={value.length < 2}
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

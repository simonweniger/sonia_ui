import type {Meta, StoryObj} from "@storybook/react";

import {DatePicker, type DateValue as ArkDateValue} from "@ark-ui/react/date-picker";
import {Box, Flex, Text} from "@chakra-ui/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import React, {useState} from "react";

import {Button} from "../button";
import {Description} from "../description";

import {Calendar} from "./index";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Date and Time/Calendar",
};

export default meta;
type Story = StoryObj<typeof Calendar>;

/* -------------------------------------------------------------------------------------------------
 * Helpers: Ark's DatePicker uses @internationalized/date@3.7.0 internally, while the project
 * also depends on a newer version. To avoid type mismatches we use Ark's re-exported parseDate
 * for props consumed by Ark (value, defaultValue, focusedValue) and the project's parseDate for
 * props defined by the Calendar component itself (minValue, maxValue).
 * -----------------------------------------------------------------------------------------------*/
// eslint-disable-next-line @typescript-eslint/no-require-imports
const arkParseDate: (iso: string) => ArkDateValue = require("@ark-ui/react/date-picker").parseDate;

/* -------------------------------------------------------------------------------------------------
 * Helper component to render a basic calendar structure using Ark context
 * -----------------------------------------------------------------------------------------------*/
const CalendarTemplate = (props: Omit<React.ComponentProps<typeof Calendar>, "children">) => (
  <Calendar {...props}>
    <Calendar.Header>
      <Calendar.Heading />
      <Calendar.NavButton slot="previous" />
      <Calendar.NavButton slot="next" />
    </Calendar.Header>
    <DatePicker.Context>
      {(api) => (
        <Calendar.Grid>
          <Calendar.GridHeader>
            <DatePicker.TableRow>
              {api.weekDays.map((day) => (
                <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
              ))}
            </DatePicker.TableRow>
          </Calendar.GridHeader>
          <Calendar.GridBody>
            {api.weeks.map((week, i) => (
              <DatePicker.TableRow key={i}>
                {week.map((date) => (
                  <DatePicker.TableCell key={date.toString()} value={date}>
                    <Calendar.Cell>{date.day}</Calendar.Cell>
                  </DatePicker.TableCell>
                ))}
              </DatePicker.TableRow>
            ))}
          </Calendar.GridBody>
        </Calendar.Grid>
      )}
    </DatePicker.Context>
  </Calendar>
);

/* -------------------------------------------------------------------------------------------------
 * Helper component to render a calendar with year picker
 * -----------------------------------------------------------------------------------------------*/
const CalendarTemplateWithYearPicker = (
  props: Omit<React.ComponentProps<typeof Calendar>, "children">,
) => (
  <Calendar {...props}>
    <Calendar.Header>
      <Calendar.YearPickerTrigger>
        <Calendar.YearPickerTriggerHeading />
        <Calendar.YearPickerTriggerIndicator />
      </Calendar.YearPickerTrigger>
      <Calendar.NavButton slot="previous" />
      <Calendar.NavButton slot="next" />
    </Calendar.Header>
    <DatePicker.Context>
      {(api) => (
        <Calendar.Grid>
          <Calendar.GridHeader>
            <DatePicker.TableRow>
              {api.weekDays.map((day) => (
                <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
              ))}
            </DatePicker.TableRow>
          </Calendar.GridHeader>
          <Calendar.GridBody>
            {api.weeks.map((week, i) => (
              <DatePicker.TableRow key={i}>
                {week.map((date) => (
                  <DatePicker.TableCell key={date.toString()} value={date}>
                    <Calendar.Cell>{date.day}</Calendar.Cell>
                  </DatePicker.TableCell>
                ))}
              </DatePicker.TableRow>
            ))}
          </Calendar.GridBody>
        </Calendar.Grid>
      )}
    </DatePicker.Context>
    <Calendar.YearPickerGrid>
      <Calendar.YearPickerGridBody>
        {({year}) => <Calendar.YearPickerCell year={year} />}
      </Calendar.YearPickerGridBody>
    </Calendar.YearPickerGrid>
  </Calendar>
);

/* -------------------------------------------------------------------------------------------------
 * Stories
 * -----------------------------------------------------------------------------------------------*/
export const Default: Story = {
  render: (args) => <CalendarTemplate {...args} aria-label="Event date" />,
};

export const WithYearPicker: Story = {
  render: (args) => <CalendarTemplateWithYearPicker {...args} aria-label="Event date" />,
};

export const DefaultValue: Story = {
  render: (args) => (
    <CalendarTemplate {...args} aria-label="Event date" defaultValue={[arkParseDate("2025-02-14")]} />
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<ArkDateValue[]>([]);
    const [focusedDate, setFocusedDate] = useState<ArkDateValue | undefined>(arkParseDate("2025-12-25"));

    return (
      <Flex direction="column" align="center" gap="4">
        <CalendarTemplate
          {...args}
          aria-label="Event date"
          focusedValue={focusedDate}
          value={value}
          onValueChange={(details) => setValue(details.value)}
          onFocusChange={(details) => setFocusedDate(details.focusedValue)}
        />
        <Description style={{textAlign: "center"}}>
          Selected date: {value.length > 0 ? value[0]?.toString() : "(none)"}
        </Description>
        <Flex gap="2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const todayIso = today(getLocalTimeZone()).toString();
              const td = arkParseDate(todayIso);
              setValue([td]);
              setFocusedDate(td);
            }}
          >
            Set Today
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const christmasDate = arkParseDate("2025-12-25");
              setValue([christmasDate]);
              setFocusedDate(christmasDate);
            }}
          >
            Set Christmas
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setValue([])}>
            Clear
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const MinMaxDates: Story = {
  render: (args) => {
    const now = today(getLocalTimeZone());
    const maxDate = now.add({months: 3});

    return (
      <Flex direction="column" align="center" gap="4">
        <Calendar {...args} aria-label="Appointment date" maxValue={maxDate} minValue={now}>
          <Calendar.Header>
            <Calendar.NavButton slot="previous" />
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <DatePicker.Context>
            {(api) => (
              <Calendar.Grid>
                <Calendar.GridHeader>
                  <DatePicker.TableRow>
                    {api.weekDays.map((day) => (
                      <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
                    ))}
                  </DatePicker.TableRow>
                </Calendar.GridHeader>
                <Calendar.GridBody>
                  {api.weeks.map((week, i) => (
                    <DatePicker.TableRow key={i}>
                      {week.map((date) => (
                        <DatePicker.TableCell key={date.toString()} value={date}>
                          <Calendar.Cell>{date.day}</Calendar.Cell>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </Calendar.GridBody>
              </Calendar.Grid>
            )}
          </DatePicker.Context>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({year}) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
        <Description style={{textAlign: "center"}}>
          Select a date between today and {maxDate.toString()}
        </Description>
      </Flex>
    );
  },
};

export const UnavailableDates: Story = {
  render: (args) => {
    return (
      <Flex direction="column" align="center" gap="4">
        <CalendarTemplate
          {...args}
          aria-label="Appointment date"
          isDateUnavailable={(date, _locale) => {
            // Make weekends unavailable (Saturday=6, Sunday=0)
            const jsDate = new Date(date.year, date.month - 1, date.day);
            const dayOfWeek = jsDate.getDay();
            return dayOfWeek === 0 || dayOfWeek === 6;
          }}
        />
        <Description style={{textAlign: "center"}}>Weekends are unavailable</Description>
      </Flex>
    );
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Flex direction="column" align="center" gap="4">
      <CalendarTemplate
        {...args}
        disabled
        aria-label="Event date"
        defaultValue={[arkParseDate(today(getLocalTimeZone()).toString())]}
      />
      <Description style={{textAlign: "center"}}>Calendar is disabled</Description>
    </Flex>
  ),
};

export const ReadOnly: Story = {
  render: (args) => (
    <Flex direction="column" align="center" gap="4">
      <CalendarTemplate
        {...args}
        readOnly
        aria-label="Event date"
        defaultValue={[arkParseDate(today(getLocalTimeZone()).toString())]}
      />
      <Description style={{textAlign: "center"}}>Calendar is read-only</Description>
    </Flex>
  ),
};

export const FocusedValue: Story = {
  render: (args) => {
    const [focusedDate, setFocusedDate] = useState<ArkDateValue | undefined>(arkParseDate("2025-06-15"));

    return (
      <Flex direction="column" align="center" gap="4">
        <CalendarTemplate
          {...args}
          aria-label="Event date"
          focusedValue={focusedDate}
          onFocusChange={(details) => setFocusedDate(details.focusedValue)}
        />
        <Description style={{textAlign: "center"}}>Focused: {focusedDate?.toString()}</Description>
        <Flex wrap="wrap" justify="center" gap="2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setFocusedDate(arkParseDate("2025-01-01"))}
          >
            Go to Jan
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setFocusedDate(arkParseDate("2025-06-15"))}
          >
            Go to Jun
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setFocusedDate(arkParseDate("2025-12-25"))}
          >
            Go to Christmas
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const WithIndicators: Story = {
  render: (args) => {
    const datesWithEvents = [3, 7, 12, 15, 21, 28];

    return (
      <Calendar {...args} aria-label="Event date">
        <Calendar.Header>
          <Calendar.NavButton slot="previous" />
          <Calendar.Heading />
          <Calendar.NavButton slot="next" />
        </Calendar.Header>
        <DatePicker.Context>
          {(api) => (
            <Calendar.Grid>
              <Calendar.GridHeader>
                <DatePicker.TableRow>
                  {api.weekDays.map((day) => (
                    <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
                  ))}
                </DatePicker.TableRow>
              </Calendar.GridHeader>
              <Calendar.GridBody>
                {api.weeks.map((week, i) => (
                  <DatePicker.TableRow key={i}>
                    {week.map((date) => (
                      <DatePicker.TableCell key={date.toString()} value={date}>
                        <Calendar.Cell>
                          {date.day}
                          {datesWithEvents.includes(date.day) && <Calendar.CellIndicator />}
                        </Calendar.Cell>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </Calendar.GridBody>
            </Calendar.Grid>
          )}
        </DatePicker.Context>
      </Calendar>
    );
  },
};

export const MultipleMonths: Story = {
  render: (args) => (
    <Calendar
      {...args}
      aria-label="Trip dates"
      style={{containerType: "normal", width: "auto", overflowX: "auto"}}
      numOfMonths={2}
    >
      <Calendar.Heading style={{position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", borderWidth: 0}} />
      <DatePicker.Context>
        {(api) => {
          const offset = api.getOffset({months: 1});
          return (
            <Flex gap="8">
              <Box w="64">
                <Calendar.Header>
                  <Calendar.NavButton slot="previous" />
                  <Text fontSize="sm" fontWeight="medium">{api.visibleRangeText.start}</Text>
                  <Box boxSize="6" />
                </Calendar.Header>
                <Calendar.Grid>
                  <Calendar.GridHeader>
                    <DatePicker.TableRow>
                      {api.weekDays.map((day) => (
                        <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
                      ))}
                    </DatePicker.TableRow>
                  </Calendar.GridHeader>
                  <Calendar.GridBody>
                    {api.weeks.map((week, i) => (
                      <DatePicker.TableRow key={i}>
                        {week.map((date) => (
                          <DatePicker.TableCell key={date.toString()} value={date}>
                            <Calendar.Cell>{date.day}</Calendar.Cell>
                          </DatePicker.TableCell>
                        ))}
                      </DatePicker.TableRow>
                    ))}
                  </Calendar.GridBody>
                </Calendar.Grid>
              </Box>
              <Box w="64">
                <Calendar.Header>
                  <Box boxSize="6" />
                  <Text fontSize="sm" fontWeight="medium">{api.visibleRangeText.end}</Text>
                  <Calendar.NavButton slot="next" />
                </Calendar.Header>
                <Calendar.Grid>
                  <Calendar.GridHeader>
                    <DatePicker.TableRow>
                      {api.weekDays.map((day) => (
                        <Calendar.HeaderCell key={`offset-${day.long}`}>{day.short}</Calendar.HeaderCell>
                      ))}
                    </DatePicker.TableRow>
                  </Calendar.GridHeader>
                  <Calendar.GridBody>
                    {offset.weeks.map((week, i) => (
                      <DatePicker.TableRow key={i}>
                        {week.map((date) => (
                          <DatePicker.TableCell key={date.toString()} value={date}>
                            <Calendar.Cell>{date.day}</Calendar.Cell>
                          </DatePicker.TableCell>
                        ))}
                      </DatePicker.TableRow>
                    ))}
                  </Calendar.GridBody>
                </Calendar.Grid>
              </Box>
            </Flex>
          );
        }}
      </DatePicker.Context>
    </Calendar>
  ),
};

export const YearPicker: Story = {
  render: (args) => (
    <Calendar {...args} aria-label="Event date">
      <Calendar.Header>
        <Calendar.YearPickerTrigger>
          <Calendar.YearPickerTriggerHeading />
          <Calendar.YearPickerTriggerIndicator />
        </Calendar.YearPickerTrigger>
        <Calendar.NavButton slot="previous" />
        <Calendar.NavButton slot="next" />
      </Calendar.Header>
      <DatePicker.Context>
        {(api) => (
          <Calendar.Grid>
            <Calendar.GridHeader>
              <DatePicker.TableRow>
                {api.weekDays.map((day) => (
                  <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
                ))}
              </DatePicker.TableRow>
            </Calendar.GridHeader>
            <Calendar.GridBody>
              {api.weeks.map((week, i) => (
                <DatePicker.TableRow key={i}>
                  {week.map((date) => (
                    <DatePicker.TableCell key={date.toString()} value={date}>
                      <Calendar.Cell>{date.day}</Calendar.Cell>
                    </DatePicker.TableCell>
                  ))}
                </DatePicker.TableRow>
              ))}
            </Calendar.GridBody>
          </Calendar.Grid>
        )}
      </DatePicker.Context>
      <Calendar.YearPickerGrid>
        <Calendar.YearPickerGridBody>
          {({year}) => <Calendar.YearPickerCell year={year} />}
        </Calendar.YearPickerGridBody>
      </Calendar.YearPickerGrid>
    </Calendar>
  ),
};

export const CustomNavIcons: Story = {
  render: (args) => (
    <Calendar {...args} aria-label="Event date">
      <Calendar.Header>
        <Calendar.NavButton slot="previous">
          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z" fill="currentColor" />
          </svg>
        </Calendar.NavButton>
        <Calendar.Heading />
        <Calendar.NavButton slot="next">
          <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z" fill="currentColor" />
          </svg>
        </Calendar.NavButton>
      </Calendar.Header>
      <DatePicker.Context>
        {(api) => (
          <Calendar.Grid>
            <Calendar.GridHeader>
              <DatePicker.TableRow>
                {api.weekDays.map((day) => (
                  <Calendar.HeaderCell key={day.long}>{day.short}</Calendar.HeaderCell>
                ))}
              </DatePicker.TableRow>
            </Calendar.GridHeader>
            <Calendar.GridBody>
              {api.weeks.map((week, i) => (
                <DatePicker.TableRow key={i}>
                  {week.map((date) => (
                    <DatePicker.TableCell key={date.toString()} value={date}>
                      <Calendar.Cell>{date.day}</Calendar.Cell>
                    </DatePicker.TableCell>
                  ))}
                </DatePicker.TableRow>
              ))}
            </Calendar.GridBody>
          </Calendar.Grid>
        )}
      </DatePicker.Context>
    </Calendar>
  ),
};

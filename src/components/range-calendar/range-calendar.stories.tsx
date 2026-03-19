import type {Meta, StoryObj} from "@storybook/react";

import {DatePicker, type DateValue as ArkDateValue} from "@ark-ui/react/date-picker";
import {Box, Flex, Text} from "@chakra-ui/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import React, {useState} from "react";

import {Button} from "../button";
import {Description} from "../description";

import {RangeCalendar} from "./index";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const arkParseDate: (iso: string) => ArkDateValue = require("@ark-ui/react/date-picker").parseDate;

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Date and Time/RangeCalendar",
};

export default meta;
type Story = StoryObj<typeof RangeCalendar>;

/* -------------------------------------------------------------------------------------------------
 * Helper component to render a basic range calendar structure using Ark context
 * -----------------------------------------------------------------------------------------------*/
const RangeCalendarTemplate = (
  props: Omit<React.ComponentProps<typeof RangeCalendar>, "children">,
) => (
  <RangeCalendar {...props}>
    <RangeCalendar.Header>
      <RangeCalendar.Heading />
      <RangeCalendar.NavButton slot="previous" />
      <RangeCalendar.NavButton slot="next" />
    </RangeCalendar.Header>
    <DatePicker.Context>
      {(api) => (
        <RangeCalendar.Grid>
          <RangeCalendar.GridHeader>
            <DatePicker.TableRow>
              {api.weekDays.map((day) => (
                <RangeCalendar.HeaderCell key={day.long}>{day.short}</RangeCalendar.HeaderCell>
              ))}
            </DatePicker.TableRow>
          </RangeCalendar.GridHeader>
          <RangeCalendar.GridBody>
            {api.weeks.map((week, i) => (
              <DatePicker.TableRow key={i}>
                {week.map((date) => (
                  <DatePicker.TableCell key={date.toString()} value={date}>
                    <RangeCalendar.Cell>{date.day}</RangeCalendar.Cell>
                  </DatePicker.TableCell>
                ))}
              </DatePicker.TableRow>
            ))}
          </RangeCalendar.GridBody>
        </RangeCalendar.Grid>
      )}
    </DatePicker.Context>
  </RangeCalendar>
);

/* -------------------------------------------------------------------------------------------------
 * Helper component to render a range calendar with year picker
 * -----------------------------------------------------------------------------------------------*/
const RangeCalendarTemplateWithYearPicker = (
  props: Omit<React.ComponentProps<typeof RangeCalendar>, "children">,
) => (
  <RangeCalendar {...props}>
    <RangeCalendar.Header>
      <RangeCalendar.YearPickerTrigger>
        <RangeCalendar.YearPickerTriggerHeading />
        <RangeCalendar.YearPickerTriggerIndicator />
      </RangeCalendar.YearPickerTrigger>
      <RangeCalendar.NavButton slot="previous" />
      <RangeCalendar.NavButton slot="next" />
    </RangeCalendar.Header>
    <DatePicker.Context>
      {(api) => (
        <RangeCalendar.Grid>
          <RangeCalendar.GridHeader>
            <DatePicker.TableRow>
              {api.weekDays.map((day) => (
                <RangeCalendar.HeaderCell key={day.long}>{day.short}</RangeCalendar.HeaderCell>
              ))}
            </DatePicker.TableRow>
          </RangeCalendar.GridHeader>
          <RangeCalendar.GridBody>
            {api.weeks.map((week, i) => (
              <DatePicker.TableRow key={i}>
                {week.map((date) => (
                  <DatePicker.TableCell key={date.toString()} value={date}>
                    <RangeCalendar.Cell>{date.day}</RangeCalendar.Cell>
                  </DatePicker.TableCell>
                ))}
              </DatePicker.TableRow>
            ))}
          </RangeCalendar.GridBody>
        </RangeCalendar.Grid>
      )}
    </DatePicker.Context>
    <RangeCalendar.YearPickerGrid>
      <RangeCalendar.YearPickerGridBody>
        {({year}) => <RangeCalendar.YearPickerCell year={year} />}
      </RangeCalendar.YearPickerGridBody>
    </RangeCalendar.YearPickerGrid>
  </RangeCalendar>
);

/* -------------------------------------------------------------------------------------------------
 * Stories
 * -----------------------------------------------------------------------------------------------*/
export const Default: Story = {
  render: (args) => <RangeCalendarTemplate {...args} aria-label="Trip dates" />,
};

export const WithYearPicker: Story = {
  render: (args) => <RangeCalendarTemplateWithYearPicker {...args} aria-label="Trip dates" />,
};

export const DefaultValue: Story = {
  render: (args) => (
    <RangeCalendarTemplate
      {...args}
      aria-label="Trip dates"
      defaultValue={[arkParseDate("2025-02-03"), arkParseDate("2025-02-12")]}
    />
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<ArkDateValue[]>([]);
    const [focusedDate, setFocusedDate] = useState<ArkDateValue | undefined>(
      arkParseDate("2025-12-25"),
    );

    return (
      <Flex direction="column" align="center" gap="4">
        <RangeCalendarTemplate
          {...args}
          aria-label="Trip dates"
          focusedValue={focusedDate}
          value={value}
          onValueChange={(details) => setValue(details.value)}
          onFocusChange={(details) => setFocusedDate(details.focusedValue)}
        />
        <Description style={{textAlign: "center"}}>
          Selected range:{" "}
          {value.length >= 2
            ? `${value[0]?.toString()} -> ${value[1]?.toString()}`
            : "(none)"}
        </Description>
        <Flex gap="2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const todayIso = today(getLocalTimeZone()).toString();
              const start = arkParseDate(todayIso);
              // 7 days later
              const d = new Date();
              d.setDate(d.getDate() + 6);
              const endIso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
              setValue([start, arkParseDate(endIso)]);
              setFocusedDate(start);
            }}
          >
            Set 1 week
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const start = arkParseDate("2025-12-20");
              setValue([start, arkParseDate("2025-12-31")]);
              setFocusedDate(start);
            }}
          >
            Set Holidays
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
        <RangeCalendarTemplateWithYearPicker
          {...args}
          aria-label="Trip dates"
          maxValue={maxDate}
          minValue={now}
        />
        <Description style={{textAlign: "center"}}>
          Select dates between today and {maxDate.toString()}
        </Description>
      </Flex>
    );
  },
};

export const UnavailableDates: Story = {
  render: (args) => {
    return (
      <Flex direction="column" align="center" gap="4">
        <RangeCalendarTemplate
          {...args}
          aria-label="Trip dates"
          isDateUnavailable={(date, _locale) => {
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
      <RangeCalendarTemplate
        {...args}
        disabled
        aria-label="Trip dates"
        defaultValue={[
          arkParseDate(today(getLocalTimeZone()).toString()),
          arkParseDate(today(getLocalTimeZone()).add({days: 4}).toString()),
        ]}
      />
      <Description style={{textAlign: "center"}}>Range calendar is disabled</Description>
    </Flex>
  ),
};

export const ReadOnly: Story = {
  render: (args) => (
    <Flex direction="column" align="center" gap="4">
      <RangeCalendarTemplate
        {...args}
        readOnly
        aria-label="Trip dates"
        defaultValue={[
          arkParseDate(today(getLocalTimeZone()).toString()),
          arkParseDate(today(getLocalTimeZone()).add({days: 4}).toString()),
        ]}
      />
      <Description style={{textAlign: "center"}}>Range calendar is read-only</Description>
    </Flex>
  ),
};

export const FocusedValue: Story = {
  render: (args) => {
    const [focusedDate, setFocusedDate] = useState<ArkDateValue | undefined>(
      arkParseDate("2025-06-15"),
    );

    return (
      <Flex direction="column" align="center" gap="4">
        <RangeCalendarTemplate
          {...args}
          aria-label="Trip dates"
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
      <RangeCalendar {...args} aria-label="Trip dates">
        <RangeCalendar.Header>
          <RangeCalendar.NavButton slot="previous" />
          <RangeCalendar.Heading />
          <RangeCalendar.NavButton slot="next" />
        </RangeCalendar.Header>
        <DatePicker.Context>
          {(api) => (
            <RangeCalendar.Grid>
              <RangeCalendar.GridHeader>
                <DatePicker.TableRow>
                  {api.weekDays.map((day) => (
                    <RangeCalendar.HeaderCell key={day.long}>{day.short}</RangeCalendar.HeaderCell>
                  ))}
                </DatePicker.TableRow>
              </RangeCalendar.GridHeader>
              <RangeCalendar.GridBody>
                {api.weeks.map((week, i) => (
                  <DatePicker.TableRow key={i}>
                    {week.map((date) => (
                      <DatePicker.TableCell key={date.toString()} value={date}>
                        <RangeCalendar.Cell>
                          {date.day}
                          {datesWithEvents.includes(date.day) && <RangeCalendar.CellIndicator />}
                        </RangeCalendar.Cell>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </RangeCalendar.GridBody>
            </RangeCalendar.Grid>
          )}
        </DatePicker.Context>
      </RangeCalendar>
    );
  },
};

export const MultipleMonths: Story = {
  render: (args) => (
    <RangeCalendar
      {...args}
      aria-label="Trip dates"
      style={{containerType: "normal", width: "auto", overflowX: "auto"}}
      numOfMonths={2}
    >
      <RangeCalendar.Heading style={{position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", borderWidth: 0}} />
      <DatePicker.Context>
        {(api) => {
          const offset = api.getOffset({months: 1});
          return (
            <Flex gap="8">
              <Box w="64">
                <RangeCalendar.Header>
                  <RangeCalendar.NavButton slot="previous" />
                  <Text fontSize="sm" fontWeight="medium">{api.visibleRangeText.start}</Text>
                  <Box boxSize="6" />
                </RangeCalendar.Header>
                <RangeCalendar.Grid>
                  <RangeCalendar.GridHeader>
                    <DatePicker.TableRow>
                      {api.weekDays.map((day) => (
                        <RangeCalendar.HeaderCell key={day.long}>
                          {day.short}
                        </RangeCalendar.HeaderCell>
                      ))}
                    </DatePicker.TableRow>
                  </RangeCalendar.GridHeader>
                  <RangeCalendar.GridBody>
                    {api.weeks.map((week, i) => (
                      <DatePicker.TableRow key={i}>
                        {week.map((date) => (
                          <DatePicker.TableCell key={date.toString()} value={date}>
                            <RangeCalendar.Cell>{date.day}</RangeCalendar.Cell>
                          </DatePicker.TableCell>
                        ))}
                      </DatePicker.TableRow>
                    ))}
                  </RangeCalendar.GridBody>
                </RangeCalendar.Grid>
              </Box>
              <Box w="64">
                <RangeCalendar.Header>
                  <Box boxSize="6" />
                  <Text fontSize="sm" fontWeight="medium">{api.visibleRangeText.end}</Text>
                  <RangeCalendar.NavButton slot="next" />
                </RangeCalendar.Header>
                <RangeCalendar.Grid>
                  <RangeCalendar.GridHeader>
                    <DatePicker.TableRow>
                      {api.weekDays.map((day) => (
                        <RangeCalendar.HeaderCell key={`offset-${day.long}`}>
                          {day.short}
                        </RangeCalendar.HeaderCell>
                      ))}
                    </DatePicker.TableRow>
                  </RangeCalendar.GridHeader>
                  <RangeCalendar.GridBody>
                    {offset.weeks.map((week, i) => (
                      <DatePicker.TableRow key={i}>
                        {week.map((date) => (
                          <DatePicker.TableCell key={date.toString()} value={date}>
                            <RangeCalendar.Cell>{date.day}</RangeCalendar.Cell>
                          </DatePicker.TableCell>
                        ))}
                      </DatePicker.TableRow>
                    ))}
                  </RangeCalendar.GridBody>
                </RangeCalendar.Grid>
              </Box>
            </Flex>
          );
        }}
      </DatePicker.Context>
    </RangeCalendar>
  ),
};

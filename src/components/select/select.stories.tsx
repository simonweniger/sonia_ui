import type {Meta, StoryObj} from "@storybook/react";

import {Box, Select as ChakraSelect, Text, createListCollection} from "@chakra-ui/react";
import React from "react";

import {Button} from "../button";
import {Description} from "../description";
import {Label} from "../label";

import {Select} from "./index";

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Pickers/Select",
};

export default meta;
type Story = StoryObj<typeof meta>;

const states = createListCollection({
  items: [
    {label: "Florida", value: "florida"},
    {label: "Delaware", value: "delaware"},
    {label: "California", value: "california"},
    {label: "Texas", value: "texas"},
    {label: "New York", value: "new-york"},
    {label: "Washington", value: "washington"},
  ],
});

export const Default: Story = {
  render: () => (
    <Select collection={states} width="256px">
      <Label>State</Label>
      <Select.Trigger>
        <Select.Value placeholder="Select one" />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        {states.items.map((item) => (
          <ChakraSelect.Item key={item.value} item={item}>
            <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
            <ChakraSelect.ItemIndicator />
          </ChakraSelect.Item>
        ))}
      </Select.Popover>
    </Select>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <Select collection={states} variant="outline" width="256px">
        <Label>Outline variant</Label>
        <Select.Trigger>
          <Select.Value placeholder="Select one" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          {states.items.map((item) => (
            <ChakraSelect.Item key={item.value} item={item}>
              <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </Select.Popover>
      </Select>
      <Select collection={states} variant="subtle" width="256px">
        <Label>Subtle variant</Label>
        <Select.Trigger>
          <Select.Value placeholder="Select one" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          {states.items.map((item) => (
            <ChakraSelect.Item key={item.value} item={item}>
              <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </Select.Popover>
      </Select>
    </Box>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box w="400px" spaceY="4">
      <Select fullWidth collection={states}>
        <Label>State</Label>
        <Select.Trigger>
          <Select.Value placeholder="Select one" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          {states.items.map((item) => (
            <ChakraSelect.Item key={item.value} item={item}>
              <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </Select.Popover>
      </Select>
    </Box>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Select collection={states} width="256px">
      <Label>State</Label>
      <Select.Trigger>
        <Select.Value placeholder="Select one" />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        {states.items.map((item) => (
          <ChakraSelect.Item key={item.value} item={item}>
            <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
            <ChakraSelect.ItemIndicator />
          </ChakraSelect.Item>
        ))}
      </Select.Popover>
      <Description>Select your state of residence</Description>
    </Select>
  ),
};

export const MultipleSelect: Story = {
  render: () => {
    const countries = createListCollection({
      items: [
        {label: "Argentina", value: "argentina"},
        {label: "Venezuela", value: "venezuela"},
        {label: "Japan", value: "japan"},
        {label: "France", value: "france"},
        {label: "Italy", value: "italy"},
        {label: "Spain", value: "spain"},
        {label: "Thailand", value: "thailand"},
        {label: "New Zealand", value: "new-zealand"},
        {label: "Iceland", value: "iceland"},
      ],
    });

    return (
      <Select collection={countries} multiple width="256px">
        <Label>Countries to Visit</Label>
        <Select.Trigger>
          <Select.Value placeholder="Select countries" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          {countries.items.map((item) => (
            <ChakraSelect.Item key={item.value} item={item}>
              <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </Select.Popover>
      </Select>
    );
  },
};

export const WithSections: Story = {
  render: () => {
    const countries = createListCollection({
      items: [
        {label: "United States", value: "usa", group: "North America"},
        {label: "Canada", value: "canada", group: "North America"},
        {label: "Mexico", value: "mexico", group: "North America"},
        {label: "United Kingdom", value: "uk", group: "Europe"},
        {label: "France", value: "france", group: "Europe"},
        {label: "Germany", value: "germany", group: "Europe"},
        {label: "Japan", value: "japan", group: "Asia"},
        {label: "China", value: "china", group: "Asia"},
        {label: "India", value: "india", group: "Asia"},
      ],
    });

    return (
      <Select collection={countries} width="256px">
        <Label>Country</Label>
        <Select.Trigger>
          <Select.Value placeholder="Select a country" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          {countries.items.map((item) => (
            <ChakraSelect.Item key={item.value} item={item}>
              <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </Select.Popover>
      </Select>
    );
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const animalCollection = createListCollection({
      items: [
        {label: "Dog", value: "dog"},
        {label: "Cat", value: "cat", disabled: true},
        {label: "Bird", value: "bird"},
        {label: "Kangaroo", value: "kangaroo", disabled: true},
        {label: "Elephant", value: "elephant"},
        {label: "Tiger", value: "tiger"},
      ],
    });

    return (
      <Select collection={animalCollection} width="256px">
        <Label>Animal</Label>
        <Select.Trigger>
          <Select.Value placeholder="Select an animal" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          {animalCollection.items.map((item) => (
            <ChakraSelect.Item key={item.value} item={item}>
              <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </Select.Popover>
      </Select>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>(["california"]);
    const selectedState = states.items.find((s) => s.value === value[0]);

    return (
      <Box spaceY="2">
        <Select
          collection={states}
          value={value}
          width="256px"
          onValueChange={(e) => setValue(e.value)}
        >
          <Label>State (controlled)</Label>
          <Select.Trigger>
            <Select.Value placeholder="Select a state" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            {states.items.map((item) => (
              <ChakraSelect.Item key={item.value} item={item}>
                <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </Select.Popover>
        </Select>
        <Text fontSize="sm" color="fg.muted">
          Selected: {selectedState?.label || "None"}
        </Text>
      </Box>
    );
  },
};

export const ControlledMultiple: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(["california", "texas"]);

    return (
      <Box spaceY="4">
        <Select
          collection={states}
          multiple
          value={selected}
          width="256px"
          onValueChange={(e) => setSelected(e.value)}
        >
          <Label>States (controlled multiple)</Label>
          <Select.Trigger>
            <Select.Value placeholder="Select states" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            {states.items.map((item) => (
              <ChakraSelect.Item key={item.value} item={item}>
                <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </Select.Popover>
        </Select>
        <Text fontSize="sm" color="fg.muted">
          Selected: {selected.length > 0 ? selected.join(", ") : "None"}
        </Text>
      </Box>
    );
  },
};

export const ControlledOpenState: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Box spaceY="4">
        <Select
          collection={states}
          open={isOpen}
          width="256px"
          onOpenChange={(e) => setIsOpen(e.open)}
        >
          <Label>State</Label>
          <Select.Trigger>
            <Select.Value placeholder="Select one" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            {states.items.map((item) => (
              <ChakraSelect.Item key={item.value} item={item}>
                <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </Select.Popover>
        </Select>
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"} Select
        </Button>
        <Text fontSize="sm" color="fg.muted">
          Select is {isOpen ? "open" : "closed"}
        </Text>
      </Box>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <Select
        collection={states}
        defaultValue={["california"]}
        disabled
        width="256px"
      >
        <Label>State</Label>
        <Select.Trigger>
          <Select.Value placeholder="Select one" />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          {states.items.map((item) => (
            <ChakraSelect.Item key={item.value} item={item}>
              <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </Select.Popover>
      </Select>
    </Box>
  ),
};

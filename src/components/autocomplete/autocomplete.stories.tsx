import type {Meta, StoryObj} from "@storybook/react";

import {createListCollection} from "@ark-ui/react";
import React, {useState} from "react";

import {Box, Text} from "@chakra-ui/react";

import {Label} from "../label";

import {Autocomplete} from "./index";

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Pickers/Autocomplete",
};

export default meta;
type Story = StoryObj<typeof meta>;

const animals = createListCollection({
  items: [
    {label: "Cat", value: "cat"},
    {label: "Dog", value: "dog"},
    {label: "Elephant", value: "elephant"},
    {label: "Lion", value: "lion"},
    {label: "Tiger", value: "tiger"},
    {label: "Giraffe", value: "giraffe"},
  ],
});

export const Default: Story = {
  render: () => {
    return (
      <Autocomplete style={{width: "256px"}} collection={animals}>
        <Label>Favorite Animal</Label>
        <Autocomplete.Trigger>
          <Autocomplete.Value placeholder="Search animals..." />
          <Autocomplete.Indicator />
        </Autocomplete.Trigger>
        <Autocomplete.Popover>
          <Autocomplete.ItemGroup>
            {animals.items.map((item) => (
              <Autocomplete.Item key={item.value} item={item}>
                <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
              </Autocomplete.Item>
            ))}
          </Autocomplete.ItemGroup>
        </Autocomplete.Popover>
      </Autocomplete>
    );
  },
};

export const WithClearButton: Story = {
  render: () => {
    return (
      <Autocomplete style={{width: "256px"}} collection={animals}>
        <Label>Favorite Animal</Label>
        <Autocomplete.Trigger>
          <Autocomplete.Value placeholder="Search animals..." />
          <Autocomplete.ClearButton />
          <Autocomplete.Indicator />
        </Autocomplete.Trigger>
        <Autocomplete.Popover>
          <Autocomplete.ItemGroup>
            {animals.items.map((item) => (
              <Autocomplete.Item key={item.value} item={item}>
                <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
              </Autocomplete.Item>
            ))}
          </Autocomplete.ItemGroup>
        </Autocomplete.Popover>
      </Autocomplete>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <Box spaceY="2">
        <Autocomplete
          style={{width: "256px"}}
          collection={animals}
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Animal (controlled)</Label>
          <Autocomplete.Trigger>
            <Autocomplete.Value placeholder="Search animals..." />
            <Autocomplete.Indicator />
          </Autocomplete.Trigger>
          <Autocomplete.Popover>
            <Autocomplete.ItemGroup>
              {animals.items.map((item) => (
                <Autocomplete.Item key={item.value} item={item}>
                  <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                  <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
                </Autocomplete.Item>
              ))}
            </Autocomplete.ItemGroup>
          </Autocomplete.Popover>
        </Autocomplete>
        <Text fontSize="sm" color="fg.muted">
          Selected: {value.length > 0 ? value.join(", ") : "None"}
        </Text>
      </Box>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <Box spaceY="2">
        <Autocomplete
          style={{width: "256px"}}
          collection={animals}
          multiple
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Animals (multiple)</Label>
          <Autocomplete.Trigger>
            <Autocomplete.Value placeholder="Search animals..." />
            <Autocomplete.Indicator />
          </Autocomplete.Trigger>
          <Autocomplete.Popover>
            <Autocomplete.ItemGroup>
              {animals.items.map((item) => (
                <Autocomplete.Item key={item.value} item={item}>
                  <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                  <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
                </Autocomplete.Item>
              ))}
            </Autocomplete.ItemGroup>
          </Autocomplete.Popover>
        </Autocomplete>
        <Text fontSize="sm" color="fg.muted">
          Selected: {value.length > 0 ? value.join(", ") : "None"}
        </Text>
      </Box>
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => {
    return (
      <Autocomplete style={{width: "256px"}} collection={animals} defaultValue={["cat"]}>
        <Label>Favorite Animal</Label>
        <Autocomplete.Trigger>
          <Autocomplete.Value placeholder="Search animals..." />
          <Autocomplete.Indicator />
        </Autocomplete.Trigger>
        <Autocomplete.Popover>
          <Autocomplete.ItemGroup>
            {animals.items.map((item) => (
              <Autocomplete.Item key={item.value} item={item}>
                <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
              </Autocomplete.Item>
            ))}
          </Autocomplete.ItemGroup>
        </Autocomplete.Popover>
      </Autocomplete>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Autocomplete
        style={{width: "256px"}}
        collection={animals}
        defaultValue={["cat"]}
        disabled
      >
        <Label>Favorite Animal</Label>
        <Autocomplete.Trigger>
          <Autocomplete.Value placeholder="Search animals..." />
          <Autocomplete.Indicator />
        </Autocomplete.Trigger>
        <Autocomplete.Popover>
          <Autocomplete.ItemGroup>
            {animals.items.map((item) => (
              <Autocomplete.Item key={item.value} item={item}>
                <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
              </Autocomplete.Item>
            ))}
          </Autocomplete.ItemGroup>
        </Autocomplete.Popover>
      </Autocomplete>
    );
  },
};

export const ControlledOpenState: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box spaceY="4">
        <Autocomplete
          style={{width: "256px"}}
          collection={animals}
          open={open}
          onOpenChange={(details) => setOpen(details.open)}
        >
          <Label>Favorite Animal</Label>
          <Autocomplete.Trigger>
            <Autocomplete.Value placeholder="Search animals..." />
            <Autocomplete.Indicator />
          </Autocomplete.Trigger>
          <Autocomplete.Popover>
            <Autocomplete.ItemGroup>
              {animals.items.map((item) => (
                <Autocomplete.Item key={item.value} item={item}>
                  <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                  <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
                </Autocomplete.Item>
              ))}
            </Autocomplete.ItemGroup>
          </Autocomplete.Popover>
        </Autocomplete>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} Autocomplete
        </button>
        <Text fontSize="sm" color="fg.muted">
          Autocomplete is {open ? "open" : "closed"}
        </Text>
      </Box>
    );
  },
};

export const SecondaryVariant: Story = {
  render: () => {
    return (
      <Autocomplete style={{width: "256px"}} collection={animals} variant="secondary">
        <Label>Favorite Animal</Label>
        <Autocomplete.Trigger>
          <Autocomplete.Value placeholder="Search animals..." />
          <Autocomplete.Indicator />
        </Autocomplete.Trigger>
        <Autocomplete.Popover>
          <Autocomplete.ItemGroup>
            {animals.items.map((item) => (
              <Autocomplete.Item key={item.value} item={item}>
                <Autocomplete.ItemText>{item.label}</Autocomplete.ItemText>
                <Autocomplete.ItemIndicator>&#10003;</Autocomplete.ItemIndicator>
              </Autocomplete.Item>
            ))}
          </Autocomplete.ItemGroup>
        </Autocomplete.Popover>
      </Autocomplete>
    );
  },
};

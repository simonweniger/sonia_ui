import type {Meta, StoryObj} from "@storybook/react-vite";

import {Combobox, createListCollection} from "@ark-ui/react";
import {Box, Text} from "@chakra-ui/react";
import React from "react";

import {Button} from "../button";
import {Description} from "../description";
import {Label} from "../label";

import {ComboBox} from "./index";

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Pickers/ComboBox",
};

export default meta;
type Story = StoryObj<typeof meta>;

const animals = createListCollection({
  items: [
    {label: "Aardvark", value: "aardvark"},
    {label: "Cat", value: "cat"},
    {label: "Dog", value: "dog"},
    {label: "Kangaroo", value: "kangaroo"},
    {label: "Panda", value: "panda"},
    {label: "Snake", value: "snake"},
  ],
});

export const Default: Story = {
  render: () => (
    <ComboBox collection={animals} style={{width: "256px"}}>
      <Label>Favorite Animal</Label>
      <ComboBox.InputGroup>
        <Combobox.Input placeholder="Search animals..." />
        <ComboBox.Trigger />
      </ComboBox.InputGroup>
      <ComboBox.Popover>
        {animals.items.map((item) => (
          <Combobox.Item key={item.value} item={item}>
            <Combobox.ItemText>{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
          </Combobox.Item>
        ))}
      </ComboBox.Popover>
    </ComboBox>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <ComboBox collection={animals} defaultValue={["cat"]} style={{width: "256px"}}>
      <Label>Favorite Animal</Label>
      <ComboBox.InputGroup>
        <Combobox.Input placeholder="Search animals..." />
        <ComboBox.Trigger />
      </ComboBox.InputGroup>
      <ComboBox.Popover>
        {animals.items.map((item) => (
          <Combobox.Item key={item.value} item={item}>
            <Combobox.ItemText>{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
          </Combobox.Item>
        ))}
      </ComboBox.Popover>
    </ComboBox>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <ComboBox collection={animals} style={{width: "256px"}}>
      <Label>Favorite Animal</Label>
      <ComboBox.InputGroup>
        <Combobox.Input placeholder="Search animals..." />
        <ComboBox.Trigger />
      </ComboBox.InputGroup>
      <ComboBox.Popover>
        {animals.items.map((item) => (
          <Combobox.Item key={item.value} item={item}>
            <Combobox.ItemText>{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
          </Combobox.Item>
        ))}
      </ComboBox.Popover>
      <Description>Search and select your favorite animal</Description>
    </ComboBox>
  ),
};

export const WithSections: Story = {
  render: () => {
    const countries = createListCollection({
      items: [
        {label: "United States", value: "usa"},
        {label: "Canada", value: "canada"},
        {label: "Mexico", value: "mexico"},
        {label: "United Kingdom", value: "uk"},
        {label: "France", value: "france"},
        {label: "Germany", value: "germany"},
        {label: "Spain", value: "spain"},
        {label: "Italy", value: "italy"},
        {label: "Japan", value: "japan"},
        {label: "China", value: "china"},
        {label: "India", value: "india"},
        {label: "South Korea", value: "south-korea"},
      ],
    });

    return (
      <ComboBox collection={countries} style={{width: "256px"}}>
        <Label>Country</Label>
        <ComboBox.InputGroup>
          <Combobox.Input placeholder="Search countries..." />
          <ComboBox.Trigger />
        </ComboBox.InputGroup>
        <ComboBox.Popover>
          {countries.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
            </Combobox.Item>
          ))}
        </ComboBox.Popover>
      </ComboBox>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const controlledAnimals = createListCollection({
      items: [
        {label: "Cat", value: "cat"},
        {label: "Dog", value: "dog"},
        {label: "Bird", value: "bird"},
        {label: "Fish", value: "fish"},
        {label: "Hamster", value: "hamster"},
      ],
    });

    const [value, setValue] = React.useState<string[]>(["cat"]);
    const selectedAnimal = controlledAnimals.items.find((a) => a.value === value[0]);

    return (
      <Box spaceY="2">
        <ComboBox
          collection={controlledAnimals}
          style={{width: "256px"}}
          value={value}
          onValueChange={(details) => setValue(details.value)}
        >
          <Label>Animal (controlled)</Label>
          <ComboBox.InputGroup>
            <Combobox.Input placeholder="Search animals..." />
            <ComboBox.Trigger />
          </ComboBox.InputGroup>
          <ComboBox.Popover>
            {controlledAnimals.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </ComboBox.Popover>
        </ComboBox>
        <Text color="fg.muted" fontSize="sm">
          Selected: {selectedAnimal?.label || "None"}
        </Text>
      </Box>
    );
  },
};

export const ControlledInputValue: Story = {
  render: () => {
    const [inputValue, setInputValue] = React.useState("");

    return (
      <Box spaceY="2">
        <ComboBox
          collection={animals}
          inputValue={inputValue}
          style={{width: "256px"}}
          onInputValueChange={(details) => setInputValue(details.inputValue)}
        >
          <Label>Search (controlled input)</Label>
          <ComboBox.InputGroup>
            <Combobox.Input placeholder="Type to search..." />
            <ComboBox.Trigger />
          </ComboBox.InputGroup>
          <ComboBox.Popover>
            {animals.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </ComboBox.Popover>
        </ComboBox>
        <Text color="fg.muted" fontSize="sm">
          Input value: {inputValue || "(empty)"}
        </Text>
      </Box>
    );
  },
};

export const AllowsCustomValue: Story = {
  render: () => (
    <ComboBox allowCustomValue collection={animals} style={{width: "256px"}}>
      <Label>Favorite Animal</Label>
      <ComboBox.InputGroup>
        <Combobox.Input placeholder="Search or type an animal..." />
        <ComboBox.Trigger />
      </ComboBox.InputGroup>
      <ComboBox.Popover>
        {animals.items.map((item) => (
          <Combobox.Item key={item.value} item={item}>
            <Combobox.ItemText>{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
          </Combobox.Item>
        ))}
      </ComboBox.Popover>
      <Description>You can type any animal name, even if it is not in the list</Description>
    </ComboBox>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ComboBox disabled collection={animals} defaultValue={["cat"]} style={{width: "256px"}}>
      <Label>Favorite Animal</Label>
      <ComboBox.InputGroup>
        <Combobox.Input placeholder="Search animals..." />
        <ComboBox.Trigger />
      </ComboBox.InputGroup>
      <ComboBox.Popover>
        {animals.items.map((item) => (
          <Combobox.Item key={item.value} item={item}>
            <Combobox.ItemText>{item.label}</Combobox.ItemText>
            <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
          </Combobox.Item>
        ))}
      </ComboBox.Popover>
    </ComboBox>
  ),
};

export const Required: Story = {
  render: () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    };

    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--chakra-spacing-4)",
          width: "256px",
        }}
        onSubmit={onSubmit}
      >
        <ComboBox required collection={animals} name="animal" style={{width: "100%"}}>
          <Label>Favorite Animal</Label>
          <ComboBox.InputGroup>
            <Combobox.Input placeholder="Search animals..." />
            <ComboBox.Trigger />
          </ComboBox.InputGroup>
          <ComboBox.Popover>
            {animals.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>&#10003;</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </ComboBox.Popover>
        </ComboBox>
        <Button type="submit">Submit</Button>
      </form>
    );
  },
};

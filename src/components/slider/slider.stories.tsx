import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box} from "@chakra-ui/react";
import React from "react";

import {Label} from "../label";

import {Slider} from "./index";

const meta: Meta<typeof Slider> = {
  argTypes: {
    disabled: {
      control: {type: "boolean"},
    },
  },
  component: Slider,
  decorators: [
    (Story) => (
      <Box p="8" w="96">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Controls/Slider",
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => {
    return (
      <Slider defaultValue={[30]} {...args}>
        <Label>Volume</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb index={0} />
        </Slider.Track>
      </Slider>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <Slider disabled defaultValue={[30]} {...args}>
        <Label>Volume</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb index={0} />
        </Slider.Track>
      </Slider>
    );
  },
};

export const WithSteps: Story = {
  render: (args) => {
    return (
      <Slider defaultValue={[40]} max={100} min={0} step={10} {...args}>
        <Label>Brightness</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Steps count={10} />
          <Slider.Thumb index={0} />
        </Slider.Track>
      </Slider>
    );
  },
};

export const Range: Story = {
  render: (args) => {
    return (
      <Slider defaultValue={[100, 500]} max={1000} min={0} step={50} {...args}>
        <Label>Price Range</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb index={0} />
          <Slider.Thumb index={1} />
        </Slider.Track>
      </Slider>
    );
  },
};

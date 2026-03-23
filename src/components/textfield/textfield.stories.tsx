import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex} from "@chakra-ui/react";
import React from "react";

import {Description} from "../description";
import {FieldError} from "../field-error";
import {Input} from "../input";
import {Label} from "../label";
import {TextArea} from "../textarea";

import {TextField} from "./index";

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Forms/TextField",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TextField>
      <Label>Your name</Label>
      <Input name="name" placeholder="John" width="280px" />
    </TextField>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box spaceY="4" width="400px">
      <TextField fullWidth>
        <Label>Your name</Label>
        <Input name="name" placeholder="John" />
      </TextField>
      <TextField fullWidth>
        <Label>Describe your product</Label>
        <TextArea name="productDescription" placeholder="My product is..." />
      </TextField>
      <TextField fullWidth invalid required>
        <Label>Password</Label>
        <Input name="password" />
        <FieldError>Password must be longer than 8 characters</FieldError>
      </TextField>
    </Box>
  ),
};

export const WithTextArea: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TextField>
        <Label>Describe your product</Label>
        <TextArea name="productDescription" placeholder="My product is..." width="280px" />
      </TextField>
      <TextField>
        <Label>Detailed description</Label>
        <TextArea
          name="detailedDescription"
          placeholder="Provide more details..."
          rows={4}
          width="280px"
        />
        <Description>Minimum 4 rows</Description>
      </TextField>
      <TextField>
        <Label>Review</Label>
        <TextArea
          name="review"
          placeholder="Share your experience..."
          rows={6}
          style={{resize: "vertical"}}
          width="280px"
        />
        <Description>Resizable vertically</Description>
      </TextField>
    </Flex>
  ),
};

export const Required: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TextField required>
        <Label>Email</Label>
        <Input name="email" placeholder="john@example.com" width="280px" />
      </TextField>
      <TextField required>
        <Label>Delivery address</Label>
        <TextArea name="address" placeholder="123 Main St, Anytown, USA" width="280px" />
        <Description>Make sure to include the zip code</Description>
      </TextField>
    </Flex>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TextField>
        <Label>Your name</Label>
        <Input name="name" placeholder="John" width="280px" />
        <Description>We'll never share this with anyone else</Description>
      </TextField>
      <TextField>
        <Label>Delivery address</Label>
        <TextArea name="address" placeholder="123 Main St, Anytown, USA" width="280px" />
        <Description>Make sure to include the zip code</Description>
      </TextField>
    </Flex>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TextField invalid required>
        <Label>Your password</Label>
        <Input name="password" width="280px" />
        <FieldError>Password must be longer than 8 characters</FieldError>
      </TextField>
      <TextField invalid required>
        <Label>Delivery address</Label>
        <TextArea name="address" placeholder="123 Main St, Anytown, USA" width="280px" />
        <FieldError>The address is invalid</FieldError>
      </TextField>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TextField disabled>
        <Label>Your name</Label>
        <Input name="name" placeholder="John" width="280px" />
        <Description>We'll never share this with anyone else</Description>
      </TextField>
      <TextField disabled>
        <Label>Your message</Label>
        <TextArea name="message" placeholder="Tell us more about yourself..." width="280px" />
        <Description>Min 50 characters</Description>
      </TextField>
    </Flex>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <Flex direction="column" gap="4" width="320px">
      <TextField>
        <Label>Your age</Label>
        <Input name="age" placeholder="18" type="number" width="280px" />
      </TextField>

      <TextField>
        <Label>Your password</Label>
        <Input name="password" placeholder="--------" type="password" width="280px" />
      </TextField>

      <TextField>
        <Label>Your email</Label>
        <Input name="email" placeholder="john@example.com" type="email" width="280px" />
      </TextField>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [inputValue, setInputValue] = React.useState("");
    const [textAreaValue, setTextAreaValue] = React.useState("");

    return (
      <Flex direction="column" gap="4">
        <TextField>
          <Label>Your name</Label>
          <Input
            name="name"
            placeholder="John"
            value={inputValue}
            width="280px"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Description>Character count: {inputValue.length}</Description>
        </TextField>
        <TextField>
          <Label>Your bio</Label>
          <TextArea
            name="bio"
            placeholder="Tell us about yourself..."
            value={textAreaValue}
            width="280px"
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          <Description>Character count: {textAreaValue.length} / 500</Description>
        </TextField>
      </Flex>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const [username, setUsername] = React.useState("");
    const [bio, setBio] = React.useState("");
    const isUsernameInvalid = username.length > 0 && username.length < 3;
    const isBioInvalid = bio.length > 0 && bio.length < 20;

    return (
      <Flex direction="column" gap="4">
        <TextField required invalid={isUsernameInvalid}>
          <Label>Username</Label>
          <Input
            name="username"
            placeholder="john_doe"
            value={username}
            width="280px"
            onChange={(e) => setUsername(e.target.value)}
          />
          {isUsernameInvalid ? (
            <FieldError>Username must be at least 3 characters</FieldError>
          ) : (
            <Description>Choose a unique username</Description>
          )}
        </TextField>
        <TextField required invalid={isBioInvalid}>
          <Label>Bio</Label>
          <TextArea
            name="bio"
            placeholder="Tell us about yourself..."
            value={bio}
            width="280px"
            onChange={(e) => setBio(e.target.value)}
          />
          {isBioInvalid ? (
            <FieldError>Bio must be at least 20 characters</FieldError>
          ) : (
            <Description>Min 20 characters ({bio.length}/20)</Description>
          )}
        </TextField>
      </Flex>
    );
  },
};

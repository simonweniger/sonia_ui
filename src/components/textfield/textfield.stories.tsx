import type {Meta, StoryObj} from "@storybook/react";

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
      <Input width="280px" name="name" placeholder="John" />
    </TextField>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box width="400px" spaceY="4">
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
        <TextArea width="280px" name="productDescription" placeholder="My product is..." />
      </TextField>
      <TextField>
        <Label>Detailed description</Label>
        <TextArea width="280px" name="detailedDescription" placeholder="Provide more details..." rows={4} />
        <Description>Minimum 4 rows</Description>
      </TextField>
      <TextField>
        <Label>Review</Label>
        <TextArea
          width="280px"
          name="review"
          placeholder="Share your experience..."
          rows={6}
          style={{resize: "vertical"}}
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
        <Input width="280px" name="email" placeholder="john@example.com" />
      </TextField>
      <TextField required>
        <Label>Delivery address</Label>
        <TextArea width="280px" name="address" placeholder="123 Main St, Anytown, USA" />
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
        <Input width="280px" name="name" placeholder="John" />
        <Description>We'll never share this with anyone else</Description>
      </TextField>
      <TextField>
        <Label>Delivery address</Label>
        <TextArea width="280px" name="address" placeholder="123 Main St, Anytown, USA" />
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
        <Input width="280px" name="password" />
        <FieldError>Password must be longer than 8 characters</FieldError>
      </TextField>
      <TextField invalid required>
        <Label>Delivery address</Label>
        <TextArea width="280px" name="address" placeholder="123 Main St, Anytown, USA" />
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
        <Input width="280px" name="name" placeholder="John" />
        <Description>We'll never share this with anyone else</Description>
      </TextField>
      <TextField disabled>
        <Label>Your message</Label>
        <TextArea width="280px" name="message" placeholder="Tell us more about yourself..." />
        <Description>Min 50 characters</Description>
      </TextField>
    </Flex>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <Flex width="320px" direction="column" gap="4">
      <TextField>
        <Label>Your age</Label>
        <Input width="280px" name="age" placeholder="18" type="number" />
      </TextField>

      <TextField>
        <Label>Your password</Label>
        <Input width="280px" name="password" placeholder="--------" type="password" />
      </TextField>

      <TextField>
        <Label>Your email</Label>
        <Input width="280px" name="email" placeholder="john@example.com" type="email" />
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
            width="280px"
            name="name"
            placeholder="John"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Description>Character count: {inputValue.length}</Description>
        </TextField>
        <TextField>
          <Label>Your bio</Label>
          <TextArea
            width="280px"
            name="bio"
            placeholder="Tell us about yourself..."
            value={textAreaValue}
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
            width="280px"
            name="username"
            placeholder="john_doe"
            value={username}
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
            width="280px"
            name="bio"
            placeholder="Tell us about yourself..."
            value={bio}
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

import type {Meta, StoryObj} from "@storybook/react";

import {Icon} from "@iconify/react";
import React from "react";

import {Button} from "../button";
import {Description} from "../description";
import {FieldError} from "../field-error";
import {Input} from "../input";
import {Label} from "../label";
import {TextArea} from "../textarea";
import {TextField} from "../textfield";

import {Fieldset} from "./index";

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Forms/Fieldset",
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  render: () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    };

    return (
      <form onSubmit={onSubmit}>
        <Fieldset w="96">
          <Fieldset.Legend>Profile Settings</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <Fieldset.Group>
            <TextField required name="name">
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField required name="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" type="email" />
              <FieldError />
            </TextField>
            <TextField required name="bio">
              <Label>Bio</Label>
              <TextArea placeholder="Tell us about yourself..." />
              <Description>Minimum 10 characters</Description>
              <FieldError />
            </TextField>
          </Fieldset.Group>
          <Fieldset.Actions>
            <Button type="submit">
              <Icon icon="gravity-ui:floppy-disk" />
              Save changes
            </Button>
            <Button type="reset" variant="ghost">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </form>
    );
  },
};

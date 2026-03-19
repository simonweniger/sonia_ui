import type {Meta, StoryObj} from "@storybook/react";

import {Icon} from "@iconify/react";
import * as React from "react";

import {Box, Flex, Text} from "@chakra-ui/react";

import {Avatar} from "../avatar";
import {Button} from "../button";
import {Description} from "../description";
import {Header} from "../header";
import {Kbd} from "../kbd";
import {Label} from "../label";
import {Dropdown} from "./index";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Collections/Dropdown",
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger>
        <Button aria-label="Menu" variant="secondary">
          Actions
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Section>
          <Dropdown.Item value="new-file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item value="copy-link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item value="edit-file">
            <Label>Edit file</Label>
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Separator />
        <Dropdown.Section>
          <Dropdown.Item value="delete-file">
            <Label color="fg.error">Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const WithSingleSelection: Story = {
  render: () => {
    const [value, setValue] = React.useState("apple");

    return (
      <Dropdown>
        <Dropdown.Trigger>
          <Button aria-label="Menu" variant="secondary">
            Fruit
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content minW="256px">
          <Dropdown.Section>
            <Header>Select a fruit</Header>
            <Dropdown.RadioItemGroup value={value} onValueChange={(details) => setValue(details.value)}>
              <Dropdown.RadioItem value="apple">
                <Dropdown.ItemIndicator />
                <Label>Apple</Label>
              </Dropdown.RadioItem>
              <Dropdown.RadioItem value="banana">
                <Dropdown.ItemIndicator />
                <Label>Banana</Label>
              </Dropdown.RadioItem>
              <Dropdown.RadioItem value="cherry">
                <Dropdown.ItemIndicator />
                <Label>Cherry</Label>
              </Dropdown.RadioItem>
            </Dropdown.RadioItemGroup>
          </Dropdown.Section>
          <Dropdown.RadioItemGroup value={value} onValueChange={(details) => setValue(details.value)}>
            <Dropdown.RadioItem value="orange">
              <Dropdown.ItemIndicator />
              <Label>Orange</Label>
            </Dropdown.RadioItem>
            <Dropdown.RadioItem value="pear">
              <Dropdown.ItemIndicator />
              <Label>Pear</Label>
            </Dropdown.RadioItem>
          </Dropdown.RadioItemGroup>
        </Dropdown.Content>
      </Dropdown>
    );
  },
};

export const SingleWithCustomIndicator: Story = {
  render: () => {
    const [value, setValue] = React.useState("apple");

    const CustomCheckmarkIcon = (
      <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z"
          fill="var(--chakra-colors-accent)"
          fillRule="evenodd"
        />
      </svg>
    );

    return (
      <Dropdown>
        <Dropdown.Trigger>
          <Button aria-label="Menu" variant="secondary">
            Fruits
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content minW="256px">
          <Dropdown.Section>
            <Header>Select a fruit</Header>
            <Dropdown.RadioItemGroup value={value} onValueChange={(details) => setValue(details.value)}>
              <Dropdown.RadioItem value="apple">
                <Dropdown.ItemIndicator>{CustomCheckmarkIcon}</Dropdown.ItemIndicator>
                <Label>Apple</Label>
              </Dropdown.RadioItem>
              <Dropdown.RadioItem value="banana">
                <Dropdown.ItemIndicator>{CustomCheckmarkIcon}</Dropdown.ItemIndicator>
                <Label>Banana</Label>
              </Dropdown.RadioItem>
              <Dropdown.RadioItem value="cherry">
                <Dropdown.ItemIndicator>{CustomCheckmarkIcon}</Dropdown.ItemIndicator>
                <Label>Cherry</Label>
              </Dropdown.RadioItem>
            </Dropdown.RadioItemGroup>
          </Dropdown.Section>
          <Dropdown.RadioItemGroup value={value} onValueChange={(details) => setValue(details.value)}>
            <Dropdown.RadioItem value="orange">
              <Dropdown.ItemIndicator>{CustomCheckmarkIcon}</Dropdown.ItemIndicator>
              <Label>Orange</Label>
            </Dropdown.RadioItem>
            <Dropdown.RadioItem value="pear">
              <Dropdown.ItemIndicator>{CustomCheckmarkIcon}</Dropdown.ItemIndicator>
              <Label>Pear</Label>
            </Dropdown.RadioItem>
          </Dropdown.RadioItemGroup>
        </Dropdown.Content>
      </Dropdown>
    );
  },
};

export const WithMultipleSelection: Story = {
  render: () => {
    const [checked, setChecked] = React.useState({apple: true, banana: false, cherry: false, orange: false, pear: false});

    return (
      <Dropdown closeOnSelect={false}>
        <Dropdown.Trigger>
          <Button aria-label="Menu" variant="secondary">
            Preferred Fruits
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content minW="256px">
          <Dropdown.Section>
            <Header>Select a fruit</Header>
            <Dropdown.CheckboxItem
              value="apple"
              checked={checked.apple}
              onCheckedChange={(v) => setChecked((p) => ({...p, apple: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Apple</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              value="banana"
              checked={checked.banana}
              onCheckedChange={(v) => setChecked((p) => ({...p, banana: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Banana</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              value="cherry"
              checked={checked.cherry}
              onCheckedChange={(v) => setChecked((p) => ({...p, cherry: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Cherry</Label>
            </Dropdown.CheckboxItem>
          </Dropdown.Section>
          <Dropdown.CheckboxItem
            value="orange"
            checked={checked.orange}
            onCheckedChange={(v) => setChecked((p) => ({...p, orange: Boolean(v)}))}
          >
            <Dropdown.ItemIndicator />
            <Label>Orange</Label>
          </Dropdown.CheckboxItem>
          <Dropdown.CheckboxItem
            value="pear"
            checked={checked.pear}
            onCheckedChange={(v) => setChecked((p) => ({...p, pear: Boolean(v)}))}
          >
            <Dropdown.ItemIndicator />
            <Label>Pear</Label>
          </Dropdown.CheckboxItem>
        </Dropdown.Content>
      </Dropdown>
    );
  },
};

export const WithSectionLevelSelection: Story = {
  render: () => {
    const [textStyles, setTextStyles] = React.useState({bold: true, italic: true, underline: false});
    const [textAlignment, setTextAlignment] = React.useState("left");

    return (
      <Dropdown closeOnSelect={false}>
        <Dropdown.Trigger>
          <Button aria-label="Menu" variant="secondary">
            Styles
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content minW="256px">
          <Dropdown.Section>
            <Header>Actions</Header>
            <Dropdown.Item value="cut">
              <Label>Cut</Label>
              <Kbd ms="auto" slot="keyboard" variant="plain">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>X</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item value="copy">
              <Label>Copy</Label>
              <Kbd ms="auto" slot="keyboard" variant="plain">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>C</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item value="paste">
              <Label>Paste</Label>
              <Kbd ms="auto" slot="keyboard" variant="plain">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>U</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
          </Dropdown.Section>
          <Dropdown.Separator />
          <Dropdown.Section>
            <Header>Text Style</Header>
            <Dropdown.CheckboxItem
              value="bold"
              checked={textStyles.bold}
              onCheckedChange={(v) => setTextStyles((p) => ({...p, bold: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Bold</Label>
              <Kbd ms="auto" slot="keyboard" variant="plain">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>B</Kbd.Content>
              </Kbd>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              value="italic"
              checked={textStyles.italic}
              onCheckedChange={(v) => setTextStyles((p) => ({...p, italic: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Italic</Label>
              <Kbd ms="auto" slot="keyboard" variant="plain">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>I</Kbd.Content>
              </Kbd>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              value="underline"
              checked={textStyles.underline}
              onCheckedChange={(v) => setTextStyles((p) => ({...p, underline: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Underline</Label>
              <Kbd ms="auto" slot="keyboard" variant="plain">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>U</Kbd.Content>
              </Kbd>
            </Dropdown.CheckboxItem>
          </Dropdown.Section>
          <Dropdown.Separator />
          <Dropdown.Section>
            <Header>Text Alignment</Header>
            <Dropdown.RadioItemGroup value={textAlignment} onValueChange={(details) => setTextAlignment(details.value)}>
              <Dropdown.RadioItem value="left">
                <Dropdown.ItemIndicator />
                <Label>Left</Label>
                <Kbd ms="auto" slot="keyboard" variant="plain">
                  <Kbd.Abbr keyValue="alt" />
                  <Kbd.Content>A</Kbd.Content>
                </Kbd>
              </Dropdown.RadioItem>
              <Dropdown.RadioItem value="center">
                <Dropdown.ItemIndicator />
                <Label>Center</Label>
                <Kbd ms="auto" slot="keyboard" variant="plain">
                  <Kbd.Abbr keyValue="alt" />
                  <Kbd.Content>H</Kbd.Content>
                </Kbd>
              </Dropdown.RadioItem>
              <Dropdown.RadioItem value="right">
                <Dropdown.ItemIndicator />
                <Label>Right</Label>
                <Kbd ms="auto" slot="keyboard" variant="plain">
                  <Kbd.Abbr keyValue="alt" />
                  <Kbd.Content>D</Kbd.Content>
                </Kbd>
              </Dropdown.RadioItem>
            </Dropdown.RadioItemGroup>
          </Dropdown.Section>
        </Dropdown.Content>
      </Dropdown>
    );
  },
};

export const WithKeyboardShortcuts: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger>
        <Button aria-label="Menu" variant="secondary">
          Actions
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item value="new">
          <Label>New</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>N</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="open">
          <Label>Open</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>O</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="save">
          <Label>Save</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>S</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="delete">
          <Label color="fg.error">Delete</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Abbr keyValue="shift" />
            <Kbd.Content>D</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger>
        <Button aria-label="Menu" variant="secondary">
          Actions
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item value="new-file">
          <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:square-plus" />
          <Label>New file</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>N</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="open-file">
          <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:folder-open" />
          <Label>Open file</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>O</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="save-file">
          <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:floppy-disk" />
          <Label>Save file</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>S</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="delete-file">
          <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-error)"}} icon="gravity-ui:trash-bin" />
          <Label color="fg.error">Delete file</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Abbr keyValue="shift" />
            <Kbd.Content>D</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger>
        <Button aria-label="Menu" variant="secondary">
          Actions
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item value="new-file">
          <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:square-plus" />
          </Flex>
          <Flex direction="column">
            <Label>New file</Label>
            <Description>Create a new file</Description>
          </Flex>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>N</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="open-file">
          <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:folder-open" />
          </Flex>
          <Flex direction="column">
            <Label>Open file</Label>
            <Description>Open an existing file</Description>
          </Flex>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>O</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="save-file">
          <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:floppy-disk" />
          </Flex>
          <Flex direction="column">
            <Label>Save file</Label>
            <Description>Save the current file</Description>
          </Flex>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>S</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="delete-file">
          <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-error)"}} icon="gravity-ui:trash-bin" />
          </Flex>
          <Flex direction="column">
            <Label color="fg.error">Delete file</Label>
            <Description>Move to trash</Description>
          </Flex>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Abbr keyValue="shift" />
            <Kbd.Content>D</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger aria-label="Menu">
        <Button isIconOnly aria-label="Menu" variant="secondary">
          <Icon style={{outline: "none"}} icon="gravity-ui:ellipsis-vertical" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Section>
          <Header>Actions</Header>
          <Dropdown.Item value="new-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:square-plus" />
            </Flex>
            <Flex direction="column">
              <Label>New file</Label>
              <Description>Create a new file</Description>
            </Flex>
            <Kbd ms="auto" slot="keyboard" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>N</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item value="edit-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:pencil" />
            </Flex>
            <Flex direction="column">
              <Label>Edit file</Label>
              <Description>Make changes</Description>
            </Flex>
            <Kbd ms="auto" slot="keyboard" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>E</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Separator />
        <Dropdown.Section>
          <Header>Danger zone</Header>
          <Dropdown.Item value="delete-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-error)"}} icon="gravity-ui:trash-bin" />
            </Flex>
            <Flex direction="column">
              <Label color="fg.error">Delete file</Label>
              <Description>Move to trash</Description>
            </Flex>
            <Kbd ms="auto" slot="keyboard" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Abbr keyValue="shift" />
              <Kbd.Content>D</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger>
        <Button isIconOnly aria-label="Menu" variant="secondary">
          <Icon style={{outline: "none"}} icon="gravity-ui:bars" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content minW="220px">
        <Dropdown.Section>
          <Header>Actions</Header>
          <Dropdown.Item value="new-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:square-plus" />
            </Flex>
            <Flex direction="column">
              <Label>New file</Label>
              <Description>Create a new file</Description>
            </Flex>
            <Kbd ms="auto" slot="keyboard" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>N</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item value="edit-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:pencil" />
            </Flex>
            <Flex direction="column">
              <Label>Edit file</Label>
              <Description>Make changes</Description>
            </Flex>
            <Kbd ms="auto" slot="keyboard" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>E</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Separator />
        <Dropdown.Section>
          <Header>Danger zone</Header>
          <Dropdown.Item value="delete-file" disabled>
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-error)"}} icon="gravity-ui:trash-bin" />
            </Flex>
            <Flex direction="column">
              <Label color="fg.error">Delete file</Label>
              <Description>Move to trash</Description>
            </Flex>
            <Kbd ms="auto" slot="keyboard" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Abbr keyValue="shift" />
              <Kbd.Content>D</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger>
        <Button aria-label="Menu" variant="secondary">
          Share
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item value="copy-link">
          <Label>Copy Link</Label>
        </Dropdown.Item>
        <Dropdown.Item value="facebook">
          <Label>Facebook</Label>
        </Dropdown.Item>
        <Dropdown.Item value="twitter">
          <Label>X / Twitter</Label>
        </Dropdown.Item>
        <Dropdown.Root positioning={{placement: "right-start", gutter: -2}}>
          <Dropdown.TriggerItem>
            <Label>Other</Label>
            <Icon style={{width: "0.75rem", height: "0.75rem", marginLeft: "auto", color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:chevron-right" />
          </Dropdown.TriggerItem>
          <Dropdown.Content>
            <Dropdown.Item value="whatsapp">
              <Label>WhatsApp</Label>
            </Dropdown.Item>
            <Dropdown.Item value="telegram">
              <Label>Telegram</Label>
            </Dropdown.Item>
            <Dropdown.Item value="discord">
              <Label>Discord</Label>
            </Dropdown.Item>
            <Dropdown.Root positioning={{placement: "right-start", gutter: -2}}>
              <Dropdown.TriggerItem>
                <Label>Email</Label>
                <Icon style={{width: "0.75rem", height: "0.75rem", marginLeft: "auto", color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:chevron-right" />
              </Dropdown.TriggerItem>
              <Dropdown.Content>
                <Dropdown.Item value="work">
                  <Label>Work email</Label>
                </Dropdown.Item>
                <Dropdown.Item value="personal">
                  <Label>Personal email</Label>
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </Dropdown.Content>
        </Dropdown.Root>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const WithCustomSubmenuIndicator: Story = {
  render: () => (
    <Dropdown onSelect={(details) => alert(`Selected: ${details.value}`)}>
      <Dropdown.Trigger>
        <Button aria-label="Menu" variant="secondary">
          Share
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item value="copy-link">
          <Label>Copy Link</Label>
        </Dropdown.Item>
        <Dropdown.Item value="facebook">
          <Label>Facebook</Label>
        </Dropdown.Item>
        <Dropdown.Root positioning={{placement: "right-start", gutter: -2}}>
          <Dropdown.TriggerItem>
            <Label>More options</Label>
            <Icon style={{width: "0.875rem", height: "0.875rem", marginLeft: "auto", color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:arrow-right" />
          </Dropdown.TriggerItem>
          <Dropdown.Content>
            <Dropdown.Item value="whatsapp">
              <Label>WhatsApp</Label>
            </Dropdown.Item>
            <Dropdown.Item value="telegram">
              <Label>Telegram</Label>
            </Dropdown.Item>
            <Dropdown.Root positioning={{placement: "right-start", gutter: -2}}>
              <Dropdown.TriggerItem>
                <Label>Email</Label>
                <svg
                  style={{width: "0.875rem", height: "0.875rem", marginLeft: "auto", color: "var(--chakra-colors-fg-muted)"}}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Dropdown.TriggerItem>
              <Dropdown.Content>
                <Dropdown.Item value="work">
                  <Label>Work email</Label>
                </Dropdown.Item>
                <Dropdown.Item value="personal">
                  <Label>Personal email</Label>
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
            <Dropdown.Item value="discord">
              <Label>Discord</Label>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
        <Dropdown.Root positioning={{placement: "right-start", gutter: -2}}>
          <Dropdown.TriggerItem>
            <Label>Other (default indicator)</Label>
            <Icon style={{width: "0.75rem", height: "0.75rem", marginLeft: "auto", color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:chevron-right" />
          </Dropdown.TriggerItem>
          <Dropdown.Content>
            <Dropdown.Item value="sms">
              <Label>SMS</Label>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState({bold: true, italic: false, underline: false});

    const selectedItems = Object.entries(checked)
      .filter(([, v]) => v)
      .map(([k]) => k);

    return (
      <Box minW="sm" spaceY="4">
        <Dropdown closeOnSelect={false}>
          <Dropdown.Trigger>
            <Button aria-label="Menu" variant="secondary">
              Actions
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.CheckboxItem
              value="bold"
              checked={checked.bold}
              onCheckedChange={(v) => setChecked((p) => ({...p, bold: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Bold</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              value="italic"
              checked={checked.italic}
              onCheckedChange={(v) => setChecked((p) => ({...p, italic: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Italic</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              value="underline"
              checked={checked.underline}
              onCheckedChange={(v) => setChecked((p) => ({...p, underline: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Underline</Label>
            </Dropdown.CheckboxItem>
          </Dropdown.Content>
        </Dropdown>
        <Text fontSize="sm" color="fg.muted">
          Selected: {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
        </Text>
      </Box>
    );
  },
};

export const ControlledOpenState: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Box minW="sm" spaceY="4">
        <Text fontSize="sm" color="fg.muted">
          Dropdown is: <strong>{open ? "open" : "closed"}</strong>
        </Text>
        <Dropdown open={open} onOpenChange={(details) => setOpen(details.open)}>
          <Dropdown.Trigger>
            <Button aria-label="Menu" variant="secondary">
              Actions
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item value="new-file">
              <Label>New file</Label>
            </Dropdown.Item>
            <Dropdown.Item value="open-file">
              <Label>Open file</Label>
            </Dropdown.Item>
            <Dropdown.Item value="save-file">
              <Label>Save file</Label>
            </Dropdown.Item>
            <Dropdown.Item value="delete-file">
              <Label color="fg.error">Delete file</Label>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </Box>
    );
  },
};

export const CustomTrigger: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger style={{borderRadius: "var(--chakra-radii-full)"}}>
        <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
          />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Box px="3" pt="3" pb="1">
          <Flex align="center" gap="2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <Flex direction="column" gap="0">
              <Text fontSize="sm" lineHeight="5" fontWeight="medium">Jane Doe</Text>
              <Text fontSize="xs" lineHeight="none" color="fg.muted">jane@example.com</Text>
            </Flex>
          </Flex>
        </Box>
        <Dropdown.Item value="dashboard">
          <Label>Dashboard</Label>
        </Dropdown.Item>
        <Dropdown.Item value="profile">
          <Label>Profile</Label>
        </Dropdown.Item>
        <Dropdown.Item value="settings">
          <Flex width="full" align="center" justify="space-between" gap="2">
            <Label>Settings</Label>
            <Icon style={{width: "0.875rem", height: "0.875rem", color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:gear" />
          </Flex>
        </Dropdown.Item>
        <Dropdown.Item value="new-project">
          <Flex width="full" align="center" justify="space-between" gap="2">
            <Label>Create Team</Label>
            <Icon style={{width: "0.875rem", height: "0.875rem", color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:persons" />
          </Flex>
        </Dropdown.Item>
        <Dropdown.Item value="logout">
          <Flex width="full" align="center" justify="space-between" gap="2">
            <Label color="fg.error">Log Out</Label>
            <Icon style={{width: "0.875rem", height: "0.875rem", color: "var(--chakra-colors-fg-error)"}} icon="gravity-ui:arrow-right-from-square" />
          </Flex>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

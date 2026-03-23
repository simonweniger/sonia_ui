import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import * as React from "react";

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
            <Dropdown.RadioItemGroup
              value={value}
              onValueChange={(details) => setValue(details.value)}
            >
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
          <Dropdown.RadioItemGroup
            value={value}
            onValueChange={(details) => setValue(details.value)}
          >
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
            <Dropdown.RadioItemGroup
              value={value}
              onValueChange={(details) => setValue(details.value)}
            >
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
          <Dropdown.RadioItemGroup
            value={value}
            onValueChange={(details) => setValue(details.value)}
          >
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
    const [checked, setChecked] = React.useState({
      apple: true,
      banana: false,
      cherry: false,
      orange: false,
      pear: false,
    });

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
              checked={checked.apple}
              value="apple"
              onCheckedChange={(v) => setChecked((p) => ({...p, apple: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Apple</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              checked={checked.banana}
              value="banana"
              onCheckedChange={(v) => setChecked((p) => ({...p, banana: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Banana</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              checked={checked.cherry}
              value="cherry"
              onCheckedChange={(v) => setChecked((p) => ({...p, cherry: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Cherry</Label>
            </Dropdown.CheckboxItem>
          </Dropdown.Section>
          <Dropdown.CheckboxItem
            checked={checked.orange}
            value="orange"
            onCheckedChange={(v) => setChecked((p) => ({...p, orange: Boolean(v)}))}
          >
            <Dropdown.ItemIndicator />
            <Label>Orange</Label>
          </Dropdown.CheckboxItem>
          <Dropdown.CheckboxItem
            checked={checked.pear}
            value="pear"
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
    const [textStyles, setTextStyles] = React.useState({
      bold: true,
      italic: true,
      underline: false,
    });
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
              checked={textStyles.bold}
              value="bold"
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
              checked={textStyles.italic}
              value="italic"
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
              checked={textStyles.underline}
              value="underline"
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
            <Dropdown.RadioItemGroup
              value={textAlignment}
              onValueChange={(details) => setTextAlignment(details.value)}
            >
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
          <Icon
            icon="gravity-ui:square-plus"
            style={{
              width: "1rem",
              height: "1rem",
              flexShrink: 0,
              color: "var(--chakra-colors-fg-muted)",
            }}
          />
          <Label>New file</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>N</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="open-file">
          <Icon
            icon="gravity-ui:folder-open"
            style={{
              width: "1rem",
              height: "1rem",
              flexShrink: 0,
              color: "var(--chakra-colors-fg-muted)",
            }}
          />
          <Label>Open file</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>O</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="save-file">
          <Icon
            icon="gravity-ui:floppy-disk"
            style={{
              width: "1rem",
              height: "1rem",
              flexShrink: 0,
              color: "var(--chakra-colors-fg-muted)",
            }}
          />
          <Label>Save file</Label>
          <Kbd ms="auto" slot="keyboard" variant="plain">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>S</Kbd.Content>
          </Kbd>
        </Dropdown.Item>
        <Dropdown.Item value="delete-file">
          <Icon
            icon="gravity-ui:trash-bin"
            style={{
              width: "1rem",
              height: "1rem",
              flexShrink: 0,
              color: "var(--chakra-colors-fg-error)",
            }}
          />
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
          <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon
              icon="gravity-ui:square-plus"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
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
          <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon
              icon="gravity-ui:folder-open"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
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
          <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon
              icon="gravity-ui:floppy-disk"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
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
          <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
            <Icon
              icon="gravity-ui:trash-bin"
              style={{
                width: "1rem",
                height: "1rem",
                flexShrink: 0,
                color: "var(--chakra-colors-fg-error)",
              }}
            />
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
          <Icon icon="gravity-ui:ellipsis-vertical" style={{outline: "none"}} />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Section>
          <Header>Actions</Header>
          <Dropdown.Item value="new-file">
            <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon
                icon="gravity-ui:square-plus"
                style={{
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  color: "var(--chakra-colors-fg-muted)",
                }}
              />
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
            <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon
                icon="gravity-ui:pencil"
                style={{
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  color: "var(--chakra-colors-fg-muted)",
                }}
              />
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
            <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon
                icon="gravity-ui:trash-bin"
                style={{
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  color: "var(--chakra-colors-fg-error)",
                }}
              />
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
          <Icon icon="gravity-ui:bars" style={{outline: "none"}} />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content minW="220px">
        <Dropdown.Section>
          <Header>Actions</Header>
          <Dropdown.Item value="new-file">
            <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon
                icon="gravity-ui:square-plus"
                style={{
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  color: "var(--chakra-colors-fg-muted)",
                }}
              />
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
            <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon
                icon="gravity-ui:pencil"
                style={{
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  color: "var(--chakra-colors-fg-muted)",
                }}
              />
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
          <Dropdown.Item disabled value="delete-file">
            <Flex alignItems="start" height="8" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon
                icon="gravity-ui:trash-bin"
                style={{
                  width: "1rem",
                  height: "1rem",
                  flexShrink: 0,
                  color: "var(--chakra-colors-fg-error)",
                }}
              />
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
            <Icon
              icon="gravity-ui:chevron-right"
              style={{
                width: "0.75rem",
                height: "0.75rem",
                marginLeft: "auto",
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
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
                <Icon
                  icon="gravity-ui:chevron-right"
                  style={{
                    width: "0.75rem",
                    height: "0.75rem",
                    marginLeft: "auto",
                    color: "var(--chakra-colors-fg-muted)",
                  }}
                />
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
            <Icon
              icon="gravity-ui:arrow-right"
              style={{
                width: "0.875rem",
                height: "0.875rem",
                marginLeft: "auto",
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
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
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  style={{
                    width: "0.875rem",
                    height: "0.875rem",
                    marginLeft: "auto",
                    color: "var(--chakra-colors-fg-muted)",
                  }}
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
            <Icon
              icon="gravity-ui:chevron-right"
              style={{
                width: "0.75rem",
                height: "0.75rem",
                marginLeft: "auto",
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
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
              checked={checked.bold}
              value="bold"
              onCheckedChange={(v) => setChecked((p) => ({...p, bold: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Bold</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              checked={checked.italic}
              value="italic"
              onCheckedChange={(v) => setChecked((p) => ({...p, italic: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Italic</Label>
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem
              checked={checked.underline}
              value="underline"
              onCheckedChange={(v) => setChecked((p) => ({...p, underline: Boolean(v)}))}
            >
              <Dropdown.ItemIndicator />
              <Label>Underline</Label>
            </Dropdown.CheckboxItem>
          </Dropdown.Content>
        </Dropdown>
        <Text color="fg.muted" fontSize="sm">
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
        <Text color="fg.muted" fontSize="sm">
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
            src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
          />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Box pb="1" pt="3" px="3">
          <Flex align="center" gap="2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <Flex direction="column" gap="0">
              <Text fontSize="sm" fontWeight="medium" lineHeight="5">
                Jane Doe
              </Text>
              <Text color="fg.muted" fontSize="xs" lineHeight="none">
                jane@example.com
              </Text>
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
          <Flex align="center" gap="2" justify="space-between" width="full">
            <Label>Settings</Label>
            <Icon
              icon="gravity-ui:gear"
              style={{
                width: "0.875rem",
                height: "0.875rem",
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
          </Flex>
        </Dropdown.Item>
        <Dropdown.Item value="new-project">
          <Flex align="center" gap="2" justify="space-between" width="full">
            <Label>Create Team</Label>
            <Icon
              icon="gravity-ui:persons"
              style={{
                width: "0.875rem",
                height: "0.875rem",
                color: "var(--chakra-colors-fg-muted)",
              }}
            />
          </Flex>
        </Dropdown.Item>
        <Dropdown.Item value="logout">
          <Flex align="center" gap="2" justify="space-between" width="full">
            <Label color="fg.error">Log Out</Label>
            <Icon
              icon="gravity-ui:arrow-right-from-square"
              style={{
                width: "0.875rem",
                height: "0.875rem",
                color: "var(--chakra-colors-fg-error)",
              }}
            />
          </Flex>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

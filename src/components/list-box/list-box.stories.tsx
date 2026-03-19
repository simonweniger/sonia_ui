import type {Meta, StoryObj} from "@storybook/react";

import {Icon} from "@iconify/react";
import * as React from "react";

import {Box, Flex, Text} from "@chakra-ui/react";

import {Avatar, AvatarFallback, AvatarImage} from "../avatar";
import {Description} from "../description";
import {Header} from "../header";
import {Kbd} from "../kbd";
import {Label} from "../label";
import {Separator} from "../separator";
import {Surface} from "../surface";

import {ListBox} from "./index";

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  title: "Components/Collections/ListBox",
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string | null>("1");

    return (
      <ListBox aria-label="Users" width="220px">
        <ListBox.Item id="1" isSelected={selected === "1"} onClick={() => setSelected(selected === "1" ? null : "1")}>
          <Avatar size="sm">
            <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Flex direction="column">
            <Label>Bob</Label>
            <Description>bob@heroui.com</Description>
          </Flex>
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="2" isSelected={selected === "2"} onClick={() => setSelected(selected === "2" ? null : "2")}>
          <Avatar size="sm">
            <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <Flex direction="column">
            <Label>Fred</Label>
            <Description>fred@heroui.com</Description>
          </Flex>
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="3" isSelected={selected === "3"} onClick={() => setSelected(selected === "3" ? null : "3")}>
          <Avatar size="sm">
            <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <Flex direction="column">
            <Label>Martha</Label>
            <Description>martha@heroui.com</Description>
          </Flex>
          <ListBox.ItemIndicator />
        </ListBox.Item>
      </ListBox>
    );
  },
};

export const WithSections: Story = {
  render: () => (
    <Surface style={{width: "256px", borderRadius: "var(--chakra-radii-3xl)", boxShadow: "var(--chakra-shadows-surface)"}}>
      <ListBox
        aria-label="File actions"
        width="full"
        p="2"
      >
        <ListBox.Section>
          <Header>Actions</Header>
          <ListBox.Item id="new-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:square-plus" />
            </Flex>
            <Flex direction="column">
              <Label>New file</Label>
              <Description>Create a new file</Description>
            </Flex>
            <Kbd ms="auto" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>N</Kbd.Content>
            </Kbd>
          </ListBox.Item>
          <ListBox.Item id="edit-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:pencil" />
            </Flex>
            <Flex direction="column">
              <Label>Edit file</Label>
              <Description>Make changes</Description>
            </Flex>
            <Kbd ms="auto" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>E</Kbd.Content>
            </Kbd>
          </ListBox.Item>
        </ListBox.Section>
        <Separator />
        <ListBox.Section>
          <Header>Danger zone</Header>
          <ListBox.Item id="delete-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-error)"}} icon="gravity-ui:trash-bin" />
            </Flex>
            <Flex direction="column">
              <Label>Delete file</Label>
              <Description>Move to trash</Description>
            </Flex>
            <Kbd ms="auto" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Abbr keyValue="shift" />
              <Kbd.Content>D</Kbd.Content>
            </Kbd>
          </ListBox.Item>
        </ListBox.Section>
      </ListBox>
    </Surface>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Surface style={{width: "256px", borderRadius: "var(--chakra-radii-3xl)", boxShadow: "var(--chakra-shadows-surface)"}}>
      <ListBox
        aria-label="File actions"
        width="full"
        p="2"
      >
        <ListBox.Section>
          <Header>Actions</Header>
          <ListBox.Item id="new-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:square-plus" />
            </Flex>
            <Flex direction="column">
              <Label>New file</Label>
              <Description>Create a new file</Description>
            </Flex>
            <Kbd ms="auto" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>N</Kbd.Content>
            </Kbd>
          </ListBox.Item>
          <ListBox.Item id="edit-file">
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:pencil" />
            </Flex>
            <Flex direction="column">
              <Label>Edit file</Label>
              <Description>Make changes</Description>
            </Flex>
            <Kbd ms="auto" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>E</Kbd.Content>
            </Kbd>
          </ListBox.Item>
        </ListBox.Section>
        <Separator />
        <ListBox.Section>
          <Header>Danger zone</Header>
          <ListBox.Item id="delete-file" aria-disabled="true" data-disabled>
            <Flex height="8" alignItems="start" justifyContent="center" style={{paddingTop: "1px"}}>
              <Icon style={{width: "1rem", height: "1rem", flexShrink: 0, color: "var(--chakra-colors-fg-error)"}} icon="gravity-ui:trash-bin" />
            </Flex>
            <Flex direction="column">
              <Label>Delete file</Label>
              <Description>Move to trash</Description>
            </Flex>
            <Kbd ms="auto" variant="plain">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Abbr keyValue="shift" />
              <Kbd.Content>D</Kbd.Content>
            </Kbd>
          </ListBox.Item>
        </ListBox.Section>
      </ListBox>
    </Surface>
  ),
};

export const MultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };

    return (
      <Surface style={{width: "256px", borderRadius: "var(--chakra-radii-3xl)", boxShadow: "var(--chakra-shadows-surface)"}}>
        <ListBox aria-label="Users">
          <ListBox.Item id="1" isSelected={selected.has("1")} onClick={() => toggleItem("1")}>
            <Avatar size="sm">
              <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Flex direction="column">
              <Label>Bob</Label>
              <Description>bob@heroui.com</Description>
            </Flex>
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="2" isSelected={selected.has("2")} onClick={() => toggleItem("2")}>
            <Avatar size="sm">
              <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <Flex direction="column">
              <Label>Fred</Label>
              <Description>fred@heroui.com</Description>
            </Flex>
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="3" isSelected={selected.has("3")} onClick={() => toggleItem("3")}>
            <Avatar size="sm">
              <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <Flex direction="column">
              <Label>Martha</Label>
              <Description>martha@heroui.com</Description>
            </Flex>
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Surface>
    );
  },
};

export const CustomCheckIcon: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Set<string>>(new Set(["1"]));

    const toggleItem = (id: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };

    return (
      <Surface style={{width: "256px", borderRadius: "var(--chakra-radii-3xl)", boxShadow: "var(--chakra-shadows-surface)"}}>
        <ListBox aria-label="Users">
          <ListBox.Item id="1" isSelected={selected.has("1")} onClick={() => toggleItem("1")}>
            <Avatar size="sm">
              <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Flex direction="column">
              <Label>Bob</Label>
              <Description>bob@heroui.com</Description>
            </Flex>
            <ListBox.ItemIndicator>
              <Icon style={{width: "1rem", height: "1rem", color: "var(--chakra-colors-colorPalette-fg)"}} icon="gravity-ui:check" />
            </ListBox.ItemIndicator>
          </ListBox.Item>
          <ListBox.Item id="2" isSelected={selected.has("2")} onClick={() => toggleItem("2")}>
            <Avatar size="sm">
              <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
            <Flex direction="column">
              <Label>Fred</Label>
              <Description>fred@heroui.com</Description>
            </Flex>
            <ListBox.ItemIndicator>
              <Icon style={{width: "1rem", height: "1rem", color: "var(--chakra-colors-colorPalette-fg)"}} icon="gravity-ui:check" />
            </ListBox.ItemIndicator>
          </ListBox.Item>
          <ListBox.Item id="3" isSelected={selected.has("3")} onClick={() => toggleItem("3")}>
            <Avatar size="sm">
              <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <Flex direction="column">
              <Label>Martha</Label>
              <Description>martha@heroui.com</Description>
            </Flex>
            <ListBox.ItemIndicator>
              <Icon style={{width: "1rem", height: "1rem", color: "var(--chakra-colors-colorPalette-fg)"}} icon="gravity-ui:check" />
            </ListBox.ItemIndicator>
          </ListBox.Item>
        </ListBox>
      </Surface>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Set<string>>(new Set(["1"]));

    const toggleItem = (id: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };

    const selectedItems = Array.from(selected);

    return (
      <Box spaceY="4">
        <Surface style={{width: "256px", borderRadius: "var(--chakra-radii-3xl)", boxShadow: "var(--chakra-shadows-surface)"}}>
          <ListBox aria-label="Users">
            <ListBox.Item id="1" isSelected={selected.has("1")} onClick={() => toggleItem("1")}>
              <Avatar size="sm">
                <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Flex direction="column">
                <Label>Bob</Label>
                <Description>bob@heroui.com</Description>
              </Flex>
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="2" isSelected={selected.has("2")} onClick={() => toggleItem("2")}>
              <Avatar size="sm">
                <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>
              <Flex direction="column">
                <Label>Fred</Label>
                <Description>fred@heroui.com</Description>
              </Flex>
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="3" isSelected={selected.has("3")} onClick={() => toggleItem("3")}>
              <Avatar size="sm">
                <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <Flex direction="column">
                <Label>Martha</Label>
                <Description>martha@heroui.com</Description>
              </Flex>
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Surface>
        <Text fontSize="sm" color="fg.muted">
          Selected: {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
        </Text>
      </Box>
    );
  },
};

import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Avatar} from "../avatar";
import {Description} from "../description";
import {Label} from "../label";
import {Tag} from "../tag";

import {TagGroup} from "./";

const meta: Meta<typeof TagGroup> = {
  component: TagGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Collections/TagGroup",
};

export default meta;

type Story = StoryObj<typeof TagGroup>;

function useTagSelection(initial: string[] = []) {
  const [selected, setSelected] = React.useState<Set<string>>(new Set(initial));
  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });

  return {selected, toggle};
}

const defaultTags = [
  {id: "news", name: "News", icon: "gravity-ui:square-article"},
  {id: "travel", name: "Travel", icon: "gravity-ui:planet-earth"},
  {id: "gaming", name: "Gaming", icon: "gravity-ui:rocket"},
  {id: "shopping", name: "Shopping", icon: "gravity-ui:shopping-bag"},
];

export const Default: Story = {
  render: () => {
    const {selected, toggle} = useTagSelection(["travel"]);

    return (
      <TagGroup>
        <TagGroup.List>
          {defaultTags.map((tag) => (
            <Tag key={tag.id} selected={selected.has(tag.id)} onClick={() => toggle(tag.id)}>
              <Tag.StartElement>
                <Icon icon={tag.icon} />
              </Tag.StartElement>
              <Tag.Label>{tag.name}</Tag.Label>
            </Tag>
          ))}
        </TagGroup.List>
      </TagGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const {selected, toggle} = useTagSelection(["travel"]);
    const tags = [
      {id: "news", name: "News"},
      {id: "travel", name: "Travel"},
      {id: "gaming", name: "Gaming"},
    ];

    return (
      <Box display="flex" flexDirection="column" gap="6">
        {(["sm", "md", "lg"] as const).map((size) => (
          <TagGroup key={size} size={size}>
            <Label>{size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}</Label>
            <TagGroup.List>
              {tags.map((tag) => (
                <Tag key={tag.id} selected={selected.has(tag.id)} onClick={() => toggle(tag.id)}>
                  <Tag.Label>{tag.name}</Tag.Label>
                </Tag>
              ))}
            </TagGroup.List>
          </TagGroup>
        ))}
      </Box>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const {selected, toggle} = useTagSelection(["travel"]);
    const tags = [
      {id: "news", name: "News"},
      {id: "travel", name: "Travel"},
      {id: "gaming", name: "Gaming"},
    ];

    return (
      <Box display="flex" flexDirection="column" gap="8">
        <TagGroup variant="subtle">
          <Label>Default</Label>
          <TagGroup.List>
            {tags.map((tag) => (
              <Tag key={tag.id} selected={selected.has(tag.id)} onClick={() => toggle(tag.id)}>
                <Tag.Label>{tag.name}</Tag.Label>
              </Tag>
            ))}
          </TagGroup.List>
        </TagGroup>

        <TagGroup variant="surface">
          <Label>Surface</Label>
          <TagGroup.List>
            {tags.map((tag) => (
              <Tag key={tag.id} selected={selected.has(tag.id)} onClick={() => toggle(tag.id)}>
                <Tag.Label>{tag.name}</Tag.Label>
              </Tag>
            ))}
          </TagGroup.List>
        </TagGroup>
      </Box>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const {selected, toggle} = useTagSelection(["gaming"]);

    return (
      <TagGroup>
        <Label>Categories</Label>
        <TagGroup.List>
          {defaultTags.map((tag) => (
            <Tag key={tag.id} selected={selected.has(tag.id)} onClick={() => toggle(tag.id)}>
              <Tag.Label>{tag.name}</Tag.Label>
            </Tag>
          ))}
        </TagGroup.List>
        <Description>Choose your favorite categories</Description>
      </TagGroup>
    );
  },
};

export const WithPrefix: Story = {
  render: () => {
    const {selected, toggle} = useTagSelection(["news"]);

    const users = [
      {
        id: "fred",
        name: "Fred",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
        fallback: "F",
      },
      {
        id: "michael",
        name: "Michael",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
        fallback: "M",
      },
      {
        id: "jane",
        name: "Jane",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
        fallback: "J",
      },
    ];

    return (
      <Box display="flex" flexDirection="column" gap="8">
        <TagGroup>
          <Label>With Icons</Label>
          <TagGroup.List>
            {defaultTags.map((tag) => (
              <Tag key={tag.id} selected={selected.has(tag.id)} onClick={() => toggle(tag.id)}>
                <Tag.StartElement>
                  <Icon icon={tag.icon} />
                </Tag.StartElement>
                <Tag.Label>{tag.name}</Tag.Label>
              </Tag>
            ))}
          </TagGroup.List>
          <Description>Tags with icons</Description>
        </TagGroup>

        <TagGroup>
          <Label>With Avatars</Label>
          <TagGroup.List>
            {users.map((user) => (
              <Tag key={user.id} selected={selected.has(user.id)} onClick={() => toggle(user.id)}>
                <Tag.StartElement>
                  <Avatar borderRadius="full" boxSize="5">
                    <Avatar.Image src={user.avatar} />
                    <Avatar.Fallback>{user.fallback}</Avatar.Fallback>
                  </Avatar>
                </Tag.StartElement>
                <Tag.Label>{user.name}</Tag.Label>
              </Tag>
            ))}
          </TagGroup.List>
          <Description>Tags with avatars</Description>
        </TagGroup>
      </Box>
    );
  },
};

export const WithCloseTrigger: Story = {
  render: () => {
    const [tags, setTags] = React.useState(defaultTags);
    const {selected, toggle} = useTagSelection(["travel"]);

    const handleRemove = (id: string) => {
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    };

    return (
      <Box display="flex" flexDirection="column" gap="8">
        <Box w="sm">
          <TagGroup>
            <Label>Removable Tags</Label>
            <TagGroup.List>
              {tags.map((tag) => (
                <Tag key={tag.id} selected={selected.has(tag.id)} onClick={() => toggle(tag.id)}>
                  <Tag.Label>{tag.name}</Tag.Label>
                  <Tag.EndElement>
                    <Tag.CloseTrigger
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(tag.id);
                      }}
                    />
                  </Tag.EndElement>
                </Tag>
              ))}
            </TagGroup.List>
            <Description>Click to select, X to remove</Description>
          </TagGroup>
        </Box>
      </Box>
    );
  },
};

export const WithAvatars: Story = {
  render: () => {
    const users = [
      {
        id: "fred",
        name: "Fred",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
        fallback: "F",
      },
      {
        id: "michael",
        name: "Michael",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
        fallback: "M",
      },
      {
        id: "jane",
        name: "Jane",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
        fallback: "J",
      },
      {
        id: "alice",
        name: "Alice",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
        fallback: "A",
      },
      {
        id: "bob",
        name: "Bob",
        avatar: "https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg",
        fallback: "B",
      },
    ];

    const {selected, toggle} = useTagSelection(["jane", "bob"]);

    return (
      <Box w="sm">
        <TagGroup>
          <Label>Team Members</Label>
          <TagGroup.List>
            {users.map((user) => (
              <Tag key={user.id} selected={selected.has(user.id)} onClick={() => toggle(user.id)}>
                <Tag.StartElement>
                  <Avatar borderRadius="full" boxSize="5">
                    <Avatar.Image src={user.avatar} />
                    <Avatar.Fallback>{user.fallback}</Avatar.Fallback>
                  </Avatar>
                </Tag.StartElement>
                <Tag.Label>{user.name}</Tag.Label>
              </Tag>
            ))}
          </TagGroup.List>
          <Description>Select team members for your project</Description>
        </TagGroup>
      </Box>
    );
  },
};

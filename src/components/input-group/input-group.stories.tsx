import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {Button} from "../button";
import {Chip} from "../chip";
import {Description} from "../description";
import {FieldError} from "../field-error";
import {Kbd} from "../kbd";
import {Label} from "../label";
import {Spinner} from "../spinner";
import {TextField} from "../textfield";
import {Tooltip} from "../tooltip";

import {InputGroup} from "./index";

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Forms/InputGroup",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="name@email.com" />
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4" w="280px">
      <TextField variant="primary">
        <Label>Primary variant</Label>
        <InputGroup variant="primary">
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      <TextField variant="secondary">
        <Label>Secondary variant</Label>
        <InputGroup variant="secondary">
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="name@email.com" />
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box spaceY="4" w="400px">
      <TextField fullWidth>
        <Label>Email address</Label>
        <InputGroup fullWidth>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      <TextField fullWidth>
        <Label>Password</Label>
        <InputGroup fullWidth>
          <InputGroup.Input placeholder="Enter password" type="password" />
          <InputGroup.Suffix>
            <Icon
              icon="gravity-ui:eye"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithPrefixIcon: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="name@email.com" />
        </InputGroup>
        <Description>We will never share this with anyone else</Description>
      </TextField>
    </Box>
  ),
};

export const WithSuffixIcon: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Input placeholder="name@email.com" />
          <InputGroup.Suffix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Suffix>
        </InputGroup>
        <Description>We do not send spam</Description>
      </TextField>
    </Box>
  ),
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input type="number" />
          <InputGroup.Suffix>USD</InputGroup.Suffix>
        </InputGroup>
        <Description>What customers would pay</Description>
      </TextField>
    </Box>
  ),
};

export const WithTextPrefix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Website</Label>
        <InputGroup>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.Input />
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithTextSuffix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Website</Label>
        <InputGroup>
          <InputGroup.Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithIconPrefixAndTextSuffix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Website</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:globe"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithCopySuffix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Website</Label>
        <InputGroup>
          <InputGroup.Input />
          <InputGroup.Suffix style={{paddingRight: 0}}>
            <Button isIconOnly aria-label="Copy" size="sm" variant="ghost">
              <Icon icon="gravity-ui:copy" style={{width: "1rem", height: "1rem"}} />
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithIconPrefixAndCopySuffix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <Label>Website</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:globe"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input />
          <InputGroup.Suffix style={{paddingRight: 0}}>
            <Button isIconOnly aria-label="Copy" size="sm" variant="ghost">
              <Icon icon="gravity-ui:copy" style={{width: "1rem", height: "1rem"}} />
            </Button>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const PasswordWithToggle: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <Box w="280px">
        <TextField>
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              type={isVisible ? "text" : "password"}
              value={isVisible ? "87$2h.3diua" : undefined}
            />
            <InputGroup.Suffix style={{paddingRight: 0}}>
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onClick={() => setIsVisible(!isVisible)}
              >
                <Icon
                  icon={isVisible ? "gravity-ui:eye" : "gravity-ui:eye-slash"}
                  style={{width: "1rem", height: "1rem"}}
                />
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </Box>
    );
  },
};

export const WithLoadingSuffix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <InputGroup>
          <InputGroup.Input />
          <InputGroup.Suffix>
            <Spinner boxSize="4" />
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithKeyboardShortcut: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <InputGroup>
          <InputGroup.Input placeholder="Command" />
          <InputGroup.Suffix style={{paddingRight: "0.5rem"}}>
            <Kbd>
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>K</Kbd.Content>
            </Kbd>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithBadgeSuffix: Story = {
  render: () => (
    <Box w="280px">
      <TextField>
        <InputGroup>
          <InputGroup.Input placeholder="Email address" />
          <InputGroup.Suffix style={{paddingRight: "0.5rem"}}>
            <Chip color="accent" size="md" variant="surface">
              Pro
            </Chip>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const Required: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4" w="280px">
      <TextField required>
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      <TextField required>
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input placeholder="0" type="number" />
          <InputGroup.Suffix>USD</InputGroup.Suffix>
        </InputGroup>
        <Description>What customers would pay</Description>
      </TextField>
    </Box>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4" w="280px">
      <TextField invalid required>
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input placeholder="name@email.com" />
        </InputGroup>
        <FieldError>Please enter a valid email address</FieldError>
      </TextField>
      <TextField invalid required>
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input placeholder="0" type="number" />
          <InputGroup.Suffix>USD</InputGroup.Suffix>
        </InputGroup>
        <FieldError>Price must be greater than 0</FieldError>
      </TextField>
    </Box>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4" w="280px">
      <TextField disabled>
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Icon
              icon="gravity-ui:envelope"
              style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
            />
          </InputGroup.Prefix>
          <InputGroup.Input />
        </InputGroup>
      </TextField>
      <TextField disabled>
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input type="number" />
          <InputGroup.Suffix>USD</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </Box>
  ),
};

export const WithTextArea: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
      if (!value.trim()) return;

      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setValue("");
      }, 1000);
    };

    return (
      <Box w="lg">
        <TextField fullWidth>
          <InputGroup
            fullWidth
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderRadius: "var(--radii-3xl)",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            <InputGroup.Prefix
              style={{
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              <Button aria-label="Add context" size="sm" variant="outline">
                <Icon icon="gravity-ui:at" />
                Add Context
              </Button>
            </InputGroup.Prefix>
            <InputGroup.TextArea
              placeholder="Assign tasks or ask anything..."
              rows={5}
              value={value}
              style={{
                width: "100%",
                resize: "none",
                paddingLeft: "0.875rem",
                paddingRight: "0.875rem",
                paddingTop: 0,
                paddingBottom: 0,
              }}
              onChange={(event) => setValue(event.target.value)}
            />
            <InputGroup.Suffix
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                gap: "0.375rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              <Tooltip openDelay={0}>
                <Button isIconOnly aria-label="Attach file" size="sm" variant="ghost">
                  <Icon icon="gravity-ui:plus" />
                </Button>
                <Tooltip.Content>
                  <Text fontSize="xs">Add a files and more</Text>
                </Tooltip.Content>
              </Tooltip>
              <Tooltip openDelay={0}>
                <Button isIconOnly aria-label="Connect Apps" size="sm" variant="ghost">
                  <Icon icon="gravity-ui:plug-connection" />
                </Button>
                <Tooltip.Content>
                  <Text fontSize="xs">Connect apps</Text>
                </Tooltip.Content>
              </Tooltip>
              <Box alignItems="center" display="flex" gap="1.5" ml="auto">
                <Tooltip openDelay={0}>
                  <Button isIconOnly aria-label="Voice input" size="sm" variant="ghost">
                    <Icon icon="gravity-ui:microphone" />
                  </Button>
                  <Tooltip.Content>
                    <Text fontSize="xs">Voice input</Text>
                  </Tooltip.Content>
                </Tooltip>
                <Tooltip openDelay={0}>
                  <Button
                    isIconOnly
                    aria-label="Send prompt"
                    isDisabled={!value.trim()}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <Spinner color="current" size="sm" />
                    ) : (
                      <Icon icon="gravity-ui:arrow-up" />
                    )}
                  </Button>
                  <Tooltip.Content style={{display: "flex", alignItems: "center", gap: "0.25rem"}}>
                    <Text fontSize="xs">Send</Text>
                    <Kbd
                      style={{
                        height: "1rem",
                        borderRadius: "var(--radii-sm)",
                        paddingLeft: "0.25rem",
                        paddingRight: "0.25rem",
                      }}
                    >
                      <Kbd.Abbr keyValue="enter" />
                    </Kbd>
                  </Tooltip.Content>
                </Tooltip>
              </Box>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </Box>
    );
  },
};

export const AllVariations: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="6" w="280px">
      <Box display="flex" flexDirection="column" gap="4">
        <TextField>
          <Label>Email address *</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Icon
                icon="gravity-ui:envelope"
                style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
              />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder="name@email.com" />
          </InputGroup>
          <Description>We will never share this with anyone else</Description>
        </TextField>

        <TextField>
          <Label>Email address *</Label>
          <InputGroup>
            <InputGroup.Input placeholder="name@email.com" />
            <InputGroup.Suffix>
              <Icon
                icon="gravity-ui:envelope"
                style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
              />
            </InputGroup.Suffix>
          </InputGroup>
          <Description>We do not send spam</Description>
        </TextField>

        <TextField>
          <Label>Set a price</Label>
          <InputGroup>
            <InputGroup.Prefix>$</InputGroup.Prefix>
            <InputGroup.Input type="number" />
            <InputGroup.Suffix>USD</InputGroup.Suffix>
          </InputGroup>
          <Description>What customers would pay</Description>
        </TextField>

        <TextField>
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Prefix>https://</InputGroup.Prefix>
            <InputGroup.Input />
          </InputGroup>
        </TextField>

        <TextField>
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Input />
            <InputGroup.Suffix>.com</InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <TextField>
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Icon
                icon="gravity-ui:globe"
                style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
              />
            </InputGroup.Prefix>
            <InputGroup.Input />
            <InputGroup.Suffix>.com</InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <TextField>
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Input />
            <InputGroup.Suffix style={{paddingRight: 0}}>
              <Button isIconOnly aria-label="Copy" height="auto" p="0" size="sm" variant="ghost">
                <Icon icon="gravity-ui:copy" style={{width: "1rem", height: "1rem"}} />
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <TextField>
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Icon
                icon="gravity-ui:globe"
                style={{width: "1rem", height: "1rem", color: "var(--colors-fg-muted)"}}
              />
            </InputGroup.Prefix>
            <InputGroup.Input />
            <InputGroup.Suffix style={{paddingRight: 0}}>
              <Button isIconOnly aria-label="Copy" height="auto" p="0" size="sm" variant="ghost">
                <Icon icon="gravity-ui:copy" style={{width: "1rem", height: "1rem"}} />
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </Box>
    </Box>
  ),
};

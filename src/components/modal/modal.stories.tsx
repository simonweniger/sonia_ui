import type {Meta} from "@storybook/react";

import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {Flex, Text} from "@chakra-ui/react";

import {Button} from "../button";
import {Input} from "../input";
import {Label} from "../label";
import {Radio} from "../radio";
import {RadioGroup} from "../radio-group";
import {Surface} from "../surface";
import {TextField} from "../textfield";

import {Modal} from "./index";

export default {
  argTypes: {},
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Overlays/Modal",
} as Meta<typeof Modal>;

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Modal.Backdrop />
        <Modal.Content maxW={{sm: "360px"}}>
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon style={{backgroundColor: "var(--chakra-colors-bg)", color: "var(--chakra-colors-fg)"}}>
              <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:rocket" />
            </Modal.Icon>
            <Modal.Heading>Welcome to HeroUI</Modal.Heading>
          </Modal.Header>
          <Modal.Body>
            <Text>
              A beautiful, fast, and modern React UI library for building accessible and
              customizable web applications with ease.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button width="full" onClick={() => setOpen(false)}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const Sizes = () => {
  const sizes = ["xs", "sm", "md", "lg", "cover", "full"] as const;
  const [openSize, setOpenSize] = useState<string | null>(null);

  return (
    <Flex flexWrap="wrap" gap="4">
      {sizes.map((size) => (
        <React.Fragment key={size}>
          <Button variant="outline" onClick={() => setOpenSize(size)}>
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </Button>
          <Modal open={openSize === size} onOpenChange={(e) => !e.open && setOpenSize(null)} size={size}>
            <Modal.Backdrop />
            <Modal.Content>
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon style={{backgroundColor: "var(--chakra-colors-bg)", color: "var(--chakra-colors-fg)"}}>
                  <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:rocket" />
                </Modal.Icon>
                <Modal.Heading>
                  Size: {size.charAt(0).toUpperCase() + size.slice(1)}
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <Text>
                  {size === "cover" ? (
                    <>
                      This modal uses the <code>cover</code> size variant. It spans the full
                      screen with margins: 16px on mobile and 40px on desktop. Maintains rounded
                      corners and standard padding. Perfect for cover-style content that needs
                      maximum width while preserving modal aesthetics.
                    </>
                  ) : size === "full" ? (
                    <>
                      This modal uses the <code>full</code> size variant. It occupies the entire
                      viewport without any margins, rounded corners, or shadows, creating a true
                      fullscreen experience. Ideal for immersive content or full-page
                      interactions.
                    </>
                  ) : (
                    <>
                      This modal uses the <code>{size}</code> size variant. On mobile devices, all
                      sizes adapt to near full-width for optimal viewing. On desktop, each size
                      provides a different maximum width to suit various content needs.
                    </>
                  )}
                </Text>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline" onClick={() => setOpenSize(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenSize(null)}>Confirm</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </React.Fragment>
      ))}
    </Flex>
  );
};

export const DismissBehavior = () => (
  <Flex maxW="sm" direction="column" gap="6">
    <Flex direction="column" gap="2">
      <Text as="h3" fontSize="lg" fontWeight="semibold">closeOnInteractOutside</Text>
      <Text fontSize="sm" color="fg.muted">
        Controls whether the modal can be dismissed by clicking the overlay backdrop. Defaults to{" "}
        <code>true</code>. Set to <code>false</code> to require explicit close action.
      </Text>
      <Modal closeOnInteractOutside={false}>
        <Modal.Trigger>
          <Button variant="outline">Open Modal</Button>
        </Modal.Trigger>
        <Modal.Backdrop />
        <Modal.Content maxW={{sm: "360px"}}>
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon style={{backgroundColor: "var(--chakra-colors-bg)", color: "var(--chakra-colors-fg)"}}>
              <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:circle-info" />
            </Modal.Icon>
            <Modal.Heading>closeOnInteractOutside = false</Modal.Heading>
            <Text fontSize="sm" lineHeight="5" color="fg.muted">
              Clicking the backdrop won't close this modal
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text>
              Try clicking outside this modal on the overlay - it won't close. You must use the
              close button or press ESC to dismiss it.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseTrigger>
              <Button width="full">Close</Button>
            </Modal.CloseTrigger>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Flex>

    <Flex direction="column" gap="2">
      <Text as="h3" fontSize="lg" fontWeight="semibold">closeOnEscape</Text>
      <Text fontSize="sm" color="fg.muted">
        Controls whether the ESC key can dismiss the modal. When set to <code>false</code>, the ESC
        key will be disabled and users must use explicit close actions.
      </Text>
      <Modal closeOnEscape={false}>
        <Modal.Trigger>
          <Button variant="outline">Open Modal</Button>
        </Modal.Trigger>
        <Modal.Backdrop />
        <Modal.Content maxW={{sm: "360px"}}>
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon style={{backgroundColor: "var(--chakra-colors-bg)", color: "var(--chakra-colors-fg)"}}>
              <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:circle-info" />
            </Modal.Icon>
            <Modal.Heading>closeOnEscape = false</Modal.Heading>
            <Text fontSize="sm" lineHeight="5" color="fg.muted">ESC key is disabled</Text>
          </Modal.Header>
          <Modal.Body>
            <Text>
              Press ESC - nothing happens. You must use the close button or click the overlay
              backdrop to dismiss this modal.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseTrigger>
              <Button width="full">Close</Button>
            </Modal.CloseTrigger>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Flex>
  </Flex>
);

export const CloseMethods = () => {
  const [open2, setOpen2] = useState(false);

  return (
    <Flex maxW="2xl" direction="column" gap="8">
      <Flex direction="column" gap="2">
        <Text as="h3" fontSize="lg" fontWeight="semibold">Using CloseTrigger</Text>
        <Text fontSize="sm" color="fg.muted">
          The simplest way to close a modal. Wrap any Button component with{" "}
          <code>Modal.CloseTrigger</code>. When clicked, it will automatically close the modal.
        </Text>
        <Modal>
          <Modal.Trigger>
            <Button variant="outline">Open Modal</Button>
          </Modal.Trigger>
          <Modal.Backdrop />
          <Modal.Content maxW={{sm: "360px"}}>
            <Modal.Header>
              <Modal.Icon style={{backgroundColor: "var(--chakra-colors-accent-soft)", color: "var(--chakra-colors-accent-soft-foreground)"}}>
                <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:circle-info" />
              </Modal.Icon>
              <Modal.Heading>Using CloseTrigger</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Text>
                Click either button below - both are wrapped with <code>Modal.CloseTrigger</code>{" "}
                and will close the modal automatically.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Modal.CloseTrigger>
                <Button variant="outline">Cancel</Button>
              </Modal.CloseTrigger>
              <Modal.CloseTrigger>
                <Button>Confirm</Button>
              </Modal.CloseTrigger>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Flex>

      <Flex direction="column" gap="2">
        <Text as="h3" fontSize="lg" fontWeight="semibold">Using controlled state</Text>
        <Text fontSize="sm" color="fg.muted">
          Control the modal with <code>open</code> and <code>onOpenChange</code> props. This gives
          you full control over when and how to close the modal, allowing you to add custom logic
          before closing.
        </Text>
        <Button variant="outline" onClick={() => setOpen2(true)}>
          Open Modal
        </Button>
        <Modal open={open2} onOpenChange={(e) => setOpen2(e.open)}>
          <Modal.Backdrop />
          <Modal.Content maxW={{sm: "360px"}}>
            <Modal.Header>
              <Modal.Icon style={{backgroundColor: "var(--chakra-colors-success-soft)", color: "var(--chakra-colors-success-soft-foreground)"}}>
                <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:circle-check" />
              </Modal.Icon>
              <Modal.Heading>Using controlled state</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Text>
                The buttons below use <code>onClick</code> to set the open state to false. You can
                add validation or other logic before closing.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline" onClick={() => setOpen2(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen2(false)}>Confirm</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Flex>
    </Flex>
  );
};

export const ScrollComparison = () => {
  const [scroll, setScroll] = useState<"inside" | "outside">("inside");

  return (
    <Flex direction="column" gap="4">
      <RadioGroup
        orientation="horizontal"
        value={scroll}
        onValueChange={(e) => setScroll(e.value as "inside" | "outside")}
      >
        <Radio value="inside">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Label>Inside</Label>
        </Radio>
        <Radio value="outside">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Label>Outside</Label>
        </Radio>
      </RadioGroup>

      <Modal scrollBehavior={scroll}>
        <Modal.Trigger>
          <Button variant="outline">
            Open Modal ({scroll.charAt(0).toUpperCase() + scroll.slice(1)})
          </Button>
        </Modal.Trigger>
        <Modal.Backdrop />
        <Modal.Content maxW={{sm: "360px"}}>
          <Modal.Header>
            <Modal.Heading>
              Scroll: {scroll.charAt(0).toUpperCase() + scroll.slice(1)}
            </Modal.Heading>
            <Text fontSize="sm" lineHeight="5" color="fg.muted">
              Compare scroll behaviors - inside keeps content scrollable within the modal,
              outside allows page scrolling
            </Text>
          </Modal.Header>
          <Modal.Body>
            {Array.from({length: 30}).map((_, i) => (
              <Text key={i} mb="3">
                Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
              </Text>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseTrigger>
              <Button variant="outline">Cancel</Button>
            </Modal.CloseTrigger>
            <Modal.CloseTrigger>
              <Button>Confirm</Button>
            </Modal.CloseTrigger>
          </Modal.Footer>
          <Modal.CloseTrigger />
        </Modal.Content>
      </Modal>
    </Flex>
  );
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Flex maxW="md" direction="column" gap="8">
      <Flex direction="column" gap="3">
        <Text as="h3" fontSize="lg" fontWeight="semibold" color="fg">With React.useState()</Text>
        <Text fontSize="sm" lineHeight="relaxed" textWrap="pretty" color="fg.muted">
          Control the modal using React's <code>useState</code> hook for
          simple state management. Perfect for basic use cases.
        </Text>
        <Flex direction="column" alignItems="flex-start" gap="3" rounded="2xl" bg="surface" p="4" shadow="sm">
          <Flex width="full" align="center" justify="space-between">
            <Text fontSize="xs" color="fg.muted">
              Status:{" "}
              <Text as="span" fontFamily="mono" fontWeight="medium" color="fg">
                {isOpen ? "open" : "closed"}
              </Text>
            </Text>
          </Flex>
          <Flex gap="2">
            <Button size="sm" variant="outline" onClick={() => setIsOpen(true)}>
              Open Modal
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              Toggle
            </Button>
          </Flex>
        </Flex>

        <Modal open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
          <Modal.Backdrop />
          <Modal.Content maxW={{sm: "360px"}}>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon style={{backgroundColor: "var(--chakra-colors-accent-soft)", color: "var(--chakra-colors-accent-soft-foreground)"}}>
                <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:circle-check" />
              </Modal.Icon>
              <Modal.Heading>Controlled with useState()</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Text>
                This modal is controlled by React's <code>useState</code> hook. Pass{" "}
                <code>open</code> and <code>onOpenChange</code> props to manage the modal state
                externally.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Flex>
    </Flex>
  );
};

export const WithForm = () => (
  <Modal>
    <Modal.Trigger>
      <Button variant="outline">Open Contact Form</Button>
    </Modal.Trigger>
    <Modal.Backdrop />
    <Modal.Content maxW={{sm: "md"}}>
      <Modal.CloseTrigger />
      <Modal.Header>
        <Modal.Icon style={{backgroundColor: "var(--chakra-colors-accent-soft)", color: "var(--chakra-colors-accent-soft-foreground)"}}>
          <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:envelope" />
        </Modal.Icon>
        <Modal.Heading>Contact Us</Modal.Heading>
        <Text mt="1.5" fontSize="sm" lineHeight="5" color="fg.muted">
          Fill out the form below and we'll get back to you. The modal adapts automatically when
          the keyboard appears on mobile.
        </Text>
      </Modal.Header>
      <Modal.Body p="6">
        <Surface variant="default">
          <Flex as="form" direction="column" gap="4">
            <TextField width="full">
              <Label>Name</Label>
              <Input name="name" placeholder="Enter your name" />
            </TextField>
            <TextField width="full">
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="Enter your email" />
            </TextField>
            <TextField width="full">
              <Label>Phone</Label>
              <Input name="phone" type="tel" placeholder="Enter your phone number" />
            </TextField>
            <TextField width="full">
              <Label>Company</Label>
              <Input name="company" placeholder="Enter your company name" />
            </TextField>
            <TextField width="full">
              <Label>Message</Label>
              <Input name="message" placeholder="Enter your message" />
            </TextField>
          </Flex>
        </Surface>
      </Modal.Body>
      <Modal.Footer>
        <Modal.CloseTrigger>
          <Button variant="outline">Cancel</Button>
        </Modal.CloseTrigger>
        <Modal.CloseTrigger>
          <Button>Send Message</Button>
        </Modal.CloseTrigger>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
);

export const CustomTrigger = () => (
  <Modal>
    <Modal.Trigger>
      <Flex align="center" gap="3" rounded="2xl" bg="surface" p="4" shadow="xs" userSelect="none" cursor="pointer" _hover={{bg: "surface.secondary"}}>
        <Flex boxSize="12" flexShrink={0} align="center" justify="center" rounded="xl" bg="accent.soft" color="accent.soft.foreground">
          <Icon style={{width: "24px", height: "24px"}} icon="gravity-ui:gear" />
        </Flex>
        <Flex flex="1" direction="column" gap="0.5">
          <Text fontSize="sm" fontWeight="semibold">Settings</Text>
          <Text fontSize="xs" color="fg.muted">Manage your preferences</Text>
        </Flex>
      </Flex>
    </Modal.Trigger>
    <Modal.Backdrop />
    <Modal.Content maxW={{sm: "360px"}}>
      <Modal.CloseTrigger />
      <Modal.Header>
        <Modal.Icon style={{backgroundColor: "var(--chakra-colors-accent-soft)", color: "var(--chakra-colors-accent-soft-foreground)"}}>
          <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:gear" />
        </Modal.Icon>
        <Modal.Heading>Settings</Modal.Heading>
      </Modal.Header>
      <Modal.Body>
        <Text>
          Use <code>Modal.Trigger</code> to create custom trigger elements beyond standard
          buttons. This example shows a card-style trigger with icons and descriptive text.
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Modal.CloseTrigger>
          <Button variant="outline">Cancel</Button>
        </Modal.CloseTrigger>
        <Modal.CloseTrigger>
          <Button>Save</Button>
        </Modal.CloseTrigger>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
);

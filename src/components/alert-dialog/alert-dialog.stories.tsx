import type {Meta} from "@storybook/react";

import {Icon} from "@iconify/react";
import React, {useState} from "react";

import {Flex, Text} from "@chakra-ui/react";

import {Button} from "../button";

import {AlertDialog} from "./index";

export default {
  argTypes: {},
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Overlays/AlertDialog",
} as Meta<typeof AlertDialog>;

export const Default = () => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button variant="solid">Delete Project</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop />
      <AlertDialog.Content maxW={{sm: "400px"}}>
        <AlertDialog.CloseTrigger />
        <AlertDialog.Header>
          <AlertDialog.Icon status="danger" />
          <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Text>
            This will permanently delete <strong>My Awesome Project</strong> and all of its
            data. This action cannot be undone.
          </Text>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <AlertDialog.CloseTrigger>
            <Button variant="ghost">Cancel</Button>
          </AlertDialog.CloseTrigger>
          <AlertDialog.CloseTrigger>
            <Button variant="solid">Delete Project</Button>
          </AlertDialog.CloseTrigger>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export const Statuses = () => {
  const examples = [
    {
      actions: {
        cancel: "Stay Signed In",
        confirm: "Sign Out",
      },
      body: "You'll need to sign in again to access your account. Any unsaved changes will be lost.",
      classNames: "bg-accent-soft text-accent-soft-foreground",
      header: "Sign out of your account?",
      status: "accent",
      trigger: "Sign Out",
    },
    {
      actions: {
        cancel: "Not Yet",
        confirm: "Mark Complete",
      },
      body: "This will mark the task as complete and notify all team members. The task will be moved to your completed list.",
      classNames: "bg-success-soft text-success-soft-foreground",
      header: "Complete this task?",
      status: "success",
      trigger: "Complete Task",
    },
    {
      actions: {
        cancel: "Keep Editing",
        confirm: "Discard",
      },
      body: "You have unsaved changes that will be permanently lost. Are you sure you want to discard them?",
      classNames: "bg-warning-soft text-warning-soft-foreground",
      header: "Discard unsaved changes?",
      status: "warning",
      trigger: "Discard Changes",
    },
    {
      actions: {
        cancel: "Cancel",
        confirm: "Delete Account",
      },
      body: "This will permanently delete your account and remove all your data from our servers. This action is irreversible.",
      classNames: "bg-danger-soft text-danger-soft-foreground",
      header: "Delete your account?",
      status: "danger",
      trigger: "Delete Account",
    },
  ] as const;

  return (
    <Flex flexWrap="wrap" gap="4">
      {examples.map(({actions, body, classNames, header, status, trigger}) => (
        <AlertDialog key={status}>
          <AlertDialog.Trigger>
            <Button className={classNames}>{trigger}</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Backdrop />
          <AlertDialog.Content maxW={{sm: "400px"}}>
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status={status} />
              <AlertDialog.Heading>{header}</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text>{body}</Text>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <AlertDialog.CloseTrigger>
                <Button variant="ghost">{actions.cancel}</Button>
              </AlertDialog.CloseTrigger>
              <AlertDialog.CloseTrigger>
                <Button variant={status === "danger" ? "solid" : "solid"}>
                  {actions.confirm}
                </Button>
              </AlertDialog.CloseTrigger>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      ))}
    </Flex>
  );
};

export const DismissBehavior = () => (
  <Flex maxW="sm" direction="column" gap="6">
    <Flex direction="column" gap="2">
      <Text as="h3" fontSize="lg" fontWeight="semibold">closeOnInteractOutside</Text>
      <Text fontSize="sm" color="fg.muted">
        Controls whether the alert dialog can be dismissed by clicking the overlay backdrop. Alert
        dialogs typically require explicit action, so this defaults to <code>false</code>. Set to{" "}
        <code>true</code> for less critical confirmations.
      </Text>
      <AlertDialog closeOnInteractOutside={false}>
        <AlertDialog.Trigger>
          <Button variant="outline">Open Alert Dialog</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Backdrop />
        <AlertDialog.Content maxW={{sm: "400px"}}>
          <AlertDialog.CloseTrigger />
          <AlertDialog.Header>
            <AlertDialog.Icon status="danger">
              <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:circle-info" />
            </AlertDialog.Icon>
            <AlertDialog.Heading>closeOnInteractOutside = false</AlertDialog.Heading>
            <Text fontSize="sm" lineHeight="5" color="fg.muted">
              Clicking the backdrop won't close this alert dialog
            </Text>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
              Try clicking outside this alert dialog on the overlay - it won't close. You must
              use the action buttons to dismiss it.
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <AlertDialog.CloseTrigger>
              <Button variant="ghost">Cancel</Button>
            </AlertDialog.CloseTrigger>
            <AlertDialog.CloseTrigger>
              <Button>Confirm</Button>
            </AlertDialog.CloseTrigger>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Flex>

    <Flex direction="column" gap="2">
      <Text as="h3" fontSize="lg" fontWeight="semibold">closeOnEscape</Text>
      <Text fontSize="sm" color="fg.muted">
        Controls whether the ESC key can dismiss the alert dialog. Alert dialogs typically require
        explicit action. When set to <code>false</code>, the ESC key will be disabled.
      </Text>
      <AlertDialog closeOnEscape={false}>
        <AlertDialog.Trigger>
          <Button variant="outline">Open Alert Dialog</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Backdrop />
        <AlertDialog.Content maxW={{sm: "400px"}}>
          <AlertDialog.CloseTrigger />
          <AlertDialog.Header>
            <AlertDialog.Icon status="accent">
              <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:circle-info" />
            </AlertDialog.Icon>
            <AlertDialog.Heading>closeOnEscape = false</AlertDialog.Heading>
            <Text fontSize="sm" lineHeight="5" color="fg.muted">ESC key is disabled</Text>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
              Press ESC - nothing happens. You must use the action buttons to dismiss this alert
              dialog.
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <AlertDialog.CloseTrigger>
              <Button variant="ghost">Cancel</Button>
            </AlertDialog.CloseTrigger>
            <AlertDialog.CloseTrigger>
              <Button>Confirm</Button>
            </AlertDialog.CloseTrigger>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Flex>
  </Flex>
);

export const CloseMethods = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex maxW="2xl" direction="column" gap="8">
      <Flex direction="column" gap="2">
        <Text as="h3" fontSize="lg" fontWeight="semibold">Using CloseTrigger</Text>
        <Text fontSize="sm" color="fg.muted">
          The simplest way to close a dialog. Wrap any Button component with{" "}
          <code>AlertDialog.CloseTrigger</code>. When clicked, it will automatically close the
          dialog.
        </Text>
        <AlertDialog>
          <AlertDialog.Trigger>
            <Button variant="outline">Open Dialog</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Backdrop />
          <AlertDialog.Content maxW={{sm: "400px"}}>
            <AlertDialog.Header>
              <AlertDialog.Icon status="accent" />
              <AlertDialog.Heading>Using CloseTrigger</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text>
                Click either button below - both are wrapped with{" "}
                <code>AlertDialog.CloseTrigger</code> and will close the dialog automatically.
              </Text>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <AlertDialog.CloseTrigger>
                <Button variant="ghost">Cancel</Button>
              </AlertDialog.CloseTrigger>
              <AlertDialog.CloseTrigger>
                <Button>Confirm</Button>
              </AlertDialog.CloseTrigger>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Flex>

      <Flex direction="column" gap="2">
        <Text as="h3" fontSize="lg" fontWeight="semibold">Using controlled state</Text>
        <Text fontSize="sm" color="fg.muted">
          Control the dialog with <code>open</code> and <code>onOpenChange</code> props. This gives
          you full control over when and how to close the dialog, allowing you to add custom logic
          before closing.
        </Text>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <AlertDialog open={open} onOpenChange={(e) => setOpen(e.open)}>
          <AlertDialog.Backdrop />
          <AlertDialog.Content maxW={{sm: "400px"}}>
            <AlertDialog.Header>
              <AlertDialog.Icon status="success" />
              <AlertDialog.Heading>Using controlled state</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text>
                The buttons below use <code>onClick</code> to set the open state to false. You can
                add validation or other logic before closing.
              </Text>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Flex>
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
          Control the alert dialog using React's <code>useState</code>{" "}
          hook for simple state management. Perfect for basic use cases.
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
              Open Dialog
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              Toggle
            </Button>
          </Flex>
        </Flex>

        <AlertDialog open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
          <AlertDialog.Backdrop />
          <AlertDialog.Content maxW={{sm: "400px"}}>
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="accent" />
              <AlertDialog.Heading>Controlled with useState()</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text>
                This alert dialog is controlled by React's <code>useState</code> hook. Pass{" "}
                <code>open</code> and <code>onOpenChange</code> props to manage the dialog state
                externally.
              </Text>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Flex>
    </Flex>
  );
};

export const CustomTrigger = () => (
  <AlertDialog>
    <AlertDialog.Trigger>
      <Flex align="center" gap="3" rounded="2xl" bg="surface" p="4" shadow="xs" userSelect="none" cursor="pointer" _hover={{bg: "surface.secondary"}}>
        <Flex boxSize="12" flexShrink={0} align="center" justify="center" rounded="xl" bg="danger.soft" color="danger.soft.foreground">
          <Icon style={{width: "24px", height: "24px"}} icon="gravity-ui:trash-bin" />
        </Flex>
        <Flex flex="1" direction="column" gap="0.5">
          <Text fontSize="sm" fontWeight="semibold">Delete Item</Text>
          <Text fontSize="xs" color="fg.muted">Permanently remove this item</Text>
        </Flex>
      </Flex>
    </AlertDialog.Trigger>
    <AlertDialog.Backdrop />
    <AlertDialog.Content maxW={{sm: "400px"}}>
      <AlertDialog.CloseTrigger />
      <AlertDialog.Header>
        <AlertDialog.Icon status="danger">
          <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:trash-bin" />
        </AlertDialog.Icon>
        <AlertDialog.Heading>Delete this item?</AlertDialog.Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Text>
          Use <code>AlertDialog.Trigger</code> to create custom trigger elements beyond standard
          buttons. This example shows a card-style trigger with icons and descriptive text.
        </Text>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <AlertDialog.CloseTrigger>
          <Button variant="ghost">Cancel</Button>
        </AlertDialog.CloseTrigger>
        <AlertDialog.CloseTrigger>
          <Button variant="solid">Delete Item</Button>
        </AlertDialog.CloseTrigger>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>
);

export const CustomIcon = () => (
  <AlertDialog>
    <AlertDialog.Trigger>
      <Button variant="outline">Reset Password</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Backdrop />
    <AlertDialog.Content maxW={{sm: "400px"}}>
      <AlertDialog.CloseTrigger />
      <AlertDialog.Header>
        <AlertDialog.Icon status="warning">
          <Icon style={{width: "20px", height: "20px"}} icon="gravity-ui:lock-open" />
        </AlertDialog.Icon>
        <AlertDialog.Heading>Reset your password?</AlertDialog.Heading>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Text>
          We'll send a password reset link to your email address. You'll need to create a new
          password to regain access to your account.
        </Text>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <AlertDialog.CloseTrigger>
          <Button variant="ghost">Cancel</Button>
        </AlertDialog.CloseTrigger>
        <AlertDialog.CloseTrigger>
          <Button>Send Reset Link</Button>
        </AlertDialog.CloseTrigger>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>
);

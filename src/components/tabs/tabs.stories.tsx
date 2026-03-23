import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

import {Tabs} from "./index";

const meta = {
  argTypes: {},
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  title: "Components/Navigation/Tabs",
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultTemplate = (args: Story["args"]) => {
  return (
    <Box width="600px">
      <Tabs {...args}>
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab value="overview">
              Overview
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="analytics">
              Analytics
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="reports">
              Reports
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel pt="4" value="overview">
          <Text>View your project overview and recent activity.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="analytics">
          <Text>Track your metrics and analyze performance data.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="reports">
          <Text>Generate and download detailed reports.</Text>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

const VerticalTemplate = (args: Story["args"]) => {
  return (
    <Box width="600px">
      <Tabs {...args} orientation="vertical">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Vertical tabs">
            <Tabs.Tab value="account">
              Account
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="security">
              Security
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="notifications">
              Notifications
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="billing">
              Billing
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel px="4" value="account">
          <Text as="h3" fontWeight="semibold" mb="2">
            Account Settings
          </Text>
          <Text color="fg.muted" fontSize="sm">
            Manage your account information and preferences.
          </Text>
        </Tabs.Panel>
        <Tabs.Panel px="4" value="security">
          <Text as="h3" fontWeight="semibold" mb="2">
            Security Settings
          </Text>
          <Text color="fg.muted" fontSize="sm">
            Configure two-factor authentication and password settings.
          </Text>
        </Tabs.Panel>
        <Tabs.Panel px="4" value="notifications">
          <Text as="h3" fontWeight="semibold" mb="2">
            Notification Preferences
          </Text>
          <Text color="fg.muted" fontSize="sm">
            Choose how and when you want to receive notifications.
          </Text>
        </Tabs.Panel>
        <Tabs.Panel px="4" value="billing">
          <Text as="h3" fontWeight="semibold" mb="2">
            Billing Information
          </Text>
          <Text color="fg.muted" fontSize="sm">
            View and manage your subscription and payment methods.
          </Text>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

const DisabledTabTemplate = (args: Story["args"]) => (
  <Box width="600px">
    <Tabs {...args}>
      <Tabs.ListContainer>
        <Tabs.List aria-label="Tabs with disabled">
          <Tabs.Tab value="active">
            Active
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab disabled value="disabled">
            Disabled
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab value="available">
            Available
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel pt="4" value="active">
        <Text>This tab is active and can be selected.</Text>
      </Tabs.Panel>
      <Tabs.Panel pt="4" value="disabled">
        <Text>This content cannot be accessed.</Text>
      </Tabs.Panel>
      <Tabs.Panel pt="4" value="available">
        <Text>This tab is also available for selection.</Text>
      </Tabs.Panel>
    </Tabs>
  </Box>
);

const DefaultSelectedTemplate = (args: Story["args"]) => (
  <Box width="600px">
    <Tabs defaultValue="default" {...args}>
      <Tabs.ListContainer>
        <Tabs.List aria-label="Tabs with default options">
          <Tabs.Tab value="active">
            Active
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab value="default">
            Default
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab value="available">
            Available
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel pt="4" value="active">
        <Text>This tab is active and can be selected.</Text>
      </Tabs.Panel>
      <Tabs.Panel pt="4" value="default">
        <Text>This tab is the default selection.</Text>
      </Tabs.Panel>
      <Tabs.Panel pt="4" value="available">
        <Text>This tab is available for selection as well.</Text>
      </Tabs.Panel>
    </Tabs>
  </Box>
);

const ControlledSelectionTemplate = (args: Story["args"]) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("controlled");

  return (
    <Box width="600px">
      <Text my="2">Selected: {selectedValue}</Text>
      <Tabs
        value={selectedValue}
        onValueChange={(details) => setSelectedValue(details.value)}
        {...args}
      >
        <Tabs.ListContainer>
          <Tabs.List aria-label="Tabs with controlled options">
            <Tabs.Tab value="active">
              Active
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="controlled">
              Controlled
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="available">
              Available
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel pt="4" value="active">
          <Text>This tab is active and can be selected.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="controlled">
          <Text>This tab is the controlled selection.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="available">
          <Text>This tab is available for selection as well.</Text>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

const CustomStyleTemplate = (args: Story["args"]) => {
  return (
    <Box width="380px">
      <Tabs {...args}>
        <Tabs.ListContainer>
          <Tabs.List
            aria-label="Options"
            style={{width: "fit-content"}}
            css={{
              "& > *": {
                height: "1.5rem",
                width: "fit-content",
                paddingInline: "0.75rem",
                fontSize: "var(--font-sizes-sm)",
                fontWeight: "normal",
              },
              "& > *[data-selected=true]": {color: "var(--colors-accent-fg)"},
            }}
          >
            <Tabs.Tab value="daily">
              Daily
              <Tabs.Indicator style={{backgroundColor: "var(--colors-accent)"}} />
            </Tabs.Tab>
            <Tabs.Tab value="weekly">
              Weekly
              <Tabs.Indicator style={{backgroundColor: "var(--colors-accent)"}} />
            </Tabs.Tab>
            <Tabs.Tab value="bi-weekly">
              Bi-Weekly
              <Tabs.Indicator style={{backgroundColor: "var(--colors-accent)"}} />
            </Tabs.Tab>
            <Tabs.Tab value="monthly">
              Monthly
              <Tabs.Indicator style={{backgroundColor: "var(--colors-accent)"}} />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>
    </Box>
  );
};

const WithSeparatorTemplate = (args: Story["args"]) => {
  return (
    <Box width="600px">
      <Tabs {...args}>
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab value="overview">
              Overview
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="analytics">
              <Tabs.Separator />
              Analytics
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="reports">
              <Tabs.Separator />
              Reports
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel pt="4" value="overview">
          <Text>View your project overview and recent activity.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="analytics">
          <Text>Track your metrics and analyze performance data.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="reports">
          <Text>Generate and download detailed reports.</Text>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

const SecondaryTemplate = (args: Story["args"]) => {
  return (
    <Box width="600px">
      <Tabs {...args} variant="secondary">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab value="overview">
              Overview
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="analytics">
              Analytics
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="reports">
              Reports
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel pt="4" value="overview">
          <Text>View your project overview and recent activity.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="analytics">
          <Text>Track your metrics and analyze performance data.</Text>
        </Tabs.Panel>
        <Tabs.Panel pt="4" value="reports">
          <Text>Generate and download detailed reports.</Text>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

const SecondaryVerticalTemplate = (args: Story["args"]) => {
  return (
    <Box width="600px">
      <Tabs {...args} orientation="vertical" variant="secondary">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Vertical tabs">
            <Tabs.Tab value="account">
              Account
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="security">
              Security
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="notifications">
              Notifications
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="billing">
              Billing
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel px="4" value="account">
          <Text as="h3" fontWeight="semibold" mb="2">
            Account Settings
          </Text>
          <Text color="fg.muted" fontSize="sm">
            Manage your account information and preferences.
          </Text>
        </Tabs.Panel>
        <Tabs.Panel px="4" value="security">
          <Text as="h3" fontWeight="semibold" mb="2">
            Security Settings
          </Text>
          <Text color="fg.muted" fontSize="sm">
            Configure two-factor authentication and password settings.
          </Text>
        </Tabs.Panel>
        <Tabs.Panel px="4" value="notifications">
          <Text as="h3" fontWeight="semibold" mb="2">
            Notification Preferences
          </Text>
          <Text color="fg.muted" fontSize="sm">
            Choose how and when you want to receive notifications.
          </Text>
        </Tabs.Panel>
        <Tabs.Panel px="4" value="billing">
          <Text as="h3" fontWeight="semibold" mb="2">
            Billing Information
          </Text>
          <Text color="fg.muted" fontSize="sm">
            View and manage your subscription and payment methods.
          </Text>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

const Showcase1Template = (args: Story["args"]) => {
  const DEFAULT_ZOOM = "200";
  const [selectedZoom, setSelectedZoom] = React.useState<string>(DEFAULT_ZOOM);

  const zoomLevels = ["200", "100", "48", "35", "28", "24", "13", "macro"];

  const zoomXMap: Record<string, string> = {
    "200": "8x",
    "100": "4x",
    "48": "2x",
    "35": "1.5x",
    "28": "1.2x",
    "24": "1x",
    "13": "0.5x",
    macro: "0.2x",
  };

  const zoomImgMap: Record<string, string> = {
    "200":
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/200mm__c8kya18imsqe_large_2x.jpg",
    "100":
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/100mm__cykxcenbhvue_large_2x.jpg",
    "48": "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/48mm__bmrwps1q6w76_large_2x.jpg",
    "35": "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/35mm__k375wbkrjp2e_large_2x.jpg",
    "28": "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/28mm__fylmxo06jq6i_large_2x.jpg",
    "24": "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/24mm__e54cxtdkdrwy_large_2x.jpg",
    "13": "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/13mm__dzafu9h1kaye_large_2x.jpg",
    macro:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/zoom/macro__bb7oud7ri2o2_large_2x.jpg",
  };

  return (
    <Box width="full">
      <Flex align="center" direction="column">
        <Box
          aspectRatio="7/5"
          height={{sm: "400px", md: "500px", lg: "600px"}}
          maxW="840px"
          position="relative"
          width="full"
        >
          {Object.keys(zoomImgMap).map((key) => (
            <img
              key={key}
              aria-hidden={selectedZoom !== key}
              className="data-[selected=true]:opacity-100 data-[selected=true]:delay-0"
              data-selected={selectedZoom === key || undefined}
              src={zoomImgMap[key]}
              style={{
                position: "absolute",
                inset: "0",
                height: "100%",
                width: "100%",
                objectFit: "cover",
                opacity: 0,
                transition: "opacity 800ms ease-in-out",
                transitionDelay: "200ms",
              }}
            />
          ))}
        </Box>
        <Tabs
          {...args}
          defaultValue={DEFAULT_ZOOM}
          onValueChange={(details) => setSelectedZoom(details.value)}
        >
          <Tabs.ListContainer
            style={{
              marginBlock: "1rem",
              width: "100%",
              maxWidth: "100%",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            <Tabs.List
              aria-label="Options"
              css={{
                "& > *": {
                  height: "2rem",
                  width: "fit-content",
                  paddingInline: "0.75rem",
                  fontSize: "var(--font-sizes-xs)",
                  fontWeight: "normal",
                  color: "white",
                  opacity: 0.8,
                },
                "& > *:hover": {opacity: 1},
                "& > *[data-selected=true]": {color: "black"},
                "@media (min-width: 640px)": {
                  "& > *": {
                    height: "2.25rem",
                    paddingInline: "1rem",
                    fontSize: "var(--font-sizes-sm)",
                  },
                },
              }}
              style={{
                width: "fit-content",
                minWidth: "min-content",
                borderRadius: "9999px",
                backgroundColor: "#333336",
              }}
            >
              {zoomLevels.map((zoom) => (
                <Tabs.Tab
                  key={zoom}
                  style={zoom === "macro" ? {textTransform: "capitalize"} : undefined}
                  value={zoom}
                >
                  {zoom} {zoom === "macro" ? "" : "mm"}
                  <Tabs.Indicator
                    style={{
                      borderRadius: "9999px",
                      backgroundColor: "white",
                      boxShadow: "none",
                      transitionDuration: "320ms",
                    }}
                  />
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
        <Box height="10" position="relative" width="10">
          {Object.keys(zoomXMap).map((key) => (
            <Text
              key={key}
              aria-hidden={selectedZoom !== key}
              className={`data-[selected=true]:scale-100 data-[selected=true]:opacity-100 data-[selected=true]:delay-200 ${selectedZoom !== key ? "sr-only" : ""}`}
              color="fg"
              data-selected={selectedZoom === key}
              fontSize="21px"
              fontWeight="medium"
              left="50%"
              opacity={0}
              position="absolute"
              top="50%"
              transform="translate(-50%, -50%) scale(0.75)"
              transformOrigin="center"
              transition="scale 300ms cubic-bezier(0.33,1,0.68,1), opacity 300ms cubic-bezier(0.33,1,0.68,1)"
            >
              {zoomXMap[key]}
            </Text>
          ))}
        </Box>
        <Box
          as="footer"
          color="fg.muted/30"
          fontSize={{base: "xs", sm: "sm"}}
          mt="4"
          px="4"
          textAlign="center"
          width="full"
        >
          <a href="https://www.apple.com/iphone-17-pro/" rel="noopener noreferrer" target="_blank">
            Showcase based on Apple&apos;s iPhone 17 Pro camera zoom showcase
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export const Default: Story = {
  args: {
    children: null,
  },
  render: DefaultTemplate,
};

export const Vertical: Story = {
  args: {
    children: null,
    orientation: "vertical",
  },
  render: VerticalTemplate,
};

export const WithDisabledTab: Story = {
  args: {
    children: null,
  },
  render: DisabledTabTemplate,
};

export const WithDefaultSelectedTab: Story = {
  args: {
    children: null,
  },
  render: DefaultSelectedTemplate,
};

export const WithControlledSelectionTab: Story = {
  args: {
    children: null,
  },
  render: ControlledSelectionTemplate,
};

export const WithCustomStyle: Story = {
  args: {
    children: null,
  },
  render: CustomStyleTemplate,
};

export const WithSeparator: Story = {
  args: {
    children: null,
  },
  render: WithSeparatorTemplate,
};

export const Showcase1: Story = {
  args: {
    children: null,
  },
  render: Showcase1Template,
  name: "Showcases/Apple iPhone 17 Pro cameras",
};

export const Secondary: Story = {
  args: {
    children: null,
    variant: "secondary",
  },
  render: SecondaryTemplate,
};

export const SecondaryVertical: Story = {
  args: {
    children: null,
    orientation: "vertical",
    variant: "secondary",
  },
  render: SecondaryVerticalTemplate,
};

import type {DisclosureGroupProps} from "./index";
import type {ButtonProps} from "../..";
import type {Meta, StoryObj} from "@storybook/react-vite";
import type {SVGProps} from "react";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Button} from "../button";
import {Disclosure} from "../disclosure";
import {Separator} from "../separator";

import {DisclosureGroup, useDisclosureGroupNavigation} from "./index";

export default {
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    multiple: {
      control: {
        type: "boolean",
      },
    },
  },
  component: DisclosureGroup,
  parameters: {
    layout: "centered",
  },
  title: "Components/Navigation/DisclosureGroup",
} as Meta<typeof DisclosureGroup>;

const defaultArgs: DisclosureGroupProps = {
  disabled: false,
  multiple: false,
};

const Template = (props: DisclosureGroupProps) => {
  const [expandedKeys, setExpandedKeys] = React.useState(new Set<string | number>(["preview"]));

  return (
    <Box maxW="md" width="full">
      <Flex bg="surface" direction="column" gap="4" p="4" rounded="3xl" shadow="surface">
        <DisclosureGroup
          {...props}
          value={Array.from(expandedKeys).map(String)}
          onValueChange={({value}) => setExpandedKeys(new Set(value))}
        >
          <Disclosure aria-label="Preview SoniaUI Native" id="preview">
            <Disclosure.Heading>
              <Button
                bg={!expandedKeys.has("preview") ? "transparent" : undefined}
                borderWidth="0"
                slot="trigger"
                variant={expandedKeys.has("preview") ? "outline" : "ghost"}
                width="full"
              >
                <Flex align="center" gap="2" justify="start" width="full">
                  <Icon icon="gravity-ui:qr-code" />
                  Preview SoniaUI Native
                </Flex>
                <Disclosure.Indicator style={{color: "var(--colors-fg-muted)"}} />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body
                style={{
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Text color="fg.muted" fontSize="sm">
                  Scan this QR code with your camera app to preview the SoniaUI native components.
                </Text>
                <img
                  alt="Expo Go QR Code"
                  src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
                  style={{
                    aspectRatio: "1/1",
                    width: "100%",
                    maxWidth: "13.5rem",
                    objectFit: "cover",
                  }}
                />
                <Text color="fg.muted" fontSize="sm">
                  Expo must be installed on your device.
                </Text>
                <Button mt="4" variant="solid">
                  <Icon className="[&_path]:fill-accent-foreground" icon="logos:expo-icon" />
                  Preview on Expo Go
                </Button>
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
          <Separator my="2" />
          <Disclosure id="download">
            <Disclosure.Heading aria-label="Download SoniaUI Native">
              <Button
                bg={!expandedKeys.has("download") ? "transparent" : undefined}
                borderWidth="0"
                slot="trigger"
                variant={expandedKeys.has("download") ? "outline" : "ghost"}
                width="full"
              >
                <Flex align="center" gap="2" justify="start" width="full">
                  <Icon icon="tabler:brand-apple-filled" />
                  Download SoniaUI Native
                </Flex>
                <Disclosure.Indicator style={{color: "var(--colors-fg-muted)"}} />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body
                style={{
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Text color="fg.muted" fontSize="sm">
                  Scan this QR code with your camera app to preview the SoniaUI native components.
                </Text>
                <img
                  alt="Expo Go QR Code"
                  src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
                  style={{
                    aspectRatio: "1/1",
                    width: "100%",
                    maxWidth: "13.5rem",
                    objectFit: "cover",
                  }}
                />
                <Text color="fg.muted" fontSize="sm">
                  Expo must be installed on your device.
                </Text>
                <Button mt="4" variant="solid">
                  <Icon icon="tabler:brand-apple-filled" />
                  Download on App Store
                </Button>
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
        </DisclosureGroup>
      </Flex>
    </Box>
  );
};

const ControlledTemplate = (props: DisclosureGroupProps) => {
  const [expandedKeys, setExpandedKeys] = React.useState(new Set<string | number>(["preview"]));
  const itemIds = ["preview", "download"]; // Track our disclosure items

  const {isNextDisabled, isPrevDisabled, onNext, onPrevious} = useDisclosureGroupNavigation({
    expandedKeys,
    itemIds,
    onExpandedChange: setExpandedKeys,
  });

  return (
    <Box maxW="md" width="full">
      <Flex bg="surface" direction="column" gap="4" p="4" rounded="3xl" shadow="surface">
        <Flex align="center" justify="space-between" mb="2">
          <Text as="h3" fontSize="lg" fontWeight="semibold">
            SoniaUI Native
          </Text>
          <Flex gap="2">
            <Button
              aria-label="Previous disclosure"
              disabled={isPrevDisabled}
              size="sm"
              variant="outline"
              onClick={onPrevious}
            >
              <Icon icon="lucide:chevron-up" style={{width: "1rem", height: "1rem"}} />
            </Button>
            <Button
              aria-label="Next disclosure"
              disabled={isNextDisabled}
              size="sm"
              variant="outline"
              onClick={onNext}
            >
              <Icon icon="lucide:chevron-down" style={{width: "1rem", height: "1rem"}} />
            </Button>
          </Flex>
        </Flex>
        <DisclosureGroup
          {...props}
          value={Array.from(expandedKeys).map(String)}
          onValueChange={({value}) => setExpandedKeys(new Set(value))}
        >
          <Disclosure aria-label="Preview SoniaUI Native" id="preview">
            <Disclosure.Heading>
              <Button
                bg={!expandedKeys.has("preview") ? "transparent" : undefined}
                borderWidth="0"
                slot="trigger"
                variant={expandedKeys.has("preview") ? "outline" : "ghost"}
                width="full"
              >
                <Flex align="center" gap="2" justify="start" width="full">
                  <Icon icon="gravity-ui:qr-code" />
                  Preview SoniaUI Native
                </Flex>
                <Disclosure.Indicator style={{color: "var(--colors-fg-muted)"}} />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body
                style={{
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Text color="fg.muted" fontSize="sm">
                  Scan this QR code with your camera app to preview the SoniaUI native components.
                </Text>
                <img
                  alt="Expo Go QR Code"
                  src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
                  style={{
                    aspectRatio: "1/1",
                    width: "100%",
                    maxWidth: "13.5rem",
                    objectFit: "cover",
                  }}
                />
                <Text color="fg.muted" fontSize="sm">
                  Expo must be installed on your device.
                </Text>
                <Button mt="4" variant="solid">
                  <Icon className="[&_path]:fill-accent-foreground" icon="logos:expo-icon" />
                  Preview on Expo Go
                </Button>
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
          <Separator my="2" />
          <Disclosure id="download">
            <Disclosure.Heading aria-label="Download SoniaUI Native">
              <Button
                bg={!expandedKeys.has("download") ? "transparent" : undefined}
                borderWidth="0"
                slot="trigger"
                variant={expandedKeys.has("download") ? "outline" : "ghost"}
                width="full"
              >
                <Flex align="center" gap="2" justify="start" width="full">
                  <Icon icon="tabler:brand-apple-filled" />
                  Download SoniaUI Native
                </Flex>
                <Disclosure.Indicator style={{color: "var(--colors-fg-muted)"}} />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body
                style={{
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Text color="fg.muted" fontSize="sm">
                  Scan this QR code with your camera app to preview the SoniaUI native components.
                </Text>
                <img
                  alt="Expo Go QR Code"
                  src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
                  style={{
                    aspectRatio: "1/1",
                    width: "100%",
                    maxWidth: "13.5rem",
                    objectFit: "cover",
                  }}
                />
                <Text color="fg.muted" fontSize="sm">
                  Expo must be installed on your device.
                </Text>
                <Button mt="4" variant="solid">
                  <Icon icon="tabler:brand-apple-filled" />
                  Download on App Store
                </Button>
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
        </DisclosureGroup>
      </Flex>
    </Box>
  );
};

function AppleShowcaseButton({
  children,
  isSelected,
  ...props
}: ButtonProps & {isSelected: boolean}) {
  return (
    <Button
      _hover={{bg: "#272729"}}
      bg={isSelected ? "#272729" : "#1e1e20"}
      color="#f5f5f7"
      fontSize="17px"
      height="56px"
      rounded="full"
      css={{
        transitionDuration: "400ms",
        transitionTimingFunction: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

function SelectedIphoneColorSwatch({color, name}: {color: string; name: string}) {
  return (
    <Box
      as="span"
      boxSize="6"
      position="relative"
      rounded="lg"
      shadow="inset 0px -1px 0px 0px rgba(255,255,255,.5)"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <Box srOnly as="span">
        Copy {name} color
      </Box>
    </Box>
  );
}

function PlusIcon({height = 24, width = 24, ...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={height}
      style={{width: "1.5rem", height: "1.5rem", flexShrink: 0}}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" fill="none" r="11.3" stroke="currentColor" />
      <g fill="currentColor" stroke="none" transform="translate(7 7)">
        <path d="m9 4h-3v-3c0-0.553-0.447-1-1-1s-1 0.447-1 1v3h-3c-0.553 0-1 0.447-1 1s0.447 1 1 1h3v3c0 0.553 0.447 1 1 1s1-0.447 1-1v-3h3c0.553 0 1-0.447 1-1s-0.447-1-1-1" />
      </g>
    </svg>
  );
}

const showcase1Items = [
  {
    id: "colors",
    label: "Colors",
    content: "Choose from three bold finishes. iPhone 17 Pro shown in Cosmic Orange.",
    imgSrc:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/colors_orange__f2ug4x6ry8uq_large_2x.jpg",
  },
  {
    id: "aluminum",
    label: "Aluminum unibody",
    content:
      "Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity.",
    imgSrc:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/viewer_aluminum_endframe__fypyvk9kkg2m_large_2x.jpg",
  },
  {
    id: "vapor-chamber",
    label: "Vapor chamber",
    content:
      "Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance.",
    imgSrc:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/viewer_vapor_chamber_endframe__dst8qkmuys4m_large_2x.jpg",
  },
  {
    id: "ceramic-shield",
    label: "Ceramic shield",
    content:
      "Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks. New Ceramic Shield 2 on the front has 3x better scratch resistance.",
    imgSrc:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/ceramic_shield__de0653vp43cm_large_2x.jpg",
  },
  {
    id: "immersive-pro-display",
    label: "Immersive pro display",
    content:
      "Our best\u2011ever 6.3\u2011inch and 6.9\u2011inch Super Retina XDR displays.5 Brighter. Better anti\u2011reflection. ProMotion up to 120Hz.",
    imgSrc:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/pro_display__c0jmzc5emcae_large_2x.jpg",
  },
  {
    id: "camera-control",
    label: "Camera control",
    content:
      "Instantly take a photo, record video, adjust settings, and more. So you never miss a moment.",
    imgSrc:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/camera_control__cy5kilwa0kwi_large_2x.jpg",
  },
  {
    id: "action-button",
    label: "Action button",
    content:
      " A customizable fast track to your favorite feature. Long press to launch the action you want \u2014 Silent mode, Translation, Shortcuts, and more.",
    imgSrc:
      "https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/viewer_action_button_startframe__bb2coc4lpj2a_large_2x.jpg",
  },
];

const Showcase1Template = (props: DisclosureGroupProps) => {
  const [expandedKeys, setExpandedKeys] = React.useState(new Set<string | number>(["colors"]));
  const itemIds = showcase1Items.map((item) => item.id);
  const isAnyItemExpanded = expandedKeys.size > 0;

  const {isNextDisabled, isPrevDisabled, onNext, onPrevious} = useDisclosureGroupNavigation({
    expandedKeys,
    itemIds,
    onExpandedChange: setExpandedKeys,
  });

  return (
    <Box as="section" bg="surface" overflow="hidden" width="full">
      {/* Left content */}
      <Flex align="center" gap="8" px="8" py="8" width="full">
        {/* Controls */}
        <Flex
          className="opacity-0 transition-all duration-300 ease-out-quad data-[expanded=true]:duration-400 translate-y-[120px] data-[expanded=true]:translate-y-0 data-[expanded=true]:opacity-100 scale-50 data-[expanded=true]:scale-100"
          data-expanded={isAnyItemExpanded}
          direction="column"
          display={{base: "none", sm: "flex"}}
          gap="5"
          zIndex={1}
        >
          <Button
            isIconOnly
            aria-label="Previous disclosure"
            className="transition-all duration-250 ease-smooth"
            disabled={isPrevDisabled}
            rounded="full"
            variant="outline"
            onClick={onPrevious}
          >
            <svg
              style={{width: "2rem", height: "2rem", fill: "var(--colors-fg)"}}
              viewBox="0 0 36 36"
            >
              <path d="m11 20c0-.3838.1465-.7676.4395-1.0605l5.5-5.5c.5854-.5859 1.5356-.5859 2.1211 0l5.5 5.5c.5859.5859.5859 1.5352 0 2.1211-.5854.5859-1.5356.5859-2.1211 0l-4.4395-4.4395-4.4395 4.4395c-.5854.5859-1.5356.5859-2.1211 0-.293-.293-.4395-.6768-.4395-1.0605z" />
            </svg>
          </Button>
          <Button
            isIconOnly
            aria-label="Next disclosure"
            className="transition-all duration-250 ease-smooth"
            disabled={isNextDisabled}
            rounded="full"
            variant="outline"
            onClick={onNext}
          >
            <svg
              style={{width: "2rem", height: "2rem", fill: "var(--colors-fg)"}}
              viewBox="0 0 36 36"
            >
              <path d="m19.0625 22.5597 5.5-5.5076c.5854-.5854.5825-1.5323-.0039-2.1157-.5869-.5835-1.5366-.5815-2.1211.0039l-4.4375 4.4438-4.4375-4.4438c-.5845-.5854-1.5342-.5874-2.1211-.0039-.2944.2922-.4414.676-.4414 1.0598 0 .3818.1455.7637.4375 1.0559l5.5 5.5076c.2813.2815.6636.4403 1.0625.4403s.7812-.1588 1.0625-.4403z" />
            </svg>
          </Button>
        </Flex>
        <Box maxW="md" width="full" zIndex={1}>
          <DisclosureGroup
            {...props}
            style={{display: "flex", flexDirection: "column", gap: "0.75rem"}}
            value={Array.from(expandedKeys).map(String)}
            onValueChange={({value}) => setExpandedKeys(new Set(value))}
          >
            {showcase1Items.map((item) => (
              <Disclosure key={item.id} aria-label={item.label} id={item.id}>
                <Disclosure.Heading>
                  <AppleShowcaseButton isSelected={expandedKeys.has(item.id)} slot="trigger">
                    <Flex align="center" gap="3" justify="start" width="full">
                      {item.id === "colors" ? (
                        <SelectedIphoneColorSwatch color="#f77314" name="Cosmic Orange" />
                      ) : (
                        <PlusIcon />
                      )}
                      {item.label}
                    </Flex>
                  </AppleShowcaseButton>
                </Disclosure.Heading>
                <Disclosure.Content className="duration-[420ms] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ease-out-quad">
                  <Disclosure.Body
                    data-expanded={expandedKeys.has(item.id)}
                    style={{
                      marginTop: "0.75rem",
                      display: "flex",
                      maxWidth: "24rem",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "var(--radii-2xl)",
                      background: "rgba(42,42,45,0.72)",
                      padding: "1.75rem",
                      textAlign: "left",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <p
                      data-expanded={expandedKeys.has(item.id)}
                      style={{
                        fontSize: "17px",
                        fontWeight: 300,
                        color: "#F5F5F7",
                        transform: expandedKeys.has(item.id) ? "translateY(0)" : "translateY(20px)",
                        opacity: expandedKeys.has(item.id) ? 1 : 0,
                        transition: expandedKeys.has(item.id)
                          ? "opacity 1200ms ease-out, transform 800ms cubic-bezier(0.18,0.89,0.32,1.27)"
                          : " ",
                        willChange: "opacity, translate",
                      }}
                    >
                      <strong style={{fontWeight: 500}}>{item.label}</strong>.&nbsp;{item.content}
                    </p>
                  </Disclosure.Body>
                </Disclosure.Content>
              </Disclosure>
            ))}
          </DisclosureGroup>
        </Box>
      </Flex>
      {/* Right image */}
      {showcase1Items.map((item) => (
        <img
          key={item.id}
          alt={item.label}
          data-selected={expandedKeys.has(item.id)}
          src={item.imgSrc}
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: "50%",
            right: "10%",
            zIndex: 0,
            display: "none",
            width: "100%",
            maxWidth: "72rem",
            transform: expandedKeys.has(item.id)
              ? "translateY(-50%) scale(1.5) translateX(0)"
              : "translateY(-50%) scale(1.5) translateX(10%)",
            opacity: expandedKeys.has(item.id) ? 1 : 0,
            transition: expandedKeys.has(item.id)
              ? "opacity 1000ms ease-out, translate 900ms var(--ease-out-quad)"
              : " ",
            willChange: "opacity, translate",
          }}
        />
      ))}
    </Box>
  );
};

export const Default: StoryObj<typeof DisclosureGroup> = {
  args: {
    ...defaultArgs,
  },
  render: Template,
};

export const Controlled: StoryObj<typeof DisclosureGroup> = {
  args: {
    ...defaultArgs,
  },
  render: ControlledTemplate,
};

export const Showcase1: StoryObj<typeof DisclosureGroup> = {
  args: {
    children: null,
  },
  render: Showcase1Template,
  name: "Showcases/Apple iPhone 17 Pro Disclosure Group",
};

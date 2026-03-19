import type {ScrollShadowVisibility} from ".";
import type {Meta, StoryObj} from "@storybook/react";

import {Box, Flex, Text} from "@chakra-ui/react";
import React, {useState} from "react";

import {Button} from "../button";
import {Card} from "../card";

import {ScrollShadow} from ".";

const meta: Meta<typeof ScrollShadow> = {
  title: "Components/Utilities/ScrollShadow",
  component: ScrollShadow,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ScrollShadow>;

const LoremContent = () => (
  <Flex direction="column" gap="4">
    {Array.from({length: 10}).map((_, idx) => (
      <p key={`scroll-shadow-lorem-content-${idx}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
        hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Morbi
        accumsan cursus enim, sed ultricies sapien.
      </p>
    ))}
  </Flex>
);

const LoremCards = () => {
  const images = [
    "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/robot1.jpeg",
    "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/avocado.jpeg",
    "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/oranges.jpeg",
  ];

  const getRandomImage = (idx: number) => {
    return images[idx % images.length];
  };

  return (
    <Flex direction="row" gap="4">
      {Array.from({length: 10}).map((_, idx) => (
        <Card
          key={`scroll-shadow-lorem-cards-${idx}`}
          style={{display: "flex", minWidth: "200px", flexDirection: "row", gap: "12px", padding: "4px"}}
          variant="secondary"
        >
          <img
            alt="Lorem Card"
            style={{
              aspectRatio: "1/1",
              height: "64px",
              width: "64px",
              flexShrink: 0,
              borderRadius: "12px",
              objectFit: "cover",
              userSelect: "none",
            }}
            loading="lazy"
            src={getRandomImage(idx)}
          />
          <Flex flex="1" direction="column" justify="center" gap="1">
            <Card.Title style={{fontSize: "14px"}}>Bridging the Future</Card.Title>
            <Card.Description style={{fontSize: "12px"}}>Today, 6:30 PM</Card.Description>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export const Default: Story = {
  render: (args) => (
    <Box w="full" p="0" maxW={{sm: "sm"}}>
      <ScrollShadow style={{maxHeight: "240px", padding: "16px"}} {...args}>
        <LoremContent />
      </ScrollShadow>
    </Box>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Flex direction="column" gap="8">
      <Box>
        <Text as="h4" mb="2" fontSize="sm" fontWeight="semibold">Fade (Opacity Effect)</Text>
        <Box w="full" p="0" maxW={{sm: "sm"}}>
          <ScrollShadow style={{maxHeight: "240px", padding: "16px"}} {...args}>
            <LoremContent />
          </ScrollShadow>
        </Box>
      </Box>

      <Box>
        <Text as="h4" mb="2" fontSize="sm" fontWeight="semibold">Blur (Blur Effect)</Text>
        <Box w="full" p="0" maxW={{sm: "sm"}}>
          <ScrollShadow style={{maxHeight: "240px", padding: "16px"}} {...args}>
            <LoremContent />
          </ScrollShadow>
        </Box>
      </Box>
    </Flex>
  ),
};

export const Orientation: Story = {
  render: (args) => (
    <Flex direction="column" gap="8">
      <Box>
        <Text as="h4" mb="2" fontSize="sm" fontWeight="semibold">Vertical</Text>
        <Card style={{width: "100%", padding: 0, maxWidth: "384px"}}>
          <ScrollShadow style={{maxHeight: "240px", padding: "16px"}} orientation="vertical" {...args}>
            <LoremContent />
          </ScrollShadow>
        </Card>
      </Box>

      <Box>
        <Text as="h4" mb="2" fontSize="sm" fontWeight="semibold">Horizontal</Text>
        <Card style={{width: "100%", padding: 0, maxWidth: "384px"}}>
          <ScrollShadow style={{padding: "16px"}} orientation="horizontal" {...args}>
            <LoremCards />
          </ScrollShadow>
        </Card>
      </Box>
    </Flex>
  ),
};

export const HideScrollBar: Story = {
  render: (args) => (
    <Box w="full" p="0" maxW={{sm: "sm"}}>
      <ScrollShadow hideScrollBar style={{maxHeight: "240px", padding: "16px"}} {...args}>
        <LoremContent />
      </ScrollShadow>
    </Box>
  ),
};

export const CustomSize: Story = {
  render: (args) => (
    <Flex direction="column" gap="6">
      <Box>
        <Text as="h4" mb="2" fontSize="sm" fontWeight="semibold">Small Shadow (20px)</Text>
        <Box w="full" p="0" maxW={{sm: "sm"}}>
          <ScrollShadow style={{maxHeight: "200px", padding: "16px"}} size={20} {...args}>
            <LoremContent />
          </ScrollShadow>
        </Box>
      </Box>
      <Box>
        <Text as="h4" mb="2" fontSize="sm" fontWeight="semibold">Default Shadow (40px)</Text>
        <Box w="full" p="0" maxW={{sm: "sm"}}>
          <ScrollShadow style={{maxHeight: "200px", padding: "16px"}} {...args}>
            <LoremContent />
          </ScrollShadow>
        </Box>
      </Box>
      <Box>
        <Text as="h4" mb="2" fontSize="sm" fontWeight="semibold">Large Shadow (80px)</Text>
        <Box w="full" p="0" maxW={{sm: "sm"}}>
          <ScrollShadow style={{maxHeight: "200px", padding: "16px"}} size={80} {...args}>
            <LoremContent />
          </ScrollShadow>
        </Box>
      </Box>
    </Flex>
  ),
};

export const VisibilityChange: Story = {
  render: (args) => {
    const [verticalState, setVerticalState] = useState<ScrollShadowVisibility>("none");
    const [horizontalState, setHorizontalState] = useState<ScrollShadowVisibility>("none");

    return (
      <>
        <Flex mb="4" direction="column" gap="4">
          <Box rounded="md" bg="bg" p="4">
            <Text fontSize="sm" fontWeight="semibold">Vertical Shadow State: {verticalState}</Text>
          </Box>
          <Box w="full" p="0" maxW={{sm: "sm"}}>
            <ScrollShadow
              style={{maxHeight: "240px", padding: "16px"}}
              orientation="vertical"
              onVisibilityChange={(visibility) => setVerticalState(visibility)}
              {...args}
            >
              <LoremContent />
            </ScrollShadow>
          </Box>
        </Flex>

        <Flex direction="column" gap="4">
          <Box rounded="md" bg="bg" p="4">
            <Text fontSize="sm" fontWeight="semibold">Horizontal Shadow State: {horizontalState}</Text>
          </Box>
          <Box w="full" p="0" maxW={{sm: "sm"}}>
            <ScrollShadow
              style={{padding: "16px"}}
              orientation="horizontal"
              onVisibilityChange={(visibility) => setHorizontalState(visibility)}
              {...args}
            >
              <LoremCards />
            </ScrollShadow>
          </Box>
        </Flex>
      </>
    );
  },
};

export const WithCard: Story = {
  render: (args) => (
    <Card style={{maxWidth: "400px"}}>
      <Card.Header>
        <Card.Title>Terms and Conditions</Card.Title>
        <Card.Description>Please review before proceeding</Card.Description>
      </Card.Header>
      <Card.Content style={{padding: 0}}>
        <ScrollShadow style={{height: "300px", paddingLeft: "16px", paddingRight: "16px"}} size={80} {...args}>
          <LoremContent />
        </ScrollShadow>
      </Card.Content>
      <Card.Footer style={{marginTop: "16px", display: "flex", flexDirection: "row", gap: "8px"}}>
        <Button style={{width: "100%"}} variant="outline">
          Cancel
        </Button>
        <Button style={{width: "100%"}}>Accept</Button>
      </Card.Footer>
    </Card>
  ),
};

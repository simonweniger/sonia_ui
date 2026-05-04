import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Flex, Grid, Text, chakra} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Avatar} from "../avatar";
import {Button} from "../button";
import {CloseButton} from "../close-button";
import {Form} from "../form";
import {Input} from "../input";
import {Label} from "../label";
import {Link} from "../link";
import {TextField} from "../textfield";

import {Card} from "./index";

const meta = {
  argTypes: {
    variant: {
      control: {type: "select"},
      options: ["subtle", "elevated", "outline"],
    },
  },
  component: Card,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/Card",
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card width="400px" {...args}>
      <Icon
        aria-label="Dollar sign icon"
        icon="gravity-ui:circle-dollar"
        role="img"
        style={{color: "var(--chakra-colors-primary)", width: "24px", height: "24px"}}
      />
      <Card.Header>
        <Card.Title>Become an Acme Creator!</Card.Title>
        <Card.Description>
          Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
          followers.
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://sonia.so"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Card variant="transparent" width="320px">
        <Card.Header>
          <Card.Title>Transparent</Card.Title>
          <Card.Description>Minimal prominence with transparent background</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>Use for less important content or nested cards</Text>
        </Card.Content>
      </Card>

      <Card variant="default" width="320px">
        <Card.Header>
          <Card.Title>Default</Card.Title>
          <Card.Description>Standard card appearance (bg-surface)</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>The default card variant for most use cases</Text>
        </Card.Content>
      </Card>

      <Card variant="secondary" width="320px">
        <Card.Header>
          <Card.Title>Secondary</Card.Title>
          <Card.Description>Medium prominence (bg-surface-secondary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>Use to draw moderate attention</Text>
        </Card.Content>
      </Card>

      <Card variant="tertiary" width="320px">
        <Card.Header>
          <Card.Title>Tertiary</Card.Title>
          <Card.Description>Higher prominence (bg-surface-tertiary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>Use for primary or featured content</Text>
        </Card.Content>
      </Card>
    </Flex>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <Card alignItems="stretch" flexDirection={{md: "row"}} width="full" {...args}>
      <chakra.img
        alt="Porsche 911 Golden Edition"
        aspectRatio="square"
        loading="lazy"
        maxW={{md: "136px"}}
        objectFit="cover"
        pointerEvents="none"
        rounded="3xl"
        src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/components/card/porsche-911.png"
        userSelect="none"
        width="full"
      />
      <Flex direction="column" flex="1" gap="3">
        <Card.Header gap="1">
          <Card.Title>Get the new Porsche 911 golden edition</Card.Title>
          <Card.Description>
            Experience unmatched luxury and performance with the Porsche 911 Golden Edition—where
            sleek design meets cutting-edge tech and pure driving thrill.
          </Card.Description>
        </Card.Header>
        <Card.Footer
          alignItems="center"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt="auto"
          width="full"
        >
          <Flex direction="column">
            <Text
              aria-label="Price: 36,799 US dollars"
              color="fg"
              fontSize="sm"
              fontWeight="medium"
            >
              $36,799
            </Text>
            <Text aria-label="Available stock: 11 units" color="fg.muted" fontSize="xs">
              11 available
            </Text>
          </Flex>
          <Button>Buy Now</Button>
        </Card.Footer>
      </Flex>
    </Card>
  ),
};

export const WithAvatar: Story = {
  render: (args) => (
    <Flex gap="4">
      <Card gap="2" width="200px" {...args}>
        <chakra.img
          alt="Indie Hackers community"
          aspectRatio="square"
          loading="lazy"
          objectFit="cover"
          pointerEvents="none"
          rounded="2xl"
          src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
          userSelect="none"
          width="14"
        />
        <Card.Header>
          <Card.Title>Indie Hackers</Card.Title>
          <Card.Description>148 members</Card.Description>
        </Card.Header>
        <Card.Footer display="flex" gap="2">
          <Avatar aria-label="Martha's profile picture" boxSize="5">
            <Avatar.Image
              alt="Martha's avatar"
              src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
            />
            <Avatar.Fallback fontSize="xs">IH</Avatar.Fallback>
          </Avatar>
          <Text fontSize="xs">By Martha</Text>
        </Card.Footer>
      </Card>

      <Card gap="2" width="200px" {...args}>
        <chakra.img
          alt="AI Builders community"
          aspectRatio="square"
          loading="lazy"
          objectFit="cover"
          pointerEvents="none"
          rounded="2xl"
          src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"
          userSelect="none"
          width="14"
        />
        <Card.Header>
          <Card.Title>AI Builders</Card.Title>
          <Card.Description>362 members</Card.Description>
        </Card.Header>
        <Card.Footer display="flex" gap="2">
          <Avatar aria-label="John's profile picture" boxSize="5">
            <Avatar.Image
              alt="John's avatar - blue themed"
              src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
            />
            <Avatar.Fallback fontSize="xs">B</Avatar.Fallback>
          </Avatar>
          <Text fontSize="xs">By John</Text>
        </Card.Footer>
      </Card>
    </Flex>
  ),
};

export const WithImages: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <Flex align="center" justify="center" width="full">
      <Grid gap="4" gridTemplateColumns="repeat(12, 1fr)" maxW="2xl" p="4" width="full">
        {/* Row 1: Large Product Card - Available Soon */}
        <Card
          display="flex"
          flexDirection={{base: "column", sm: "row"}}
          gridColumn="span 12"
          height="auto"
          minH="152px"
          {...args}
        >
          <Box
            flexShrink={0}
            height={{base: "140px", sm: "120px"}}
            overflow="hidden"
            position="relative"
            rounded="2xl"
            width={{base: "full", sm: "120px"}}
          >
            <chakra.img
              alt="Cherries"
              height="full"
              inset="0"
              loading="lazy"
              objectFit="cover"
              pointerEvents="none"
              position="absolute"
              src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              transform="scale(1.25)"
              userSelect="none"
              width="full"
            />
          </Box>
          <Flex direction="column" flex="1" gap="3">
            <Card.Header gap="1">
              <Card.Title pr="8">Become an ACME Creator!</Card.Title>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                faucibus etiam.
              </Card.Description>
              <CloseButton aria-label="Close banner" position="absolute" right="3" top="3" />
            </Card.Header>
            <Card.Footer
              alignItems={{base: "flex-start", sm: "center"}}
              display="flex"
              flexDirection={{base: "column", sm: "row"}}
              gap="3"
              justifyContent={{sm: "space-between"}}
              mt="auto"
              width="full"
            >
              <Flex direction="column">
                <Text color="fg" fontSize="sm" fontWeight="medium">
                  Only 10 spots
                </Text>
                <Text color="fg.muted" fontSize="xs">
                  Submission ends Oct 10.
                </Text>
              </Flex>
              <Button width={{base: "full", sm: "auto"}}>Apply Now</Button>
            </Card.Footer>
          </Flex>
        </Card>

        {/* Row 2 */}
        <Grid gap="4" gridColumn="span 12" gridTemplateColumns="repeat(12, 1fr)">
          {/* Left Column */}
          <Grid
            gap="4"
            gridColumn={{base: "span 12", lg: "span 6"}}
            gridTemplateColumns="repeat(12, 1fr)"
          >
            {/* Top Card */}
            <Card gridColumn="span 12">
              <Box position="absolute" right="3" top="3" zIndex="10">
                <CloseButton aria-label="Close notification" />
              </Box>
              <Card.Header gap="3">
                <Icon
                  aria-label="Dollar sign icon"
                  icon="gravity-ui:circle-dollar"
                  role="img"
                  style={{
                    color: "var(--chakra-colors-primary)",
                    width: "32px",
                    height: "32px",
                    flexShrink: 0,
                  }}
                />
                <Flex direction="column" gap="1">
                  <Text
                    color="fg.muted"
                    fontSize="xs"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    PAYMENT
                  </Text>
                  <Card.Title fontSize={{base: "sm", sm: "md"}} pr="8">
                    You can now withdraw on crypto
                  </Card.Title>
                  <Card.Description fontSize={{base: "xs", sm: "sm"}}>
                    Add your wallet in settings to withdraw
                  </Card.Description>
                </Flex>
              </Card.Header>
              <Card.Footer>
                <Link aria-label="Go to settings" href="#" rel="noopener noreferrer">
                  Go to settings
                  <Link.Icon aria-hidden="true" />
                </Link>
              </Card.Footer>
            </Card>
            {/* Bottom cards */}
            <Grid gap="4" gridColumn="span 12" gridTemplateColumns="repeat(12, 1fr)">
              {/* Left Card */}
              <Card gap="2" gridColumn={{base: "span 12", sm: "span 6"}}>
                <Card.Header>
                  <Avatar borderRadius="xl" boxSize="56px">
                    <Avatar.Image
                      alt="Demo 1"
                      src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                    />
                    <Avatar.Fallback>JK</Avatar.Fallback>
                  </Avatar>
                </Card.Header>
                <Card.Content mt="1">
                  <Text fontSize="sm" fontWeight="medium" lineHeight="4">
                    Indie Hackers
                  </Text>
                  <Text color="fg.muted" fontSize="xs">
                    148 members
                  </Text>
                </Card.Content>
                <Card.Footer alignItems="center" display="flex" gap="2">
                  <Avatar boxSize="4">
                    <Avatar.Image
                      alt="John"
                      src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                    />
                    <Avatar.Fallback>JK</Avatar.Fallback>
                  </Avatar>
                  <Text color="fg.muted" fontSize="xs">
                    By John
                  </Text>
                </Card.Footer>
              </Card>
              {/* Right Card */}
              <Card gap="2" gridColumn={{base: "span 12", sm: "span 6"}}>
                <Card.Header>
                  <Avatar borderRadius="xl" boxSize="56px">
                    <Avatar.Image
                      alt="Demo 2"
                      src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"
                    />
                    <Avatar.Fallback>AB</Avatar.Fallback>
                  </Avatar>
                </Card.Header>
                <Card.Content mt="1">
                  <Text fontSize="sm" fontWeight="medium" lineHeight="4">
                    AI Builders
                  </Text>
                  <Text color="fg.muted" fontSize="xs">
                    362 members
                  </Text>
                </Card.Content>
                <Card.Footer alignItems="center" display="flex" gap="2">
                  <Avatar boxSize="4">
                    <Avatar.Image
                      alt="John"
                      src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                    />
                    <Avatar.Fallback>M</Avatar.Fallback>
                  </Avatar>
                  <Text color="fg.muted" fontSize="xs">
                    By Martha
                  </Text>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid>
          {/* Right Column */}
          <Card gridColumn={{base: "span 12", lg: "span 6"}} minH="200px" rounded="3xl" {...args}>
            {/* Background image */}
            <chakra.img
              alt="NEO Home Robot"
              aria-hidden="true"
              height="full"
              inset="0"
              objectFit="cover"
              position="absolute"
              src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
              width="full"
            />

            {/* Header */}
            <Card.Header color="white" zIndex="10">
              <Card.Title color="black/70" fontSize="xs" fontWeight="semibold" letterSpacing="wide">
                NEO
              </Card.Title>
              <Card.Description color="black/50" fontSize="sm" fontWeight="medium" lineHeight="5">
                Home Robot
              </Card.Description>
            </Card.Header>

            {/* Bottom gradient blur overlay */}
            <Box
              aria-hidden="true"
              bottom="0"
              height="64px"
              left="0"
              pointerEvents="none"
              position="absolute"
              right="0"
            >
              <Box
                backdropFilter="blur(4px)"
                borderBottomRadius="inherit"
                height="100%"
                inset="0"
                position="absolute"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                }}
              />
            </Box>
            {/* Footer */}
            <Card.Footer
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mt="auto"
              zIndex="10"
            >
              <Box>
                <Text color="black" fontSize="sm" fontWeight="medium">
                  Available soon
                </Text>
                <Text color="black/60" fontSize="xs">
                  Get notified
                </Text>
              </Box>
              <Button bg="white" color="black" size="sm" variant="ghost">
                Notify me
              </Button>
            </Card.Footer>
          </Card>
        </Grid>

        {/* Row 3 */}
        <Grid gap="4" gridColumn="span 12" gridTemplateColumns="repeat(12, 1fr)">
          {/* Left Column: Card */}
          <Card
            gridColumn={{base: "span 12", md: "span 8"}}
            height={{base: "250px", sm: "300px", md: "350px"}}
            position="relative"
            {...args}
          >
            <chakra.img
              alt="NEO Home Robot"
              aria-hidden="true"
              height="full"
              inset="0"
              objectFit="cover"
              position="absolute"
              src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo1.jpeg"
              width="full"
            />

            {/* Bottom gradient blur overlay */}
            <Box
              aria-hidden="true"
              bottom="0"
              height={{base: "16", sm: "20"}}
              left="0"
              pointerEvents="none"
              position="absolute"
              right="0"
            >
              <Box
                backdropFilter="blur(4px)"
                borderBottomRadius="inherit"
                height="100%"
                inset="0"
                position="absolute"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                }}
              />
            </Box>
            <Card.Footer
              alignItems="flex-end"
              display="flex"
              justifyContent="space-between"
              mt="auto"
              zIndex="10"
            >
              <Box>
                <Text color="black" fontSize={{base: "md", sm: "lg"}} fontWeight="medium">
                  NEO
                </Text>
                <Text color="black/50" fontSize={{base: "xs", sm: "sm"}} fontWeight="medium">
                  $499/m
                </Text>
              </Box>
              <Button bg="white" color="black" size="sm" variant="ghost">
                Get now
              </Button>
            </Card.Footer>
          </Card>

          {/* Right Column: Cards Stack */}
          <Flex
            direction="column"
            gap={{base: "2", md: "0"}}
            gridColumn={{base: "span 12", md: "span 4"}}
            justifyContent={{md: "space-between"}}
          >
            {/* 1 */}
            <Card display="flex" flexDirection="row" gap="3" p="1" variant="secondary">
              <chakra.img
                alt="Futuristic Robot"
                aspectRatio="square"
                flexShrink={0}
                height={{base: "16", sm: "20"}}
                loading="lazy"
                objectFit="cover"
                rounded="xl"
                src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/robot1.jpeg"
                userSelect="none"
                width={{base: "16", sm: "20"}}
              />
              <Flex direction="column" flex="1" gap="1" justify="center">
                <Card.Title fontSize="sm">Bridging the Future</Card.Title>
                <Card.Description fontSize="xs">Today, 6:30 PM</Card.Description>
              </Flex>
            </Card>
            {/* 2 */}
            <Card display="flex" flexDirection="row" gap="3" p="1" variant="secondary">
              <chakra.img
                alt="Avocado"
                aspectRatio="square"
                flexShrink={0}
                height={{base: "16", sm: "20"}}
                loading="lazy"
                objectFit="cover"
                rounded="xl"
                src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/avocado.jpeg"
                userSelect="none"
                width={{base: "16", sm: "20"}}
              />
              <Flex direction="column" flex="1" gap="1" justify="center">
                <Card.Title fontSize="sm">Avocado Hackathon</Card.Title>
                <Card.Description fontSize="xs">Wed, 4:30 PM</Card.Description>
              </Flex>
            </Card>
            {/* 3 */}
            <Card display="flex" flexDirection="row" gap="3" p="1" variant="secondary">
              <chakra.img
                alt="Sound Electro event"
                aspectRatio="square"
                flexShrink={0}
                height={{base: "16", sm: "20"}}
                loading="lazy"
                objectFit="cover"
                rounded="xl"
                src="https://soniaui-assets.nyc3.cdn.digitaloceanspaces.com/docs/oranges.jpeg"
                userSelect="none"
                width={{base: "16", sm: "20"}}
              />
              <Flex direction="column" flex="1" gap="1" justify="center">
                <Card.Title fontSize="sm">Sound Electro | Beyond art</Card.Title>
                <Card.Description fontSize="xs">Fri, 8:00 PM</Card.Description>
              </Flex>
            </Card>
          </Flex>
        </Grid>
      </Grid>
    </Flex>
  ),
};

export const WithForm: Story = {
  render: (args) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};

      // Convert FormData to plain object
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      alert("Form submitted successfully!");
    };

    return (
      <Card maxW="md" width="full" {...args}>
        <Card.Header>
          <Card.Title>Login</Card.Title>
          <Card.Description>Enter your credentials to access your account</Card.Description>
        </Card.Header>
        <Form onSubmit={onSubmit}>
          <Card.Content>
            <Flex direction="column" gap="4">
              <TextField>
                <Label>Email</Label>
                <Input
                  name="email"
                  placeholder="email@example.com"
                  type="email"
                  variant="secondary"
                />
              </TextField>
              <TextField>
                <Label>Password</Label>
                <Input name="password" placeholder="••••••••" type="password" variant="secondary" />
              </TextField>
            </Flex>
          </Card.Content>
          <Card.Footer display="flex" flexDirection="column" gap="2" mt="4">
            <Button type="submit" width="full">
              Sign In
            </Button>
            <Link fontSize="sm" href="#" textAlign="center">
              Forgot password?
            </Link>
          </Card.Footer>
        </Form>
      </Card>
    );
  },
};

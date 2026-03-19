import type {Meta, StoryObj} from "@storybook/react";

import {Icon} from "@iconify/react";
import React from "react";

import {Box, chakra, Flex, Grid, Text} from "@chakra-ui/react";

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
          href="https://heroui.com"
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
      <Card width="320px" variant="transparent">
        <Card.Header>
          <Card.Title>Transparent</Card.Title>
          <Card.Description>Minimal prominence with transparent background</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>Use for less important content or nested cards</Text>
        </Card.Content>
      </Card>

      <Card width="320px" variant="default">
        <Card.Header>
          <Card.Title>Default</Card.Title>
          <Card.Description>Standard card appearance (bg-surface)</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>The default card variant for most use cases</Text>
        </Card.Content>
      </Card>

      <Card width="320px" variant="secondary">
        <Card.Header>
          <Card.Title>Secondary</Card.Title>
          <Card.Description>Medium prominence (bg-surface-secondary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <Text>Use to draw moderate attention</Text>
        </Card.Content>
      </Card>

      <Card width="320px" variant="tertiary">
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
    <Card width="full" alignItems="stretch" flexDirection={{md: "row"}} {...args}>
      <chakra.img
        alt="Porsche 911 Golden Edition"
        pointerEvents="none"
        aspectRatio="square"
        width="full"
        rounded="3xl"
        objectFit="cover"
        userSelect="none"
        maxW={{md: "136px"}}
        loading="lazy"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/components/card/porsche-911.png"
      />
      <Flex flex="1" direction="column" gap="3">
        <Card.Header gap="1">
          <Card.Title>Get the new Porsche 911 golden edition</Card.Title>
          <Card.Description>
            Experience unmatched luxury and performance with the Porsche 911 Golden Edition—where
            sleek design meets cutting-edge tech and pure driving thrill.
          </Card.Description>
        </Card.Header>
        <Card.Footer mt="auto" display="flex" width="full" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Flex direction="column">
            <Text
              aria-label="Price: 36,799 US dollars"
              fontSize="sm"
              fontWeight="medium"
              color="fg"
            >
              $36,799
            </Text>
            <Text aria-label="Available stock: 11 units" fontSize="xs" color="fg.muted">
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
      <Card width="200px" gap="2" {...args}>
        <chakra.img
          alt="Indie Hackers community"
          pointerEvents="none"
          aspectRatio="square"
          width="14"
          rounded="2xl"
          objectFit="cover"
          userSelect="none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
        />
        <Card.Header>
          <Card.Title>Indie Hackers</Card.Title>
          <Card.Description>148 members</Card.Description>
        </Card.Header>
        <Card.Footer display="flex" gap="2">
          <Avatar aria-label="Martha's profile picture" boxSize="5">
            <Avatar.Image
              alt="Martha's avatar"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
            />
            <Avatar.Fallback fontSize="xs">IH</Avatar.Fallback>
          </Avatar>
          <Text fontSize="xs">By Martha</Text>
        </Card.Footer>
      </Card>

      <Card width="200px" gap="2" {...args}>
        <chakra.img
          alt="AI Builders community"
          pointerEvents="none"
          aspectRatio="square"
          width="14"
          rounded="2xl"
          objectFit="cover"
          userSelect="none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"
        />
        <Card.Header>
          <Card.Title>AI Builders</Card.Title>
          <Card.Description>362 members</Card.Description>
        </Card.Header>
        <Card.Footer display="flex" gap="2">
          <Avatar aria-label="John's profile picture" boxSize="5">
            <Avatar.Image
              alt="John's avatar - blue themed"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
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
    <Flex width="full" align="center" justify="center">
      <Grid width="full" maxW="2xl" gridTemplateColumns="repeat(12, 1fr)" gap="4" p="4">
        {/* Row 1: Large Product Card - Available Soon */}
        <Card gridColumn="span 12" display="flex" height="auto" minH="152px" flexDirection={{base: "column", sm: "row"}} {...args}>
          <Box position="relative" height={{base: "140px", sm: "120px"}} width={{base: "full", sm: "120px"}} flexShrink={0} overflow="hidden" rounded="2xl">
            <chakra.img
              alt="Cherries"
              pointerEvents="none"
              position="absolute"
              inset="0"
              height="full"
              width="full"
              transform="scale(1.25)"
              objectFit="cover"
              userSelect="none"
              loading="lazy"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
            />
          </Box>
          <Flex flex="1" direction="column" gap="3">
            <Card.Header gap="1">
              <Card.Title pr="8">Become an ACME Creator!</Card.Title>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                faucibus etiam.
              </Card.Description>
              <CloseButton aria-label="Close banner" position="absolute" top="3" right="3" />
            </Card.Header>
            <Card.Footer mt="auto" display="flex" width="full" flexDirection={{base: "column", sm: "row"}} alignItems={{base: "flex-start", sm: "center"}} justifyContent={{sm: "space-between"}} gap="3">
              <Flex direction="column">
                <Text fontSize="sm" fontWeight="medium" color="fg">Only 10 spots</Text>
                <Text fontSize="xs" color="fg.muted">Submission ends Oct 10.</Text>
              </Flex>
              <Button width={{base: "full", sm: "auto"}}>Apply Now</Button>
            </Card.Footer>
          </Flex>
        </Card>

        {/* Row 2 */}
        <Grid gridColumn="span 12" gridTemplateColumns="repeat(12, 1fr)" gap="4">
          {/* Left Column */}
          <Grid gridColumn={{base: "span 12", lg: "span 6"}} gridTemplateColumns="repeat(12, 1fr)" gap="4">
            {/* Top Card */}
            <Card gridColumn="span 12">
              <Box position="absolute" top="3" right="3" zIndex="10">
                <CloseButton aria-label="Close notification" />
              </Box>
              <Card.Header gap="3">
                <Icon
                  aria-label="Dollar sign icon"
                  icon="gravity-ui:circle-dollar"
                  role="img"
                  style={{color: "var(--chakra-colors-primary)", width: "32px", height: "32px", flexShrink: 0}}
                />
                <Flex direction="column" gap="1">
                  <Text fontSize="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase">PAYMENT</Text>
                  <Card.Title pr="8" fontSize={{base: "sm", sm: "md"}}>
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
            <Grid gridColumn="span 12" gridTemplateColumns="repeat(12, 1fr)" gap="4">
              {/* Left Card */}
              <Card gridColumn={{base: "span 12", sm: "span 6"}} gap="2">
                <Card.Header>
                  <Avatar boxSize="56px" borderRadius="xl">
                    <Avatar.Image
                      alt="Demo 1"
                      src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                    />
                    <Avatar.Fallback>JK</Avatar.Fallback>
                  </Avatar>
                </Card.Header>
                <Card.Content mt="1">
                  <Text fontSize="sm" lineHeight="4" fontWeight="medium">Indie Hackers</Text>
                  <Text fontSize="xs" color="fg.muted">148 members</Text>
                </Card.Content>
                <Card.Footer display="flex" alignItems="center" gap="2">
                  <Avatar boxSize="4">
                    <Avatar.Image
                      alt="John"
                      src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                    />
                    <Avatar.Fallback>JK</Avatar.Fallback>
                  </Avatar>
                  <Text fontSize="xs" color="fg.muted">By John</Text>
                </Card.Footer>
              </Card>
              {/* Right Card */}
              <Card gridColumn={{base: "span 12", sm: "span 6"}} gap="2">
                <Card.Header>
                  <Avatar boxSize="56px" borderRadius="xl">
                    <Avatar.Image
                      alt="Demo 2"
                      src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"
                    />
                    <Avatar.Fallback>AB</Avatar.Fallback>
                  </Avatar>
                </Card.Header>
                <Card.Content mt="1">
                  <Text fontSize="sm" lineHeight="4" fontWeight="medium">AI Builders</Text>
                  <Text fontSize="xs" color="fg.muted">362 members</Text>
                </Card.Content>
                <Card.Footer display="flex" alignItems="center" gap="2">
                  <Avatar boxSize="4">
                    <Avatar.Image
                      alt="John"
                      src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                    />
                    <Avatar.Fallback>M</Avatar.Fallback>
                  </Avatar>
                  <Text fontSize="xs" color="fg.muted">By Martha</Text>
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
              position="absolute"
              inset="0"
              height="full"
              width="full"
              objectFit="cover"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
            />

            {/* Header */}
            <Card.Header zIndex="10" color="white">
              <Card.Title fontSize="xs" fontWeight="semibold" letterSpacing="wide" color="black/70">
                NEO
              </Card.Title>
              <Card.Description fontSize="sm" lineHeight="5" fontWeight="medium" color="black/50">
                Home Robot
              </Card.Description>
            </Card.Header>

            {/* Bottom gradient blur overlay */}
            <Box
              aria-hidden="true"
              pointerEvents="none"
              position="absolute"
              right="0"
              bottom="0"
              left="0"
              height="64px"
            >
              <Box
                position="absolute"
                inset="0"
                height="100%"
                borderBottomRadius="inherit"
                backdropFilter="blur(4px)"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                }}
              />
            </Box>
            {/* Footer */}
            <Card.Footer zIndex="10" mt="auto" display="flex" alignItems="center" justifyContent="space-between">
              <Box>
                <Text fontSize="sm" fontWeight="medium" color="black">Available soon</Text>
                <Text fontSize="xs" color="black/60">Get notified</Text>
              </Box>
              <Button bg="white" color="black" size="sm" variant="ghost">
                Notify me
              </Button>
            </Card.Footer>
          </Card>
        </Grid>

        {/* Row 3 */}
        <Grid gridColumn="span 12" gridTemplateColumns="repeat(12, 1fr)" gap="4">
          {/* Left Column: Card */}
          <Card
            position="relative"
            gridColumn={{base: "span 12", md: "span 8"}}
            height={{base: "250px", sm: "300px", md: "350px"}}
            {...args}
          >
            <chakra.img
              alt="NEO Home Robot"
              aria-hidden="true"
              position="absolute"
              inset="0"
              height="full"
              width="full"
              objectFit="cover"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo1.jpeg"
            />

            {/* Bottom gradient blur overlay */}
            <Box
              aria-hidden="true"
              pointerEvents="none"
              position="absolute"
              right="0"
              bottom="0"
              left="0"
              height={{base: "16", sm: "20"}}
            >
              <Box
                position="absolute"
                inset="0"
                height="100%"
                borderBottomRadius="inherit"
                backdropFilter="blur(4px)"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskImage: "linear-gradient(to top, black 30%, transparent)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                }}
              />
            </Box>
            <Card.Footer zIndex="10" mt="auto" display="flex" alignItems="flex-end" justifyContent="space-between">
              <Box>
                <Text fontSize={{base: "md", sm: "lg"}} fontWeight="medium" color="black">NEO</Text>
                <Text fontSize={{base: "xs", sm: "sm"}} fontWeight="medium" color="black/50">$499/m</Text>
              </Box>
              <Button bg="white" color="black" size="sm" variant="ghost">
                Get now
              </Button>
            </Card.Footer>
          </Card>

          {/* Right Column: Cards Stack */}
          <Flex
            gridColumn={{base: "span 12", md: "span 4"}}
            direction="column"
            gap={{base: "2", md: "0"}}
            justifyContent={{md: "space-between"}}
          >
            {/* 1 */}
            <Card display="flex" flexDirection="row" gap="3" p="1" variant="secondary">
              <chakra.img
                alt="Futuristic Robot"
                aspectRatio="square"
                height={{base: "16", sm: "20"}}
                width={{base: "16", sm: "20"}}
                flexShrink={0}
                rounded="xl"
                objectFit="cover"
                userSelect="none"
                loading="lazy"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/robot1.jpeg"
              />
              <Flex flex="1" direction="column" justify="center" gap="1">
                <Card.Title fontSize="sm">Bridging the Future</Card.Title>
                <Card.Description fontSize="xs">Today, 6:30 PM</Card.Description>
              </Flex>
            </Card>
            {/* 2 */}
            <Card display="flex" flexDirection="row" gap="3" p="1" variant="secondary">
              <chakra.img
                alt="Avocado"
                aspectRatio="square"
                height={{base: "16", sm: "20"}}
                width={{base: "16", sm: "20"}}
                flexShrink={0}
                rounded="xl"
                objectFit="cover"
                userSelect="none"
                loading="lazy"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/avocado.jpeg"
              />
              <Flex flex="1" direction="column" justify="center" gap="1">
                <Card.Title fontSize="sm">Avocado Hackathon</Card.Title>
                <Card.Description fontSize="xs">Wed, 4:30 PM</Card.Description>
              </Flex>
            </Card>
            {/* 3 */}
            <Card display="flex" flexDirection="row" gap="3" p="1" variant="secondary">
              <chakra.img
                alt="Sound Electro event"
                aspectRatio="square"
                height={{base: "16", sm: "20"}}
                width={{base: "16", sm: "20"}}
                flexShrink={0}
                rounded="xl"
                objectFit="cover"
                userSelect="none"
                loading="lazy"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/oranges.jpeg"
              />
              <Flex flex="1" direction="column" justify="center" gap="1">
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
      <Card width="full" maxW="md" {...args}>
        <Card.Header>
          <Card.Title>Login</Card.Title>
          <Card.Description>Enter your credentials to access your account</Card.Description>
        </Card.Header>
        <Form onSubmit={onSubmit}>
          <Card.Content>
            <Flex direction="column" gap="4">
              <TextField>
                <Label>Email</Label>
                <Input name="email" type="email" placeholder="email@example.com" variant="secondary" />
              </TextField>
              <TextField>
                <Label>Password</Label>
                <Input name="password" type="password" placeholder="••••••••" variant="secondary" />
              </TextField>
            </Flex>
          </Card.Content>
          <Card.Footer mt="4" display="flex" flexDirection="column" gap="2">
            <Button width="full" type="submit">
              Sign In
            </Button>
            <Link textAlign="center" fontSize="sm" href="#">
              Forgot password?
            </Link>
          </Card.Footer>
        </Form>
      </Card>
    );
  },
};

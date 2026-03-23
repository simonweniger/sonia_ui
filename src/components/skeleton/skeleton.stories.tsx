import type {SkeletonProps} from "./index";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Box, Grid} from "@chakra-ui/react";
import React from "react";

import {Skeleton} from "./index";

export default {
  argTypes: {
    animationStyle: {
      control: "select",
      options: ["shimmer", "pulse", "none"],
    },
  },
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  title: "Components/Feedback/Skeleton",
} as Meta<typeof Skeleton>;

const defaultArgs: SkeletonProps = {};

const Template = (props: SkeletonProps) => (
  <Box bg="surface-1" p="4" rounded="3xl" shadow="surface" spaceY="5" w="200px">
    <Skeleton h="24" rounded="xl" {...props} />
    <Box spaceY="3">
      <Skeleton h="3" rounded="lg" w="3/5" {...props} />
      <Skeleton h="3" rounded="lg" w="4/5" {...props} />
      <Skeleton h="3" rounded="lg" w="2/5" {...props} />
    </Box>
  </Box>
);

const GridTemplate = (props: SkeletonProps) => (
  <Grid gap="4" templateColumns="repeat(3, 1fr)" w="450px">
    <Skeleton h="24" rounded="xl" {...props} />
    <Skeleton h="24" rounded="xl" {...props} />
    <Skeleton h="24" rounded="xl" {...props} />
  </Grid>
);

const SingleShimmerTemplate = (props: SkeletonProps) => (
  <Grid
    className="skeleton--shimmer"
    gap="4"
    overflow="hidden"
    position="relative"
    rounded="xl"
    templateColumns="repeat(3, 1fr)"
    w="450px"
  >
    <Skeleton h="24" rounded="xl" {...props} />
    <Skeleton h="24" rounded="xl" {...props} />
    <Skeleton h="24" rounded="xl" {...props} />
  </Grid>
);

export const Default: StoryObj<typeof Skeleton> = {
  args: defaultArgs,
  render: Template,
};

export const GridLayout: StoryObj<typeof Skeleton> = {
  args: defaultArgs,
  render: GridTemplate,
};

export const SingleShimmer: StoryObj<typeof Skeleton> = {
  args: {
    ...defaultArgs,
    animationStyle: "none",
  },
  render: SingleShimmerTemplate,
};

import type {SkeletonProps} from "./index";
import type {Meta, StoryObj} from "@storybook/react";

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
  <Box bg="surface-1" w="200px" spaceY="5" rounded="3xl" p="4" shadow="surface">
    <Skeleton h="24" rounded="xl" {...props} />
    <Box spaceY="3">
      <Skeleton h="3" w="3/5" rounded="lg" {...props} />
      <Skeleton h="3" w="4/5" rounded="lg" {...props} />
      <Skeleton h="3" w="2/5" rounded="lg" {...props} />
    </Box>
  </Box>
);

const GridTemplate = (props: SkeletonProps) => (
  <Grid w="450px" templateColumns="repeat(3, 1fr)" gap="4">
    <Skeleton h="24" rounded="xl" {...props} />
    <Skeleton h="24" rounded="xl" {...props} />
    <Skeleton h="24" rounded="xl" {...props} />
  </Grid>
);

const SingleShimmerTemplate = (props: SkeletonProps) => (
  <Grid className="skeleton--shimmer" position="relative" w="450px" templateColumns="repeat(3, 1fr)" gap="4" overflow="hidden" rounded="xl">
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

import type {PaginationProps} from "./index";
import type {Meta} from "@storybook/react-vite";

import {Box, Flex, Text} from "@chakra-ui/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Separator} from "../separator";

import {Pagination} from "./index";

export default {
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  title: "Components/Navigation/Pagination",
} as Meta<typeof Pagination>;

const defaultArgs: PaginationProps = {
  children: null,
};

/* -------------------------------------------------------------------------------------------------
 * Default
 * -----------------------------------------------------------------------------------------------*/
const DefaultTemplate = (props: PaginationProps) => (
  <Pagination {...props}>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Previous>
          <Pagination.PreviousIcon />
          <span>Previous</span>
        </Pagination.Previous>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link isActive>1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Next>
          <span>Next</span>
          <Pagination.NextIcon />
        </Pagination.Next>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
);

export const Default = {
  args: defaultArgs,
  render: DefaultTemplate,
};

/* -------------------------------------------------------------------------------------------------
 * Sizes
 * -----------------------------------------------------------------------------------------------*/
const SizesTemplate = (props: PaginationProps) => {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <Flex direction="column" gap="8">
      {sizes.map((size, index) => (
        <React.Fragment key={size}>
          <Flex direction="column" gap="2">
            <Text color="fg.muted" fontSize="sm" fontWeight="semibold" textTransform="capitalize">
              {size}
            </Text>
            <Pagination {...props} className={`pagination-${size}`}>
              <Pagination.Content>
                <Pagination.Item>
                  <Pagination.Previous>
                    <Pagination.PreviousIcon />
                    <span>Previous</span>
                  </Pagination.Previous>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link isActive>1</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link>2</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link>3</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Next>
                    <span>Next</span>
                    <Pagination.NextIcon />
                  </Pagination.Next>
                </Pagination.Item>
              </Pagination.Content>
            </Pagination>
          </Flex>
          {index < sizes.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export const Sizes = {
  args: defaultArgs,
  render: SizesTemplate,
};

/* -------------------------------------------------------------------------------------------------
 * With Ellipsis
 * -----------------------------------------------------------------------------------------------*/
const WithEllipsisTemplate = (props: PaginationProps) => (
  <Pagination {...props}>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Previous>
          <Pagination.PreviousIcon />
          <span>Previous</span>
        </Pagination.Previous>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link isActive>1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Ellipsis />
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>10</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>11</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>12</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Next>
          <span>Next</span>
          <Pagination.NextIcon />
        </Pagination.Next>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
);

export const WithEllipsis = {
  args: defaultArgs,
  render: WithEllipsisTemplate,
};

/* -------------------------------------------------------------------------------------------------
 * Simple (Prev / Next only)
 * -----------------------------------------------------------------------------------------------*/
const SimplePrevNextTemplate = (props: PaginationProps) => (
  <Pagination {...props}>
    <Pagination.Summary>1 to 5 of 10 invoices</Pagination.Summary>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Previous>
          <Pagination.PreviousIcon />
          <span>Prev</span>
        </Pagination.Previous>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Next>
          <span>Next</span>
          <Pagination.NextIcon />
        </Pagination.Next>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
);

export const SimplePrevNext = {
  args: defaultArgs,
  render: SimplePrevNextTemplate,
};

/* -------------------------------------------------------------------------------------------------
 * With Summary
 * -----------------------------------------------------------------------------------------------*/
const WithSummaryTemplate = (props: PaginationProps) => (
  <Box minW="640px" w="full">
    <Pagination {...props}>
      <Pagination.Summary>Showing 1-10 of 120 results</Pagination.Summary>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous>
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link isActive>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>10</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>11</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>12</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next>
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  </Box>
);

export const WithSummary = {
  args: defaultArgs,
  render: WithSummaryTemplate,
};

/* -------------------------------------------------------------------------------------------------
 * Custom Icons
 * -----------------------------------------------------------------------------------------------*/
const CustomIconsTemplate = (props: PaginationProps) => (
  <Pagination {...props}>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Previous>
          <Pagination.PreviousIcon>
            <Icon icon="gravity-ui:arrow-left" />
          </Pagination.PreviousIcon>
          <span>Back</span>
        </Pagination.Previous>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link isActive>1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Next>
          <span>Forward</span>
          <Pagination.NextIcon>
            <Icon icon="gravity-ui:arrow-right" />
          </Pagination.NextIcon>
        </Pagination.Next>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
);

export const CustomIcons = {
  args: defaultArgs,
  render: CustomIconsTemplate,
};

/* -------------------------------------------------------------------------------------------------
 * Controlled (with state management)
 * -----------------------------------------------------------------------------------------------*/
const ControlledTemplate = (props: PaginationProps) => {
  const [page, setPage] = React.useState(1);
  const totalPages = 12;
  const itemsPerPage = 10;
  const totalItems = 120;

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (page > 3) {
        pages.push("ellipsis");
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (page < totalPages - 2) {
        pages.push("ellipsis");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <Box minW="640px" w="full">
      <Pagination {...props}>
        <Pagination.Summary>
          Showing {startItem}-{endItem} of {totalItems} results
        </Pagination.Summary>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {getPageNumbers().map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item key={`ellipsis-${i}`}>
                <Pagination.Ellipsis />
              </Pagination.Item>
            ) : (
              <Pagination.Item key={p}>
                <Pagination.Link isActive={p === page} onClick={() => setPage(p)}>
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ),
          )}
          <Pagination.Item>
            <Pagination.Next disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </Box>
  );
};

export const Controlled = {
  args: defaultArgs,
  render: ControlledTemplate,
};

/* -------------------------------------------------------------------------------------------------
 * Disabled
 * -----------------------------------------------------------------------------------------------*/
const DisabledTemplate = (props: PaginationProps) => (
  <Pagination {...props}>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Previous disabled>
          <Pagination.PreviousIcon />
          <span>Previous</span>
        </Pagination.Previous>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link isActive>1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Next>
          <span>Next</span>
          <Pagination.NextIcon />
        </Pagination.Next>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
);

export const Disabled = {
  args: defaultArgs,
  render: DisabledTemplate,
};

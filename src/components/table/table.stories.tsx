import type {Meta, StoryObj} from "@storybook/react";
import {Icon} from "@iconify/react";
import React from "react";

import {Box, Flex, Text} from "@chakra-ui/react";

import {Avatar} from "../avatar";
import {Button} from "../button";
import {Chip} from "../chip";
import {Spinner} from "../spinner";

import {Table} from "./index";

export default {
  component: Table,
  parameters: {
    layout: "centered",
  },
  title: "Components/Data Display/Table",
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

/* -------------------------------------------------------------------------------------------------
 * Sample Data
 * -----------------------------------------------------------------------------------------------*/
interface User {
  id: number;
  name: string;
  image_url: string;
  role: string;
  status: "Active" | "Inactive" | "On Leave";
  email: string;
}

const users: User[] = [
  {
    email: "kate@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
    id: 4586932,
    name: "Kate Moore",
    role: "Chief Executive Officer",
    status: "Active",
  },
  {
    email: "john@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
    id: 5273849,
    name: "John Smith",
    role: "Chief Technology Officer",
    status: "Active",
  },
  {
    email: "sara@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
    id: 7492836,
    name: "Sara Johnson",
    role: "Chief Marketing Officer",
    status: "On Leave",
  },
  {
    email: "michael@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
    id: 8293746,
    name: "Michael Brown",
    role: "Chief Financial Officer",
    status: "Active",
  },
  {
    email: "emily@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg",
    id: 1234567,
    name: "Emily Davis",
    role: "Product Manager",
    status: "Inactive",
  },
  {
    email: "davis@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/black.jpg",
    id: 9876543,
    name: "Davis Wilson",
    role: "Lead Designer",
    status: "Active",
  },
  {
    email: "olivia@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
    id: 3456789,
    name: "Olivia Martinez",
    role: "Frontend Engineer",
    status: "Active",
  },
  {
    email: "james@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
    id: 4567890,
    name: "James Taylor",
    role: "Backend Engineer",
    status: "Active",
  },
  {
    email: "sophia@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
    id: 5678901,
    name: "Sophia Anderson",
    role: "QA Engineer",
    status: "On Leave",
  },
  {
    email: "liam@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
    id: 6789012,
    name: "Liam Thomas",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    email: "ava@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg",
    id: 7890123,
    name: "Ava Jackson",
    role: "Data Analyst",
    status: "Inactive",
  },
  {
    email: "noah@acme.com",
    image_url: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/black.jpg",
    id: 8901234,
    name: "Noah White",
    role: "Security Engineer",
    status: "Active",
  },
];

/* -------------------------------------------------------------------------------------------------
 * Wrapper
 * -----------------------------------------------------------------------------------------------*/
const Wrapper = ({children}: {children: React.ReactNode}) => (
  <Box width="full" maxW="4xl">{children}</Box>
);

/* -------------------------------------------------------------------------------------------------
 * Pagination Helpers
 * -----------------------------------------------------------------------------------------------*/
const ROWS_PER_PAGE = 4;

function usePagination<T>(items: T[], rowsPerPage = ROWS_PER_PAGE) {
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(items.length / rowsPerPage);

  const paginatedItems = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;

    return items.slice(start, start + rowsPerPage);
  }, [items, page, rowsPerPage]);

  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, items.length);

  return {end, page, paginatedItems, setPage, start, total: items.length, totalPages};
}

function TablePaginationFooter({pagination}: {pagination: ReturnType<typeof usePagination>}) {
  const {end, page, setPage, start, total, totalPages} = pagination;

  return (
    <Flex align="center" justify="between" px="4" py="2" data-slot="table-pagination">
      <Text fontSize="sm" color="fg.muted">
        {start} to {end} of {total} results
      </Text>
      <Flex align="center" gap="1">
        <Button
          size="sm"
          variant="ghost"
          disabled={page === 1}
          onClick={() => setPage((p: number) => Math.max(1, p - 1))}
        >
          <Icon style={{width: "1rem", height: "1rem"}} icon="gravity-ui:chevron-left" />
          Prev
        </Button>
        {Array.from({length: totalPages}, (_, i) => i + 1).map((p) => (
          <Button
            key={p}
            size="sm"
            variant={p === page ? "solid" : "ghost"}
            onClick={() => setPage(p)}
          >
            {p}
          </Button>
        ))}
        <Button
          size="sm"
          variant="ghost"
          disabled={page === totalPages}
          onClick={() => setPage((p: number) => Math.min(totalPages, p + 1))}
        >
          Next
          <Icon style={{width: "1rem", height: "1rem"}} icon="gravity-ui:chevron-right" />
        </Button>
      </Flex>
    </Flex>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Stories
 * -----------------------------------------------------------------------------------------------*/

const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
  Active: "success",
  Inactive: "danger",
  "On Leave": "warning",
};

/**
 * Default table with custom cells: avatars, chips, action buttons, and sortable columns.
 */
export const Default: Story = {
  render: () => {
    const pagination = usePagination(users);

    return (
      <Wrapper>
        <Table>
          <Table.ScrollContainer>
            <Table.Header>
              <Table.Row>
                <Table.Column>Worker ID</Table.Column>
                <Table.Column>Member</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column textAlign="end">Actions</Table.Column>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {pagination.paginatedItems.map((user) => (
                <Table.Row key={user.id}>
                  <Table.Cell fontWeight="medium">
                    <Flex align="center" gap="2">
                      #{user.id.toString()}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>
                    <Flex align="center" gap="3">
                      <Avatar size="sm">
                        <Avatar.Image src={user.image_url} />
                        <Avatar.Fallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar.Fallback>
                      </Avatar>
                      <Flex direction="column">
                        <Text fontSize="xs">{user.name}</Text>
                        <Text fontSize="xs" color="fg.muted">{user.email}</Text>
                      </Flex>
                    </Flex>
                  </Table.Cell>
                  <Table.Cell minW="52">{user.role}</Table.Cell>
                  <Table.Cell minW="25">
                    <Chip color={statusColorMap[user.status]} size="sm" variant="subtle">
                      {user.status}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <Flex align="center" gap="1">
                      <Button isIconOnly size="sm" variant="ghost">
                        <Icon style={{width: "1rem", height: "1rem"}} icon="gravity-ui:eye" />
                      </Button>
                      <Button isIconOnly size="sm" variant="ghost">
                        <Icon style={{width: "1rem", height: "1rem"}} icon="gravity-ui:pencil" />
                      </Button>
                      <Button isIconOnly size="sm" variant="ghost">
                        <Icon style={{width: "1rem", height: "1rem"}} icon="gravity-ui:trash-bin" />
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.ScrollContainer>
          <Table.Footer>
            <TablePaginationFooter pagination={pagination} />
          </Table.Footer>
        </Table>
      </Wrapper>
    );
  },
};

/**
 * Empty state.
 */
export const EmptyStateDemo: Story = {
  render: () => (
    <Wrapper>
      <Table minH="200px" minW="600px">
        <Table.ScrollContainer>
          <Table.Header>
            <Table.Row>
              <Table.Column>Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Email</Table.Column>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell colSpan={4}>
                <Flex height="full" width="full" direction="column" align="center" justify="center" gap="4" py="8" textAlign="center">
                  <Icon style={{width: "1.5rem", height: "1.5rem", color: "var(--chakra-colors-fg-muted)"}} icon="gravity-ui:tray" />
                  <Text fontSize="sm" color="fg.muted">No results found</Text>
                </Flex>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.ScrollContainer>
      </Table>
    </Wrapper>
  ),
};

/**
 * Dynamic collection rendering.
 */
export const DynamicCollection: Story = {
  render: () => {
    const columns = [
      {id: "name" as const, name: "Name"},
      {id: "role" as const, name: "Role"},
      {id: "status" as const, name: "Status"},
      {id: "email" as const, name: "Email"},
    ];
    const pagination = usePagination(users);

    return (
      <Wrapper>
        <Table>
          <Table.ScrollContainer>
            <Table.Header>
              <Table.Row>
                {columns.map((column) => (
                  <Table.Column key={column.id}>{column.name}</Table.Column>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {pagination.paginatedItems.map((user) => (
                <Table.Row key={user.id}>
                  {columns.map((column) => (
                    <Table.Cell key={column.id}>{user[column.id]}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.ScrollContainer>
          <Table.Footer>
            <TablePaginationFooter pagination={pagination} />
          </Table.Footer>
        </Table>
      </Wrapper>
    );
  },
};

/**
 * Async loading with scroll to load more rows.
 */
const ITEMS_PER_PAGE = 6;

function useAsyncUsers() {
  const [items, setItems] = React.useState<User[]>(() => users.slice(0, ITEMS_PER_PAGE));
  const [isLoading, setIsLoading] = React.useState(false);
  const isLoadingRef = React.useRef(false);
  const hasMore = items.length < users.length;

  const loadMore = React.useCallback(() => {
    if (!hasMore || isLoadingRef.current) return;
    isLoadingRef.current = true;
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setItems((prev) => users.slice(0, prev.length + ITEMS_PER_PAGE));
      setIsLoading(false);
      requestAnimationFrame(() => {
        isLoadingRef.current = false;
      });
    }, 1500);
  }, [hasMore]);

  return {hasMore, isLoading, items, loadMore};
}

export const AsyncLoading: Story = {
  render: () => {
    const {hasMore, isLoading, items, loadMore} = useAsyncUsers();

    return (
      <Wrapper>
        <Table>
          <Table.ScrollContainer style={{height: "280px", overflowY: "auto"}}>
            <Table.Header style={{position: "sticky", top: 0, zIndex: 10, background: "var(--chakra-colors-bg-muted)"}}>
              <Table.Row>
                <Table.Column>Name</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Email</Table.Column>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((user) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>
                    <Chip color={statusColorMap[user.status]} size="sm" variant="subtle">
                      {user.status}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                </Table.Row>
              ))}
              {hasMore && (
                <Table.Row>
                  <Table.Cell colSpan={4}>
                    <Flex align="center" justify="center" py="4">
                      {isLoading ? (
                        <Spinner size="md" />
                      ) : (
                        <Button size="sm" variant="ghost" onClick={loadMore}>
                          Load more
                        </Button>
                      )}
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.ScrollContainer>
        </Table>
      </Wrapper>
    );
  },
};

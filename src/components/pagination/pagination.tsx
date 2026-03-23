"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Button, Pagination as ChakraPagination, chakra} from "@chakra-ui/react";
import React from "react";

import {IconChevronLeft, IconChevronRight} from "../icons";

/* -------------------------------------------------------------------------------------------------
 * Pagination Root
 * -----------------------------------------------------------------------------------------------*/
interface PaginationRootProps extends ComponentPropsWithRef<typeof ChakraPagination.Root> {
  className?: string;
  children: React.ReactNode;
}

const PaginationRoot = ({children, className, ...props}: PaginationRootProps) => {
  return (
    <ChakraPagination.Root
      alignItems="center"
      className={className}
      data-slot="pagination"
      display="flex"
      flexDir={{base: "column", sm: "row"}}
      gap="4"
      justifyContent="space-between"
      w="100%"
      {...props}
    >
      {children}
    </ChakraPagination.Root>
  );
};

PaginationRoot.displayName = "Pagination";

/* -------------------------------------------------------------------------------------------------
 * Pagination Summary
 * -----------------------------------------------------------------------------------------------*/
interface PaginationSummaryProps extends ComponentPropsWithRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

const PaginationSummary = ({children, className, ...props}: PaginationSummaryProps) => {
  return (
    <Box
      alignItems="center"
      alignSelf={{base: "flex-start", sm: "center"}}
      className={className}
      color="fg.muted"
      data-slot="pagination-summary"
      display="flex"
      fontSize="sm"
      gap="2"
      {...props}
    >
      {children}
    </Box>
  );
};

PaginationSummary.displayName = "Pagination.Summary";

/* -------------------------------------------------------------------------------------------------
 * Pagination Content
 * -----------------------------------------------------------------------------------------------*/
interface PaginationContentProps extends ComponentPropsWithRef<"ul"> {
  className?: string;
  children: React.ReactNode;
}

const PaginationContent = ({children, className, ...props}: PaginationContentProps) => {
  return (
    <chakra.ul
      alignItems="center"
      alignSelf={{base: "flex-start", sm: "center"}}
      className={className}
      data-slot="pagination-content"
      display="flex"
      gap="1"
      {...props}
    >
      {children}
    </chakra.ul>
  );
};

PaginationContent.displayName = "Pagination.Content";

/* -------------------------------------------------------------------------------------------------
 * Pagination Item
 * -----------------------------------------------------------------------------------------------*/
interface PaginationItemProps extends ComponentPropsWithRef<"li"> {
  className?: string;
  children: React.ReactNode;
}

const PaginationItem = ({children, className, ...props}: PaginationItemProps) => {
  return (
    <chakra.li className={className} data-slot="pagination-item" display="inline-flex" {...props}>
      {children}
    </chakra.li>
  );
};

PaginationItem.displayName = "Pagination.Item";

/* -------------------------------------------------------------------------------------------------
 * Pagination Link
 * -----------------------------------------------------------------------------------------------*/
interface PaginationLinkProps extends ComponentPropsWithRef<typeof Button> {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const PaginationLink = ({children, className, isActive, ...props}: PaginationLinkProps) => {
  return (
    <Button
      aria-current={isActive ? "page" : undefined}
      boxSize={{base: "9", md: "8"}}
      className={className}
      data-active={isActive ? "true" : undefined}
      data-slot="pagination-link"
      minW="auto"
      px="0"
      size="sm"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
};

PaginationLink.displayName = "Pagination.Link";

/* -------------------------------------------------------------------------------------------------
 * Pagination Previous
 * -----------------------------------------------------------------------------------------------*/
interface PaginationPreviousProps extends ComponentPropsWithRef<
  typeof ChakraPagination.PrevTrigger
> {
  className?: string;
  children: React.ReactNode;
}

const PaginationPrevious = ({children, className, ...props}: PaginationPreviousProps) => {
  return (
    <ChakraPagination.PrevTrigger className={className} data-slot="pagination-previous" {...props}>
      {children}
    </ChakraPagination.PrevTrigger>
  );
};

PaginationPrevious.displayName = "Pagination.Previous";

/* -------------------------------------------------------------------------------------------------
 * Pagination Previous Icon
 * -----------------------------------------------------------------------------------------------*/
interface PaginationPreviousIconProps extends Omit<ComponentPropsWithRef<"span">, "children"> {
  children?: React.ReactNode;
}

const PaginationPreviousIcon = ({children, className, ...props}: PaginationPreviousIconProps) => {
  return (
    <Box
      aria-hidden="true"
      as="span"
      className={className}
      data-slot="pagination-previous-icon"
      {...props}
    >
      {children ?? <IconChevronLeft />}
    </Box>
  );
};

PaginationPreviousIcon.displayName = "Pagination.PreviousIcon";

/* -------------------------------------------------------------------------------------------------
 * Pagination Next
 * -----------------------------------------------------------------------------------------------*/
interface PaginationNextProps extends ComponentPropsWithRef<typeof ChakraPagination.NextTrigger> {
  className?: string;
  children: React.ReactNode;
}

const PaginationNext = ({children, className, ...props}: PaginationNextProps) => {
  return (
    <ChakraPagination.NextTrigger className={className} data-slot="pagination-next" {...props}>
      {children}
    </ChakraPagination.NextTrigger>
  );
};

PaginationNext.displayName = "Pagination.Next";

/* -------------------------------------------------------------------------------------------------
 * Pagination Next Icon
 * -----------------------------------------------------------------------------------------------*/
interface PaginationNextIconProps extends Omit<ComponentPropsWithRef<"span">, "children"> {
  children?: React.ReactNode;
}

const PaginationNextIcon = ({children, className, ...props}: PaginationNextIconProps) => {
  return (
    <Box
      aria-hidden="true"
      as="span"
      className={className}
      data-slot="pagination-next-icon"
      {...props}
    >
      {children ?? <IconChevronRight />}
    </Box>
  );
};

PaginationNextIcon.displayName = "Pagination.NextIcon";

/* -------------------------------------------------------------------------------------------------
 * Pagination Ellipsis
 * -----------------------------------------------------------------------------------------------*/
interface PaginationEllipsisProps extends ComponentPropsWithRef<"span"> {
  className?: string;
}

const PaginationEllipsis = ({className, ...props}: PaginationEllipsisProps) => {
  return (
    <Box
      alignItems="center"
      aria-hidden="true"
      as="span"
      boxSize={{base: "9", md: "8"}}
      className={className}
      color="fg.muted"
      data-slot="pagination-ellipsis"
      display="inline-flex"
      fontSize="sm"
      justifyContent="center"
      userSelect="none"
      {...props}
    >
      &hellip;
    </Box>
  );
};

PaginationEllipsis.displayName = "Pagination.Ellipsis";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  PaginationRoot,
  PaginationSummary,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationPreviousIcon,
  PaginationNext,
  PaginationNextIcon,
  PaginationEllipsis,
};

export type {
  PaginationRootProps,
  PaginationSummaryProps,
  PaginationContentProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationPreviousProps,
  PaginationPreviousIconProps,
  PaginationNextProps,
  PaginationNextIconProps,
  PaginationEllipsisProps,
};

"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Pagination as ChakraPagination, chakra} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
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
      className={className}
      data-slot="pagination"
      display="flex"
      w="100%"
      flexDir={{base: "column", sm: "row"}}
      alignItems="center"
      justifyContent="space-between"
      gap="4"
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
      className={className}
      data-slot="pagination-summary"
      display="flex"
      alignItems="center"
      gap="2"
      alignSelf={{base: "flex-start", sm: "center"}}
      fontSize="sm"
      color="fg.muted"
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
      className={className}
      data-slot="pagination-content"
      display="flex"
      alignItems="center"
      gap="1"
      alignSelf={{base: "flex-start", sm: "center"}}
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
      className={className}
      data-active={isActive ? "true" : undefined}
      data-slot="pagination-link"
      variant="ghost"
      size="sm"
      boxSize={{base: "9", md: "8"}}
      px="0"
      minW="auto"
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
interface PaginationPreviousProps extends ComponentPropsWithRef<typeof ChakraPagination.PrevTrigger> {
  className?: string;
  children: React.ReactNode;
}

const PaginationPrevious = ({children, className, ...props}: PaginationPreviousProps) => {
  return (
    <ChakraPagination.PrevTrigger
      className={className}
      data-slot="pagination-previous"
      {...props}
    >
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
    <Box as="span" aria-hidden="true" className={className} data-slot="pagination-previous-icon" {...props}>
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
    <Box as="span" aria-hidden="true" className={className} data-slot="pagination-next-icon" {...props}>
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
      as="span"
      aria-hidden="true"
      className={className}
      data-slot="pagination-ellipsis"
      display="inline-flex"
      boxSize={{base: "9", md: "8"}}
      alignItems="center"
      justifyContent="center"
      fontSize="sm"
      color="fg.muted"
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

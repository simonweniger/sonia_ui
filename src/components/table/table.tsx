"use client";

import type {HTMLChakraProps} from "@chakra-ui/react";
import type {ComponentPropsWithRef} from "react";

import {Box, chakra} from "@chakra-ui/react";
import React, {createContext, useContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * Table Context — variant propagation
 * -----------------------------------------------------------------------------------------------*/
type TableVariant = "primary" | "secondary";

type TableContextValue = {
  variant: TableVariant;
};

const TableContext = createContext<TableContextValue>({variant: "primary"});

/* -------------------------------------------------------------------------------------------------
 * Table Root
 * -----------------------------------------------------------------------------------------------*/
interface TableRootProps extends HTMLChakraProps<"div"> {
  children?: React.ReactNode;
  variant?: TableVariant;
}

const TableRoot = React.forwardRef<HTMLDivElement, TableRootProps>(
  ({children, className, variant = "primary", ...props}, ref) => {
    return (
      <TableContext value={{variant}}>
        <Box
          ref={ref}
          className={className}
          data-slot="table"
          data-variant={variant}
          display="grid"
          overflow="clip"
          position="relative"
          w="100%"
          css={{
            gridTemplateColumns: "minmax(0, 1fr)",
            ...(variant === "primary"
              ? {
                  bg: "surface.secondary",
                  paddingInline: "0.25rem",
                  paddingBottom: "0.25rem",
                  borderRadius: "calc(var(--chakra-radii-2xl) * 1.25)",
                }
              : {}),
          }}
          {...props}
        >
          {children}
        </Box>
      </TableContext>
    );
  },
);

TableRoot.displayName = "Table";

/* -------------------------------------------------------------------------------------------------
 * Table Scroll Container
 * -----------------------------------------------------------------------------------------------*/
interface TableScrollContainerProps extends ComponentPropsWithRef<"div"> {}

const TableScrollContainer = React.forwardRef<HTMLDivElement, TableScrollContainerProps>(
  ({className, ...props}, ref) => {
    return (
      <Box
        ref={ref}
        className={className}
        data-slot="table-scroll-container"
        overflowX="auto"
        css={{
          scrollbarWidth: "thin",
          scrollbarColor: "oklch(0% 0 0 / 0.15) transparent",
          "&::-webkit-scrollbar": {width: "6px"},
          "&::-webkit-scrollbar-track": {background: "transparent"},
          "&::-webkit-scrollbar-thumb": {
            background: "oklch(0% 0 0 / 0.15)",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "oklch(0% 0 0 / 0.25)",
          },
        }}
        {...props}
      />
    );
  },
);

TableScrollContainer.displayName = "Table.ScrollContainer";

/* -------------------------------------------------------------------------------------------------
 * Table Content
 * -----------------------------------------------------------------------------------------------*/
interface TableContentProps extends ComponentPropsWithRef<"table"> {
  className?: string;
}

function TableContent({className, ...props}: TableContentProps) {
  return (
    <chakra.table
      borderCollapse="separate"
      borderSpacing="0"
      className={className}
      data-slot="table-content"
      fontSize="sm"
      overflow="clip"
      w="100%"
      {...props}
    />
  );
}

(TableContent as React.FC).displayName = "Table.Content";

/* -------------------------------------------------------------------------------------------------
 * Table Header
 * -----------------------------------------------------------------------------------------------*/
interface TableHeaderProps extends HTMLChakraProps<"thead"> {}

function TableHeader({className, ...props}: TableHeaderProps) {
  const {variant} = useContext(TableContext);

  return (
    <chakra.thead
      className={className}
      data-slot="table-header"
      css={{
        borderBottom: "1px solid",
        borderColor: "separator/50",
        bg: "surface.secondary",
        ...(variant === "secondary"
          ? {
              borderBottom: "none",
              bg: "transparent",
            }
          : {}),
      }}
      {...props}
    />
  );
}

(TableHeader as React.FC).displayName = "Table.Header";

/* -------------------------------------------------------------------------------------------------
 * Table Column
 * -----------------------------------------------------------------------------------------------*/
interface TableColumnProps extends HTMLChakraProps<"th"> {}

const TableColumn = React.forwardRef<HTMLTableCellElement, TableColumnProps>(
  ({className, ...props}, ref) => {
    const {variant} = useContext(TableContext);

    return (
      <chakra.th
        ref={ref}
        className={className}
        color="fg.muted"
        data-slot="table-column"
        fontSize="xs"
        fontWeight="medium"
        position="relative"
        px="4"
        py="2.5"
        textAlign="left"
        css={{
          /* Column separator */
          "&::after": {
            content: '""',
            pointerEvents: "none",
            position: "absolute",
            top: "50%",
            right: 0,
            height: "1rem",
            width: "1px",
            transform: "translateY(-50%)",
            borderRadius: "1px",
            bg: "separator",
          },
          "&:last-child:not(:only-child)::after": {
            content: "none",
          },
          /* Hide separator when resizer present */
          "&:has([data-slot=table-column-resizer])::after": {
            content: "none",
          },
          /* Sortable */
          '&[data-allows-sorting="true"]': {
            cursor: "pointer",
          },
          "@media (hover: hover)": {
            '&[data-allows-sorting="true"]:hover, &[data-allows-sorting="true"][data-hovered="true"]':
              {
                color: "fg",
              },
          },
          /* Focus visible */
          '&:focus-visible, &[data-focus-visible="true"]': {
            borderRadius: "var(--chakra-radii-lg)",
            outline: "none",
            boxShadow: "inset 0 0 0 2px var(--chakra-colors-accent)",
          },
          /* Secondary variant: column cells get bg */
          ...(variant === "secondary"
            ? {
                bg: "surface.secondary",
                "&:first-child": {
                  borderTopLeftRadius: "var(--chakra-radii-2xl)",
                  borderBottomLeftRadius: "var(--chakra-radii-2xl)",
                },
                "&:last-child": {
                  borderTopRightRadius: "var(--chakra-radii-2xl)",
                  borderBottomRightRadius: "var(--chakra-radii-2xl)",
                },
              }
            : {}),
        }}
        {...props}
      />
    );
  },
);

TableColumn.displayName = "Table.Column";

/* -------------------------------------------------------------------------------------------------
 * Table Body
 * -----------------------------------------------------------------------------------------------*/
interface TableBodyProps extends HTMLChakraProps<"tbody"> {}

function TableBody({className, ...props}: TableBodyProps) {
  const {variant} = useContext(TableContext);

  return (
    <chakra.tbody
      className={className}
      data-slot="table-body"
      css={{
        /* Non-virtualized: round corners via first/last cells */
        "& tr:first-child td:first-child": {borderTopLeftRadius: "var(--chakra-radii-2xl)"},
        "& tr:first-child td:last-child": {borderTopRightRadius: "var(--chakra-radii-2xl)"},
        "& tr:last-child td:first-child": {borderBottomLeftRadius: "var(--chakra-radii-2xl)"},
        "& tr:last-child td:last-child": {borderBottomRightRadius: "var(--chakra-radii-2xl)"},
        /* Virtualized: body gets rounding */
        "&:not(tbody)": {
          position: "relative",
          height: "100%",
          overflow: "clip",
          borderRadius: "var(--chakra-radii-2xl)",
        },
        /* Secondary variant: no rounding, no shadow */
        ...(variant === "secondary"
          ? {
              boxShadow: "none",
              "& tr:first-child td:first-child, & tr:first-child td:last-child, & tr:last-child td:first-child, & tr:last-child td:last-child":
                {
                  borderRadius: 0,
                },
              "&:not(tbody)": {
                overflow: "visible",
                borderRadius: 0,
              },
            }
          : {}),
      }}
      {...props}
    />
  );
}

(TableBody as React.FC).displayName = "Table.Body";

/* -------------------------------------------------------------------------------------------------
 * Table Row
 * -----------------------------------------------------------------------------------------------*/
interface TableRowProps extends HTMLChakraProps<"tr"> {}

function TableRow({className, ...props}: TableRowProps) {
  const {variant} = useContext(TableContext);

  return (
    <chakra.tr
      className={className}
      data-slot="table-row"
      h="100%"
      position="relative"
      css={{
        /* Last row: no bottom border */
        "&:last-child [data-slot=table-cell]": {
          borderBottom: "none",
        },
        /* Hover */
        "@media (hover: hover)": {
          "&:hover [data-slot=table-cell], &[data-hovered=true] [data-slot=table-cell]": {
            bg: variant === "secondary" ? "bg.muted/50" : "surface/40",
          },
        },
        /* Selected */
        '&[data-selected="true"] [data-slot=table-cell]': {
          bg: "surface/10",
        },
        /* Disabled */
        '&[aria-disabled="true"], &[data-disabled="true"]': {
          opacity: 0.5,
          cursor: "not-allowed",
          pointerEvents: "none",
        },
        /* Focus visible */
        '&:focus-visible, &[data-focus-visible="true"]': {
          outline: "none",
          boxShadow: "inset 0 0 0 2px var(--chakra-colors-accent)",
        },
        /* Dragging */
        '&[data-dragging="true"]': {
          opacity: 0.5,
        },
        /* Drop target */
        '&[data-drop-target="true"] [data-slot=table-cell]': {
          bg: "accent.subtle",
        },
        /* Secondary variant: transparent cells + different hover */
        ...(variant === "secondary"
          ? {
              "& [data-slot=table-cell]": {
                bg: "transparent",
                borderBottom: "1px solid",
                borderColor: "separator.tertiary/50",
              },
            }
          : {}),
      }}
      {...props}
    />
  );
}

(TableRow as React.FC).displayName = "Table.Row";

/* -------------------------------------------------------------------------------------------------
 * Table Cell
 * -----------------------------------------------------------------------------------------------*/
interface TableCellProps extends HTMLChakraProps<"td"> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({className, ...props}, ref) => {
    return (
      <chakra.td
        ref={ref}
        bg="surface"
        borderBottomColor="separator.tertiary/50"
        borderBottomStyle="solid"
        borderBottomWidth="1px"
        className={className}
        color="fg"
        data-slot="table-cell"
        fontSize="sm"
        h="100%"
        px="4"
        py="3"
        verticalAlign="middle"
        css={{
          /* Focus visible */
          '&:focus-visible, &[data-focus-visible="true"]': {
            borderRadius: "var(--chakra-radii-lg)",
            outline: "none",
            boxShadow: "inset 0 0 0 2px var(--chakra-colors-accent)",
          },
        }}
        {...props}
      />
    );
  },
);

TableCell.displayName = "Table.Cell";

/* -------------------------------------------------------------------------------------------------
 * Table Footer
 * -----------------------------------------------------------------------------------------------*/
interface TableFooterProps extends ComponentPropsWithRef<"div"> {
  className?: string;
}

const TableFooter = React.forwardRef<HTMLDivElement, TableFooterProps>(
  ({className, ...props}, ref) => {
    return (
      <Box
        ref={ref}
        alignItems="center"
        className={className}
        data-slot="table-footer"
        display="flex"
        px="4"
        py="2.5"
        {...props}
      />
    );
  },
);

TableFooter.displayName = "Table.Footer";

/* -------------------------------------------------------------------------------------------------
 * Table Collection (pass-through for dynamic cell rendering)
 * -----------------------------------------------------------------------------------------------*/
const TableCollection = ({children}: {children: React.ReactNode}) => <>{children}</>;

/* -------------------------------------------------------------------------------------------------
 * Table Load More Item
 * -----------------------------------------------------------------------------------------------*/
interface TableLoadMoreItemProps extends HTMLChakraProps<"tr"> {}

const TableLoadMoreItem = React.forwardRef<HTMLTableRowElement, TableLoadMoreItemProps>(
  ({className, ...props}, ref) => {
    return <chakra.tr ref={ref} className={className} data-slot="table-load-more" {...props} />;
  },
);

TableLoadMoreItem.displayName = "Table.LoadMore";

/* -------------------------------------------------------------------------------------------------
 * Table Load More Content
 * -----------------------------------------------------------------------------------------------*/
interface TableLoadMoreContentProps extends ComponentPropsWithRef<"div"> {}

const TableLoadMoreContent = React.forwardRef<HTMLDivElement, TableLoadMoreContentProps>(
  ({className, ...props}, ref) => {
    return (
      <Box
        ref={ref}
        alignItems="center"
        className={className}
        data-slot="table-load-more-content"
        display="flex"
        gap="2"
        justifyContent="center"
        py="2"
        {...props}
      />
    );
  },
);

TableLoadMoreContent.displayName = "Table.LoadMoreContent";

/* -------------------------------------------------------------------------------------------------
 * Table Resizable Container
 * -----------------------------------------------------------------------------------------------*/
interface TableResizableContainerProps extends ComponentPropsWithRef<"div"> {}

const TableResizableContainer = React.forwardRef<HTMLDivElement, TableResizableContainerProps>(
  ({className, ...props}, ref) => {
    return (
      <Box
        ref={ref}
        className={className}
        data-slot="table-resizable-container"
        overflow="auto"
        position="relative"
        {...props}
      />
    );
  },
);

TableResizableContainer.displayName = "Table.ResizableContainer";

/* -------------------------------------------------------------------------------------------------
 * Table Column Resizer
 * -----------------------------------------------------------------------------------------------*/
interface TableColumnResizerProps extends ComponentPropsWithRef<"div"> {}

const TableColumnResizer = React.forwardRef<HTMLDivElement, TableColumnResizerProps>(
  ({className, ...props}, ref) => {
    return (
      <Box
        ref={ref}
        bg="border"
        border="none"
        boxSizing="content-box"
        className={className}
        data-slot="table-column-resizer"
        h="4"
        outline="none"
        position="absolute"
        right="0"
        rounded="sm"
        top="50%"
        transform="translateY(-50%)"
        w="px"
        css={{
          translate: "50%",
          cursor: "col-resize",
          touchAction: "none",
          paddingInline: "0.5rem",
          backgroundClip: "content-box",
          '&[data-hovered="true"], &:hover': {
            height: "100%",
            width: "2px",
            bg: "accent",
          },
          '&[data-resizing="true"]': {
            height: "100%",
            width: "2px",
            bg: "accent",
          },
          '&[data-focus-visible="true"], &:focus-visible': {
            height: "100%",
            width: "2px",
            bg: "accent",
          },
        }}
        {...props}
      />
    );
  },
);

TableColumnResizer.displayName = "Table.ColumnResizer";

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {
  TableRoot,
  TableScrollContainer,
  TableContent,
  TableHeader,
  TableColumn,
  TableColumnResizer,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableCollection,
  TableLoadMoreItem,
  TableLoadMoreContent,
  TableResizableContainer,
};

export type {
  TableRootProps,
  TableScrollContainerProps,
  TableContentProps,
  TableHeaderProps,
  TableColumnProps,
  TableColumnResizerProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
  TableLoadMoreItemProps,
  TableLoadMoreContentProps,
  TableResizableContainerProps,
};

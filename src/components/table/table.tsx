"use client";

import type {ComponentPropsWithRef} from "react";

import {Box, Table as ChakraTable, chakra} from "@chakra-ui/react";
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
interface TableRootProps extends Omit<ComponentPropsWithRef<typeof ChakraTable.Root>, "variant"> {
  className?: string;
  children?: React.ReactNode;
  variant?: TableVariant;
}

const TableRoot = React.forwardRef<HTMLTableElement, TableRootProps>(
  ({children, className, variant = "primary", ...props}, ref) => {
    return (
      <TableContext value={{variant}}>
        <ChakraTable.Root
          ref={ref}
          className={className}
          data-slot="table"
          data-variant={variant}
          position="relative"
          display="grid"
          w="100%"
          overflow="clip"
          css={{
            gridTemplateColumns: "minmax(0, 1fr)",
            ...(variant === "primary"
              ? {
                  bg: "bg.muted",
                  paddingInline: "0.25rem",
                  paddingBottom: "0.25rem",
                  borderRadius: "calc(var(--chakra-radii-2xl) * 1.25)",
                }
              : {}),
          }}
          {...props}
        >
          {children}
        </ChakraTable.Root>
      </TableContext>
    );
  },
);

TableRoot.displayName = "Table";

/* -------------------------------------------------------------------------------------------------
 * Table Scroll Container
 * -----------------------------------------------------------------------------------------------*/
interface TableScrollContainerProps extends ComponentPropsWithRef<typeof ChakraTable.ScrollArea> {}

const TableScrollContainer = React.forwardRef<HTMLDivElement, TableScrollContainerProps>(
  ({className, ...props}, ref) => {
    return (
      <ChakraTable.ScrollArea
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
      className={className}
      data-slot="table-content"
      w="100%"
      borderCollapse="separate"
      borderSpacing="0"
      fontSize="sm"
      overflow="clip"
      {...props}
    />
  );
}

(TableContent as React.FC).displayName = "Table.Content";

/* -------------------------------------------------------------------------------------------------
 * Table Header
 * -----------------------------------------------------------------------------------------------*/
interface TableHeaderProps extends ComponentPropsWithRef<typeof ChakraTable.Header> {}

function TableHeader({className, ...props}: TableHeaderProps) {
  const {variant} = useContext(TableContext);

  return (
    <ChakraTable.Header
      className={className}
      data-slot="table-header"
      css={{
        borderBottom: "1px solid",
        borderColor: "border/50",
        bg: "bg.muted",
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
interface TableColumnProps extends ComponentPropsWithRef<typeof ChakraTable.ColumnHeader> {}

const TableColumn = React.forwardRef<HTMLTableCellElement, TableColumnProps>(
  ({className, ...props}, ref) => {
    const {variant} = useContext(TableContext);

    return (
      <ChakraTable.ColumnHeader
        ref={ref}
        className={className}
        data-slot="table-column"
        position="relative"
        px="4"
        py="2.5"
        textAlign="left"
        fontSize="xs"
        fontWeight="medium"
        color="fg.muted"
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
            bg: "border",
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
          '@media (hover: hover)': {
            '&[data-allows-sorting="true"]:hover, &[data-allows-sorting="true"][data-hovered="true"]': {
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
                bg: "bg.muted",
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
interface TableBodyProps extends ComponentPropsWithRef<typeof ChakraTable.Body> {}

function TableBody({className, ...props}: TableBodyProps) {
  const {variant} = useContext(TableContext);

  return (
    <ChakraTable.Body
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
              "& tr:first-child td:first-child, & tr:first-child td:last-child, & tr:last-child td:first-child, & tr:last-child td:last-child": {
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
interface TableRowProps extends ComponentPropsWithRef<typeof ChakraTable.Row> {}

function TableRow({className, ...props}: TableRowProps) {
  const {variant} = useContext(TableContext);

  return (
    <ChakraTable.Row
      className={className}
      data-slot="table-row"
      position="relative"
      h="100%"
      css={{
        /* Last row: no bottom border */
        "&:last-child [data-slot=table-cell]": {
          borderBottom: "none",
        },
        /* Hover */
        "@media (hover: hover)": {
          "&:hover [data-slot=table-cell], &[data-hovered=true] [data-slot=table-cell]": {
            bg: variant === "secondary" ? "bg.subtle/50" : "surface/40",
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
                borderColor: "border/30",
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
interface TableCellProps extends ComponentPropsWithRef<typeof ChakraTable.Cell> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({className, ...props}, ref) => {
    return (
      <ChakraTable.Cell
        ref={ref}
        className={className}
        data-slot="table-cell"
        h="100%"
        bg="surface"
        px="4"
        py="3"
        verticalAlign="middle"
        fontSize="sm"
        color="fg"
        borderBottom="1px solid"
        css={{
          borderColor: "border/30",
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
        className={className}
        data-slot="table-footer"
        display="flex"
        alignItems="center"
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
interface TableLoadMoreItemProps extends ComponentPropsWithRef<typeof ChakraTable.Row> {}

const TableLoadMoreItem = React.forwardRef<HTMLTableRowElement, TableLoadMoreItemProps>(
  ({className, ...props}, ref) => {
    return (
      <ChakraTable.Row ref={ref} className={className} data-slot="table-load-more" {...props} />
    );
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
        className={className}
        data-slot="table-load-more-content"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2"
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
        position="relative"
        overflow="auto"
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
        className={className}
        data-slot="table-column-resizer"
        position="absolute"
        top="50%"
        right="0"
        h="4"
        w="px"
        transform="translateY(-50%)"
        rounded="sm"
        bg="border"
        boxSizing="content-box"
        border="none"
        outline="none"
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

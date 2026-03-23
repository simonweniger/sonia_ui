"use client";

import type {ReactNode} from "react";

import React from "react";

// Replacement stubs for removed React Aria components

/** Locale provider — use your i18n library or browser locale directly */
export const I18nProvider = ({children}: {children: ReactNode; locale?: string}) => {
  return <>{children}</>;
};

/** Router integration — use your router's Link component directly */
export const RouterProvider = ({children}: {children: ReactNode}) => {
  return <>{children}</>;
};

/** Collection helper — use array.map() with your component's items directly */
export const Collection = <T,>({
  children,
  items,
}: {
  items: Iterable<T>;
  children: (item: T) => ReactNode;
}) => {
  return <>{Array.from(items).map(children)}</>;
};

/** ListBox load more sentinel — implement infinite scroll manually */
export const ListBoxLoadMoreItem = () => null;

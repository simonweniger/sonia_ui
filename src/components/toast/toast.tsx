"use client";

import type {CreateToasterReturn, ToasterProps} from "@chakra-ui/react";

import {Toaster, createToaster} from "@chakra-ui/react";
import React from "react";

/* ------------------------------------------------------------------------------------------------
 * Toast Instance (imperative API)
 * --------------------------------------------------------------------------------------------- */
const toaster: CreateToasterReturn = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
});

/* ------------------------------------------------------------------------------------------------
 * Toast Root (place this once at the app root)
 * --------------------------------------------------------------------------------------------- */
interface ToastRootProps extends Omit<ToasterProps, "toaster" | "children"> {
  children?: ToasterProps["children"];
}

const ToastRoot = ({children, ...props}: ToastRootProps) => {
  const toasterProps = {
    toaster,
    "data-slot": "toast-root" as const,
    ...props,
    ...(children ? {children} : {}),
  };

  return <Toaster {...(toasterProps as ToasterProps)} />;
};

ToastRoot.displayName = "ToastRoot";

/* ------------------------------------------------------------------------------------------------
 * Exports
 * --------------------------------------------------------------------------------------------- */
export {toaster, ToastRoot};

export type {ToastRootProps};

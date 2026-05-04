"use client";

import type {ReactNode} from "react";

import {DEFAULT_TOAST_TIMEOUT} from "./constants";
import {toaster} from "./toast";

/* ------------------------------------------------------------------------------------------------
 * Toast Content Value
 * --------------------------------------------------------------------------------------------- */

export interface ToastContentValue {
  indicator?: ReactNode | undefined;
  title?: ReactNode | undefined;
  description?: ReactNode | undefined;
  variant?: "default" | "accent" | "success" | "warning" | "danger" | undefined;
  isLoading?: boolean | undefined;
}

export interface SoniaUIToastOptions {
  description?: ReactNode;
  indicator?: ReactNode;
  variant?: ToastContentValue["variant"];
  isLoading?: boolean;
  timeout?: number;
  onClose?: () => void;
}

export interface ToastPromiseOptions<T = unknown> {
  loading: ReactNode;
  success: ((data: T) => ReactNode) | ReactNode;
  error: ((error: Error) => ReactNode) | ReactNode;
}

/* ------------------------------------------------------------------------------------------------
 * Toast function (imperative API wrapping Chakra's toaster)
 * --------------------------------------------------------------------------------------------- */

function mapVariantToType(
  variant?: string,
): "info" | "success" | "warning" | "error" | "loading" | undefined {
  switch (variant) {
    case "success":
      return "success";
    case "warning":
      return "warning";
    case "danger":
      return "error";
    case "accent":
      return "info";
    default:
      return "info";
  }
}

function createToastFunction() {
  const toastFn = (message: ReactNode, options?: SoniaUIToastOptions): string => {
    const duration = options?.timeout !== undefined ? options.timeout : DEFAULT_TOAST_TIMEOUT;

    const id = toaster.create({
      title: message as string,
      description: options?.description as string,
      type: options?.isLoading ? "loading" : mapVariantToType(options?.variant),
      duration,
      onStatusChange: (details) => {
        if (details.status === "unmounted") {
          options?.onClose?.();
        }
      },
    });

    return id ?? "";
  };

  toastFn.success = (
    message: ReactNode,
    options?: Omit<SoniaUIToastOptions, "variant">,
  ): string => {
    return toastFn(message, {...options, variant: "success"});
  };

  toastFn.danger = (message: ReactNode, options?: Omit<SoniaUIToastOptions, "variant">): string => {
    return toastFn(message, {...options, variant: "danger"});
  };

  toastFn.info = (message: ReactNode, options?: Omit<SoniaUIToastOptions, "variant">): string => {
    return toastFn(message, {...options, variant: "accent"});
  };

  toastFn.warning = (
    message: ReactNode,
    options?: Omit<SoniaUIToastOptions, "variant">,
  ): string => {
    return toastFn(message, {...options, variant: "warning"});
  };

  toastFn.promise = <T>(
    promise: Promise<T> | (() => Promise<T>),
    options: ToastPromiseOptions<T>,
  ): string => {
    const promiseFn = typeof promise === "function" ? promise() : promise;

    const id = toaster.create({
      title: options.loading as string,
      type: "loading",
      duration: Infinity,
    });

    promiseFn
      .then((data) => {
        const successMessage =
          typeof options.success === "function" ? options.success(data) : options.success;

        if (id) toaster.dismiss(id);
        toastFn.success(successMessage);
      })
      .catch((error: Error) => {
        const errorMessage =
          typeof options.error === "function" ? options.error(error) : options.error;

        if (id) toaster.dismiss(id);
        toastFn.danger(errorMessage);
      });

    return id ?? "";
  };

  toastFn.close = (key: string) => toaster.dismiss(key);
  toastFn.clear = () => toaster.dismiss();

  return toastFn;
}

export const toast = createToastFunction();

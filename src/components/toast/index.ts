import type {ComponentProps} from "react";

import {ToastRoot, toaster} from "./toast";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Toast = Object.assign(ToastRoot, {
  Root: ToastRoot,
  toaster,
});

export type Toast = {
  Props: ComponentProps<typeof ToastRoot>;
  RootProps: ComponentProps<typeof ToastRoot>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {ToastRoot, toaster};

export type {ToastRootProps} from "./toast";

/* -------------------------------------------------------------------------------------------------
 * Toast function (imperative API)
 * -----------------------------------------------------------------------------------------------*/
export {toast} from "./toast-queue";

export type {ToastContentValue, HeroUIToastOptions, ToastPromiseOptions} from "./toast-queue";

/* -------------------------------------------------------------------------------------------------
 * Constants
 * -----------------------------------------------------------------------------------------------*/
export {DEFAULT_MAX_VISIBLE_TOAST, DEFAULT_GAP, DEFAULT_TOAST_TIMEOUT} from "./constants";

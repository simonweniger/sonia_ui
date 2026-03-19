import type {ComponentProps} from "react";

import {
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogIcon,
  AlertDialogRoot,
  AlertDialogTrigger,
} from "./alert-dialog";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const AlertDialog = Object.assign(AlertDialogRoot, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Backdrop: AlertDialogBackdrop,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Heading: AlertDialogHeading,
  Body: AlertDialogBody,
  Footer: AlertDialogFooter,
  Icon: AlertDialogIcon,
  CloseTrigger: AlertDialogCloseTrigger,
});

export type AlertDialog = {
  Props: ComponentProps<typeof AlertDialogRoot>;
  RootProps: ComponentProps<typeof AlertDialogRoot>;
  TriggerProps: ComponentProps<typeof AlertDialogTrigger>;
  BackdropProps: ComponentProps<typeof AlertDialogBackdrop>;
  ContentProps: ComponentProps<typeof AlertDialogContent>;
  HeaderProps: ComponentProps<typeof AlertDialogHeader>;
  HeadingProps: ComponentProps<typeof AlertDialogHeading>;
  BodyProps: ComponentProps<typeof AlertDialogBody>;
  FooterProps: ComponentProps<typeof AlertDialogFooter>;
  IconProps: ComponentProps<typeof AlertDialogIcon>;
  CloseTriggerProps: ComponentProps<typeof AlertDialogCloseTrigger>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogIcon,
  AlertDialogCloseTrigger,
};

export type {
  AlertDialogRootProps,
  AlertDialogRootProps as AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogBackdropProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogHeadingProps,
  AlertDialogBodyProps,
  AlertDialogFooterProps,
  AlertDialogIconProps,
  AlertDialogCloseTriggerProps,
} from "./alert-dialog";

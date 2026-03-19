import type {ComponentProps} from "react";

import {
  ModalBackdrop,
  ModalBody,
  ModalCloseTrigger,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalIcon,
  ModalRoot,
  ModalTrigger,
} from "./modal";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Modal = Object.assign(ModalRoot, {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Backdrop: ModalBackdrop,
  Content: ModalContent,
  Header: ModalHeader,
  Icon: ModalIcon,
  Heading: ModalHeading,
  Description: ModalDescription,
  Body: ModalBody,
  Footer: ModalFooter,
  CloseTrigger: ModalCloseTrigger,
});

export type Modal = {
  Props: ComponentProps<typeof ModalRoot>;
  RootProps: ComponentProps<typeof ModalRoot>;
  TriggerProps: ComponentProps<typeof ModalTrigger>;
  BackdropProps: ComponentProps<typeof ModalBackdrop>;
  ContentProps: ComponentProps<typeof ModalContent>;
  HeaderProps: ComponentProps<typeof ModalHeader>;
  IconProps: ComponentProps<typeof ModalIcon>;
  HeadingProps: ComponentProps<typeof ModalHeading>;
  DescriptionProps: ComponentProps<typeof ModalDescription>;
  BodyProps: ComponentProps<typeof ModalBody>;
  FooterProps: ComponentProps<typeof ModalFooter>;
  CloseTriggerProps: ComponentProps<typeof ModalCloseTrigger>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {
  ModalRoot,
  ModalTrigger,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalIcon,
  ModalHeading,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalCloseTrigger,
};

export type {
  ModalRootProps,
  ModalRootProps as ModalProps,
  ModalTriggerProps,
  ModalBackdropProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalIconProps,
  ModalHeadingProps,
  ModalDescriptionProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseTriggerProps,
} from "./modal";

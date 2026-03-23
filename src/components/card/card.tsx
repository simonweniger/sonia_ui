"use client";

import type {SystemStyleObject} from "@chakra-ui/react";
import type {ComponentPropsWithRef} from "react";

import {Card as ChakraCard} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Variant Style Maps
 * -----------------------------------------------------------------------------------------------*/
type CardVariant = "default" | "secondary" | "tertiary" | "transparent";

const cardVariantStyles: Record<CardVariant, SystemStyleObject> = {
  default: {bg: "surface"},
  secondary: {bg: "bg.muted"},
  tertiary: {bg: "bg.subtle"},
  transparent: {bg: "transparent", border: "none", shadow: "none"},
};

/* -------------------------------------------------------------------------------------------------
 * Card Root
 * -----------------------------------------------------------------------------------------------*/
interface CardRootProps extends Omit<ComponentPropsWithRef<typeof ChakraCard.Root>, "variant"> {
  variant?: CardVariant;
}

const CardRoot = ({children, variant = "default", ...props}: CardRootProps) => {
  const variantProps = cardVariantStyles[variant] ?? {};

  return (
    <ChakraCard.Root data-slot="card" p="4" {...variantProps} {...props}>
      {children}
    </ChakraCard.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Card Header
 * -----------------------------------------------------------------------------------------------*/
interface CardHeaderProps extends ComponentPropsWithRef<typeof ChakraCard.Header> {}

const CardHeader = ({...props}: CardHeaderProps) => {
  return <ChakraCard.Header data-slot="card-header" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Card Title
 * -----------------------------------------------------------------------------------------------*/
interface CardTitleProps extends ComponentPropsWithRef<typeof ChakraCard.Title> {}

const CardTitle = ({children, ...props}: CardTitleProps) => {
  return (
    <ChakraCard.Title data-slot="card-title" {...props}>
      {children}
    </ChakraCard.Title>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Card Description
 * -----------------------------------------------------------------------------------------------*/
interface CardDescriptionProps extends ComponentPropsWithRef<typeof ChakraCard.Description> {}

const CardDescription = ({children, ...props}: CardDescriptionProps) => {
  return (
    <ChakraCard.Description data-slot="card-description" {...props}>
      {children}
    </ChakraCard.Description>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Card Content
 * -----------------------------------------------------------------------------------------------*/
interface CardContentProps extends ComponentPropsWithRef<typeof ChakraCard.Body> {}

const CardContent = ({...props}: CardContentProps) => {
  return <ChakraCard.Body data-slot="card-content" gap="1" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Card Footer
 * -----------------------------------------------------------------------------------------------*/
interface CardFooterProps extends ComponentPropsWithRef<typeof ChakraCard.Footer> {}

const CardFooter = ({...props}: CardFooterProps) => {
  return <ChakraCard.Footer data-slot="card-footer" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};

export type {
  CardRootProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
  CardVariant,
};

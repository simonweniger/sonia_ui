"use client";

import type {SystemStyleObject} from "@chakra-ui/react";
import type {ComponentPropsWithRef} from "react";

import {Avatar as ChakraAvatar} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Size & Variant Style Maps
 * -----------------------------------------------------------------------------------------------*/
type AvatarSize = "sm" | "md" | "lg";
type AvatarVariant = "default" | "soft";
type AvatarColor = "default" | "accent" | "success" | "warning" | "danger";

const avatarSizeStyles: Record<AvatarSize, SystemStyleObject> = {
  sm: {boxSize: "8"},
  md: {},
  lg: {boxSize: "12"},
};

const fallbackSizeStyles: Record<AvatarSize, SystemStyleObject> = {
  sm: {},
  md: {},
  lg: {textStyle: "md"},
};

const fallbackColorStyles: Record<AvatarColor, SystemStyleObject> = {
  default: {color: "fg"},
  accent: {color: "accent"},
  success: {color: "success"},
  warning: {color: "warning"},
  danger: {color: "danger"},
};

const softFallbackColorStyles: Record<AvatarColor, SystemStyleObject> = {
  default: {color: "fg"},
  accent: {bg: "accent.subtle", color: "accent.fg"},
  success: {bg: "success.subtle", color: "success.fg"},
  warning: {bg: "warning.subtle", color: "warning.fg"},
  danger: {bg: "danger.subtle", color: "danger.fg"},
};

/* -------------------------------------------------------------------------------------------------
 * Avatar Context
 * -----------------------------------------------------------------------------------------------*/
type AvatarContextValue = {
  size: AvatarSize;
  variant: AvatarVariant;
  colorScheme: AvatarColor;
};

const AvatarContext = React.createContext<AvatarContextValue>({
  size: "md",
  variant: "default",
  colorScheme: "default",
});

/* -------------------------------------------------------------------------------------------------
 * Avatar Root
 * -----------------------------------------------------------------------------------------------*/
interface AvatarRootProps extends Omit<
  ComponentPropsWithRef<typeof ChakraAvatar.Root>,
  "variant" | "colorScheme"
> {
  avatarSize?: AvatarSize;
  variant?: AvatarVariant;
  colorScheme?: AvatarColor;
}

const AvatarRoot = ({
  avatarSize = "md",
  children,
  colorScheme = "default",
  variant = "default",
  ...props
}: AvatarRootProps) => {
  const sizeProps = avatarSizeStyles[avatarSize] ?? {};

  return (
    <AvatarContext.Provider value={{size: avatarSize, variant, colorScheme}}>
      <ChakraAvatar.Root
        alignItems="center"
        bg={variant === "soft" ? "transparent" : "bg"}
        boxSize="10"
        data-slot="avatar"
        display="flex"
        flexShrink={0}
        justifyContent="center"
        overflow="hidden"
        pos="relative"
        rounded="full"
        {...sizeProps}
        {...props}
      >
        {children}
      </ChakraAvatar.Root>
    </AvatarContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Avatar Image
 * -----------------------------------------------------------------------------------------------*/
interface AvatarImageProps extends ComponentPropsWithRef<typeof ChakraAvatar.Image> {}

const AvatarImage = ({...props}: AvatarImageProps) => {
  return (
    <ChakraAvatar.Image
      aspectRatio="square"
      boxSize="full"
      data-slot="avatar-image"
      inset="0"
      pos="absolute"
      css={{
        transition: "opacity 250ms",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
      }}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Avatar Fallback
 * -----------------------------------------------------------------------------------------------*/
interface AvatarFallbackProps extends ComponentPropsWithRef<typeof ChakraAvatar.Fallback> {}

const AvatarFallback = ({...props}: AvatarFallbackProps) => {
  const {colorScheme, size, variant} = React.useContext(AvatarContext);

  const colorProps =
    variant === "soft"
      ? (softFallbackColorStyles[colorScheme] ?? {})
      : (fallbackColorStyles[colorScheme] ?? {});
  const sizeProps = fallbackSizeStyles[size] ?? {};

  return (
    <ChakraAvatar.Fallback
      alignItems="center"
      bg={variant === "soft" ? undefined : "bg"}
      boxSize="full"
      css={{...colorProps, ...sizeProps}}
      data-slot="avatar-fallback"
      display="flex"
      fontWeight="medium"
      justifyContent="center"
      rounded="full"
      textStyle="sm"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {AvatarRoot, AvatarImage, AvatarFallback};

export type {
  AvatarRootProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarSize,
  AvatarVariant,
  AvatarColor,
};

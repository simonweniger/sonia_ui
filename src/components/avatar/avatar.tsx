"use client";

import type {ComponentPropsWithRef} from "react";
import type {SystemStyleObject} from "@chakra-ui/react";

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
interface AvatarRootProps extends Omit<ComponentPropsWithRef<typeof ChakraAvatar.Root>, "variant" | "colorScheme"> {
  avatarSize?: AvatarSize;
  variant?: AvatarVariant;
  colorScheme?: AvatarColor;
}

const AvatarRoot = ({
  children,
  avatarSize = "md",
  variant = "default",
  colorScheme = "default",
  ...props
}: AvatarRootProps) => {
  const sizeProps = avatarSizeStyles[avatarSize] ?? {};

  return (
    <AvatarContext.Provider value={{size: avatarSize, variant, colorScheme}}>
      <ChakraAvatar.Root
        data-slot="avatar"
        pos="relative"
        display="flex"
        boxSize="10"
        flexShrink={0}
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        rounded="full"
        bg={variant === "soft" ? "transparent" : "bg"}
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
      data-slot="avatar-image"
      pos="absolute"
      inset="0"
      aspectRatio="square"
      boxSize="full"
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
  const {size, variant, colorScheme} = React.useContext(AvatarContext);

  const colorProps =
    variant === "soft"
      ? softFallbackColorStyles[colorScheme] ?? {}
      : fallbackColorStyles[colorScheme] ?? {};
  const sizeProps = fallbackSizeStyles[size] ?? {};

  return (
    <ChakraAvatar.Fallback
      data-slot="avatar-fallback"
      display="flex"
      boxSize="full"
      alignItems="center"
      justifyContent="center"
      rounded="full"
      bg={variant === "soft" ? undefined : "bg"}
      textStyle="sm"
      fontWeight="medium"
      css={{...colorProps, ...sizeProps}}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {AvatarRoot, AvatarImage, AvatarFallback};

export type {AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarSize, AvatarVariant, AvatarColor};

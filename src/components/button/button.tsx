"use client";

import type {ComponentPropsWithRef} from "react";

import {Button as ChakraButton} from "@chakra-ui/react";
import {useContext} from "react";

import {ButtonGroupContext} from "../button-group";

/* -------------------------------------------------------------------------------------------------
 * Semantic variant aliases → recipe variant + colorPalette
 * -----------------------------------------------------------------------------------------------*/
type VariantAlias = {variant: string; colorPalette?: string};

const VARIANT_ALIASES: Record<string, VariantAlias> = {
  primary: {variant: "solid", colorPalette: "accent"},
  danger: {variant: "solid", colorPalette: "red"},
};

type RecipeVariant =
  | "solid"
  | "subtle"
  | "surface"
  | "outline"
  | "ghost"
  | "plain"
  | "glass"
  | "secondary"
  | "tertiary"
  | "danger-soft";
type AliasVariant = "primary" | "danger";
type ButtonVariant = RecipeVariant | AliasVariant;
type ButtonSize = "sm" | "md" | "lg";

/* -------------------------------------------------------------------------------------------------
 * Button Root
 * -----------------------------------------------------------------------------------------------*/
interface ButtonRootProps extends Omit<
  ComponentPropsWithRef<typeof ChakraButton>,
  "variant" | "size"
> {
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant | ComponentPropsWithRef<typeof ChakraButton>["variant"];
  size?: ButtonSize | ComponentPropsWithRef<typeof ChakraButton>["size"];
}

const ButtonRoot = ({
  children,
  colorPalette: colorPaletteProp,
  fullWidth,
  isDisabled,
  isIconOnly,
  size,
  variant,
  ...rest
}: ButtonRootProps) => {
  const buttonGroupContext = useContext(ButtonGroupContext);

  const finalSize = size ?? buttonGroupContext?.size;
  const finalVariant = variant ?? buttonGroupContext?.variant;
  const finalIsDisabled = isDisabled ?? buttonGroupContext?.isDisabled;
  const finalFullWidth = fullWidth ?? buttonGroupContext?.fullWidth;
  const finalColorPalette = colorPaletteProp ?? buttonGroupContext?.colorPalette;

  const alias = typeof finalVariant === "string" ? VARIANT_ALIASES[finalVariant] : undefined;

  const resolvedVariant = (alias?.variant ?? finalVariant) as ComponentPropsWithRef<
    typeof ChakraButton
  >["variant"];

  return (
    <ChakraButton
      colorPalette={finalColorPalette ?? alias?.colorPalette ?? "accent"}
      data-slot="button"
      data-variant={resolvedVariant}
      disabled={finalIsDisabled}
      minW={isIconOnly ? "auto" : undefined}
      px={isIconOnly ? "0" : undefined}
      size={finalSize as ComponentPropsWithRef<typeof ChakraButton>["size"]}
      variant={resolvedVariant}
      width={finalFullWidth ? "100%" : undefined}
      css={
        isIconOnly
          ? {
              aspectRatio: "1/1",
              /* Inside button groups, icon-only buttons should match group height, not be square */
              "[data-slot='button-group'] &": {
                aspectRatio: "auto",
                paddingInline: "var(--chakra-spacing-3)",
              },
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {ButtonRoot};

export type {ButtonRootProps};

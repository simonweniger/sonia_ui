import type {CSSProperties} from "react";

interface FocusRingOptions {
  isFocusVisible: boolean;
}

const baseFocusStyles: CSSProperties = {
  outlineStyle: "solid",
  outlineOffset: "2px",
  outlineColor: "#2563eb", // blue-600
};

/**
 * Returns a CSS style object for focus ring styling.
 * When `isFocusVisible` is false, the outline width is 0.
 * When `isFocusVisible` is true, the outline width is 2px.
 */
export function focusRing(options: FocusRingOptions): CSSProperties {
  return {
    ...baseFocusStyles,
    outlineWidth: options.isFocusVisible ? "2px" : "0px",
  };
}

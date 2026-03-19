"use client";

// parseColor is no longer available from react-aria-components.
// Provide a no-op placeholder that can be replaced with a proper color parsing library if needed.
export function parseColor(_value: string): unknown {
  throw new Error(
    "parseColor is no longer available. Use a color parsing library like culori or tinycolor2 instead.",
  );
}

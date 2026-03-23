// Type replacements for removed React Aria types
// These provide API-compatible types using standard TypeScript

export type Key = string | number;
export type Direction = "ltr" | "rtl";
export type Orientation = "horizontal" | "vertical";

export interface PressEvent {
  type: "pressstart" | "pressend" | "pressup" | "press";
  pointerType: PointerType;
  target: Element;
  shiftKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
}

export type PointerType = "mouse" | "pen" | "touch" | "keyboard" | "virtual";

export type {KeyboardEvent} from "react";

export interface HoverEvent {
  type: "hoverstart" | "hoverend";
  pointerType: "mouse" | "pen";
  target: Element;
}

export type Selection = "all" | Set<Key>;

export type TimeValue = {
  hour: number;
  minute: number;
  second?: number;
  millisecond?: number;
};

export type DateValue = {
  year: number;
  month: number;
  day: number;
};

export interface DateRange {
  start: DateValue;
  end: DateValue;
}

export interface RangeValue<T> {
  start: T;
  end: T;
}

export interface ValidationResult {
  isInvalid: boolean;
  validationDetails: ValidityState;
  validationErrors: string[];
}

export interface RouterConfig {
  href: string;
  routerOptions?: unknown;
}

export interface SortDescriptor {
  column?: Key;
  direction?: "ascending" | "descending";
}

// Color types (simplified replacements)
export type ColorFormat = "hex" | "hexa" | "rgb" | "rgba" | "hsl" | "hsla" | "hsb" | "hsba";
export type ColorSpace = "rgb" | "hsl" | "hsb";
export type ColorChannel =
  | "hue"
  | "saturation"
  | "brightness"
  | "lightness"
  | "red"
  | "green"
  | "blue"
  | "alpha";

export interface ColorChannelRange {
  minValue: number;
  maxValue: number;
  step: number;
  pageSize: number;
}

export interface ColorAxes {
  xChannel: ColorChannel;
  yChannel: ColorChannel;
}

export interface Color {
  toFormat(format: ColorFormat): Color;
  toString(format?: ColorFormat): string;
  toHexInt(): number;
  getChannelValue(channel: ColorChannel): number;
  withChannelValue(channel: ColorChannel, value: number): Color;
  getChannelRange(channel: ColorChannel): ColorChannelRange;
  getColorSpace(): ColorSpace;
}

/**
 * Consolidated Chakra UI re-exports.
 *
 * These components are passed through directly from @chakra-ui/react
 * without any Sonia-specific customization.
 */

// Layout
export { Box, type BoxProps } from '@chakra-ui/react/box'
export { Flex, type FlexProps } from '@chakra-ui/react/flex'
export {
  Grid,
  type GridProps,
  GridItem,
  type GridItemProps,
} from '@chakra-ui/react/grid'
export { SimpleGrid, type SimpleGridProps } from '@chakra-ui/react/simple-grid'
export {
  Stack,
  type StackProps,
  HStack,
  StackSeparator,
  type StackSeparatorProps,
  VStack,
} from '@chakra-ui/react/stack'
export { Center, type CenterProps } from '@chakra-ui/react/center'
export {
  AbsoluteCenter,
  type AbsoluteCenterProps,
} from '@chakra-ui/react/absolute-center'
export { Container, type ContainerProps } from '@chakra-ui/react/container'
export { Wrap, type WrapProps } from '@chakra-ui/react/wrap'
export { Group, type GroupProps } from '@chakra-ui/react/group'
export { Spacer, type SpacerProps } from '@chakra-ui/react/spacer'
export { Bleed, type BleedProps } from '@chakra-ui/react/bleed'
export { Float, type FloatProps } from '@chakra-ui/react/float'
export { Square, type SquareProps } from '@chakra-ui/react/square'
export { Circle, type CircleProps } from '@chakra-ui/react/circle'
export { Sticky, type StickyProps } from '@chakra-ui/react/sticky'
export {
  AspectRatio,
  type AspectRatioProps,
} from '@chakra-ui/react/aspect-ratio'

// Typography
export { Text, type TextProps } from '@chakra-ui/react/text'
export { Heading, type HeadingProps } from '@chakra-ui/react/heading'
export { Em, type EmProps } from '@chakra-ui/react/em'
export { Strong, type StrongProps } from '@chakra-ui/react/strong'
export { Mark } from '@chakra-ui/react/mark'
export { Quote, type QuoteProps } from '@chakra-ui/react/quote'
export { Span, type SpanProps } from '@chakra-ui/react/span'
export { Highlight, type HighlightProps } from '@chakra-ui/react/highlight'
export { Code, type CodeProps } from '@chakra-ui/react/code'
export { CodeBlock } from '@chakra-ui/react/code-block'
export { Kbd, type KbdProps } from '@chakra-ui/react/kbd'

// Forms & inputs
export { Button, type ButtonProps } from '@chakra-ui/react/button'
export { ButtonGroup, type ButtonGroupProps } from '@chakra-ui/react/button'
export {
  Input,
  InputPropsProvider,
  type InputProps,
} from '@chakra-ui/react/input'
export { InputAddon, type InputAddonProps } from '@chakra-ui/react/input-addon'
export {
  InputElement,
  type InputElementProps,
} from '@chakra-ui/react/input-element'
export { InputGroup, type InputGroupProps } from '@chakra-ui/react/input-group'
export { Textarea, type TextareaProps } from '@chakra-ui/react/textarea'
export { Field, useFieldContext, useFieldStyles } from '@chakra-ui/react/field'
export { Fieldset, useFieldsetContext } from '@chakra-ui/react/fieldset'
export { Checkmark, type CheckmarkProps } from '@chakra-ui/react/checkmark'
export { RadioGroup } from '@chakra-ui/react/radio-group'
export { RatingGroup } from '@chakra-ui/react/rating-group'
export {
  Editable,
  useEditable,
  useEditableContext,
} from '@chakra-ui/react/editable'
export {
  Combobox,
  useCombobox,
  useComboboxContext,
  useComboboxItemContext,
  useComboboxStyles,
} from '@chakra-ui/react/combobox'
export {
  Tabs,
  useTabsContext,
  useTabsStyles,
  useTabs,
} from '@chakra-ui/react/tabs'
export { Toggle } from '@chakra-ui/react/toggle'

// Feedback & display
export {
  Badge,
  BadgePropsProvider,
  type BadgeProps,
} from '@chakra-ui/react/badge'
export { Card } from '@chakra-ui/react/card'
export { DataList, useDataListStyles } from '@chakra-ui/react/data-list'
export { Icon, type IconProps } from '@chakra-ui/react/icon'
export { Image, type ImageProps } from '@chakra-ui/react/image'
export { List } from '@chakra-ui/react/list'
export { Loader } from '@chakra-ui/react/loader'
export { Separator, type SeparatorProps } from '@chakra-ui/react/separator'
export { Table } from '@chakra-ui/react/table'
export { Timeline } from '@chakra-ui/react/timeline'
export { TreeView } from '@chakra-ui/react/tree-view'
export { Progress } from '@chakra-ui/react/progress'
export { ProgressCircle } from '@chakra-ui/react/progress-circle'

// Overlay & interaction
export { Collapsible } from '@chakra-ui/react/collapsible'
export { ColorPicker } from '@chakra-ui/react/color-picker'
export {
  ColorSwatch,
  type ColorSwatchProps,
  type ColorSwatchBaseProps,
  ColorSwatchMix,
  type ColorSwatchMixProps,
  ColorSwatchPropsProvider,
} from '@chakra-ui/react/color-swatch'
export { FocusTrap, type FocusTrapProps } from '@chakra-ui/react/focus-trap'
export { Presence, type PresenceProps } from '@chakra-ui/react/presence'
export { ScrollArea } from '@chakra-ui/react/scroll-area'

// Navigation
export { LinkBox, LinkOverlay } from '@chakra-ui/react/link'
export type { LinkBoxProps, LinkOverlayProps } from '@chakra-ui/react/link'
export {
  SkipNavContent,
  type SkipNavContentProps,
  SkipNavLink,
  type SkipNavLinkProps,
} from '@chakra-ui/react/skip-nav'

// Utility
export { ClientOnly, type ClientOnlyProps } from '@chakra-ui/react/client-only'
export {
  DownloadTrigger,
  type DownloadTriggerProps,
} from '@chakra-ui/react/download-trigger'
export {
  type EnvironmentContext,
  EnvironmentProvider,
  type EnvironmentProviderProps,
  type RootNode,
  useEnvironmentContext,
} from '@chakra-ui/react/environment'
export {
  FormatByte,
  type FormatByteProps,
  FormatNumber,
  type FormatNumberProps,
} from '@chakra-ui/react/format'
export { Portal, type PortalProps } from '@chakra-ui/react/portal'
export { QrCode, useQrCode } from '@chakra-ui/react/qr-code'
export type { UseQrCodeProps, UseQrCodeReturn } from '@chakra-ui/react/qr-code'
export { Show, type ShowProps } from '@chakra-ui/react/show'
export { VisuallyHidden } from '@chakra-ui/react/visually-hidden'

// i18n
export { For, type ForProps } from '@chakra-ui/react/for'
export {
  LocaleProvider,
  type LocaleProviderProps,
  useLocaleContext,
  useFilter,
} from '@chakra-ui/react/locale'

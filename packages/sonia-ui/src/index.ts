export { defaultSystem, defaultConfig } from './preset/index.ts'

export {
  createSystem,
  defineAnimationStyles,
  defineConditions,
  defineConfig,
  defineGlobalStyles,
  defineKeyframes,
  defineLayerStyles,
  defineRecipe,
  defineSemanticTokens,
  defineSlotRecipe,
  defineStyle,
  defineTextStyles,
  defineTokens,
  chakra,
  createRecipeContext,
  createSlotRecipeContext,
  useRecipe,
  useSlotRecipe,
  useChakraContext,
  useToken,
} from '@chakra-ui/react/styled-system'

export type {
  RecipeProps,
  SlotRecipeProps,
  RecipeDefinition,
  SlotRecipeDefinition,
  HTMLChakraProps,
  SystemConfig,
  ConditionalValue,
  SystemStyleObject,
} from '@chakra-ui/react/styled-system'

export {
  useMediaQuery,
  useBreakpoint,
  useBreakpointValue,
  useControllableState,
  useDisclosure,
  createListCollection,
  createContext,
  mergeRefs,
} from '@chakra-ui/react'

export type {
  UseDisclosureProps,
  UseDisclosureReturn,
  UseControllableStateProps,
  UseBreakpointOptions,
  UseBreakpointValueOptions,
} from '@chakra-ui/react'

export { SoniaProvider, SuiContext, useLink, useSui } from './provider/index.ts'
export type { SuiContextValue, SoniaProviderProps } from './provider/index.ts'

// Chakra UI pass-through re-exports (no Sonia customization)
export * from './components/chakra-exports.ts'

export type { ColorPalette } from './preset/colors.ts'

// Custom components (Sonia-specific implementations)
export { Theme, type ThemeProps } from './components/theme/index.ts'

export { Accordion } from './components/accordion/index.ts'
export { ActionBar } from './components/action-bar/index.ts'
export { Alert, type AlertProps } from './components/alert/index.ts'
export { AppShell, type AppShellProps } from './components/app-shell/index.ts'
export {
  Avatar,
  AvatarGroup,
  type AvatarProps,
} from './components/avatar/index.ts'
export {
  BackButton,
  type BackButtonProps,
} from './components/back-button/index.ts'
export {
  Blockquote,
  BlockquoteIcon,
  type BlockquoteProps,
} from './components/blockquote/index.ts'
export { Breadcrumb } from './components/breadcrumb/index.ts'
export {
  Checkbox,
  CheckboxGroup,
  type CheckboxProps,
  type CheckboxGroupProps,
} from './components/checkbox/index.ts'
export {
  CheckboxCard,
  type CheckboxCardProps,
} from './components/checkbox-card/index.ts'
export { Clipboard } from './components/clipboard/index.ts'
export { useClipboard } from './components/clipboard/index.ts'
export type { UseClipboardReturn } from './components/clipboard/index.ts'
export {
  CloseButton,
  type CloseButtonProps,
} from './components/close-button/index.ts'
export {
  ColorModeProvider,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
  ColorModeTrigger,
} from './components/color-mode/index.ts'
export type {
  ColorMode,
  UseColorModeReturn,
} from './components/color-mode/index.ts'
export { Command } from './components/command/index.ts'
export { Dialog } from './components/dialog/index.ts'
export { Drawer } from './components/drawer/index.ts'
export {
  EmptyState,
  type EmptyStateProps,
} from './components/empty-state/index.ts'
export {
  FileUpload,
  useFileUploadContext,
} from './components/file-upload/index.ts'
export { GridList } from './components/grid-list/index.ts'
export { HoverCard } from './components/hover-card/index.ts'
export { createIcon } from './components/icons/create-icon.tsx'
export { IconBadge } from './components/icon-badge/index.ts'
export {
  IconButton,
  type IconButtonProps,
} from './components/icon-button/index.ts'
export { InfoTip, type InfoTipProps } from './components/info-tip/index.ts'
export { Link, type LinkProps } from './components/link/index.ts'
export { LoadingOverlay } from './components/loading-overlay/index.ts'
export { Navbar } from './components/navbar/index.ts'
export {
  NativeSelect,
  type NativeSelectProps,
} from './components/native-select/index.ts'
export {
  NumberInput,
  type NumberInputProps,
} from './components/number-input/index.ts'
export { Menu } from './components/menu/index.ts'
export { Page, usePageStyles } from './components/page/index.ts'
export { Pagination } from './components/pagination/index.ts'
export {
  PasswordInput,
  type PasswordInputProps,
} from './components/password-input/index.ts'
export {
  Persona,
  type PersonaPresence,
  type PersonaPresenceConfig,
  defaultPersonaPresenceOptions,
} from './components/persona/index.ts'
export { PinInput, type PinInputProps } from './components/pin-input/index.ts'
export { Popover } from './components/popover/index.ts'
export { Radio, type RadioProps } from './components/radio/index.ts'
export { RadioCard } from './components/radio-card/index.ts'
export {
  SearchInput,
  type SearchInputProps,
} from './components/search-input/index.ts'
export { Select } from './components/select/index.ts'
export { Section, useSectionStyles } from './components/section/index.ts'
export {
  Skeleton,
  type SkeletonProps,
  SkeletonCircle,
  type SkeletonCircleProps,
  SkeletonText,
  type SkeletonTextProps,
} from './components/skeleton/index.ts'
export {
  SegmentedControl,
  type SegmentedControlProps,
} from './components/segmented-control/index.ts'
export {
  Sidebar,
  useSidebar,
  useSidebarItemStyles,
  useSidebarStyles,
} from './components/sidebar/index.ts'
export { Slider, type SliderProps } from './components/slider/index.ts'
export { Spinner, type SpinnerProps } from './components/spinner/index.ts'
export { Status, type StatusProps } from './components/status/index.ts'
export { Stat } from './components/stat/index.ts'
export { Steps } from './components/steps/index.ts'
export { Switch, type SwitchProps } from './components/switch/index.ts'
export { Tag, type TagProps } from './components/tag/index.ts'
export {
  Toaster,
  type ToasterProps,
  toast,
} from './components/toaster/index.ts'
export { Tooltip, type TooltipProps } from './components/tooltip/index.ts'
export {
  ToggleTip,
  type ToggleTipProps,
} from './components/toggle-tip/index.ts'

// Core primitives
export {
  ErrorBoundary,
  ErrorProvider,
} from './primitives/error-boundary/index.ts'
export {
  useStepper,
  useStep,
  StepperProvider,
  useStepperContext,
} from './primitives/steps/index.ts'

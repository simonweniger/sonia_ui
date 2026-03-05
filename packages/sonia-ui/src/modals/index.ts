import { createModals } from './create-modals'
import { defaultModals } from './default-modals.ts'

export { ModalsContext, useModalsContext } from './provider'
export type {
  ConfirmDialogOptions,
  AlertDialogOptions,
  ModalOptions,
  ModalConfig,
  ModalId,
  ModalScopes,
  ModalsContextValue,
  ModalsProviderProps,
  OpenOptions,
} from './provider'

export { createModals } from './create-modals'
export type { CreateModalsOptions } from './create-modals'

// Exporting from './dialog'
export { AlertDialog } from './alert-dialog.tsx'
export type { AlertDialogProps } from './alert-dialog.tsx'

// Exporting from './drawer'
export { Drawer } from './drawer'
export type { DrawerProps } from './drawer'

// Exporting from './modal'
export { Modal } from './modal'
export type { ModalProps } from './modal'

const { useModals, ModalsProvider } = createModals({
  modals: defaultModals,
})

export { ModalsProvider, useModals }

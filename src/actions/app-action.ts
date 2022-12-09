// Type
import { ActionsCreatorType } from "store"
import {AlertType, Language, TPushMessage} from 'types/app-type'


export const APP__WATCH__INIT = 'APP__WATCH__INIT'
export const APP__WATCH__CLEAR_STATE = 'APP__WATCH__CLEAR_STATE'

const appActions = {
  // Sync
  set_init: (mode: boolean) => ({type: 'APP__SET__INIT', payload: {mode}} as const),
  set_menu_mode: (mode: boolean) => ({type: 'APP__SET__MENU_MODE', payload: {mode}} as const),
  set_language: (mode: Language) => ({type: 'APP__SET__LANGUAGE', payload: {mode}} as const),
  set_alert: (alert: AlertType | null) => ({type: 'APP__SET__ALERT', payload: {alert}} as const),
  set_push: (push: TPushMessage | null) => ({type: 'APP__SET__PUSH', payload: {push}} as const),
  set_not_found_redirect: (mode: boolean) => ({type: 'APP__SET__NOT_FOUND_REDIRECT', payload: {mode}} as const),
  // Clear

  // Async
  watch_init: () => ({type: APP__WATCH__INIT} as const),
  watch_clear_state: () => ({type: APP__WATCH__CLEAR_STATE} as const)
}

export type AppActionReducerType = ActionsCreatorType<typeof appActions>

export default appActions

// Type
import { ActionsCreatorType } from 'store'
// Types
import {MenuList, TCurrencyList} from 'types/cabinet/cabinet-main-type'


export const CABINET__WATCH__CURRENCY_LIST = 'CABINET__WATCH__CURRENCY_LIST'

const cabinetMainActions = {
    // Setter
    set_form_errors: (data: any) => ({type: 'CABINET__SET__ERROR_FORM', payload: {data}} as const),
    set_menu_mode: (mode: MenuList) => ({type: 'CABINET__SET__MENU_MODE', payload: {mode}} as const),
    set_sider_mode: (mode: boolean) => ({type: 'CABINET__SET__SIDER_MODE', payload: {mode}} as const),
    set_auto_logout: (second: number | null) => ({type: 'CABINET__SET__AUTO_LOGOUT', payload: {second}} as const),
    set_currency_list_crypto: (data: TCurrencyList[]) => ({type: 'CABINET__SET__CURRENCY_LIST_CRYPTO', payload: {data}} as const),
    set_currency_list_fiat: (data: TCurrencyList[]) => ({type: 'CABINET__SET__CURRENCY_LIST_FIAT', payload: {data}} as const),
    set_send_asset_mode: (mode: boolean) => ({type: 'CABINET__SET__SEND_ASSET_MODE', payload: {mode}} as const),
    set_receive_asset_mode: (mode: boolean) => ({type: 'CABINET__SET__RECEIVE_ASSET_MODE', payload: {mode}} as const),
    set_notification_mode: (mode: boolean) => ({type: 'CABINET__SET__NOTIFICATION_MODE', payload: {mode}} as const),
    // Create

    // Update
    tick_auto_logout: () => ({type: 'CABINET__TICK__AUTO_LOGOUT'} as const),

    // Delete

    // Loader
    load_form: (mode: boolean) => ({type: 'CABINET__LOAD__FORM', payload: {mode}} as const),
    load_currency_list_crypto: (mode: boolean) => ({type: 'CABINET__LOAD__CURRENCY_LIST_CRYPTO', payload: {mode}} as const),
    load_currency_list_fiat: (mode: boolean) => ({type: 'CABINET__LOAD__CURRENCY_LIST_FIAT', payload: {mode}} as const),

    // Clear
    clear_menu_mode: (mode: boolean) => ({type: 'CABINET__CLEAR__MENU_MODE', payload: {mode}} as const),
    // Async
    watch_currency_list_crypto: () => ({type: CABINET__WATCH__CURRENCY_LIST, payload: 'crypto'} as const),
    watch_currency_list_fiat: () => ({type: CABINET__WATCH__CURRENCY_LIST, payload: 'fiat'} as const),
}

export type CabinetActionReducerType = ActionsCreatorType<typeof cabinetMainActions>

export default cabinetMainActions

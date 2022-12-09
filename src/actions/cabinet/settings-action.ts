// Type
import {TUpdateSettings, TUpdatePassword, TTwoFaConnect, TTwoFaConnectRequest, TTwoFaType, TCloseAccount} from 'types/cabinet/settings-type'
// store
import {ActionsCreatorType} from "store";

// async
export const SETTINGS__WATCH__BASE = 'SETTINGS__WATCH__BASE'
export const SETTINGS__UPDATE__BASE = 'SETTINGS__UPDATE__BASE'
export const SETTINGS__WATCH__CHANGE_PASSWORD = 'SETTINGS__WATCH__CHANGE_PASSWORD'
export const SETTINGS__WATCH__TWOFA_CONNECT_REQUEST = 'SETTINGS__WATCH__TWOFA_CONNECT_REQUEST'
export const SETTINGS__WATCH__TWOFA_CONNECT = 'SETTINGS__WATCH__TWOFA_CONNECT'
export const SETTINGS__WATCH__TWOFA_DISCONNECT_REQUEST = 'SETTINGS__WATCH__TWOFA_DISCONNECT_REQUEST'
export const SETTINGS__WATCH__TWOFA_DISCONNECT = 'SETTINGS__WATCH__TWOFA_DISCONNECT'
export const SETTINGS__WATCH__WALLET_LIST = 'SETTINGS__WATCH__WALLET_LIST'
export const SETTINGS__WATCH__CLOSE_ACCOUNT = 'SETTINGS__WATCH__CLOSE_ACCOUNT'

// sync
export const SETTINGS__SET_ERRORS = 'SETTINGS__SET_ERRORS'
export const SETTINGS__SET_SUCCESS_MESSAGE = 'SETTINGS__SET_SUCCESS_MESSAGE'
export const SETTINGS__LOAD_SETTINGS = 'SETTINGS__LOAD_SETTINGS'
export const SETTINGS__SET_VALID_PASSWORD = 'SETTINGS__SET_VALID_PASSWORD'
export const SETTINGS__LOAD_FORM = 'SETTINGS__LOAD_FORM'
export const SETTINGS__PASSWORD_ERRORS = 'SETTINGS__PASSWORD_ERRORS'
export const SETTINGS__LOGOUT_ERRORS = 'SETTINGS__LOGOUT_ERRORS'
export const SETTINGS__CLOSE_ACCOUNT_ERRORS = 'SETTINGS__CLOSE_ACCOUNT_ERRORS'
export const SETTINGS__SET_USER_TIMEZONE = 'SETTINGS__SET_USER_TIMEZONE'
export const SETTINGS__SET__BASE = 'SETTINGS__SET__BASE'
export const SETTINGS__SET__CURRENCY = 'SETTINGS__SET__CURRENCY'
export const SETTINGS__SET__TAB = 'SETTINGS__SET__TAB'
// two fa actions
export const SETTINGS__TWOFA_ERRORS = 'SETTINGS__TWOFA_ERRORS'
export const SETTINGS__SET__TWOFA_DATA = 'SETTINGS__SET__TWOFA_DATA'
export const SETTINGS__SET__NULL_TWOFA_DATA = 'SETTINGS__SET__NULL_TWOFA_DATA'
export const SETTINGS__DISABLED_TWOFA_EMAIL = 'SETTINGS__DISABLED_TWOFA_EMAIL'
export const SETTINGS__DISABLED_TWOFA_GOOGLE = 'SETTINGS__DISABLED_TWOFA_GOOGLE'
export const SETTINGS__SET__WALLET_LIST = 'SETTINGS__SET__WALLET_LIST'

const settingsCabinetAction = {
    // async
    watch_settings_base: () => ({type: SETTINGS__WATCH__BASE} as const),
    update_settings: (data: TUpdateSettings) => ({type: SETTINGS__UPDATE__BASE, payload: data} as const),
    change_password: (data: TUpdatePassword) => ({type:SETTINGS__WATCH__CHANGE_PASSWORD, payload: data } as const),
    twofa_connect_request: (data: TTwoFaConnectRequest) => ({type: SETTINGS__WATCH__TWOFA_CONNECT_REQUEST, payload: data} as const),
    twofa_connect: (data: TTwoFaConnect) => ({type: SETTINGS__WATCH__TWOFA_CONNECT, payload: data} as const),
    twofa_disconnect_request: (data: TTwoFaConnectRequest) => ({type: SETTINGS__WATCH__TWOFA_DISCONNECT_REQUEST, payload: data} as const),
    twofa_disconnect: (data: TTwoFaConnect) => ({type: SETTINGS__WATCH__TWOFA_DISCONNECT, payload: data} as const),
    watch_wallet_list: () => ({type: SETTINGS__WATCH__WALLET_LIST} as const),
    watch_close_account: (data: TCloseAccount) => ({type: SETTINGS__WATCH__CLOSE_ACCOUNT, payload: data} as const),
    // sync
    set_errors: (data: any) => ({type: SETTINGS__SET_ERRORS, payload: {data}} as const),
    set_password_errors: (data: any | null) => ({type: SETTINGS__PASSWORD_ERRORS, payload: {data}} as const),
    set_load_settings: (mode: boolean) => ({type: SETTINGS__LOAD_SETTINGS, payload: {mode}} as const),
    set_logout_errors: (data: any | null) => ({type: SETTINGS__LOGOUT_ERRORS, payload: {data}} as const),
    set_twofa_errors: (data: any | null) => ({type: SETTINGS__TWOFA_ERRORS, payload: {data}} as const),
    set_close_account_errors: (data: any | null) => ({type: SETTINGS__CLOSE_ACCOUNT_ERRORS, payload: {data}} as const),
    set_valid_password: (mode: boolean) => ({type: SETTINGS__SET_VALID_PASSWORD, payload: {mode}} as const),
    set_user_timezone: (data: any) => ({type: SETTINGS__SET_USER_TIMEZONE, payload: { data }} as const),
    set_settings: (data: any) => ({type: SETTINGS__SET__BASE, payload: { data }} as const),
    set_currency: (data: any) => ({type: SETTINGS__SET__CURRENCY, payload: { data }} as const),
    set_tab:(mode: string) => ({type: SETTINGS__SET__TAB, payload: {mode}} as const),
    // two fa actions
    set_twofa_data: (data: any) => ({type: SETTINGS__SET__TWOFA_DATA, payload: data } as const),
    set_null_twofa_data: () => ({type:SETTINGS__SET__NULL_TWOFA_DATA} as const),
    set_disabled_twofa_email: (mode: TTwoFaType) => ({type: SETTINGS__DISABLED_TWOFA_EMAIL, payload: mode} as const),
    set_disabled_twofa_google: (mode: TTwoFaType) => ({type: SETTINGS__DISABLED_TWOFA_GOOGLE, payload: mode} as const),
    set_wallet_list: (data: any) => ({type: SETTINGS__SET__WALLET_LIST, payload: {data}} as const),
    // loader
    load_form: (mode: boolean) => ({type: SETTINGS__LOAD_FORM, payload: {mode}} as const)
}

export type settingsCabinetReducerType = ActionsCreatorType<typeof settingsCabinetAction>

export default settingsCabinetAction;

import {string} from "yup";

export interface IGetTimezone {
    Authorization: string
}

export type TUserTimezone = {
    name: string,
    value: string
}
export type TUserTimezones = TUserTimezone[]

export type TSingleCurrency = {
    id: number,
    name: string,
    full_name: string,
    sign: string
}

export type TCurrency = TSingleCurrency[]

export type TSettings = {
    currency_id: string,
    lang: string,
    timezone: string,
    two_factor_method: TTwoFaType,
    notif_currency: number | null,
    notif_info: number | null,
    notification_email: number,
    notification_sms: number,
    auto_logout: number
}

export type TSettingTab = 'preferences' | 'security' | 'notifications'

export type TUpdateSettings = {
    currency_id: string,
    lang: string,
    timezone?: string,
    two_factor_method?: string,
    notif_currency?: string,
    notif_info?: string,
    notification_email?: string,
    notification_sms?: string,
    show_alert?: boolean,
    auto_logout?: number
}

export enum ETwoFaType  {
    disabled = "0",
    email = "1",
    google = "2",
    sms = "3"
}

export type TTwoFaType = "0" | "1" | "2" | "3"

export type TUpdatePassword = {
    password: string,
    cPassword: string
}

export type TAutoLogout = {
    auto_logout: number
}

// Two Fa Types

export enum ETwoFaMethod {
    EMAIL = 'method_email',
    GOOGLE = 'method_google'
}

type TTwoFaMethod = 'method_email' | 'method_google'

export type TTwoFaConnectRequest = {
    method: TTwoFaMethod
}

export type TTwoFaConnect = {
    method: TTwoFaMethod,
    hash: string,
    code: string
}

export interface ITwoFaData {
    hash: string,
    secret?: string,
    method: TTwoFaMethod
}

export type TTwoFaCode = {
    code: string
}

// Wallets list

export interface IWalletDataItem {
    key?: string,
    name: string,
    icon: string,
    balance: number,
    value: number
}

export interface IWalletListItem extends IWalletDataItem{
    id: string,
    full_name: string,
    price: number,
    percent_change: number,
    in_favorites: number,
    percent: number
}

export type TWalletListItem = {
    id: string,
    name: string,
    icon: string,
    full_name: string,
    balance: number,
    value: number,
    price: number,
    percent_change: number,
    in_favorites: number,
    percent: number
}

export type TWalletList = TWalletListItem[]

export type TWalletDataItem = {
    key: string,
    name: string,
    balance: number,
    value: number
}

export type TWalletData = TWalletDataItem[]

// Close account
export type TCloseAccount = {
    card: string,
    name: string,
    password: string,
    descr?: string
}


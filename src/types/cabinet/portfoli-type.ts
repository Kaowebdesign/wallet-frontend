import {EWalletDuration, TChart, TOverview} from "types/cabinet/cabinet-main-type"

export type TPortfolioTab = 'overview' | 'transactions'

export type TBalance = {
    base_fiat_name: string
    base_fiat_sign: string
    profit: string
    profit_percent: string
}

export type TBalanceChart = {
    chart: TChart[]
    base_fiat_name: string
    base_fiat_sign: string
    overview: TBalance
}

export type TWalletItem = {
    id: string
    cur_id: string
    name: string
    icon: string
    full_name: string
    balance: string
    value: string
    price: number
    percent_change: number
    in_favorites: number
    percent: string
}

export type TWallet = {
    base_fiat_name: string
    base_fiat_sign: string
    items: TWalletItem[]
}

export type TCurrencyData = {
    base_fiat_name: string
    base_fiat_sign: string
    currency_crypto_id: number
    chart: TChart[]
    overview: TOverview
}

export type TCurrency = {
    id: string
    data: TCurrencyData
}

export type TCurrencyDuration = {
    id: string
    duration: EWalletDuration
}
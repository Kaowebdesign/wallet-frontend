import {strict} from "assert";

export interface Mock {
    name: string
}

export type MenuList = 'home' | 'portfolio' | 'transactions' | 'help' | 'setting' | 'profile'

export type ModalAssets = 'send' | 'receive' | 'def'

export type TCurrencyListType = 'crypto' | 'fiat'

export type TCurrencyList = {
    id: string
    name: string
    full_name: string,
    sign?: string
    icon?: string
}

export enum EWalletDuration  {
    // MINUTE = '1m',
    HOUR = '1h',
    DAY = '1D',
    WEEK = '1W',
    MOUNTH = '1M',
    ALL_TIME = 'all'
}

export type TDuration = EWalletDuration.HOUR | EWalletDuration.DAY | EWalletDuration.WEEK | EWalletDuration.MOUNTH | EWalletDuration.ALL_TIME

export type TChart = {
    xAxis: number,
    xAxisFormatted: string,
    yAxis: number
}

export type TOverview = {
    current_price: number,
    percent_change:number,
    market_cap: number,
    volume: number,
    high_price: number,
    low_price: number
}

export type TPortfolioTable = {
    id: string,
    cur_id: string,
    name: string,
    full_name: string,
    balance: string,
    value: string,
    price: string,
    percent_change: number,
    in_favorites: number,
    percent: number,
    icon: string
}


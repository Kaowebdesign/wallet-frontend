// Type
import { ActionsCreatorType } from "store"
import {TBalanceChart, TPortfolioTab, TWallet, TCurrency, TCurrencyDuration, TWalletItem} from "types/cabinet/portfoli-type"
import {EWalletDuration} from "types/cabinet/cabinet-main-type"


export const PORTFOLIO__WATCH_BALANCE = 'PORTFOLIO__WATCH_BALANCE'
export const PORTFOLIO__WATCH_WALLET = 'PORTFOLIO__WATCH_WALLET'
export const PORTFOLIO__WATCH_CURRENCY = 'PORTFOLIO__WATCH_CURRENCY'

const portfolioActions = {
    // Setter
    set_tab:(mode: string) => ({type: 'PORTFOLIO__SET__TAB', payload: {mode}} as const),
    set_bread_crumbs:(currency: TPortfolioTab) => ({type: 'PORTFOLIO__SET__BREAD_CRUMBS', payload: {currency}} as const),
    set_balance_duration:(duration: EWalletDuration) => ({type: 'PORTFOLIO__SET__BALANCE_DURATION', payload: {duration}} as const),
    set_generate_report_mode:(mode: boolean) => ({type: 'PORTFOLIO__SET__GENERATE_REPORT_MODE', payload: {mode}} as const),
    set_add_wallet__mode:(mode: boolean) => ({type: 'PORTFOLIO__SET__ADD_WALLET_MODE', payload: {mode}} as const),
    set_balance_chart:(data: TBalanceChart ) => ({type: 'PORTFOLIO__SET__BALANCE_CHART', payload: {data}} as const),
    set_empty_balance_mode:(mode: boolean) => ({type: 'PORTFOLIO__SET__EMPTY_BALANCE_MODE', payload: {mode}} as const),
    set_search_wallet:(val: string ) => ({type: 'PORTFOLIO__SET__SEARCH_WALLET', payload: {val}} as const),
    set_add_search_wallet:(val: string) => ({type: 'PORTFOLIO__SET__ADD_SEARCH_WALLET', payload: {val}} as const),
    set_wallets:(data: TWallet) => ({type: 'PORTFOLIO__SET__WALLETS', payload: {data}} as const),
    // Create, Add
    add_currency:(data: TCurrency) => ({type: 'PORTFOLIO__ADD__CURRENCY', payload: {data}} as const),
    add_currency_duration:(data: TCurrencyDuration) => ({type: 'PORTFOLIO__ADD__CURRENCY_DURATION', payload: {data}} as const),

    // Update
    update_wallets_favorite:(id: string, state: boolean) => ({type: 'PORTFOLIO__UPDATE__WALLETS_FAVORITES', payload: {id, state}} as const),
    update_currency:(data: TCurrency) => ({type: 'PORTFOLIO__UPDATE__CURRENCY', payload: {data}} as const),
    update_currency_duration:(data: TCurrencyDuration) => ({type: 'PORTFOLIO__UPDATE__CURRENCY_DURATION', payload: {data}} as const),
    // Delete

    // Error

    // Load
    load_first:(mode: boolean) => ({type: 'PORTFOLIO__LOAD__FIRST', payload: {mode}} as const),
    load_first_currency:(id: string) => ({type: 'PORTFOLIO__LOAD__FIRST_CURRENCY', payload: {id}} as const),
    load_balance_chart:(mode: boolean) => ({type: 'PORTFOLIO__LOAD__BALANCE_CHART', payload: {mode}} as const),
    load_wallet:(mode: boolean) => ({type: 'PORTFOLIO__LOAD__WALLET', payload: {mode}} as const),
    load_currency:(id: string) => ({type: 'PORTFOLIO__LOAD__CURRENCY', payload: {id}} as const),
    //Close

    // Async
    watch_balance:(duration: EWalletDuration) => ({type: PORTFOLIO__WATCH_BALANCE, payload: duration} as const),
    watch_wallet:() => ({type: PORTFOLIO__WATCH_WALLET} as const),
    watch_currency:(data: TWalletItem, duration: EWalletDuration) => ({type: PORTFOLIO__WATCH_CURRENCY, payload: {duration, data}} as const),
}

export type PortfolioActionReducerType = ActionsCreatorType<typeof portfolioActions>

export default portfolioActions

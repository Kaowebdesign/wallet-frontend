// store
import {ActionsCreatorType} from "store";
// Types
import {TGetWalletHome, TUpdateWalletHome} from "types/cabinet/home-type"
import {TCurrencyList, EWalletDuration} from "types/cabinet/cabinet-main-type"


// Async
export const HOME__WATCH__BASE = 'HOME__WATCH__BASE'
export const HOME__WATCH__UPDATE_BASE = 'HOME__WATCH__UPDATE_BASE'
// Sync
export const HOME__SET__BASE = 'HOME__SET__BASE'
export const HOME__SET_CURRENCY_LIST = 'HOME__SET_CURRENCY_LIST'
export const HOME__SET_TRANSACTIONS = 'HOME__SET_TRANSACTIONS'
export const HOME__SET_PORTFOLIO = 'HOME__SET_PORTFOLIO'
export const HOME__SET_CURRENCY = 'HOME__SET_CURRENCY'
export const HOME__SET_CRYPTO_CURRENCY = 'HOME__SET_CRYPTO_CURRENCY'
export const HOME__SET_DURATION = 'HOME__SET_DURATION'
export const HOME__SET__LOAD_CHART = 'HOME__SET__LOAD_CHART'
export const HOME__SET__UPDATING_CHART = 'HOME__SET__UPDATING_CHART'


const homeActions = {
    // Async
    watch_home_base: (data: TGetWalletHome) => ({type: HOME__WATCH__BASE, payload: {...data}} as const),
    watch_update_home_base: (data: TUpdateWalletHome) => ({type: HOME__WATCH__UPDATE_BASE, payload: {...data}} as const),
    // Sync
    home_set_base: (data: any) => ({type: HOME__SET__BASE, payload: {data}} as const),
    home_set_currency_list: (data: TCurrencyList[]) => ({type: HOME__SET_CURRENCY_LIST, payload: {data}} as const),
    home_set_portfolio: (data: any) => ({type: HOME__SET_PORTFOLIO, payload: {data}} as const),
    home_set_transactions: (data: any) => ({type: HOME__SET_TRANSACTIONS, payload: {data}} as const),
    home_set_currency: (data: any) => ({type: HOME__SET_CURRENCY, payload: {data}} as const),
    home_set_crypto_currency: (data: any) => ({type: HOME__SET_CRYPTO_CURRENCY, payload: {data}} as const),
    home_set_duration: (data: EWalletDuration) => ({type: HOME__SET_DURATION, payload: {data}} as const),
    home_set_load_chart: (mode: Boolean) => ({type: HOME__SET__LOAD_CHART, payload: {mode}} as const),
    home_set_updating_chart: (mode: Boolean) => ({type: HOME__SET__UPDATING_CHART, payload: {mode}} as const)
}


export type settingsHomeReducerType = ActionsCreatorType<typeof homeActions>

export default homeActions

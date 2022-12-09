// Core
import produce, {Draft} from 'immer'
import {settingsHomeReducerType} from "actions/cabinet/home-actions";
// Types
import {EWalletDuration, TChart, TOverview, TPortfolioTable} from "types/cabinet/cabinet-main-type"
import {TCurrencyList} from "types/cabinet/cabinet-main-type"

const initialState = {
    base_fiat_name: null as null | string,
    base_fiat_sign: null as null | string,
    currency_crypto_id: null as null | number,
    overview: null as null | TOverview,
    chart: null as null | TChart[],
    currency_list: null as null | TCurrencyList[],
    portfolio: null as null | TPortfolioTable[],
    transactions: null as null | [{}],
    current_currency: null as null | TCurrencyList,
    current_crypto_currency: null as null | string,
    current_duration: EWalletDuration.HOUR as EWalletDuration,
    load_chart: true as Boolean,
    updating_chart: false as Boolean
}

type InitialStateType = typeof initialState

export const cabinetHomeReducer = (state: InitialStateType = initialState, action: settingsHomeReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Async
            case "HOME__WATCH__BASE": return state
            case "HOME__WATCH__UPDATE_BASE": return state
            // Sync
            case "HOME__SET__BASE":
                draft.base_fiat_name = action.payload.data.base_fiat_name
                draft.base_fiat_sign = action.payload.data.base_fiat_sign
                draft.currency_crypto_id = action.payload.data.currency_crypto_id
                draft.overview = action.payload.data.overview
                draft.chart = action.payload.data.chart
                break
            case "HOME__SET_CURRENCY":
                draft.current_currency = action.payload.data
                break
            case "HOME__SET_CURRENCY_LIST":
                draft.currency_list = action.payload.data
                break
            case "HOME__SET_PORTFOLIO":
                draft.portfolio = action.payload.data
                break
            case "HOME__SET_TRANSACTIONS":
                draft.transactions = action.payload.data
                break
            case "HOME__SET_CRYPTO_CURRENCY":
                draft.current_crypto_currency = action.payload.data
                break
            case "HOME__SET_DURATION":
                draft.current_duration = action.payload.data
                break
            case "HOME__SET__LOAD_CHART":
                draft.load_chart = action.payload.mode
                break
            case "HOME__SET__UPDATING_CHART":
                draft.updating_chart = action.payload.mode
                break
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}

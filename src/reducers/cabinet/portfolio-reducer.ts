// Core
import produce, {Draft} from 'immer'
// Type
import { PortfolioActionReducerType } from 'actions/cabinet/portfolio-action'
import {TCurrencyDuration, TPortfolioTab, TWallet, TCurrency} from "types/cabinet/portfoli-type"
import {EWalletDuration, TChart} from "types/cabinet/cabinet-main-type"
import {TBalance} from "types/cabinet/portfoli-type"



const initialState = {
    tab: '' as string,
    bread_crumbs: null as null | TPortfolioTab,
    balance_duration: EWalletDuration.HOUR as EWalletDuration,
    currency_duration: [] as TCurrencyDuration[],
    generate_report_mode: false as boolean,
    add_wallet__mode: false as boolean,
    balance: null as null | TBalance,
    chart: null as null | TChart[],
    wallets: null as null | TWallet,
    currencies: [] as TCurrency[],
    empty_balance_mode: false,
    search_wallet: '',
    add_search_wallet: '',
    // Error

    // Load
    load_first: true,
    load_first_currency: [] as string[],
    load_balance_chart: false,
    load_wallet: false,
    load_currency: [] as string[],
}

type InitialStateType = typeof initialState

export const portfolioReducer = (state: InitialStateType = initialState, action: PortfolioActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Setter
            case "PORTFOLIO__SET__TAB":
                draft.tab = action.payload.mode
                break
            case "PORTFOLIO__SET__BREAD_CRUMBS":
                draft.bread_crumbs = action.payload.currency
                break
            case "PORTFOLIO__SET__BALANCE_DURATION":
                draft.balance_duration = action.payload.duration
                break
            case "PORTFOLIO__SET__GENERATE_REPORT_MODE":
                draft.generate_report_mode = action.payload.mode
                break
            case "PORTFOLIO__SET__ADD_WALLET_MODE":
                draft.add_wallet__mode = action.payload.mode
                break
            case "PORTFOLIO__SET__BALANCE_CHART":
                const {chart, overview, ...rest} = action.payload.data

                draft.chart = chart
                draft.balance = {
                    ...rest,
                    ...overview,
                }
                break
            case "PORTFOLIO__SET__EMPTY_BALANCE_MODE":
                draft.empty_balance_mode = action.payload.mode
                break
            case "PORTFOLIO__SET__SEARCH_WALLET":
                draft.search_wallet = action.payload.val
                break
            case "PORTFOLIO__SET__ADD_SEARCH_WALLET":
                draft.add_search_wallet = action.payload.val
                break
            case "PORTFOLIO__SET__WALLETS":
                draft.wallets = action.payload.data
                break
            // Load
            case "PORTFOLIO__LOAD__BALANCE_CHART":
                draft.load_balance_chart = action.payload.mode
                break
            case "PORTFOLIO__LOAD__FIRST":
                draft.load_first = action.payload.mode
                break
            case "PORTFOLIO__LOAD__WALLET":
                draft.load_wallet = action.payload.mode
                break
            case "PORTFOLIO__LOAD__CURRENCY":
                if (draft.load_currency.includes(action.payload.id)) {
                    draft.load_currency = draft.load_currency.filter(elem => elem !== action.payload.id)
                } else {
                    draft.load_currency.push(action.payload.id)
                }
                break
            case "PORTFOLIO__LOAD__FIRST_CURRENCY":
                if (draft.load_first_currency.includes(action.payload.id)) {
                    draft.load_first_currency = draft.load_first_currency.filter(elem => elem !== action.payload.id)
                } else {
                    draft.load_first_currency.push(action.payload.id)
                }
                break
            // Create, Add
            case "PORTFOLIO__ADD__CURRENCY":
                draft.currencies.push(action.payload.data)
                break
            case "PORTFOLIO__ADD__CURRENCY_DURATION":
                draft.currency_duration.push(action.payload.data)
                break
            // Update
            case "PORTFOLIO__UPDATE__WALLETS_FAVORITES":
                if (!draft.wallets) return state

                const indexWallets = draft.wallets ? draft.wallets.items.findIndex(elem => elem.id === action.payload.id) : -1

                if (indexWallets === -1) return state

                draft.wallets.items[indexWallets].in_favorites = action.payload.state ? 1 : 0
                break
            case "PORTFOLIO__UPDATE__CURRENCY":
                const indexCurrency = draft.currencies.findIndex(elem => elem.id === action.payload.data.id)

                if (indexCurrency === -1) return state

                draft.currencies[indexCurrency] = action.payload.data
                break
            case "PORTFOLIO__UPDATE__CURRENCY_DURATION":
                const indexCurrencyDuration = draft.currency_duration.findIndex(elem => elem.id === action.payload.data.id)

                if (indexCurrencyDuration === -1) return state

                draft.currency_duration[indexCurrencyDuration].duration = action.payload.data.duration
                break
            // Delete

            // Error

            //Close

            // Async
            case "PORTFOLIO__WATCH_BALANCE": return state
            case "PORTFOLIO__WATCH_WALLET": return state
            case "PORTFOLIO__WATCH_CURRENCY": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}

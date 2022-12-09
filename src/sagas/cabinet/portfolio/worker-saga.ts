// Core
import {select} from "redux-saga/effects"
// Selector
import {portfolioSelect} from 'selectors/cabinet'
// Api
import {portfolioApi} from "api/cabinet"
// Action
import {portfolioActions} from 'actions/cabinet'
// Template
import {makeRequest} from 'sagas/template'
// Type
import {WorkerProps} from "sagas/root-saga"
import {EWalletDuration} from "types/cabinet/cabinet-main-type"
import {TCurrencyData, TWallet, TWalletItem} from "types/cabinet/portfoli-type"


export function* workerBalance({payload}: WorkerProps<EWalletDuration>): Generator {
    const loadFirst = yield select(portfolioSelect.load_first)

    const prepareSuccess = [
        {action: portfolioActions.set_balance_chart},
        {action: portfolioActions.load_first, handler: () => false},
    ]

     yield makeRequest({
         // @ts-ignore
         fetcher: portfolioApi.balance,
         fetcherParam: [
             payload,
         ],
         start: [
             {action: portfolioActions.load_balance_chart, handler: () => true},
         ],
         finish: [
             {action: portfolioActions.load_balance_chart, handler: () => false},
         ],
         success: loadFirst ? prepareSuccess : [prepareSuccess[0]],
     })
}

export function* workerWallet(): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: portfolioApi.wallet,
        start: [
            {action:portfolioActions.load_wallet, handler: () => true}
        ],
        finish: [
            {action:portfolioActions.load_wallet, handler: () => false}
        ],
        success: [
            {action:portfolioActions.set_wallets, handler: (data:TWallet) => data}
        ],
    })
}

export function* workerCurrency({payload}: WorkerProps<{data: TWalletItem, duration: EWalletDuration}>): Generator {
    const loadFirstCurrency = (yield select(portfolioSelect.load_first_currency)) as string[]

    const prepareSuccessFirst = [
        {action: portfolioActions.add_currency, handler: (data: TCurrencyData) => ({id: payload.data.id, data: data})},
        {action: portfolioActions.add_currency_duration, handler: () => ({id: payload.data.id, duration: payload.duration})},
        {action: portfolioActions.load_first_currency, handler: () => payload.data.id},
    ]

    const prepareSuccess = [
        {action: portfolioActions.update_currency, handler: (data: TCurrencyData) => ({id: payload.data.id, data})},
        {action: portfolioActions.update_currency_duration, handler: () => ({id: payload.data.id, duration: payload.duration})},
    ]


    yield makeRequest({
        // @ts-ignore
        fetcher: portfolioApi.currency,
        fetcherParam: [
            payload.data.cur_id, payload.duration
        ],
        start: [
            {action: portfolioActions.load_currency, handler: () => payload.data.id},
        ],
        finish: [
            {action: portfolioActions.load_currency, handler: () => payload.data.id},
        ],
        success: loadFirstCurrency.includes(payload.data.id) ? prepareSuccess : prepareSuccessFirst,
    })
}


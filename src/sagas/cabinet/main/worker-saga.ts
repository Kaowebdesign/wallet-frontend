// Core
import {put} from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
// Api
import {cabMainApi} from 'api/cabinet'
import {makeRequest} from 'sagas/template'
// Action
import { cabinetMainActions } from 'actions/cabinet'
// Type
import {WorkerProps} from "sagas/root-saga"
import {TCurrencyListType} from "types/cabinet/cabinet-main-type"


export function* workerCurrencyList({payload}: WorkerProps<TCurrencyListType>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: cabMainApi.currency_list,
        fetcherParam: [
            payload,
        ],
        start: [
            {action: payload === "crypto" ? cabinetMainActions.load_currency_list_crypto : cabinetMainActions.load_currency_list_fiat, handler: () => true}
        ],
        finish: [
            {action: payload === "crypto" ? cabinetMainActions.load_currency_list_crypto : cabinetMainActions.load_currency_list_fiat, handler: () => false}
        ],
        success: [
            {action: payload === "crypto" ? cabinetMainActions.set_currency_list_crypto : cabinetMainActions.set_currency_list_fiat}
        ],
    })
}

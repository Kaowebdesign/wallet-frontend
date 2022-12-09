// Api
import {homeApi} from 'api/cabinet'
// Action
import homeActions  from 'actions/cabinet/home-actions'
// Template
import {makeRequest} from 'sagas/template'
import {WorkerProps} from "../../root-saga";
// Types
import {TGetWalletHome, THomeData, TUpdateWalletHome} from "types/cabinet/home-type";


export function* workerHome({payload}:WorkerProps<TGetWalletHome>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: homeApi.get_home,
        fetcherParam: [
            payload
        ],
        start: [
            {
                action: homeActions.home_set_load_chart,
                handler: () => true
            }
        ],
        finish: [
            {
                action: homeActions.home_set_load_chart,
                handler: () => false
            }
        ],
        success: [
            {
                action: homeActions.home_set_base
            },
            {
                action: homeActions.home_set_currency_list,
                handler: (data: THomeData) =>
                    data.currency_list
            },
            {
                action: homeActions.home_set_portfolio,
                handler: (data: THomeData) =>
                   data.portfolio
            },
            {
                action: homeActions.home_set_transactions,
                handler: (data: THomeData) =>
                    data.transactions
            },
        ]
    })
}
export function* workerUpdateHome({payload}:WorkerProps<TUpdateWalletHome>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: homeApi.update_home,
        fetcherParam: [
            payload
        ],
        start: [
            {
                action: homeActions.home_set_updating_chart,
                handler: () => true
            }
        ],
        finish: [
            {
                action: homeActions.home_set_updating_chart,
                handler: () => false
            }
        ],
        success: [
            {
                action: homeActions.home_set_base
            },
            {
                action: homeActions.home_set_portfolio,
                handler: (data: THomeData) =>
                    data.portfolio
            },
            {
                action: homeActions.home_set_transactions,
                handler: (data: THomeData) =>
                    data.transactions
            },
        ]
    })
}


import {TChart, TCurrencyList, TDuration, TOverview} from "./cabinet-main-type"



export type TGetWalletHome = {
    duration: TDuration
}

export type TUpdateWalletHome = {
    currencyId: string,
    duration?: TDuration
}

// Home data
export type THomeData = {
    base_fiat_name: string,
    currency_crypto_id: number,
    currency_list: TCurrencyList[],
    overview: TOverview,
    chart: TChart[],
    portfolio: [{}],
    transactions: [{}]
}

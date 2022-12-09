// Type
import { RootState } from 'store'

const homeSelector = {
    home_data_overview: (store: RootState) => store.cabinetHome.overview,
    home_data_chart: (store: RootState) => store.cabinetHome.chart,
    base_fiat_name: (store: RootState) => store.cabinetHome.base_fiat_name,
    base_sign_name: (store: RootState) => store.cabinetHome.base_fiat_sign,
    currency_crypto_id: (store: RootState) => store.cabinetHome.currency_crypto_id,
    portfolio: (store: RootState) => store.cabinetHome.portfolio,
    transactions: (store: RootState) => store.cabinetHome.transactions,
    currency_list: (store: RootState) => store.cabinetHome.currency_list,
    current_currency: (store: RootState) => store.cabinetHome.current_currency,
    current_crypto_currency: (store: RootState) => store.cabinetHome.current_crypto_currency,
    current_duration: (store: RootState) => store.cabinetHome.current_duration,
    home_load_chart: (store: RootState) => store.cabinetHome.load_chart,
    home_updating_chart: (store: RootState) => store.cabinetHome.updating_chart,
}

export default homeSelector

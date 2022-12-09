// Type
import { RootState } from 'store'


const portfolioSelect = {
    tab: (store: RootState) => store.portfolio.tab,
    bread_crumbs: (store: RootState) => store.portfolio.bread_crumbs,
    generate_report_mode: (store: RootState) => store.portfolio.generate_report_mode,
    add_wallet__mode: (store: RootState) => store.portfolio.add_wallet__mode,
    balance_duration: (store: RootState) => store.portfolio.balance_duration,
    currency_duration: (store: RootState) => store.portfolio.currency_duration,
    chart: (store: RootState) => store.portfolio.chart,
    balance: (store: RootState) => store.portfolio.balance,
    empty_balance_mode: (store: RootState) => store.portfolio.empty_balance_mode,
    search_wallet: (store: RootState) => store.portfolio.search_wallet,
    add_search_wallet: (store: RootState) => store.portfolio.add_search_wallet,
    wallets: (store: RootState) => store.portfolio.wallets,
    currencies: (store: RootState) => store.portfolio.currencies,
    // Error

    // Load
    load_first: (store: RootState) => store.portfolio.load_first,
    load_first_currency: (store: RootState) => store.portfolio.load_first_currency,
    load_balance_chart: (store: RootState) => store.portfolio.load_balance_chart,
    load_wallet: (store: RootState) => store.portfolio.load_wallet,
    load_currency: (store: RootState) => store.portfolio.load_currency,
}

export default portfolioSelect

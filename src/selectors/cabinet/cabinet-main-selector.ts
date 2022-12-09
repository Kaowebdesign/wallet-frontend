// Type
import { RootState } from 'store'


const cabinetMainSelect = {
    form_errors: (store: RootState) => store.cabinet.form_errors,
    menu_mode: (store: RootState) => store.cabinet.menu_mode,
    sider_mode: (store: RootState) => store.cabinet.sider_mode,
    auto_logout: (store: RootState) => store.cabinet.auto_logout,
    currency_list_crypto: (store: RootState) => store.cabinet.currency_list_crypto,
    currency_list_fiat: (store: RootState) => store.cabinet.currency_list_fiat,
    send_asset_mode: (store: RootState) => store.cabinet.send_asset_mode,
    receive_asset_mode: (store: RootState) => store.cabinet.receive_asset_mode,
    notification_mode: (store: RootState) => store.cabinet.notification_mode,
    // Load
    load_form: (store: RootState) => store.cabinet.load_form,
    load_currency_list_crypto: (store: RootState) => store.cabinet.load_currency_list_crypto,
    load_currency_list_fiat: (store: RootState) => store.cabinet.load_currency_list_fiat,
}

export default cabinetMainSelect

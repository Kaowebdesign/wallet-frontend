// Type
import { RootState } from 'store'

const settingsCabinetSelect = {
     settings: (store: RootState) => store.cabinetSettings.settings,
     load_settings: (store: RootState) => store.cabinetSettings.load_settings,
     user_timezone: (store: RootState) => store.cabinetSettings.user_timezone,
     currency: (store: RootState) => store.cabinetSettings.currency,
     errors: (store: RootState) => store.cabinetSettings.errors,
     valid_password: (store: RootState) => store.cabinetSettings.valid_password,
     load_form: (store: RootState) => store.cabinetSettings.load_form,
     // form_errors: (store: RootState) => store.cabinetSettings.form_errors,
     tab: (store: RootState) => store.cabinetSettings.tab,
     password_errors: (store: RootState) => store.cabinetSettings.password_errors,
     logout_errors: (store: RootState) => store.cabinetSettings.logout_errors,
     twofa_errors: (store: RootState) => store.cabinetSettings.twofa_errors,
     twofa_data: (store: RootState) => store.cabinetSettings.twofa_data,
     twoda_data_google: (store: RootState) => store.cabinetSettings.twoda_data_google,
     twofa_disabled_email: (store: RootState) => store.cabinetSettings.twofa_disabled_email,
     twofa_disabled_google: (store: RootState) => store.cabinetSettings.twofa_disabled_google,
     wallet_list: (store: RootState) => store.cabinetSettings.wallet_list,
     close_account_errors: (store: RootState) => store.cabinetSettings.close_account_errors,
}

export default settingsCabinetSelect

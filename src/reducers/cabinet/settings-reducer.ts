// Core
import produce, {Draft} from 'immer'
// Utils
import {config} from "utils"
// Type
import {settingsCabinetReducerType} from 'actions/cabinet/settings-action'
import {
    TUserTimezones, TCurrency, TSettings, ITwoFaData,
    ETwoFaMethod, ETwoFaType, IWalletListItem
} from 'types/cabinet/settings-type'


const initialState = {
    tab: null as string | null,
    valid_password: false,
    errors: null as any,
    success: null as any,
    password_errors: null as any,
    logout_errors: null as any,
    load_settings: true as boolean,
    load_settings_error: false as boolean,
    twofa_errors: null as any,
    close_account_errors: null as any,
    twofa_data: null,
    twoda_data_google: null as null | ITwoFaData,
    twofa_disabled_email: '' as String,
    twofa_disabled_google: '' as String,
    settings: {
        currency_id: '',
        lang: '',
        timezone: '',
        two_factor_method: ETwoFaType.disabled,
        notif_currency: null,
        notif_info: null,
        notification_email: 0,
        notification_sms: 0,
        auto_logout: 0
    } as TSettings,
    user_timezone: [] as TUserTimezones,
    currency: [] as TCurrency,
    wallet_list: [] as IWalletListItem[],
    // Loader
    load_form: false,
}

type InitialStateType = typeof initialState

export const cabinetSettingsReducer = (state: InitialStateType = initialState, action: settingsCabinetReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Setting
            case "SETTINGS__SET_USER_TIMEZONE":
                draft.user_timezone = action.payload.data.timezones
                break
            case "SETTINGS__SET__BASE":
                draft.settings = action.payload.data.settings
                break
            case "SETTINGS__SET__CURRENCY":
                draft.currency = action.payload.data.currency
                break
            case "SETTINGS__SET_ERRORS":
                draft.errors = action.payload.data
                break
            case "SETTINGS__SET_VALID_PASSWORD":
                draft.valid_password = action.payload.mode
                break
            case "SETTINGS__SET__TAB":
                draft.tab = action.payload.mode
                break
            case "SETTINGS__LOAD_SETTINGS":
                draft.load_settings = action.payload.mode
                break
            case "SETTINGS__DISABLED_TWOFA_EMAIL":
                draft.twofa_disabled_email = action.payload
                break
            case "SETTINGS__DISABLED_TWOFA_GOOGLE":
                draft.twofa_disabled_google = action.payload
                break
            case "SETTINGS__PASSWORD_ERRORS":
                draft.password_errors = action.payload.data
                break
            case "SETTINGS__LOGOUT_ERRORS":
                draft.logout_errors = action.payload.data
                break
            case "SETTINGS__TWOFA_ERRORS":
                draft.twofa_errors = action.payload.data
                break
            case "SETTINGS__CLOSE_ACCOUNT_ERRORS":
                draft.close_account_errors = action.payload.data
                break
            // Loader
            case "SETTINGS__LOAD_FORM":
                draft.load_form = action.payload.mode
                break
            case "SETTINGS__SET__TWOFA_DATA": {
                action.payload.method === ETwoFaMethod.EMAIL ?
                    draft.twofa_data = action.payload.data
                :
                    draft.twoda_data_google = action.payload.data
                break
            }
            case "SETTINGS__SET__NULL_TWOFA_DATA":
                draft.twofa_data = null
                draft.twoda_data_google = null
                break
            case "SETTINGS__SET__WALLET_LIST":
                draft.wallet_list = action.payload.data
                break
            // Async
            case "SETTINGS__WATCH__BASE": return state
            case "SETTINGS__UPDATE__BASE": return state
            case "SETTINGS__WATCH__CHANGE_PASSWORD": return state
            case "SETTINGS__WATCH__TWOFA_CONNECT": return state
            case "SETTINGS__WATCH__TWOFA_CONNECT_REQUEST": return state
            case "SETTINGS__WATCH__TWOFA_DISCONNECT": return state
            case "SETTINGS__WATCH__TWOFA_DISCONNECT_REQUEST": return state
            case "SETTINGS__WATCH__WALLET_LIST": return state
            case "SETTINGS__WATCH__CLOSE_ACCOUNT": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}

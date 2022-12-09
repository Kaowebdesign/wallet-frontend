// Core
import produce, {Draft} from 'immer'
// Utils
import {config} from 'utils'
// Type
import {CabinetActionReducerType} from 'actions/cabinet/cab-main-action'
import {MenuList, TCurrencyList} from 'types/cabinet/cabinet-main-type'


const initialState = {
    form_errors: null as any,
    menu_mode: null as MenuList | null,
    sider_mode: false,
    auto_logout: null as null | number,
    currency_list_crypto: null as null | TCurrencyList[],
    currency_list_fiat: null as null | TCurrencyList[],
    send_asset_mode: false,
    receive_asset_mode: false,
    notification_mode: false,
    // Loader
    load_form: false,
    load_currency_list_crypto: false,
    load_currency_list_fiat: false,
}

type InitialStateType = typeof initialState

export const cabMainReducer = (state: InitialStateType = initialState, action: CabinetActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Setting
            case "CABINET__SET__ERROR_FORM":
                draft.form_errors = action.payload.data
                break
            case "CABINET__SET__MENU_MODE":
                draft.menu_mode = action.payload.mode
                break
            case "CABINET__SET__SIDER_MODE":
                draft.sider_mode = action.payload.mode
                break
            case "CABINET__SET__AUTO_LOGOUT":
                draft.auto_logout = action.payload.second
                break
            case "CABINET__SET__CURRENCY_LIST_CRYPTO":
                draft.currency_list_crypto = action.payload.data
                break
            case "CABINET__SET__CURRENCY_LIST_FIAT":
                draft.currency_list_fiat = action.payload.data
                break
            case "CABINET__SET__SEND_ASSET_MODE":
                draft.send_asset_mode = action.payload.mode
                break
            case "CABINET__SET__RECEIVE_ASSET_MODE":
                draft.receive_asset_mode = action.payload.mode
                break
            case "CABINET__SET__NOTIFICATION_MODE":
                draft.notification_mode = action.payload.mode
                break
            // Create

            // Update
            case "CABINET__TICK__AUTO_LOGOUT":
                if (draft.auto_logout) {
                    draft.auto_logout = draft.auto_logout - 1
                } else {
                    return state
                }
                break
            // Delete

            // Load
            case "CABINET__LOAD__FORM":
                draft.load_form = action.payload.mode
                break

            // Clear
            case "CABINET__CLEAR__MENU_MODE":
                draft.menu_mode = 'home'
                break
            case "CABINET__LOAD__CURRENCY_LIST_CRYPTO":
                draft.load_currency_list_crypto = action.payload.mode
                break
            case "CABINET__LOAD__CURRENCY_LIST_FIAT":
                draft.load_currency_list_fiat = action.payload.mode
                break
            // Async
            case "CABINET__WATCH__CURRENCY_LIST": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}

// Core
import produce, {Draft} from 'immer'
// Type
import { CabinetProfileActionReducerType } from 'actions/cabinet/profile-action'
import {TProfileInfo, TProfileAddress, TPhoneCodes, TAddressTable, TAddressTableSort, TActivityTable, TActivityTableSort} from "types/cabinet/profile"


const initialState = {
    tab: null as string | null,
    phone_codes: [] as TPhoneCodes[],
    guess_country: null as null | string,
    info: {
       first_name: '',
        last_name: '',
        phone: '',
        phonecode_id: '',
        email: '',
        day: '',
        mouth: '',
        year: '',
        login: ''
    } as TProfileInfo,
    address: {
        country: '',
        state: '',
        city: '',
        zip: '',
        address: '',
        apartment: '',
        second_address: '',
    } as TProfileAddress,
    address_table: null as null | TAddressTable,
    address_table_search: '' as string,
    address_table_sort: undefined as TAddressTableSort,
    activity_table: null as null | TActivityTable,
    activity_table_sort: undefined as TActivityTableSort,
    // Error
    error_info: null as any,
    error_address: null as any,
    error_avatar: null as null | string,
    error_address_table_modal_form: null as any,
    // Load
    load_first: [] as string[],
    load_account: false,
    load_info: false,
    load_address: false,
    load_avatar: false,
    load_address_table: false,
    load_address_table_search: false,
    load_address_table_modal_form: false,
    load_activity_table: false,
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: CabinetProfileActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Setter
            case "PROFILE__SET__TAB":
                draft.tab = action.payload.mode
                break
            case "PROFILE__SET__INFO":
                draft.info = action.payload.data
                break
            case "PROFILE__SET__ADDRESS":
                draft.address = action.payload.data
                break
            case "PROFILE__SET__PHONE_CODE":
                draft.phone_codes = action.payload.data
                break
            case "PROFILE__SET__GUESS_COUNTRY":
                draft.guess_country = action.payload.data
                break
            case "PROFILE__SET__ADDRESS_TABLE":
                draft.address_table = action.payload.data
                break
            case "PROFILE__SET__ADDRESS_TABLE_SEARCH":
                draft.address_table_search = action.payload.val
                break
            case "PROFILE__SET__ADDRESS_TABLE_SORT":
                draft.address_table_sort = action.payload.sort
                break
            case "PROFILE__SET__ACTIVITY_TABLE":
                draft.activity_table = action.payload.data
                break
            case "PROFILE__SET__ACTIVITY_TABLE_SORT":
                draft.activity_table_sort = action.payload.sort
                break
            // Load
            case "PROFILE__LOAD__ACCOUNT":
                draft.load_account = action.payload.mode
                break
            case "PROFILE__LOAD__INFO":
                draft.load_info = action.payload.mode
                break
            case "PROFILE__LOAD__ADDRESS":
                draft.load_address = action.payload.mode
                break
            case "PROFILE__LOAD__AVATAR":
                draft.load_avatar = action.payload.mode
                break
            case "PROFILE__LOAD__ADDRESS_TABLE":
                draft.load_address_table = action.payload.mode
                break
            case "PROFILE__LOAD__ADDRESS_TABLE_MODAL_FORM":
                draft.load_address_table_modal_form = action.payload.mode
                break
            case "PROFILE__LOAD__ADDRESS_TABLE_SEARCH":
                draft.load_address_table_search = action.payload.mode
                break
            case "PROFILE__LOAD__ACTIVITY_TABLE":
                draft.load_activity_table = action.payload.mode
                break
            // Create

            // Update
            case "PROFILE__UPDATE__INFO":
                draft.info = action.payload.data
                break
            case "PROFILE__UPDATE__ADDRESS":
                draft.address = action.payload.data
                break
            case "PROFILE__ERROR__AVATAR":
                draft.error_avatar = action.payload.error
                break
            case "PROFILE__UPDATE__LOAD_FIRST":
                if (!draft.load_first.includes(action.payload.load)) {
                    draft.load_first.push(action.payload.load)
                } else {
                    return state
                }
                break
            // Delete

            // Error
            case "PROFILE__ERROR__INFO":
                draft.error_info = action.payload.data
                break
            case "PROFILE__ERROR__ADDRESS":
                draft.error_address = action.payload.data
                break
            case "PROFILE__ERROR__ADDRESS_TABLE_MODAL_FORM":
                draft.error_address_table_modal_form = action.payload.error
                break
            //Close

            // Async
            case "PROFILE__WATCH__ACCOUNT": return state
            case "PROFILE__WATCH__UPDATE_INFO": return state
            case "PROFILE__WATCH__UPDATE_ADDRESS": return state
            case "PROFILE__WATCH__UPDATE_AVATAR": return state
            case "PROFILE__WATCH__ADDRESS_TABLE": return state
            case "PROFILE__WATCH__ADDRESS_TABLE_FORM": return state
            case "PROFILE__WATCH__ADDRESS_TABLE_DELETE": return state
            case "PROFILE__WATCH__ACTIVITY_TABLE": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}

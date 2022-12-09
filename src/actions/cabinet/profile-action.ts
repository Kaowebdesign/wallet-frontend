// Type
import { ActionsCreatorType } from "store"
import { IPaginationParamsFull, IPaginationParamsWithSort } from "types/app-type"
import {
    TProfileInfo, TProfileAddress, TPhoneCodes, TAddressTable,
    IAddressTableItemBase, TAddressTableSort, TActivityTableSort, TActivityTable,
} from "types/cabinet/profile"


export const PROFILE__WATCH__ACCOUNT = 'PROFILE__WATCH__ACCOUNT'
export const PROFILE__WATCH__UPDATE_INFO = 'PROFILE__WATCH__UPDATE_INFO'
export const PROFILE__WATCH__UPDATE_ADDRESS = 'PROFILE__WATCH__UPDATE_ADDRESS'
export const PROFILE__WATCH__UPDATE_AVATAR = 'PROFILE__WATCH__UPDATE_AVATAR'
export const PROFILE__WATCH__ADDRESS_TABLE = 'PROFILE__WATCH__ADDRESS_TABLE'
export const PROFILE__WATCH__ADDRESS_TABLE_FORM = 'PROFILE__WATCH__ADDRESS_TABLE_FORM'
export const PROFILE__WATCH__ADDRESS_TABLE_DELETE = 'PROFILE__WATCH__ADDRESS_TABLE_DELETE'
export const PROFILE__WATCH__ACTIVITY_TABLE = 'PROFILE__WATCH__ACTIVITY_TABLE'


const profileActions = {
    // Setter
    set_tab:(mode: string) => ({type: 'PROFILE__SET__TAB', payload: {mode}} as const),
    set_info:(data: TProfileInfo) => ({type: 'PROFILE__SET__INFO', payload: {data}} as const),
    set_address:(data: TProfileAddress) => ({type: 'PROFILE__SET__ADDRESS', payload: {data}} as const),
    set_phone_code:(data: TPhoneCodes[]) => ({type: 'PROFILE__SET__PHONE_CODE', payload: {data}} as const),
    set_guess_country:(data: null | string) => ({type: 'PROFILE__SET__GUESS_COUNTRY', payload: {data}} as const),
    set_address_table:(data: TAddressTable) => ({type: 'PROFILE__SET__ADDRESS_TABLE', payload: {data}} as const),
    set_address_table_search:(val: string) => ({type: 'PROFILE__SET__ADDRESS_TABLE_SEARCH', payload: {val}} as const),
    set_address_table_sort:(sort: TAddressTableSort) => ({type: 'PROFILE__SET__ADDRESS_TABLE_SORT', payload: {sort}} as const),
    set_activity_table:(data: TActivityTable) => ({type: 'PROFILE__SET__ACTIVITY_TABLE', payload: {data}} as const),
    set_activity_table_sort:(sort: TActivityTableSort) => ({type: 'PROFILE__SET__ACTIVITY_TABLE_SORT', payload: {sort}} as const),
    // Create

    // Update
    update_info: (data: TProfileInfo) => ({type: 'PROFILE__UPDATE__INFO', payload: {data}} as const),
    update_address: (data: TProfileAddress) => ({type: 'PROFILE__UPDATE__ADDRESS', payload: {data}} as const),
    update_load_first: (load: string) => ({type: 'PROFILE__UPDATE__LOAD_FIRST', payload: {load}} as const),
    // Delete

    // Error
    error_info: (data: any) => ({type: 'PROFILE__ERROR__INFO', payload: {data}} as const),
    error_address: (data: any) => ({type: 'PROFILE__ERROR__ADDRESS', payload: {data}} as const),
    error_avatar: (error: string | null) => ({type: 'PROFILE__ERROR__AVATAR', payload: {error}} as const),
    error_address_table_modal_form: (error: any) => ({type: 'PROFILE__ERROR__ADDRESS_TABLE_MODAL_FORM', payload: {error}} as const),
    // Load

    load_account: (mode: boolean) => ({type: 'PROFILE__LOAD__ACCOUNT', payload: {mode}} as const),
    load_info: (mode: boolean) => ({type: 'PROFILE__LOAD__INFO', payload: {mode}} as const),
    load_address: (mode: boolean) => ({type: 'PROFILE__LOAD__ADDRESS', payload: {mode}} as const),
    load_avatar: (mode: boolean) => ({type: 'PROFILE__LOAD__AVATAR', payload: {mode}} as const),
    load_address_table: (mode: boolean) => ({type: 'PROFILE__LOAD__ADDRESS_TABLE', payload: {mode}} as const),
    load_address_table_search: (mode: boolean) => ({type: 'PROFILE__LOAD__ADDRESS_TABLE_SEARCH', payload: {mode}} as const),
    load_address_table_modal_form: (mode: boolean) => ({type: 'PROFILE__LOAD__ADDRESS_TABLE_MODAL_FORM', payload: {mode}} as const),
    load_activity_table: (mode: boolean) => ({type: 'PROFILE__LOAD__ACTIVITY_TABLE', payload: {mode}} as const),
    //Close

    // Async
    watch_account: (hasList: boolean) => ({type: PROFILE__WATCH__ACCOUNT, payload: {hasList}} as const),
    watch_update_info: (data: TProfileInfo) => ({type: PROFILE__WATCH__UPDATE_INFO, payload: {...data}} as const),
    watch_update_address: (data: TProfileAddress) => ({type: PROFILE__WATCH__UPDATE_ADDRESS, payload: {...data}} as const),
    watch_update_avatar: (avatar: any) => ({type: PROFILE__WATCH__UPDATE_AVATAR, payload: avatar} as const),
    watch_address_table: (data: IPaginationParamsFull<TAddressTableSort> ) => ({type: PROFILE__WATCH__ADDRESS_TABLE, payload: {data, type:'default'}} as const),
    watch_address_table_search: (data: IPaginationParamsFull<TAddressTableSort> ) => ({type: PROFILE__WATCH__ADDRESS_TABLE, payload: {data, type:'search'}} as const),
    watch_address_table_sort: (data: IPaginationParamsFull<TAddressTableSort> ) => ({type: PROFILE__WATCH__ADDRESS_TABLE, payload: {data, type:'sort'}} as const),
    watch_address_search: (data: Omit<IPaginationParamsFull<TAddressTableSort>, 'page'> ) => ({type: PROFILE__WATCH__ADDRESS_TABLE, payload: {...data}} as const),
    watch_address_table_add: (data: IAddressTableItemBase ) => ({type: PROFILE__WATCH__ADDRESS_TABLE_FORM, payload: {data, type: 'add'}} as const),
    watch_address_table_edit: (data: IAddressTableItemBase, id: string ) => ({type: PROFILE__WATCH__ADDRESS_TABLE_FORM, payload: {data, id, type: 'update'}} as const),
    watch_address_table_delete: (id: string ) => ({type: PROFILE__WATCH__ADDRESS_TABLE_DELETE, payload: {id}} as const),
    watch_activity_table: (data: IPaginationParamsWithSort<TActivityTableSort>) => ({type: PROFILE__WATCH__ACTIVITY_TABLE, payload: {data, type:'default'}} as const),
    watch_activity_table_sort: (data: IPaginationParamsWithSort<TActivityTableSort>) => ({type: PROFILE__WATCH__ACTIVITY_TABLE, payload: {data, type:'sort'}} as const),
}

export type CabinetProfileActionReducerType = ActionsCreatorType<typeof profileActions>

export default profileActions

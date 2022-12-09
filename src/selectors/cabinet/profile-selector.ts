// Type
import { RootState } from 'store'


const profileSelect = {
    tab: (store: RootState) => store.profile.tab,
    info: (store: RootState) => store.profile.info,
    address: (store: RootState) => store.profile.address,
    phone_codes: (store: RootState) => store.profile.phone_codes,
    guess_country: (store: RootState) => store.profile.guess_country,
    address_table: (store: RootState) => store.profile.address_table,
    address_table_search: (store: RootState) => store.profile.address_table_search,
    address_table_sort: (store: RootState) => store.profile.address_table_sort,
    activity_table: (store: RootState) => store.profile.activity_table,
    activity_table_sort: (store: RootState) => store.profile.activity_table_sort,
    // Error
    error_info: (store: RootState) => store.profile.error_info,
    error_address: (store: RootState) => store.profile.error_address,
    error_avatar: (store: RootState) => store.profile.error_avatar,
    error_address_table_modal_form: (store: RootState) => store.profile.error_address_table_modal_form,
    // Load
    load_first: (store: RootState) => store.profile.load_first,
    load_account: (store: RootState) => store.profile.load_account,
    load_info: (store: RootState) => store.profile.load_info,
    load_address: (store: RootState) => store.profile.load_address,
    load_avatar: (store: RootState) => store.profile.load_avatar,
    load_address_table: (store: RootState) => store.profile.load_address_table,
    load_address_table_search: (store: RootState) => store.profile.load_address_table_search,
    load_address_table_modal_form: (store: RootState) => store.profile.load_address_table_modal_form,
    load_activity_table: (store: RootState) => store.profile.load_activity_table,
}

export default profileSelect

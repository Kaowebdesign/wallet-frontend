// Core
import {makeRequest} from "sagas/template"
import { select } from "redux-saga/effects"
// Api
import {profileApi} from "api/cabinet"
// Select
import {profileSelect} from 'selectors/cabinet'
// Action
import { profileActions } from 'actions/cabinet'
import {appActions, authActions} from "actions"
// Type
import {WorkerProps} from "sagas/root-saga"
import {IPaginationParamsFull, TPushMessage} from "types/app-type"
import {
    TInit, TProfileInfo, TProfileAddress, TInitProfile, TAddressTable,
    IAddressTableItemBase, TAddressTableSort, TActivityTableSort, TActivityTable
} from 'types/cabinet/profile'


export function* workerAccount({payload}: WorkerProps<{hasList: boolean}>): Generator {

    const handlerInfo = (data: TInit) => ({
        first_name: data.profile.first_name,
        last_name: data.profile.last_name,
        email: data.profile.email,
        login: data.profile.login,
        phone: data.profile.phone,
        phonecode_id: data.profile.phonecode_id,
        day: data.profile.birth_date.length ? data.profile.birth_date.slice(8, 10) : '',
        mouth: data.profile.birth_date.length ? data.profile.birth_date.slice(6, 7) : '',
        year: data.profile.birth_date.length ? data.profile.birth_date.slice(0, 4) : '',
    })

    const handlerAddress = (data: TInit) => ({
        country: data.profile.country,
        state: data.profile.state,
        city: data.profile.city,
        zip: data.profile.zip,
        address: data.profile.address,
        apartment: data.profile.apartment,
        second_address: data.profile.second_address,
    })

    const prepareFills = [
        {action: profileActions.set_info, handler: handlerInfo},
        {action: profileActions.set_address, handler: handlerAddress},
        {action: profileActions.set_guess_country, handler: (data: {profile: TInitProfile}) => data.profile.guess_country},
        {action: profileActions.set_phone_code, handler: (data: TInit) => (data.phonecodes)},
    ]

    yield makeRequest({
        // @ts-ignore
        fetcher: profileApi.account,
        fetcherParam: [
            payload.hasList ? '' : '?nocodes=1',
        ],
        start: [
            {action: profileActions.load_account, handler: () => true}
        ],
        finish: [
            {action: profileActions.load_account, handler: () => false}
        ],
        success: payload.hasList ? prepareFills : [prepareFills[0], prepareFills[1]],
    })
}

export function* workerUpdateInfo({payload}: WorkerProps<TProfileInfo>): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: profileApi.update_info,
        fetcherParam: [{...payload, birth_date: payload.year && payload.mouth && payload.day ? `${payload.year}-${payload.mouth}-${payload.day}` : ''}],
        start: [
            {action: profileActions.load_info, handler: () => true}
        ],
        finish: [
            {action: profileActions.load_info, handler: () => false}
        ],
        success: [
            {action: profileActions.update_info, handler: () => payload},
            {action: authActions.update_login, handler: () => payload.login},
            {action:appActions.set_push, handler: () => ({title: 'Success', content: 'Personal Info been successfully updated'} as TPushMessage)},
        ],
        validation: [
            {action: profileActions.error_info},
            {action: profileActions.error_info, handler: () => null}
        ],
    })
}

export function* workerUpdateAddress({payload}: WorkerProps<TProfileAddress>): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: profileApi.update_address,
        fetcherParam: [payload],
        start: [
            {action: profileActions.load_address, handler: () => true}
        ],
        finish: [
            {action: profileActions.load_address, handler: () => false}
        ],
        success: [
            {action: profileActions.update_address, handler: () => payload},
            {action:appActions.set_push, handler: () => ({title: 'Success', content: 'Registered Address been successfully updated'} as TPushMessage)},
        ],
        validation: [
            {action: profileActions.error_address},
            {action: profileActions.error_address, handler: () => null}
        ],
    })
}

export function* workerUpdateAvatar({payload}: WorkerProps<any>): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: profileApi.update_avatar,
        fetcherParam: [payload],
        start: [
            {action: profileActions.load_avatar, handler: () => true},
            {action: profileActions.error_avatar, handler: () => null},
        ],
        finish: [
            {action: profileActions.load_avatar, handler: () => false}
        ],
        success: [
            {action: authActions.update_avatar, handler: (data: {image: string, file: string}) => data.image + `&${Math.floor(Math.random() * 10000) + 1}`}
        ],
        validation: [
            {action: profileActions.error_avatar, handler: (data: {file: string}) => data.file}
        ],
    })
}

export function* workerAddressTable({payload}: WorkerProps<{data: IPaginationParamsFull<TAddressTableSort>, type: 'default' | 'search' | 'sort'}>): Generator {

    const prepareStart = [
        {action: profileActions.load_address_table, handler: () => true},
        {action: profileActions.load_address_table_search, handler: () => true},
        {action: profileActions.set_address_table_sort, handler: () => payload.data.sort},
    ]

    const prepareFinish = [
        {action: profileActions.load_address_table, handler: () => false},
        {action: profileActions.load_address_table_search, handler: () => false},
    ]

    yield makeRequest({
        // @ts-ignore
        fetcher: profileApi.addresses_list,
        fetcherParam: [payload.data.page, payload.data.pageSize, payload.data.sort, payload.data.search],
        start: payload.type === 'default'
            ? [prepareStart[0]] : payload.type === 'search'
                ? [prepareStart[0], prepareStart[1]]
                : prepareStart,
        finish: payload.type === 'default' ? [prepareFinish[0]] : prepareFinish,
        success: [
            {action: profileActions.set_address_table, handler: (data: TAddressTable) => data}
        ],
    })
}

export function* workerAddressTableForm({payload}: WorkerProps<{data: IAddressTableItemBase, id: string , type: 'add' | 'update'}>): Generator {
    const addressTable = (yield select(profileSelect.address_table)) as TAddressTable
    const sort = yield select(profileSelect.address_table_sort)
    const search = yield select(profileSelect.address_table_search)

    yield makeRequest({
        // @ts-ignore
        fetcher: payload.type === 'add' ? profileApi.addresses_list_add : profileApi.addresses_list_update,
        fetcherParam: payload.type === 'add' ? [payload.data] : [payload.data, payload.id],
        start: payload.type === 'add' ? [
            {action: profileActions.load_address_table_modal_form, handler: () => true}
        ] : [],
        finish: payload.type === 'add' ? [
            {action: profileActions.load_address_table_modal_form, handler: () => false}
        ] : [],
        success:  [
            {action: profileActions.watch_address_table, handler: () => ({
                    page: addressTable.pagination.page,
                    pageSize: addressTable.pagination.pageSize,
                    sort,
                    search,
            })},
            {action:appActions.set_push, handler: () => ({title: 'Success', content: payload.type === 'add'
                ? `Address been successfully create`
                : `Address been successfully update`
            } as TPushMessage)},
        ],
        validation: [
            {action: profileActions.error_address_table_modal_form},
            {action: profileActions.error_address_table_modal_form, handler: () => null}
        ]
    })
}

export function* workerAddressTableDelete({payload}: WorkerProps<{id: string}>): Generator {
    const addressTable = (yield select(profileSelect.address_table)) as TAddressTable
    const sort = yield select(profileSelect.address_table_sort)
    const search = yield select(profileSelect.address_table_search)

    yield makeRequest({
        // @ts-ignore
        fetcher: profileApi.addresses_list_remove,
        fetcherParam: [payload.id],
        start: [
            {action: profileActions.load_address_table_modal_form, handler: () => true}
        ],
        finish: [
            {action: profileActions.load_address_table_modal_form, handler: () => false}
        ],
        success:  [
            {action: profileActions.watch_address_table, handler: () => ({
                    page: addressTable.pagination.page,
                    pageSize: addressTable.pagination.pageSize,
                    sort,
                    search,
                })},
            {action:appActions.set_push, handler: () => ({title: 'Success', content: 'Address been successfully delete'} as TPushMessage)},
        ],
    })
}


export function* workerActivityTable({payload}: WorkerProps<{data: IPaginationParamsFull<TActivityTableSort>, type: 'default' | 'sort'}>): Generator {

    const prepareStart = [
        {action: profileActions.load_activity_table, handler: () => true},
        {action: profileActions.set_activity_table_sort, handler: () => payload.data.sort},
    ]

    yield makeRequest({
        // @ts-ignore
        fetcher: profileApi.activity_list,
        fetcherParam: [payload.data.page, payload.data.pageSize, payload.data.sort],
        start: payload.type === 'default' ? [prepareStart[0]] : prepareStart,
        finish:[
            {action: profileActions.load_activity_table, handler: () => false},
        ],
        success: [
            {action: profileActions.set_activity_table, handler: (data: TActivityTable) => data}
        ],
    })
}

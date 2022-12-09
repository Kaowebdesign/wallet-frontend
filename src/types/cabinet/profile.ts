// Types
import {TPagination} from 'types/app-type'

export type TProfileTab = 'account-details' | 'saved-addresses' | 'activity'

export interface TProfileInfoBase {
    first_name: string
    last_name: string
    email: string
    phone: string
    phonecode_id: string
    login: string
}

export interface TProfileInfo extends TProfileInfoBase {
    day: string
    mouth: string
    year: string
}

export interface TProfileAddress {
    country: string
    state: string
    city: string
    zip: string
    address: string
    apartment: string
    second_address: string
}

export interface TPhoneCodes {
    id: string
    flag: string
    name: string
    dial: string
}

export interface TInitProfile extends TProfileAddress, TProfileInfoBase {
    birth_date: string
    guess_country: string
}

export type TInit = {
    profile: TInitProfile,
    phonecodes: TPhoneCodes[] & []
}

export interface IAddressTableItemBase {
    name: string
    wallet_address: string
    currency_id: string
}

export interface IAddressTableItem extends IAddressTableItemBase {
    id: string
    full_name: string
    icon: string
}

export type IActivityTableItem = {
    id: string
    ip: string
    agent: string
    created_at: string
    status: string
    city: string
    region: string
    device: string
    browser: string
}

export type TAddressTable = {
    items: IAddressTableItem[]
    pagination: TPagination
}

export type TActivityTable = {
    items: IActivityTableItem[]
    pagination: TPagination
}

export type TAddressTableSort = 'name' | '-name' | 'currency' | '-currency' | undefined
export type TActivityTableSort = 'date' | '-date' | undefined

export type AlertType = {
    type: 'success' | 'error' | 'info' | 'warning'
    header: string,
    text: string
}

export type TPushMessage = {
    title: string
    content: string
}

export type Language = 'en' | 'ru' | 'de'

export type TPagination = {
    shownFrom: number
    shownTo: number
    totalCount: number
    pageCount: number
    pageParam: 'page'
    pageSize: string
    page: number
    links: {
        self: string
        first: string
        last: string
        next: string
    }
}

export interface IPaginationParamsBasic {
    page?: string | undefined
    pageSize?: string | undefined
}

export interface IPaginationParamsWithSearch extends IPaginationParamsBasic {
    search?: string | undefined
}

export interface IPaginationParamsWithSort<S = undefined> extends IPaginationParamsBasic {
    sort?: S
}


export interface IPaginationParamsFull<S = undefined> extends IPaginationParamsBasic {
    search?: string | undefined
    sort?: S
}


export type TGetSortParams<K = undefined> = {
    column: {
        key: K | undefined
    }
    order: 'ascend' | 'descend' | undefined
}

// Api
import qs from 'qs'
import { instance, ResponseApiType } from "../api"
// Type
import {Language} from 'types/app-type'
import {IAddressTableItemBase, TActivityTableSort, TAddressTableSort, TInit, TProfileAddress, TProfileInfo} from 'types/cabinet/profile'


const settingsApi = {
    // Load
    account(lang: Language, token: string, hasLIst: string) {
        return instance.get<ResponseApiType<TInit>>(`user/profile${hasLIst}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    addresses_list(
        lang: Language,
        token: string,
        page: string | undefined,
        pageSize?: string | undefined,
        sort?: TAddressTableSort,
        search?: string | undefined,
    ) {
        const pageParam  = page ? `page=${page}`: ''
        const pageSizeParam  = pageSize ? `${pageParam.length ? '&' : ''}per-page=${pageSize}`: ''
        const sortParam  = sort ? `${pageParam.length || pageSizeParam.length ? '&' : ''}sort=${sort}`: ''
        const searchParam  = search ? `${pageParam.length || pageSizeParam.length || sortParam.length ? '&' : ''}UserAddressesSearch[name]=${search}`: ''
        const query = pageParam.length || pageSizeParam.length || sortParam.length || searchParam.length ? `?${pageParam}${pageSizeParam}${sortParam}${searchParam}` : ''

        return instance.get<ResponseApiType>(`wallet/addresses${query}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    activity_list(
        lang: Language,
        token: string,
        page: string | undefined,
        pageSize?: string | undefined,
        sort?: TActivityTableSort,
    ) {
        const pageParam  = page ? `page=${page}`: ''
        const pageSizeParam  = pageSize ? `${pageParam.length ? '&' : ''}per-page=${pageSize}`: ''
        const sortParam  = sort ? `${pageParam.length || pageSizeParam.length ? '&' : ''}sort=${sort}`: ''
        const query = pageParam.length || pageSizeParam.length || sortParam.length ? `?${pageParam}${pageSizeParam}${sortParam}` : ''

        return instance.get<ResponseApiType>(`user/get-sessions${query}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    // Create
    addresses_list_add(lang: Language, token: string, data: IAddressTableItemBase) {
        return instance.post<ResponseApiType>(`wallet/add-address`, qs.stringify(data),{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    addresses_list_update(lang: Language, token: string, data: IAddressTableItemBase, id: string) {
        return instance.post<ResponseApiType>(`wallet/update-address/${id}`, qs.stringify(data),{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },

    // Update
    update_info(lang: Language, token: string, data: TProfileInfo) {
        return instance.post<ResponseApiType<TInit>>(`user/update-profile`, qs.stringify(data),{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    update_address(lang: Language, token: string,  data: TProfileAddress) {
        return instance.post<ResponseApiType<TInit>>(`user/update-profile?form=address`, qs.stringify(data),{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    update_avatar(lang: Language, token: string, avatar: any) {
        const formData = new FormData()
        formData.append('file', avatar)

        return instance.post<ResponseApiType<TInit>>(`user/update-profile`,  formData,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            }
        }).then(data => data.data)
    },

    // Delete
    addresses_list_remove(lang: Language, token: string, id: string) {
        return instance.get<ResponseApiType<TInit>>(`wallet/remove-address/${id}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
}

export default settingsApi

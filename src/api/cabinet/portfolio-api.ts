// Api
import qs from 'qs'
import { instance, ResponseApiType } from "../api"
// Type
import {Language} from 'types/app-type'
import {EWalletDuration} from 'types/cabinet/cabinet-main-type'


const settingsApi = {
    // Load
    balance(lang: Language, token: string, duration: EWalletDuration) {
        return instance.get<ResponseApiType>(`wallet/chart?duration=${duration}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    wallet(lang: Language, token: string) {
        return instance.get<ResponseApiType>(`wallet/list`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    currency(lang: Language, token: string, id: string, duration: EWalletDuration) {
        return instance.get<ResponseApiType>(`currency/chart/${id}?duration=${duration}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    // addresses_list(
    //     lang: Language,
    //     token: string,
    //     page: string | undefined,
    //     pageSize?: string | undefined,
    //     sort?: TAddressTableSort,
    //     search?: string | undefined,
    // ) {
    //     const pageParam  = page ? `page=${page}`: ''
    //     const pageSizeParam  = pageSize ? `${pageParam.length ? '&' : ''}per-page=${pageSize}`: ''
    //     const sortParam  = sort ? `${pageParam.length || pageSizeParam.length ? '&' : ''}sort=${sort}`: ''
    //     const searchParam  = search ? `${pageParam.length || pageSizeParam.length || sortParam.length ? '&' : ''}UserAddressesSearch[name]=${search}`: ''
    //     const query = pageParam.length || pageSizeParam.length || sortParam.length || searchParam.length ? `?${pageParam}${pageSizeParam}${sortParam}${searchParam}` : ''
    //
    //     return instance.get<ResponseApiType>(`wallet/addresses${query}`,{
    //         headers: {
    //             'Site-language': lang,
    //             'accept': 'application/json',
    //             'Authorization': token,
    //         }
    //     }).then(data => data.data)
    // },

    // Create

    // Update

    // Delete

}

export default settingsApi

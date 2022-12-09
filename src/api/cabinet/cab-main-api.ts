// Api
import qs from 'qs'
import { instance, ResponseApiType } from "../api"
// Type
import {Language} from 'types/app-type'
import {TCurrencyList, TCurrencyListType} from 'types/cabinet/cabinet-main-type'


const cabMainApi = {
    currency_list(lang: Language, token: string, type: TCurrencyListType) {
        return instance.get<ResponseApiType<TCurrencyList>>(`currency/list/${type}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
}

export default cabMainApi

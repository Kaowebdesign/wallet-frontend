// Core
import {instance, ResponseApiType} from "./api"
import qs from "qs"
// Types
import {Language} from "types/app-type"
import {SignupData} from "types/auth-type"
import {GetNews, INewsPageRequest, SubscribeEmail} from "types/main-types";


const mainApi = {
    contact_form(lang: Language, data: SignupData) {
        return instance.post<ResponseApiType>('contact', qs.stringify(data), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(data => data.data)
    },
    subscribe_email(lang: Language, data: SubscribeEmail) {
        return instance.post<ResponseApiType>('news/subscribe', qs.stringify(data), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(data => data.data)
    },
    get_news(lang: Language, data: GetNews) {
        return instance.get<ResponseApiType>('news',{
            headers: {
                'Site-language': lang,
                'accept': 'application/json'
            },
            params: {
                size: data.size,
                from: data.from,
                category: data.category !== 'all' ? data.category : null
            }
        }).then(data => data.data)
    },
    get_news_category(lang: Language) {
        return instance.get<ResponseApiType>('news/category',{
            headers: {
                'Site-language': lang,
                'accept': 'application/json'
            },
        }).then(data => data.data)
    },
    get_news_page(lang: Language, data: INewsPageRequest) {
        return instance.get<ResponseApiType>(`news/view/${data.url}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json'
            },
        }).then(data => data.data)
    },
    get_faq(land: Language) {
        return instance.get<ResponseApiType>('faq', {
            headers: {
                'Site-language': land,
                'accept': 'application/json'
            },
        }).then(data => data.data)
    }
}

export default mainApi

// Api
import {instance, ResponseApiType} from "../api";
// Types
import {Language} from "types/app-type";
import {TGetWalletHome, TUpdateWalletHome} from "types/cabinet/home-type";
import {log} from "util";


const homeApi = {
    get_home(lang: Language, token: string, data: TGetWalletHome) {
        return instance.get<ResponseApiType>(`wallet/home`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token
            },
            params: {
                duration: data.duration
            }
        }).then(data => data.data)
    },
    update_home(lang: Language, token: string, data: TUpdateWalletHome) {

        return instance.get<ResponseApiType>(`wallet/home/${data.currencyId}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token
            },
            params: {
                duration: data.duration
            }
        }).then(data => data.data)
    },
}

export default homeApi

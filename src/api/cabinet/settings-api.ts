// Api
import qs from 'qs'
import { instance, ResponseApiType } from "../api";
// Types
import {
    TUpdateSettings,
    TUpdatePassword,
    TTwoFaConnectRequest,
    TTwoFaConnect,
    TCloseAccount
} from 'types/cabinet/settings-type'

import {Language} from 'types/app-type';
import {log} from "util";

const settingsApi = {
    get_settings(lang: Language, token: string) {
        return instance.get<ResponseApiType>(`user/settings`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token
            }
        }).then(data => data.data)
    },
    update_settings(lang: Language, token: string, data: TUpdateSettings) {
        return instance.post<ResponseApiType>(`user/update-settings`, qs.stringify(data),{
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    change_password(lang: Language, token: string, data: TUpdatePassword) {
        return instance.post<ResponseApiType>(`user/change-password`, qs.stringify(data), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    twofa_connect_request(lang: Language, token: string, data: TTwoFaConnectRequest) {
        return instance.get<ResponseApiType>(`user/two-fa-connect/${data.method}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token
            }
        }).then(data => data.data)
    },
    twofa_connect(lang: Language, token: string, data: TTwoFaConnect) {
        return instance.post<ResponseApiType>(`user/two-fa-connect/${data.method}`, qs.stringify(data), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    twofa_disconnect_request(lang: Language, token: string, data: TTwoFaConnectRequest) {
        return instance.get<ResponseApiType>(`user/two-fa-disconnect/${data.method}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token
            }
        }).then(data => data.data)
    },
    twofa_disconnect(lang: Language, token: string, data: TTwoFaConnect) {
        return instance.post<ResponseApiType>(`user/two-fa-disconnect/${data.method}`, qs.stringify(data), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    wallet_list(lang: Language, token: string) {
        return instance.get<ResponseApiType>(`wallet/list`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token
            }
        }).then(data => data.data)
    },
    close_account(lang: Language, token: string, data: TCloseAccount) {
        return instance.post<ResponseApiType>(`/user/close-account`, qs.stringify(data), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
            }
        }).then(data => data.data)
    }
}

export default settingsApi


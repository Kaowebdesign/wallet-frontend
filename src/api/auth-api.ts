// Api
import qs from 'qs'
import { instance, ResponseApiType } from "./api"
// Type
import {
    LoginData,
    SignupData,
    TokenData,
    TwoFaAuth,
    TwoFaAuthData,
    TwoFaAuthFullData,
    TwoFaMethod,
    RecoveryPasswordData
} from "types/auth-type"
import {Language} from 'types/app-type'


const authApi = {
    signup(lang: Language, data: SignupData) {
        data.subscribe = data.subscribe ? 1 : 0
        return instance.post<ResponseApiType<false & SignupData>>('user/signup', qs.stringify(data), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(data => data.data)
    },
    signin(lang: Language, data: LoginData) {
        return instance.get<ResponseApiType<false & SignupData>>(`user/login?login=${data.login}&password=${data.password}`,{
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
            }
        }).then(data => data.data)
    },
    logout(lang: Language, token: string) {
        return instance.post<ResponseApiType>(`user/logout`, {
        }, {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    identification(lang: Language, token: string) {
        return instance.get<ResponseApiType>(`user/identification`, {
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
                'Authorization': token,
            }
        }).then(data => data.data)
    },
    confirm_email(lang: Language, token: string) {
        return instance.post<ResponseApiType>(`user/confirm-email/${token}`,'',  {
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
            }
        }).then(data => data.data)
    },
    two_fa_auth(lang: Language, data: TwoFaAuthFullData) {
        console.log(data)
        return instance.get<ResponseApiType<false & TwoFaAuth & TokenData>>(`user/two-fa-auth?hash=${data.hash}&code=${data.code}`, {
            headers: {
                'Site-language': lang,
                'accept': 'application/json',
            }
        }).then(data => data.data)
    },
    new_refresh_token(lang: Language, auth_token: string, refresh_token: string) {
        return instance.post<ResponseApiType<false & TokenData>>(`user/new-refresh-token/${refresh_token}`, {}, {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': auth_token,
            }
        }).then(data => data.data)
    },
    recovery_password(lang: Language, data: RecoveryPasswordData) {
        const {token, ...restData} = data

        return instance.post<ResponseApiType<false & TokenData>>(`user/recovery-password/${token ? token : ''}`, qs.stringify(restData), {
            headers: {
                'Site-language': lang,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(data => data.data)
    },





    two_fa_connect_get(lang: Language, method: TwoFaMethod, token: string) {
        return instance.get<ResponseApiType<false & TwoFaAuthData & {type: string}>>(`user/two-fa-connect/${method}`, {
            headers: {
                Authorization: token
            }
        }).then(data => data.data)
    },
    two_fa_connect_post(lang: Language, method: TwoFaMethod, token: string, data: TwoFaAuth) {
        return instance.post<ResponseApiType<false & {type: string}>>(`user/two-fa-connect/${method}`, {
            data
        }, {
            headers: {
                Authorization: token
            }
        }).then(data => data.data)
    },
    two_fa_disconnect_get(lang: Language, method: TwoFaMethod, token: string) {
        return instance.get<ResponseApiType<false & TwoFaAuthData & {status: string}>>(`user/two-fa-disconnect/${method}`, {
            headers: {
                Authorization: token
            }
        }).then(data => data.data)
    },
    two_fa_disconnect_post(lang: Language, method: TwoFaMethod, token: string, data: TwoFaAuth) {
        return instance.post<ResponseApiType<false & {type: string}>>(`user/two-fa-disconnect/${method}`, {
            data
        }, {
            headers: {
                Authorization: token
            }
        }).then(data => data.data)
    },
    remove_refresh_token(lang: Language, token: string) {
        return instance.post<ResponseApiType>(`user/remove-refresh-token`, {}, {
            headers: {
                Authorization: token
            }
        }).then(data => data.data)
    },
}

export default authApi

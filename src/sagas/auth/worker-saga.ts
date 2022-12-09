// Core
import {put, select} from 'redux-saga/effects'
import {makeRequest} from 'sagas/template'
// Api
import {authApi} from 'api'
//Sections
import {authSelect} from 'selectors'
// Action
import {authActions, appActions} from 'actions'
// Utils
import {converterTime} from 'utils'
// Type
import {TMakeRequestOptions, WorkerProps } from 'sagas/root-saga'
import {LoginData, RecoveryPasswordData, SignupData, TokenData} from "types/auth-type"
import {AlertType} from "types/app-type"


export function* workerSingin({payload}: WorkerProps<LoginData>): Generator {

    const handlerUser = (data: TokenData) => {
        const  {auth_token, refresh_token, ...rest} = data

        return rest
    }

    yield makeRequest({
        // @ts-ignore
        fetcher: authApi.signin,
        is_token: false,
        start: [
            {action: authActions.set_form_errors, handler: () => null},
            {action: authActions.load_form, handler: () => true},
        ],
        finish: [
            {action: authActions.load_form, handler: () => false},
        ],
        fetcherParam: [
            payload,
        ],
        success: [
            {action: authActions.set_token, handler: (data: TokenData) => ({auth_token: data.auth_token, refresh_token: data.refresh_token})},
            {action: authActions.set_user, handler: handlerUser},
            {action: authActions.set_auth, handler: () => true},
        ],
        action: [
            {action: authActions.set_two_fa},
        ],
        validation: [
            {action: authActions.set_form_errors}
        ],
    })
}

export function* workerSingup({payload}: WorkerProps<SignupData>): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: authApi.signup,
        is_token: false,
        start: [
            {action: authActions.load_form, handler: () => true},
            {action: authActions.set_form_errors, handler: () => null},
        ],
        finish: [
            {action: authActions.load_form, handler: () => false}
        ],
        fetcherParam: [
            payload,
        ],
        success: [
            {action: authActions.set_success_signup, handler: () => payload.email}
        ],
        validation: [
            {action: authActions.set_form_errors}
        ],
    })
}

export function* workerLogout(): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: authApi.logout,
        start: [
            {action: authActions.load_logout, handler: () => true}
        ],
        finish: [
            {action: authActions.load_logout, handler: () => false}
        ],
        success: [
            {action: appActions.watch_clear_state},
            {action: authActions.set_auth, handler: () => false},
        ],
    })
}

export function* workerIdentification({payload}: WorkerProps<{token: TokenData | null}>): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: authApi.identification,
        is_token: false,
        refresh_token: payload.token,
        fetcherParam: [
            `Bearer ${payload.token ? payload.token.auth_token : ''}`,
        ],
        success: [
            {action: authActions.set_token, handler: () => payload.token},
            {action: authActions.set_user},
            {action: authActions.set_auth, handler: () => true},
        ],
    })
}

export function* workerConfirmEmail({payload}: WorkerProps<{token: string}>): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: authApi.confirm_email,
        is_token: false,
        fetcherParam: [
            payload.token,
        ],
        success: [
            {
                action: appActions.set_alert,
                handler: () => ({
                    type: "success",
                    header: 'Success',
                    text: 'Your Email has been successfully confirmed',
                } as AlertType)
            }
        ],
    })
}

export function* workerTwoFa({payload}: WorkerProps<{code: string}>): Generator {
    const twoFa = yield select(authSelect.two_fa)

    yield makeRequest({
        // @ts-ignore
        fetcher: authApi.two_fa_auth,
        is_token: false,
        start: [
            {action: authActions.load_form, handler: () => true}
        ],
        finish: [
            {action: authActions.load_form, handler: () => false}
        ],
        fetcherParam: [
            // @ts-ignore
            {...twoFa, code: payload.code},
        ],
        success: [
            {action: authActions.set_token, handler: (data: {auth_token: string, refresh_token: string}) => ({auth_token: data.auth_token, refresh_token: data.refresh_token})},
            {action: authActions.set_user, handler: (data: {email: string, login: string}) => ({email: data.email, login: data.login})},
            {action: authActions.set_auth, handler: () => true},
        ],
        validation: [
            {action: authActions.set_form_errors}
        ],
    })
}

export function* workerNewRefreshToken({payload}: WorkerProps<{token: TokenData | null, resendParams: TMakeRequestOptions}>): Generator {
    if (payload.token) {
        yield makeRequest({
            // @ts-ignore
            fetcher: authApi.new_refresh_token,
            is_token: false,
            fetcherParam: [
                `Bearer ${payload.token ? payload.token.auth_token : ''}`,
                payload.token ? payload.token.refresh_token : ''
            ],
            success: [
                {action: authActions.set_token}
            ],
            resend: payload.resendParams,
        })
    } else {
        yield put(appActions.watch_clear_state())
        yield put(authActions.set_auth(false))
    }

}

export function* workerRecoveryPassword({payload}: WorkerProps<RecoveryPasswordData>): Generator {
    const mode = payload.token !== null

    yield makeRequest({
        // @ts-ignore
        fetcher: authApi.recovery_password,
        is_token: false,
        fetcherParam: [
            payload,
        ],
        start: [
            {action: authActions.set_form_errors, handler: () => null}
        ],
        success: mode
            ? [
                {
                    action: appActions.set_alert,
                    handler: () => ({
                        type: "success",
                        header: 'success',
                        text: 'Your password has been changed',
                    } as AlertType)
                },
                {action: appActions.set_not_found_redirect, handler: () => true},
            ]
            : [
                {
                    action: appActions.set_alert,
                    handler: (data: {expire_at: number}) => {
                        return {
                            type: "success",
                            header: 'Success',
                            text: `A letter has been sent to your mail, valid until ${converterTime.get_date_time(data.expire_at)}`,
                        } as AlertType
                    }
                },
                {action: appActions.set_not_found_redirect, handler: () => true},
            ]
        ,
        validation: [
            {action: authActions.set_form_errors}
        ],
    })
}

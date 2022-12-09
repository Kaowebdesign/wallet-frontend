// Api
import settingsApi from "api/cabinet/settings-api"
// Action
import { settingsCabinetAction} from 'actions/cabinet'
import {appActions} from 'actions'
// Template
import {makeRequest} from 'sagas/template'
// Type
import {
    TUserTimezones,
    TCurrency,
    TSettings,
    TUpdateSettings,
    TUpdatePassword,
    TTwoFaConnect,
    TTwoFaConnectRequest,
    ETwoFaType,
    ETwoFaMethod, TCloseAccount,
} from 'types/cabinet/settings-type'
import {WorkerProps} from "sagas/root-saga"
import {AlertType, TPushMessage} from "types/app-type";


export function* workerSettings(): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.get_settings,
        is_token: true,
        start: [
            {action: settingsCabinetAction.set_load_settings, handler: () => true}
        ],
        finish: [
            {action: settingsCabinetAction.set_load_settings, handler: () => false}
        ],
        success: [
            {
                action: settingsCabinetAction.set_settings,
                handler: (data: {settings: TSettings}) => ({
                    settings: data.settings
                })
            },
            {
                action: settingsCabinetAction.set_user_timezone,
                handler: (data: {timezones: TUserTimezones}) => ({
                    timezones: data.timezones
                })
            },
            {
                action: settingsCabinetAction.set_currency,
                handler: (data: {currency: TCurrency}) => ({
                    currency: data.currency
                })
            }
        ]
    })
}

export function* workerUpdateSettings({payload}: WorkerProps<TUpdateSettings>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.update_settings,
        is_token: true,
        fetcherParam: [
            payload
        ],
        success: [
            {
                action: settingsCabinetAction.set_settings,
                handler: (data: TSettings) => ({
                    settings: data
                })
            },
            {
                action: appActions.set_push, handler: () => (
                    payload.show_alert ?
                    {
                        title: 'Success',
                        content: 'You successfully update settings.'
                    } as TPushMessage : null),
            }
        ],
        validation: [
            {action: settingsCabinetAction.set_errors}
        ],
    })
}

export function* workerChangePassword({payload}: WorkerProps<TUpdatePassword>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.change_password,
        is_token: true,
        fetcherParam: [
            payload
        ],
        start: [
            {action: settingsCabinetAction.load_form, handler: () => true}
        ],
        finish: [
            {action: settingsCabinetAction.load_form, handler: () => false}
        ],
        success: [
            {action:appActions.set_push, handler: () => ({title: 'Success', content: 'You successfully change your password'} as TPushMessage)}
        ],
        validation: [
            {action: settingsCabinetAction.set_password_errors}
        ],
    })
}

// Two Fa workers

const twoFaActionList = [
    { action:appActions.set_push, handler: () => ({title: 'Success', content: 'You successfully enable 2FA'} as TPushMessage) },
    { action: settingsCabinetAction.set_disabled_twofa_email, handler: () => ETwoFaType.email},
    { action: settingsCabinetAction.set_disabled_twofa_google, handler: () => ETwoFaType.google},
    { action: settingsCabinetAction.set_disabled_twofa_email, handler: () => ETwoFaType.disabled},
    { action: settingsCabinetAction.set_disabled_twofa_google, handler: () => ETwoFaType.disabled},
    { action: settingsCabinetAction.watch_settings_base },
    { action:appActions.set_push, handler: () => ({title: 'Success', content: 'You successfully disable 2FA'} as TPushMessage) },
]

export function* workerTwoFaConnectRequest({payload}: WorkerProps<TTwoFaConnectRequest>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.twofa_connect_request,
        fetcherParam: [
            payload
        ],
        success: [
            {
                action: settingsCabinetAction.set_twofa_data,
                handler: (data) => ({
                    data,
                    method: payload.method
                })
            }
        ],
        validation: [
            // {action: appActions.set_alert, handler: () => ({type: "error", header: 'Error', text: 'Error with enable 2FA. Please try again.'})}
        ],
    })
}

export function* workerTwoFaConnect({payload}: WorkerProps<TTwoFaConnect>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.twofa_connect,
        fetcherParam: [
            payload
        ],
        success: payload.method === ETwoFaMethod.EMAIL ? [twoFaActionList[0],twoFaActionList[1],twoFaActionList[5]] : [twoFaActionList[0], twoFaActionList[2],twoFaActionList[5]],
        validation: [
            {action: settingsCabinetAction.set_twofa_errors},
        ],
    })
}

export function* workerTwoFaDisconnectRequest({payload}: WorkerProps<TTwoFaConnectRequest>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.twofa_disconnect_request,
        fetcherParam: [
            payload
        ],
        success: [
            {
                action: settingsCabinetAction.set_twofa_data,
                handler: (data) => ({
                    data,
                    method: payload.method
                })
            }
        ],
        validation: [
            // {action: appActions.set_alert, handler: (data) => ({type: "error", header: 'Error', text: data.method ? data.method : 'Error with disable Two fa'})}
        ],
    })
}

export function* workerTwoFaDisconnect({payload}: WorkerProps<TTwoFaConnect>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.twofa_disconnect,
        fetcherParam: [
            payload
        ],
        success: payload.method === ETwoFaMethod.EMAIL ? [twoFaActionList[6],twoFaActionList[3], twoFaActionList[5]] : [twoFaActionList[6], twoFaActionList[4], twoFaActionList[5]],
        validation: [
            {action: settingsCabinetAction.set_twofa_errors},
        ],
    })
}
// wallets
export function* workerWalletList(): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.wallet_list,
        success: [
            { action: settingsCabinetAction.set_wallet_list }
        ]
    })
}
// close account
export function* workerCloseAccount({payload}: WorkerProps<TCloseAccount>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: settingsApi.close_account,
        fetcherParam: [
            payload
        ],
        success: [
            {action:appActions.set_push, handler: () => ({title: 'Success', content: 'You successfully request to close your account.'} as TPushMessage)}
        ],
        validation: [
            {action: settingsCabinetAction.set_close_account_errors}
        ],
    })
}

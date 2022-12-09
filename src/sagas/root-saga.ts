// Root
import {all} from 'redux-saga/effects'
// Watcher
import {mainSagaWatcher, authSagaWatcher, appSagaWatcher} from './'
import {
    cabinetProfileSagaWatcher, cabinetMainSagaWatcher, cabinetSettingsSagaWatcher, cabinetHomeSagaWatcher,
    portfolioSagaWatcher,
} from './cabinet'
// Types
import {TokenData} from "types/auth-type"
import {Language} from "types/app-type"
import {ResponseApiType} from "api/api"
import {ActionCreator, AnyAction} from "redux"


export function* rootSaga(): Generator {
    yield all([
        appSagaWatcher(),
        authSagaWatcher(),
        mainSagaWatcher(),
        // Cabinet
        cabinetSettingsSagaWatcher(),
        cabinetMainSagaWatcher(),
        cabinetProfileSagaWatcher(),
        cabinetHomeSagaWatcher(),
        portfolioSagaWatcher(),
    ])
}

export type WorkerProps<P> = {
    type: string
    payload: P
}

export type TAction = {
    action: ActionCreator<AnyAction>,
    handler?: () => any
}

export type TActionError = {
    action: ActionCreator<AnyAction>,
    handler?: (data: Error) => any
}

export type TActionWithData = {
    action: ActionCreator<AnyAction>,
    handler?: (data: any) => any
}

export type TActionWithDataMessage = {
    action: ActionCreator<AnyAction>,
    handler?: (data: any, message: string) => any
}

export type TDefaultAction = {
    not_found?: boolean
    bad_request?: boolean
    error?: boolean
    catch_error?: boolean
}

export type TMakeRequestOptions = {
    is_token?: boolean
    is_refresh?: boolean
    refresh_token?: TokenData | null
    fetcher: (lang: Language, token?: string, fetcherParam?: any) => Promise<ResponseApiType<any>>
    fetcherParam?: Array<any>
    resend?: TMakeRequestOptions | null
    default_action?: TDefaultAction
    start?: TAction[]
    finish?: TAction[]
    success: TActionWithData[]
    action?: TActionWithData[]
    validation?: TActionWithData[]
    not_found?: TActionWithDataMessage[]
    bad_request?: TActionWithDataMessage[]
    error?: TActionWithDataMessage[]
    catch_error?: TActionError[]
}

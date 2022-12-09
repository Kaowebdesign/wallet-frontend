// Core
import {call, put, select} from 'redux-saga/effects'
import {SagaIterator} from 'redux-saga'
//Sections
import {authSelect, appSelect} from "selectors"
// Action
import {appActions, authActions} from "actions"
// Type
import {ResponseApiType, ResponseCodeType} from 'api/api'
import {TMakeRequestOptions, TAction, TActionWithData, TActionWithDataMessage, TActionError} from 'sagas/root-saga'


// @ts-ignore
function* range(start: number, count: number, data: any) {
    for (let delta = 0; delta < count; delta++) {
        yield data ? data[start + delta] : null
    }
}

function* actionItems(actions: TAction[] | undefined): any {
    if (typeof actions !== "undefined") {
        for (let action of range(0, actions.length, actions)) {
            if (action) {
                if (typeof action.handler !== "undefined") {
                    yield put(action.action(action.handler()))
                } else {
                    yield put(action.action())
                }
            }
        }
    }
}

function* actionItemsError(actions: TActionError[] | undefined, err: Error): any {
    if (typeof actions !== "undefined") {
        for (let action of range(0, actions.length, actions)) {
            if (action) {
                if (typeof action.handler !== "undefined") {
                    yield put(action.action(action.handler(err)))
                } else {
                    yield put(action.action())
                }
            }
        }
    }
}

function* actionItemsWithData(actions: TActionWithData[] | undefined, data: false | {items: Array<any>}): any {
    if (typeof actions !== "undefined") {
        for (let action of range(0, actions.length, actions)) {
            if (action) {
                if (typeof action.handler !== "undefined") {
                    yield put(action.action(action.handler(data)))
                } else {
                    yield put(action.action(data && data.items ? data.items : data))
                }
            }
        }
    }
}

function* actionItemsWithDataMessage(actions: TActionWithDataMessage[] | undefined, response: {data: false | {items: Array<any>}, message: string}): any {
    if (typeof actions !== "undefined") {
        for (let action of range(0, actions.length, actions)) {
            if (action) {
                if (typeof action.handler !== "undefined") {
                    yield put(action.action(action.handler(response.data, response.message)))
                } else {
                    yield put(action.action(response.data && response.data.items ? response.data.items : response.data))
                }
            }
        }
    }
}

function* makeRequest({
    fetcher,
    fetcherParam,
    start,
    finish,
    validation,
    success,
    not_found,
    bad_request,
    error,
    action,
    catch_error,
    is_token = true,
    is_refresh = true,
    refresh_token = null,
    resend = null,
    default_action,
}: TMakeRequestOptions): SagaIterator {
    const token = yield select(authSelect.token)
    const lang = yield select(appSelect.language)
    let stateRefresh = false

    const default_action_full = {
        bad_request: true,
        not_found: true,
        error: true,
        catch_error: true,
        ...default_action,
    }

    yield actionItems(start)

    try {
        let result = null as ResponseApiType | null

        if (is_token) {
            if (typeof fetcherParam !== "undefined") result = yield call(fetcher, lang,`Bearer ${token.auth_token}`, ...fetcherParam)
            else result = yield call(fetcher, lang,  `Bearer ${token.auth_token}`)
        } else {
            if (typeof fetcherParam !== "undefined") result = yield call(fetcher, lang, ...fetcherParam)
            else result = yield call(fetcher, lang)
        }

        if (result?.code === ResponseCodeType.success) {
            yield actionItemsWithData(success, result.data)

            if (resend) {
                yield call(makeRequest, resend)
            }

        } else if (result?.code === ResponseCodeType.action) {
            yield actionItemsWithData(action, result.data)

        } else if (result?.code === ResponseCodeType.not_valid) {
            yield actionItemsWithData(validation, result.data)

        } else if (result?.code === ResponseCodeType.unauthorized) {

            if (is_refresh) {
                stateRefresh = true

                yield put(authActions.watch_new_refresh_token(refresh_token ? refresh_token : token, {
                    success: refresh_token ? success.filter((elem, key) => key !== 0) : success,
                    is_token: true, is_refresh: false, refresh_token: null,
                    fetcher, fetcherParam, start,finish, validation, not_found, bad_request, error, action, default_action,
                }))

            } else {
                yield put(appActions.watch_clear_state())
                yield put(authActions.set_auth(false))
            }

        } else if (result?.code === ResponseCodeType.not_found) {

            if (default_action_full.bad_request) {
                yield put(appActions.set_not_found_redirect(true))
                yield put(appActions.set_alert({type: "error", header: 'Error', text: result.message}))
            }

            yield actionItemsWithDataMessage(not_found, {data: result.data, message: result.message})

        } else if (result?.code === ResponseCodeType.bad_request) {

            if (default_action_full.bad_request) {
                yield put(appActions.set_alert({type: "error", header: 'Error', text: result.message}))
            }

            yield actionItemsWithDataMessage(bad_request, {data: result.data, message: result.message})

        } else if (result?.code === ResponseCodeType.error) {

            if (default_action_full.error) {
                yield put(appActions.set_alert({type: "error", header: 'Error', text: result.message}))
            }

            yield actionItemsWithDataMessage(error, {data: result.data, message: result.message})
        } else {
            const init = yield select(appSelect.init)
            const isAuth = yield select(authSelect.is_auth)

            if (!init && !isAuth) {
                yield put(authActions.set_auth(false))
            } else if (!init && isAuth) {
                yield put(authActions.set_auth(true))
            }
        }

    } catch (err) {
        if (default_action_full.catch_error) {
            yield put(appActions.set_alert({type: "error", header: 'Error', text: 'Oops, something went wrong!'}))
        }

        yield actionItemsError(catch_error, err)

    } finally {
        if (!stateRefresh) yield actionItems(finish)
    }
}

export default makeRequest

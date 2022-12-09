// Core
import {all, fork, put, take} from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
// Action
import {appActions, authActions} from 'actions/'


export function* workerInit(): SagaIterator {

    while (true) {
        yield take('AUTH__SET__AUTH')

        yield put( appActions.set_init(true))
    }
}

export function* workerClear(): SagaIterator {
    // Auth
    yield put(authActions.set_token(null))
    yield put(authActions.clear_user())
    yield put(authActions.clear_two_fa())
}


// Core
import { SagaIterator}  from 'redux-saga'
import {all, call, fork, takeLeading} from 'redux-saga/effects'
// Actions
import {APP__WATCH__CLEAR_STATE, APP__WATCH__INIT } from 'actions/app-action'
// Worker
import { workerInit, workerClear } from './worker-saga'

function* watchClear(): SagaIterator {
    yield takeLeading(APP__WATCH__CLEAR_STATE, workerClear)
}

function* watchInit() {
    yield takeLeading(APP__WATCH__INIT, workerInit)
}

export default function* appSagaWatcher(): SagaIterator {
    yield all([
        fork(watchInit),
        fork(watchInit),
        fork(watchClear),
    ])
}

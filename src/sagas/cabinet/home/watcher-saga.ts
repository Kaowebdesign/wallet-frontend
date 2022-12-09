// Core
import { SagaIterator}  from 'redux-saga'
import { all, fork, takeLeading } from 'redux-saga/effects'
// Actions
import {
    HOME__WATCH__BASE,
    HOME__WATCH__UPDATE_BASE
} from 'actions/cabinet/home-actions'
// Worker
import {
    workerHome,
    workerUpdateHome
} from './worker-saga'



function* watchHome(): SagaIterator {
    yield takeLeading(HOME__WATCH__BASE, workerHome)
}

function* watchUpdateHome(): SagaIterator {
    yield takeLeading(HOME__WATCH__UPDATE_BASE, workerUpdateHome)
}


export default function* cabinetHomeSagaWatcher(): SagaIterator {
    yield all([
        fork(watchHome),
        fork(watchUpdateHome)
    ])
}

// Core
import { SagaIterator}  from 'redux-saga'
import { all, takeLeading, takeEvery, fork } from 'redux-saga/effects'
// Actions
import { CABINET__WATCH__CURRENCY_LIST } from 'actions/cabinet/cab-main-action'
// Worker
import { workerCurrencyList} from './worker-saga'


function* watchCurrencyList(): SagaIterator {
    yield takeEvery(CABINET__WATCH__CURRENCY_LIST, workerCurrencyList)
}

export default function* cabinetMainSagaWatcher(): SagaIterator {
    yield all([
        fork(watchCurrencyList),
    ])
}

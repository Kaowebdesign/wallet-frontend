// Core
import {SagaIterator}  from 'redux-saga'
import {all, fork, takeLeading, takeEvery} from 'redux-saga/effects'
// Actions
import {
    PORTFOLIO__WATCH_BALANCE, PORTFOLIO__WATCH_WALLET, PORTFOLIO__WATCH_CURRENCY,
} from 'actions/cabinet/portfolio-action'
// Worker
import {
    workerBalance, workerWallet, workerCurrency,
} from './worker-saga'


function* watchBalance(): SagaIterator {
    yield takeLeading(PORTFOLIO__WATCH_BALANCE, workerBalance)
}

function* watchWallet(): SagaIterator {
    yield takeLeading(PORTFOLIO__WATCH_WALLET, workerWallet)
}

function* watchCurrency(): SagaIterator {
    yield takeEvery(PORTFOLIO__WATCH_CURRENCY, workerCurrency)
}

export default function* portfolioSagaWatcher(): SagaIterator {
    yield all([
        fork(watchBalance),
        fork(watchWallet),
        fork(watchCurrency),
    ])
}

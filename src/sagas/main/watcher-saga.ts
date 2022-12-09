// Core
import { SagaIterator}  from 'redux-saga'
import { all, fork, takeLeading } from 'redux-saga/effects'
// Actions
import {
    MAIN__WATCH__CONTACT_FORM,
    MAIN__SUBSCRIBE__EMAIL,
    MAIN__WATCH__FAQ,
    MAIN__WATCH__NEWS,
    MAIN__WATCH__NEWS_CATEGORIES,
    MAIN__WATCH__UPDATE_NEWS, MAIN__WATCH__NEWS_PAGE
} from 'actions/main-action'
// Worker
import {
    workerContactFrom,
    workerFaq,
    workerNews,
    workerNewsCategories, workerNewsPage,
    workerNewsUpdate,
    workerSubscribeEmail
} from './worker-saga'


function* watchContactFrom(): SagaIterator {
    yield takeLeading(MAIN__WATCH__CONTACT_FORM, workerContactFrom)
}

function* watchSubscribeEmail(): SagaIterator {
    yield takeLeading(MAIN__SUBSCRIBE__EMAIL, workerSubscribeEmail)
}

function* watchNews(): SagaIterator {
    yield takeLeading(MAIN__WATCH__NEWS, workerNews)
}

function* watchNewsCategory(): SagaIterator {
    yield takeLeading(MAIN__WATCH__NEWS_CATEGORIES, workerNewsCategories)
}

function* watchNewsPage(): SagaIterator {
    yield takeLeading(MAIN__WATCH__NEWS_PAGE, workerNewsPage)
}

function* watchNewsUpdate(): SagaIterator {
    yield takeLeading(MAIN__WATCH__UPDATE_NEWS, workerNewsUpdate)
}


function* watchFaq(): SagaIterator {
    yield takeLeading(MAIN__WATCH__FAQ, workerFaq)
}

export default function* mainSagaWatcher(): SagaIterator {
    yield all([
        fork(watchContactFrom),
        fork(watchSubscribeEmail),
        fork(watchNews),
        fork(watchNewsCategory),
        fork(watchNewsPage),
        fork(watchNewsUpdate),
        fork(watchFaq)
    ])
}
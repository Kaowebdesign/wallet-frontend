// Core
import { SagaIterator}  from 'redux-saga'
import { all, fork, takeLeading } from 'redux-saga/effects'
// Actions
import {
    AUTH__WATCH__LOGOUT,
    AUTH__WATCH__RECOVERY_PASSWORD,
    AUTH__WATCH__SIGNIN, AUTH__WATCH__SIGNUP,
    AUTH__WATCH__CONFIRM_EMAIL,
    AUTH__WATCH__TWO_FA,
    AUTH__WATCH__IDENTIFICATION,
    AUTH__WATCH__NEW_REFRESH_TOKEN,
} from 'actions/auth-action'
// Worker
import {
    workerLogout, workerRecoveryPassword, workerSingin, workerSingup, workerConfirmEmail,
    workerTwoFa, workerIdentification, workerNewRefreshToken,
} from './worker-saga'


function* watchLogout(): SagaIterator {
    yield takeLeading(AUTH__WATCH__LOGOUT, workerLogout)
}

function* watchRecoveryPassword(): SagaIterator {
    yield takeLeading(AUTH__WATCH__RECOVERY_PASSWORD, workerRecoveryPassword)
}

function* watchSingin(): SagaIterator {
    yield takeLeading(AUTH__WATCH__SIGNIN, workerSingin)
}

function* watchSingup(): SagaIterator {
    yield takeLeading(AUTH__WATCH__SIGNUP, workerSingup)
}

function* watchConfirmEmail(): SagaIterator {
    yield takeLeading(AUTH__WATCH__CONFIRM_EMAIL, workerConfirmEmail)
}

function* watchTwoFa(): SagaIterator {
    yield takeLeading(AUTH__WATCH__TWO_FA, workerTwoFa)
}

function* watchIdentification(): SagaIterator {
    yield takeLeading(AUTH__WATCH__IDENTIFICATION, workerIdentification)
}

function* watchNewRefreshToken(): SagaIterator {
    yield takeLeading(AUTH__WATCH__NEW_REFRESH_TOKEN, workerNewRefreshToken)
}

export default function* authSagaWatcher(): SagaIterator {
    yield all([
        fork(watchLogout),
        fork(watchRecoveryPassword),
        fork(watchSingin),
        fork(watchSingup),
        fork(watchConfirmEmail),
        fork(watchTwoFa),
        fork(watchIdentification),
        fork(watchNewRefreshToken),
    ])
}

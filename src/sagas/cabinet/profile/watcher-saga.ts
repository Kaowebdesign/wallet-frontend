// Core
import { SagaIterator}  from 'redux-saga'
import { all, fork, takeLeading } from 'redux-saga/effects'
// Actions
import {
    PROFILE__WATCH__ACCOUNT, PROFILE__WATCH__UPDATE_INFO, PROFILE__WATCH__UPDATE_ADDRESS,
    PROFILE__WATCH__UPDATE_AVATAR, PROFILE__WATCH__ADDRESS_TABLE, PROFILE__WATCH__ADDRESS_TABLE_FORM,
    PROFILE__WATCH__ADDRESS_TABLE_DELETE, PROFILE__WATCH__ACTIVITY_TABLE,
} from 'actions/cabinet/profile-action'
// Worker
import {
    workerAccount, workerUpdateInfo, workerUpdateAddress, workerUpdateAvatar, workerAddressTable,
    workerAddressTableForm, workerAddressTableDelete, workerActivityTable,
} from './worker-saga'


function* watchAccount(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__ACCOUNT, workerAccount)
}

function* watchUpdateInfo(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__UPDATE_INFO, workerUpdateInfo)
}

function* watchUpdateAddress(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__UPDATE_ADDRESS, workerUpdateAddress)
}

function* watchUpdateAvatar(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__UPDATE_AVATAR, workerUpdateAvatar)
}

function* watchAddressTable(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__ADDRESS_TABLE, workerAddressTable)
}

function* watchAddressTableForm(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__ADDRESS_TABLE_FORM, workerAddressTableForm)
}

function* watchAddressTableDelete(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__ADDRESS_TABLE_DELETE, workerAddressTableDelete)
}

function* watchActivityTable(): SagaIterator {
    yield takeLeading(PROFILE__WATCH__ACTIVITY_TABLE, workerActivityTable)
}


export default function* cabinetProfileSagaWatcher(): SagaIterator {
    yield all([
        fork(watchAccount),
        fork(watchUpdateInfo),
        fork(watchUpdateAddress),
        fork(watchUpdateAvatar),
        fork(watchAddressTable),
        fork(watchAddressTableForm),
        fork(watchAddressTableDelete),
        fork(watchActivityTable),
    ])
}

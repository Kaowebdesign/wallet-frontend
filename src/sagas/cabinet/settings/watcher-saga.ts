// Core
import { SagaIterator}  from 'redux-saga'
import { all, fork, takeLeading } from 'redux-saga/effects'
// Actions
import {
    SETTINGS__WATCH__BASE,
    SETTINGS__UPDATE__BASE,
    SETTINGS__WATCH__CHANGE_PASSWORD,
    SETTINGS__WATCH__TWOFA_CONNECT_REQUEST,
    SETTINGS__WATCH__TWOFA_CONNECT,
    SETTINGS__WATCH__TWOFA_DISCONNECT_REQUEST,
    SETTINGS__WATCH__TWOFA_DISCONNECT,
    SETTINGS__WATCH__WALLET_LIST,
    SETTINGS__WATCH__CLOSE_ACCOUNT
} from 'actions/cabinet/settings-action'
// Worker
import {
    workerSettings,
    workerUpdateSettings,
    workerChangePassword,
    workerTwoFaConnectRequest,
    workerTwoFaConnect,
    workerTwoFaDisconnectRequest,
    workerTwoFaDisconnect,
    workerWalletList,
    workerCloseAccount
} from './worker-saga'


function* watchUserSettings(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__BASE, workerSettings)
}

function* watchUpdateSettings(): SagaIterator {
    yield takeLeading(SETTINGS__UPDATE__BASE, workerUpdateSettings)
}

function* watchChangePassword(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__CHANGE_PASSWORD, workerChangePassword)
}

function* watchTwoFaConnectRequest(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__TWOFA_CONNECT_REQUEST, workerTwoFaConnectRequest)
}

function* watchTwoFaConnect(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__TWOFA_CONNECT, workerTwoFaConnect)
}

function* watchTwoFaDisconnectRequest(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__TWOFA_DISCONNECT_REQUEST, workerTwoFaDisconnectRequest)
}

function* watchTwoFaDisconnect(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__TWOFA_DISCONNECT, workerTwoFaDisconnect)
}

function* watchWalletList(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__WALLET_LIST, workerWalletList)
}

function* watchCloseAccount(): SagaIterator {
    yield takeLeading(SETTINGS__WATCH__CLOSE_ACCOUNT, workerCloseAccount)
}


export default function* cabinetSettingsSagaWatcher(): SagaIterator {
    yield all([
        fork(watchUserSettings),
        fork(watchUpdateSettings),
        fork(watchChangePassword),
        fork(watchTwoFaConnectRequest),
        fork(watchTwoFaConnect),
        fork(watchTwoFaDisconnectRequest),
        fork(watchTwoFaDisconnect),
        fork(watchWalletList),
        fork(watchCloseAccount)
    ])
}

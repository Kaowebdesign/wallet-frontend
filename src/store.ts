// Core
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// Middleware
import { middleware, sagaMiddleware } from 'middleware'
// Reducer
import { rootReducer } from 'reducers/root-reducer'
// Saga
import { rootSaga } from 'sagas/root-saga'


type RootReducer = typeof rootReducer

export type ActionsCreatorType<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never

export type RootState = ReturnType<RootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga)

// Core
import createSagaMiddleware from 'redux-saga'
import { Middleware } from 'redux'


const sagaMiddleware = createSagaMiddleware()

const middleware: Middleware[] = [sagaMiddleware]

export { middleware, sagaMiddleware }

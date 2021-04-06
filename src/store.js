import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk
)(createStore);

export default createStoreWithMiddleware
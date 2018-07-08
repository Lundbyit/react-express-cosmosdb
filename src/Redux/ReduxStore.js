import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import appReducer from './RootReducer';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

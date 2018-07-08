import { all, fork } from 'redux-saga/effects';
import companiesSaga from '../Companies/sagas';
import peopleSaga from '../People/sagas';

export default function* rootSaga() {
    yield all([fork(companiesSaga), fork(peopleSaga)]);
}

import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { apiMethods, url } from '../apiConstants';
import api from '../api';
import * as actions from './actions';
import { ADD_PERSON, FETCH_PEOPLE, LINK_COMPANY } from './constants';
import { fetchCompanies } from '../Companies/actions';

function* addPerson(action) {
    try {
        const apiResult = yield call(
            api,
            url.addPerson,
            apiMethods.post,
            action.person
        );
        if (apiResult.company) {
            yield put(fetchCompanies());
        }
        yield put(actions.addPersonSucceeded(apiResult));
    } catch (error) {
        yield put(actions.addPersonFailed());
    }
}

function* fetchPeople() {
    try {
        const apiResult = yield call(api, url.fetchPeople, apiMethods.get);
        yield put(actions.fetchPeopleSucceeded(apiResult));
    } catch (error) {
        yield put(actions.fetchPeopleFailed());
    }
}

function* linkCompany(action) {
    try {
        const apiResult = yield call(
            api,
            url.linkCompany,
            apiMethods.post,
            action.payload
        );
        yield put(fetchCompanies());
        yield put(actions.linkCompanySucceeded(apiResult));
    } catch (error) {
        yield put(actions.linkCompanyFailed());
    }
}

export default function* peopleSaga() {
    yield fork(takeEvery, ADD_PERSON, addPerson);
    yield fork(takeEvery, FETCH_PEOPLE, fetchPeople);
    yield fork(takeEvery, LINK_COMPANY, linkCompany);
}

import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { apiMethods, url } from '../apiConstants';
import api from '../api';
import * as actions from './actions';
import {
    ADD_COMPANY,
    FETCH_COMPANIES,
    REMOVE_EMPLOYEE
} from './constants';

function* addCompany(action) {
    try {
        const apiResult = yield call(api, url.addCompany, apiMethods.post, action.company);
        yield put(actions.addCompanySucceeded(apiResult));
    } catch (error) {
        yield put(actions.addCompanyFailed());
    }
};

function* fetchCompanies(action) {
    try {
        const apiResult = yield call(api, url.fetchCompanies, apiMethods.get);
        yield put(actions.fetchCompaniesSucceeded(apiResult));
    } catch (error) {
        yield put(actions.fetchCompaniesFailed());
    }
}

function* removeEmployee(action) {
    try {
        const apiResult = yield call(api, url.removeEmployee, apiMethods.post, action.payload);
        yield put(actions.removeEmployeeSucceeded(apiResult));
    } catch (error) {
        yield put(actions.removeEmployeeFailed());
    }
}

export default function* companiesSaga() {
    yield fork(takeEvery, ADD_COMPANY, addCompany);
    yield fork(takeEvery, FETCH_COMPANIES, fetchCompanies);
    yield fork(takeEvery, REMOVE_EMPLOYEE, removeEmployee);
}
import * as constants from './constants';

export function addCompany(name) {
    return {
        type: constants.ADD_COMPANY,
        company: { name }
    }
}

export function addCompanyFailed() {
    return {
        type: constants.ADD_COMPANY_FAILED
    }
}

export function addCompanySucceeded(apiResult) {
    const { __v, ...company } = apiResult;
    return {
        type: constants.ADD_COMPANY_SUCCEEDED,
        company
    }
}

export function fetchCompanies() {
    return {
        type: constants.FETCH_COMPANIES
    };
};

export function fetchCompaniesFailed() {
    return {
        type: constants.FETCH_COMPANIES_FAILED
    }
}

export function fetchCompaniesSucceeded(companies) {
    return {
        type: constants.FETCH_COMPANIES_SUCCEEDED,
        companies
    }
}

export function inputCleared() {
    return {
        type: constants.INPUT_CLEARED
    }
}

export function removeEmployee(companyId, employeeId) {
    return {
        type: constants.REMOVE_EMPLOYEE,
        payload: {
            companyId,
            employeeId
        }
    };
};

export function removeEmployeeFailed() {
    return {
        type: constants.REMOVE_EMPLOYEE_FAILED
    }
}

export function removeEmployeeSucceeded(apiResult) {
    const { __v, ...employee } = apiResult;
    return {
        type: constants.REMOVE_EMPLOYEE_SUCCEEDED,
        employee
    }
}

export function selectCompany(id) {
    return {
        type: constants.SELECT_COMPANY,
        id
    }
}
import * as constants from './constants';

export function addPerson(person) {
    return {
        type: constants.ADD_PERSON,
        person
    }
}

export function addPersonSucceeded(apiResult) {
    const {__v, ...person} = apiResult;
    return {
        type: constants.ADD_PERSON_SUCCEEDED,
        person
    }
}

export function addPersonFailed() {
    return {
        type: constants.ADD_PERSON_FAILED
    }
}

export function fetchPeople() {
    return {
        type: constants.FETCH_PEOPLE
    }
}

export function fetchPeopleSucceeded(apiResult) {
    const people = apiResult.map(person => ({
        id: person._id,
        name: person.name,
        company: person.company
    }));

    return {
        type: constants.FETCH_PEOPLE_SUCCEEDED,
        people
    }
}

export function fetchPeopleFailed() {
    return {
        type: constants.FETCH_PEOPLE_FAILED
    }
}

export function inputCleared() {
    return {
        type: constants.INPUT_CLEARED
    }
}

export function linkCompany(companyId, personId) {
    return {
        type: constants.LINK_COMPANY,
        payload: {
            companyId,
            personId
        }
    }
}

export function linkCompanySucceeded(apiResult) {
    const { __v, ...employee } = apiResult;
    return {
        type: constants.LINK_COMPANY_SUCCEEDED,
        employee
    }
}

export function linkCompanyFailed() {
    return {
        type: constants.LINK_COMPANY_FAILED
    }
}

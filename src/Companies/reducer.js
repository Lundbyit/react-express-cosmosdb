import * as constants from './constants';

const initialState = {
    clearInput: false,
    companies: [],
    selectedCompany: {}
};

function companiesReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_COMPANY_SUCCEEDED: {
            return {
                ...state,
                clearInput: true,
                companies: state.companies.concat(action.company)
            }
        }
        case constants.FETCH_COMPANIES_SUCCEEDED: {
            return {
                ...state,
                companies: action.companies,
            }
        }
        case constants.INPUT_CLEARED: {
            return {
                ...state,
                clearInput: false
            }
        }
        case constants.SELECT_COMPANY: {
            return {
                ...state,
                selectedCompany: state.companies.find(company => company._id === action.id ) || {}
            }
        }
        default:
            return state;
    }
}

export default companiesReducer;

import * as company from '../Companies/constants';
import * as people from '../People/constants';
import { CLOSE_MODAL } from './constants';

const initialState = {
    loading: false,
    modalText: '',
    showModal: false
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case company.ADD_COMPANY:
        case company.REMOVE_EMPLOYEE:
        case people.ADD_PERSON:
        case people.LINK_COMPANY: {
            return {
                ...state,
                loading: true,
                showModal: true
            }
        }
        case company.ADD_COMPANY_FAILED:
        case company.FETCH_COMPANIES_FAILED:
        case company.REMOVE_EMPLOYEE_FAILED:
        case people.ADD_PERSON_FAILED:
        case people.LINK_COMPANY_FAILED:
        case people.FETCH_PEOPLE_FAILED: {
            return {
                ...state,
                loading: false,
                modalText: 'Something went wrong',
                showModal: true
            }
        }
        case company.ADD_COMPANY_SUCCEEDED: {
            return {
                ...state,
                loading: false,
                modalText: `Added ${action.company.name}`,
                showModal: true
            }
        }
        case company.REMOVE_EMPLOYEE_SUCCEEDED: {
            return {
                ...state,
                loading: false,
                modalText: `${action.employee.name} is now unemployed`,
                showModal: true
            }
        }
        case people.ADD_PERSON_SUCCEEDED: {
            return {
                ...state,
                loading: false,
                modalText: `${action.person.name} is added`,
                showModal: true
            };
        }
        case people.LINK_COMPANY_SUCCEEDED: {
            return {
                ...state,
                loading: false,
                modalText: `${action.employee.name} is now employed`,
                showModal: true
            };
        }
        case CLOSE_MODAL: {
            return {
                modalText: '',
                showModal: false
            }
        }
        default:
            return state;
    }
}

export default appReducer;

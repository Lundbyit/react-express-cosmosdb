import * as constants from './constants';

const initialState = {
    clearInput: false,
    people: []
};

function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_PERSON_SUCCEEDED: {
            return {
                clearInput: true,
                people: state.people.concat(action.person)
            };
        }
        case constants.FETCH_PEOPLE_SUCCEEDED: {
            return {
                ...state,
                people: action.people
            };
        }
        case constants.INPUT_CLEARED: {
            return {
                ...state,
                clearInput: false
            };
        }
        case constants.LINK_COMPANY_SUCCEEDED: {
            return {
                people: state.people.filter(
                    person => person.id !== action.employee._id
                )
            };
        }
        default:
            return state;
    }
}

export default peopleReducer;

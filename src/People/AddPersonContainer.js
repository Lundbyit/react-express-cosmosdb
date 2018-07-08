import { connect } from 'react-redux';
import AddPerson from './Components/AddPerson';
import { addPerson, inputCleared } from './actions';
import { getCompaniesNameAndId } from '../Companies/selectors';
import { getClearInput } from './selectors';

const mapStateToProps = (state) => ({
    clearInput: getClearInput(state),
    companies: getCompaniesNameAndId(state)
})

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (person) => dispatch(addPerson(person)),
        inputCleared: () => dispatch(inputCleared())
    }
}

const AddPersonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPerson);

export default AddPersonContainer;

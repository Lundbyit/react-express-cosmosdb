import { connect } from 'react-redux';
import Companies from './Components/Companies';
import {
    addCompany,
    inputCleared,
    removeEmployee,
    selectCompany
} from './actions';
import { 
    getClearInput,
    getCompaniesNameAndId,
    getSelectedCompany
} from './selectors';

const mapStateToProps = (state) => ({
    clearInput: getClearInput(state),
    companies: getCompaniesNameAndId(state),
    selectedCompany: getSelectedCompany(state)
});

const mapDispatchToProps = dispatch => {
    return {
        addCompany: name => dispatch(addCompany(name)),
        inputCleared: () => dispatch(inputCleared()),
        removeEmployee: (companyId, employeeId) => dispatch(removeEmployee(companyId, employeeId)),
        selectCompany: id => dispatch(selectCompany(id))
    }
}

const CompaniesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Companies);

export default CompaniesContainer;

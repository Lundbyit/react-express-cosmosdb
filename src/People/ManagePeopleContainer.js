import { connect } from 'react-redux';
import * as actions from './actions';
import ManagePeople from './Components/ManagePeople';
import { getCompaniesNameAndId } from '../Companies/selectors';
import { getPeople } from './selectors';

const mapStateToProps = state => ({
    companies: getCompaniesNameAndId(state),
    people: getPeople(state)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchPeople: () => dispatch(actions.fetchPeople()),
        linkCompany: (companyId, personId) =>
            dispatch(actions.linkCompany(companyId, personId))
    };
};

const ManagePersonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ManagePeople);

export default ManagePersonsContainer;

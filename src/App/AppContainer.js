import { connect } from 'react-redux';
import App from './Components/App';
import { fetchCompanies } from '../Companies/actions';
import {
    getAppLoading,
    getModalText,
    getshowModal
} from './selectors'
import { closeModal } from './actions';

const mapStateToProps = (state) => ({
    loading: getAppLoading(state),
    modalText: getModalText(state),
    showModal: getshowModal(state)
});

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchCompanies: () => dispatch(fetchCompanies())
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

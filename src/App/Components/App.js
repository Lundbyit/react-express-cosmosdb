import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import Spinner from 'reactjs-simple-spinner';
import Navbar from './Navbar';
import BigButton from '../../shared/BigButton';
import AddPerson from '../../People/AddPersonContainer';
import Companies from '../../Companies/CompaniesContainer';
import ManagePeople from '../../People/ManagePeopleContainer';

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const InnerContainer = styled.div`
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    max-height: 500px;
    max-width: 400px;
    width: 100%;
`;

class App extends React.Component {
    componentDidMount() {
        this.props.fetchCompanies();
    }

    render() {
        const { closeModal, loading, modalText, showModal } = this.props;

        return (
            <Container>
                <Navbar />
                <Switch>
                    <Route path="/companies" component={Companies} />
                    <Route path="/people" component={ManagePeople} />
                    <Route path="/" component={AddPerson} />
                </Switch>
                <Modal
                    ariaHideApp={false}
                    isOpen={showModal}
                    style={{
                        content: {
                            alignItems: 'center',
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'center'
                        }
                    }}
                >
                    {loading ? (
                        <InnerContainer>
                            <Spinner size="large" />
                        </InnerContainer>
                    ) : (
                        <InnerContainer>
                            <p>{modalText}</p>
                            <BigButton onClick={closeModal}>Close</BigButton>
                        </InnerContainer>
                    )}
                </Modal>
            </Container>
        );
    }
}

export default App;

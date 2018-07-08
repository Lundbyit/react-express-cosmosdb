import React from 'react';
import PageContainer from '../../shared/PageContainer';
import AddPersonForm from './AddPersonForm';

const AddPerson = ({ addPerson, clearInput, companies, inputCleared }) => {
    return (
        <PageContainer title={'Add Person'}>
            <AddPersonForm
                addPersonAction={addPerson}
                clearInput={clearInput}
                companies={companies}
                inputCleared={inputCleared}
            />
        </PageContainer>
    );
};

export default AddPerson;

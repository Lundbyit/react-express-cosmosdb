import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import PageContainer from '../../shared/PageContainer';
import Form from '../../shared/Form';
import { small } from '../../mediaQueries';
import NewCompanyForm from './NewCompanyForm';
import EmployeeItem from './EmployeeItem';

const EmployeeList = styled.ol`
    list-style: none;
    padding: 0;
    width: calc(300px + 20vw);

    ${small} {
        width: 100%;
    }
`;

class Companies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: ''
        };

        this.onCompanySelect = this.onCompanySelect.bind(this);
    }

    componentWillUnmount() {
        this.props.selectCompany('');
    }

    onCompanySelect(selected) {
        const selectedId = selected ? selected.value : null;
        this.props.selectCompany(selectedId);
        this.setState({
            selectedId: selectedId
        });
    }

    renderCompany(removeEmployee) {
        const { selectedCompany } = this.props;

        if (Object.keys(selectedCompany).length === 0) {
            return null;
        }

        if (selectedCompany.employees.length === 0) {
            return (
                <h3>{`${selectedCompany.name} do not have any employees`}</h3>
            );
        }

        return (
            <EmployeeList>
                {selectedCompany.employees.map(employee => (
                    <EmployeeItem
                        companyId={selectedCompany.id}
                        id={employee._id}
                        key={employee._id}
                        name={employee.name}
                        removeEmployee={removeEmployee}
                    />
                ))}
            </EmployeeList>
        );
    }

    render() {
        const { selectedId } = this.state;
        const {
            addCompany,
            clearInput,
            companies,
            inputCleared,
            removeEmployee
        } = this.props;

        const placeholderText =
            companies.length <= 0
                ? 'No companies found...'
                : 'Select a company';

        return (
            <PageContainer title={'Companies'}>
                <NewCompanyForm
                    addCompany={addCompany}
                    clearInput={clearInput}
                    inputCleared={inputCleared}
                />
                <Form>
                    <span>Select company to see their employees</span>
                    <Select
                        name='company'
                        onChange={this.onCompanySelect}
                        options={companies}
                        placeholder={placeholderText}
                        value={selectedId}
                    />
                </Form>
                {this.renderCompany(removeEmployee)}
            </PageContainer>
        );
    }
}

export default Companies;

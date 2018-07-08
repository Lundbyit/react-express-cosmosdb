import React from "react";
import styled from "styled-components";
import PageContainer from "../../shared/PageContainer";
import PersonItem from "./PersonItem";

const EmployeeList = styled.ol`
    list-style: none;
    max-width: 100vw;
    padding: 0;
    width: calc(300px + 25vw);
`;

class ManagePeoples extends React.Component {
    componentDidMount() {
        this.props.fetchPeople()
    }

    render() {
        const { companies, linkCompany, people } = this.props;

        const noPeople = people.length === 0;

        return (
            <PageContainer title={'Manage Persons'}>
                {noPeople && <h3>There are no unemployed people</h3>}
                <EmployeeList>
                    {people.map(person => (
                        <PersonItem
                            companies={companies}
                            key={person.id}
                            linkCompany={linkCompany}
                            person={person}
                        />
                    ))}
                </EmployeeList>
            </PageContainer>
        );
    }
} 

export default ManagePeoples;

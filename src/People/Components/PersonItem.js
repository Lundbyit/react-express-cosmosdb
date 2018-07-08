import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Content = styled.span`
    flex-basis: 30%;
    margin-left: 10px;
`;

const Container = styled.li`
    align-items: center;
    background: whitesmoke;
    border: 1px solid gainsboro;
    display: flex;
    flex-wrap: wrap;
    min-height: 40px;
    justify-content: space-between;
    width: 100%;
`;

const SmallButton = styled.button`
    background-color: ${props => props.disable ? 'gray' : 'green'};
    border: 0;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    flex-basis: 20%;
    font-size: 1em;
    height: 25px;
    margin-right: 10px;
    text-align: center;
`;

const StyledSelect = styled(Select)`
    flex-basis: 35%;
`;

class EmployeeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: ''
        };

        this.onActionClick = this.onActionClick.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
    }

    onActionClick() {
        const { linkCompany, person } = this.props;

        linkCompany(this.state.selectedId, person.id);
    }

    onCompanyChange(selected) {
        this.setState({
            selectedId: selected ? selected.value : ''
        });
    }

    render() {
        const { selectedId } = this.state;
        const { companies, person } = this.props;

        const disableButton = selectedId === '';

        const placeholderText =
            companies.length <= 0
                ? 'No companies found...'
                : 'Select a company';

        return (
            <Container>
                <Content>{person.name}</Content>
                <StyledSelect
                    clearable={true}
                    name='company'
                    onChange={this.onCompanyChange}
                    options={companies}
                    placeholder={placeholderText}
                    value={selectedId}
                />
                {disableButton ? (
                    <SmallButton disabled disable={true} onClick={this.onActionClick}>
                        link
                    </SmallButton>
                ) : (
                    <SmallButton onClick={this.onActionClick}>link</SmallButton>
                )}
            </Container>
        );
    }
}

export default EmployeeItem;

import React from 'react';
import styled from 'styled-components';

const Content = styled.span`
    margin-left: 10px;
`;

const Row = styled.li`
    align-items: center;
    background: whitesmoke;
    border: 1px solid gainsboro;
    display: flex;
    height: 40px;
    justify-content: space-between;
    width: 100%;
`;

const SmallButton = styled.button`
    border: 0;
    border-radius: 3px;
    color: red;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    height: 25px;
    margin-right: 10px;
    text-align: center;
    width: 25px;
`;

class EmployeeItem extends React.Component {
    constructor(props) {
        super(props);

        this.onActionClick = this.onActionClick.bind(this);
    }

    onActionClick() {
        const { companyId, id, removeEmployee } = this.props;
        removeEmployee(companyId, id);
    }

    render() {
        const { name } = this.props;

        return (
            <Row>
                <Content>{name}</Content>
                <SmallButton type='button' onClick={this.onActionClick}>
                    x
                </SmallButton>
            </Row>
        );
    }
}

export default EmployeeItem;

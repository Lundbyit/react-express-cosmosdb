import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { large } from '../../mediaQueries';

const Bar = styled.ol`
    align-items: center;
    display: flex;
    height: 42px;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 1024px;

    ${large} {
        width: 100%;
    }
`;

const NavItem = styled.li`
    align-items: center;
    display: flex;
    flex-grow: 1;
    height: 100%;
    justify-content: center;
`;

const Navbar = () => (
    <Bar>
        <NavItem>
            <NavLink to='/'>Add Person</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/companies'>Companies</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/people'>Manage Persons</NavLink>
        </NavItem>
    </Bar>
);

export default Navbar;

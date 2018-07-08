import styled from 'styled-components';

const Input = styled.input`
    background-color: white;
    border-radius: 4px;
    border: ${props => (props.invalid ? '1px solid red' : '1px solid #ccc')};
    box-sizing: border-box;
    color: #333;
    height: 36px;
    margin-bottom: 10px;
    outline: none;
    overflow: hidden;
    padding: 10px;
    width: 100%;
`;

export default Input;

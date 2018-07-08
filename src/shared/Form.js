import styled from 'styled-components';
import { small } from '../mediaQueries';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-top: 10px;
    width: 300px;

    ${small} {
        width: 94%;
    }
`;

export default Form;

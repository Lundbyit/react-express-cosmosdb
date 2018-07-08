import React from 'react';
import styled from 'styled-components';
import image from '../Resources/user.svg';
import { large } from '../mediaQueries';

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1024px;

    ${large} {
        width: 100%;
    }
`;

const Image = styled.img`
    width: calc(70px + 10vw);
`;

const Title = styled.h1`
    font-size: calc(24px + 2vw);
`;

class PageContainer extends React.Component {
    render() {
        const { children, title } = this.props;
        return (
            <Container>
                <Title>{title}</Title>
                <Image src={image} />
                {children}
            </Container>
        );
    }
}

export default PageContainer;

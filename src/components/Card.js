import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 40px;
    background-color: #000;
`;
const Title = styled.h2`
    font-size: 1.8rem;
    opacity: 0.8;
    color: #FFF;
    z-index: 2;
`;
const Text = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 50px;
    color: #FFF;
    margin: 0;
    z-index: 2;
`;
const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    opacity: 0.6;

    &:hover {
        opacity: 0.3;
    }
`;

const Card = ({showcase}) => {
    return (
        <Container image={showcase.image}>
            <Title>{showcase.title}</Title>
            <Text>{showcase.text}</Text>
            <BackgroundImage src={showcase.image} alt="background image" />
        </Container>
    );
};

export default Card;
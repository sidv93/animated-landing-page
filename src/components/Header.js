import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../assets/right-arrow.svg';

const Container = styled.section`
    background-color: #FFF;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 8%;
`;
const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Heading = styled.h2`
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
    margin: 0;
`;
const Hamburger = styled.div`
    position: relative;
    height: 2px;
    width: 25px;
    background-color: black;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        height: 2px;
        width: 25px;
        top: -8px;
        left: 0;
        background-color: black;
        z-index: 1;
    }

    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 25px;
        bottom: -8px;
        left: 0;
        background-color: black;
        z-index: 1;
    }
`;
const Tagline = styled.h1`
    width: 53%;
    font-size: 2.8rem;
    line-height: 70px;
`;
const MoreAboutContainer = styled.div`
    display: flex;
    align-items: center;
`;
const MoreAbout = styled.p`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
`;
const RightArrow = styled.img`
    margin-left: 30px;
    border: 1px solid black;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding: 10px;
`;

const Header = () => {
    return (
        <Container>
            <HeadingContainer>
                <Heading>
                    Agency
                </Heading>
                <Hamburger>

                </Hamburger>
            </HeadingContainer>
            <Tagline>
                Creating unique brands is what we do.
            </Tagline>
            <MoreAboutContainer>
                <MoreAbout>
                    More  about us.
                </MoreAbout>
                <RightArrow src={ArrowRight} alt="right arrow" />
            </MoreAboutContainer>
        </Container>
    );
};

export default Header;
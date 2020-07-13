import React, { useRef } from 'react';
import styled from 'styled-components';
import ArrowRight from '../assets/right-arrow.svg';
import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    animate: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.4,
            staggerDirection: 1,
        },
    },
};
const letter = {
    initial: {
        y: 50,
        opacity: 0,
        skewY: '2deg'
    },
    animate: {
        y: 0,
        opacity: 1,
        skewY: 0,
        transition: { delay: 0.7, duration: 3, ease: transition.ease },
    },
};
const overlayContainer = {
    animate: {
        transition: {
            delayChildren: 2.6,
            staggerChildren: 0.4,
            staggerDirection: 1,
        },
    }
};
const overlayElement = {
    intial: {
        height: '100%'
    },
    animate: {
        height: 0,
        transition: { ...transition }
    }
}

const Container = styled(motion.section)`
    background-color: #fff;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 8%;
    position: relative;
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
const TaglineContainer = styled.div`
    z-index: 1;
    mix-blend-mode: difference;
`;
const Tagline = styled(motion.h1)`
    width: 53%;
    font-size: 2.8rem;
    line-height: 30px;
    mix-blend-mode: difference;
    color: #fff;
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
    cursor: pointer;
`;

const OverlayContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const OverlayComponent = styled(motion.div)`
    background-color: #000;
`;

const Header = () => {
    const overlayRef = useRef();
    function hideOverlay() {
        overlayRef.current.style.display = 'none';
    }
    return (
        <Container initial="initial" animate="animate" exit="exit" onAnimationComplete={hideOverlay}>
            <HeadingContainer>
                <Heading>
                    Agency
                </Heading>
                <Hamburger />
            </HeadingContainer>
            <TaglineContainer variants={firstName}>
                <Tagline variants={letter}>
                    Creating unique brands is
                </Tagline>
                <Tagline variants={letter}>
                    what we do.
                </Tagline>
            </TaglineContainer>
            <MoreAboutContainer>
                <MoreAbout>
                    More  about us.
                </MoreAbout>
                <RightArrow src={ArrowRight} alt="right arrow" />
            </MoreAboutContainer>
            <OverlayContainer ref={overlayRef} variants={overlayContainer}>
                <OverlayComponent variants={overlayElement} />
                <OverlayComponent variants={overlayElement} />
                <OverlayComponent variants={overlayElement} />
            </OverlayContainer>
        </Container>
    );
};

export default Header;
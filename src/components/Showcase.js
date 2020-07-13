import React, { useRef } from 'react';
import styled from 'styled-components';
import Curology from '../assets/curology-min.png';
import Lumin from '../assets/lumin-min.png';
import Yourspace from '../assets/yourspace-min.png';
import Card from './Card';
import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const showcaseContainer = {
    animate: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.4,
            staggerDirection: 1,
        },
    }
};
const overlayElement = {
    intial: {
        width: '100%'
    },
    animate: {
        width: 0,
        transition: { ...transition }
    }
}

const showcases = [
    {
        title: 'Curology',
        text: `A custom formula for your skin's unique needs`,
        image: Curology
    },
    {
        title: 'Yourspace',
        text: 'Open space floor plans for your next venture',
        image: Yourspace
    },
    {
        title: 'Lumin',
        text: 'For you best look ever',
        image: Lumin
    }
];

const Container = styled(motion.section)`
    width: 100%;
    height: 50vh;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    position: relative;
`;
const OverlayContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
`;
const OverlayComponent = styled(motion.div)`
    background-color: black;
`;

const Showcase = () => {
    const overlayRef = useRef();
    const hideOverlay = () => {
        overlayRef.current.style.display = 'none';
    }
    return (
        <motion.div style={{position: 'relative'}} animate="animate" initial="initial" exit="exit" onAnimationComplete={hideOverlay}>
            <Container>
                {
                    showcases.map((item, index) => <Card key={String(index)} showcase={item} />)
                }

            </Container>
            <OverlayContainer ref={overlayRef} variants={showcaseContainer}>
                <OverlayComponent variants={overlayElement} />
                <OverlayComponent variants={overlayElement} />
                <OverlayComponent variants={overlayElement} />
            </OverlayContainer>
        </motion.div>
    );
};

export default Showcase;
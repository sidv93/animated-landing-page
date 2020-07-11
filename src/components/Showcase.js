import React from 'react';
import styled from 'styled-components';
import Curology from '../assets/curology-min.png';
import Lumin from '../assets/lumin-min.png';
import Yourspace from '../assets/yourspace-min.png';
import Card from './Card';

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

const Container = styled.section`
    width: 100%;
    height: 50vh;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const Showcase = () => {
    return (
        <Container>
            {
                showcases.map((item, index) => <Card key={String(index)} showcase={item} />)
            }
        </Container>
    );
};

export default Showcase;
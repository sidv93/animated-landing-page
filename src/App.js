import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Showcase from './components/Showcase';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #fff;
`;

function App() {
  return (
    <Container>
      <Header />
      <Showcase />
    </Container>
  );
}

export default App;

import React from 'react';

import Header from '../../components/Header';
import HomeImage from '../../components/HomeImage';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <div className="container">

        <div className="welcome">
          <h3>Olá, eu sou</h3>
          <h1>Wesley Alves</h1>
          <p>Programador</p>
        </div>

        <HomeImage />

      </div>
    </Container>
  );
}

export default Home;

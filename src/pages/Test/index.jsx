import React from 'react';
import AboutImage from '../../components/AboutImage';

import HomeImage from '../../components/HomeImage';

import { Container } from './styles';

function Test() {
  return (
    <Container>
      <h1>Teste de components</h1>
      <HomeImage />
      <AboutImage />
    </Container>
  );
}

export default Test;

import React from 'react';

import Image from '../../assets/home-intro.svg';
import { Container } from './styles';

function HomeImage() {
  return (
    <Container>
      <img src={Image} alt="Wesley Alves" />
    </Container>
  );
}

export default HomeImage;

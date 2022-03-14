import React from 'react';

import Image from '../../assets/about-me.svg';
import { Container } from './styles';

function AboutImage() {
  return (
    <Container>
      <img src={Image} alt="Wesley Alves" />
    </Container>
  );
}

export default AboutImage;

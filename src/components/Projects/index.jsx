import React from 'react';

import Img1 from '../../assets/img-1.png';
import Img2 from '../../assets/img-2.png';
import Img3 from '../../assets/img-3.png';
import Img4 from '../../assets/img-4.png';

import { Container } from './styles';

function Projects() {
  return (
    <Container>

      <div className="title">
        <h1>Projetos</h1>
      </div>

      <div className="content">
        <div className="projects-area">

          <div className="card">
            <img src={Img1} alt="Wesley Alves" />
          </div>
          <div className="card">
            <img src={Img3} alt="Wesley Alves" />
          </div>
          <div className="card">
            <img src={Img2} alt="Wesley Alves" />
          </div>
          <div className="card">
            <img src={Img4} alt="Wesley Alves" />
          </div>

        </div>
      </div>

    </Container>
  );
}

export default Projects;

import React from 'react';

import { Container } from './styles';

function Header() {
  const handlerNavbar = () => {
    const elementNavbar = document.getElementById('navbar');
    const elementButton = document.getElementById('buttonNavbar');

    if (elementNavbar.classList.contains('navbar-active')) {
      elementNavbar.classList.remove('navbar-active');
      elementButton.classList.remove('active');
    } else {
      elementNavbar.classList.add('navbar-active');
      elementButton.classList.add('active');
    }
  };

  return (
    <Container>
      <nav>

        <div className="logo">
          <a href="/">WA</a>
        </div>

        <div className="navbar">

          <div className="btn">
            <button id="buttonNavbar" type="button" onClick={handlerNavbar}>
              <span />
              <span />
              <span />
            </button>
          </div>

          <ul id="navbar">
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/#sobre">Sobre</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#projects">Projetos</a></li>
            <li><a href="/#contact">Contato</a></li>
          </ul>
        </div>

      </nav>
    </Container>
  );
}

export default Header;

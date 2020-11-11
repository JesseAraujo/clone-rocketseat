import React from 'react';

import './styles/styles.css'

import LogoImg from './assets/logo.png'
import avatarImg from './assets/avatar.svg'
import LaunchBase from './assets/launchBase.png'

function App() {
  return (
    <div className="App">
      <header>

        <div className="itens-haeader">
          <a href="#"><img src={LogoImg} alt="Logo Rocketseat" /></a>

          <div className="itens-right">
            <button className="button-home">
              <img src={avatarImg} alt="" />
            </button>

            <button className="button-home">
              <img src={avatarImg} alt="" />
            </button>

            <p>Jessé Brisola de Araujo</p>

            <div className="image-a">
              <img src="https://ui-avatars.com/api/?size=128&amp;background=5B4699&amp;color=fff&amp;name=Jesse%20Brisola%20De%20Araujo" alt="Jesse Brisola De Araujo Profile" />
            </div>

          </div>
        </div>

      </header>

      <main>

        <div className="list-cards">
          <div className="card">
            <img src={LaunchBase} alt="" />

            <p><strong>Domine programação do zero</strong> e tenha acesso às melhores oportunidades do mercado</p>
          </div>
        </div>

      </main>


    </div>
  );
}

export default App;

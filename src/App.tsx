import React from 'react';

import './styles/styles.css'

import LogoImg from './assets/logo.png'
import avatarImg from './assets/avatar.svg'
import Starter from './assets/starter.png'
import LaunchBase from './assets/lauchbase.png'
import goStak from './assets/gostack.png'

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
          <div className="card card-starter">
            <div className="starter">
              <img src={Starter} alt="" />
              <p><strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos</p>
            </div>
          </div>

          <div className="card card-launch">
            <div className="launchbase">
              <img src={LaunchBase} alt="" />
              <p><strong>Domine programação do zero</strong> e tenha acesso às melhores oportunidades do mercado</p>
            </div>
          </div>

          <div className="card card-go">
            <div className="gostack">
              <img src={goStak} alt="" />
              <p><strong>Treinamento imersivo</strong> nas tecnologias mais modernas de desenvolvimento web e mobile</p>
            </div>

            <a href="https://rocketseat.com.br/bootcamp" target="_blank"><strong>Garanta sua vaga</strong> para a próxima turma!</a>
          </div>

        </div>

      </main>


    </div>
  );
}

export default App;

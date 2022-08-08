import React from 'react';

import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { Figure } from 'react-bootstrap';

import profileImage from "./assets/images/profile.jpg";
import enfeiteImage01 from "./assets/images/enfeite.jpg";
import enfeiteImage02 from "./assets/images/post.jpg";
import logoHTML from "./assets/images/logo-html.png";
import logoCSS from "./assets/images/logo-css.png";
import logoSASS from "./assets/images/logo-sass.png";
import logoJS from "./assets/images/logo-js.png";
import logoREACT from "./assets/images/logo-react.png";
import logoGIT from "./assets/images/logo-git.png";
import logoGITHUB from "./assets/images/logo-github.png";


import { FiDownload } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";

import './assets/css/App.css';
import './assets/css/global.css';

const App = () => {
  return (
    <>     
      <Header />
      <section className='container'>
        <article className='info'>
          <p className='info-item'>Olá, eu sou <br></br><strong id='name'>Guilherme Magarotti</strong><br></br>Desenvolvedor Front-End</p>
          <button id="cv-button"><a href="https://drive.google.com/file/d/1DW2oHAzoc11wEgYKqB0v6l5fTsbzIciP/view?usp=sharing" target="_blank" rel="noreferrer">Currículo <FiDownload /></a></button>
        </article>
        
        <article className='image'>
            <Figure>
              <Figure.Image id="config-image"
                width={130}
                height={180}
                alt="130x180"
                src={profileImage}
              />
            </Figure>
        </article>
      </section>
        
      <section className='container-sobre'>
        <article className='texto-sobre'>
          <h1 className='title'><HiOutlineAcademicCap /> Minhas principais qualidades e um pouco mais sobre mim...</h1>
          <p className='formacao'>Eu sou estudante de <span className='destaque'>Análise e Desenvolvimento de Sistemas</span> na universidade <span className='destaque'>FACENS</span>, em Sorocaba-SP. Além disso, estudo diariamente a área de Desenvolvimento Web, especificamente o setor <span className='destaque'>Front-End</span>, com HTML5, CSS3, Bootstrap, SASS, JS e React, pois adoro desenvolver páginas e softwares utilizando design + programação.</p>
        </article>

        <div className="cartoes-sobre">
          <article className='card-layout'>
            <div className="img">
              <img src={enfeiteImage01} alt="Foto Enfeite" width={180} height={110} id="config-image" />
            </div>
            
            <div className='card'>
              <ul className='card-list'>
                <p className='list-title'>Soft Skills</p>
                <li className='list-item'>Comunicativo</li>
                <li className='list-item'>Organizado</li>
                <li className='list-item'>Resiliente</li>
              </ul>
            </div>
          </article>
          
          <article className='card-layout'>
            <div className="img">
              <img src={enfeiteImage02} alt="Foto Enfeite" width={180} height={110} id="config-image" />
            </div>

            <div className='card'>
              <ul className='card-list'>
                <p className='list-title'>Hobbies</p>
                <li className='list-item'>Video-games</li>
                <li className='list-item'>Futebol</li>
                <li className='list-item'>Filmes / Séries</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className='container-skills'>
        <article className="conteudo-skills">
          <div className="skills-title">
            <p><HiOutlineBriefcase /> Hard Skills</p>
          </div>
          <div className="skills-images">
            <img src={logoHTML} alt="Logo HTML" width={53} height={45} className="new-HW" />
            <img src={logoCSS} alt="Logo CSS" width={53} height={45} className="new-HW" />
            <img src={logoSASS} alt="Logo SASS" width={50} height={40} />
            <img src={logoJS} alt="Logo JS" width={50} height={40} />
            <img src={logoREACT} alt="Logo REACT" width={50} height={40} />
            <img src={logoGIT} alt="Logo GIT" width={50} height={40} />
            <img src={logoGITHUB} alt="Logo GITHUB" width={45} height={40} />
          </div>
        </article>
      </section>
      
      <Cards />
      <Footer />
    </>
  );
}

export default App;

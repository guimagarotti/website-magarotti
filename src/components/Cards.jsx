import React from "react";

import { Button, Card } from 'react-bootstrap';
import { AiOutlineBarChart } from 'react-icons/ai';
import Proj01 from "../assets/images/proj-cep.png";
import Proj02 from "../assets/images/proj-calc.png";
import Proj03 from "../assets/images/proj-e-commerce.png";
import Proj04 from "../assets/images/proj-estac.png";

const Cards = () => {
  return (
    <div className="conteudo-projetos" id="projetos">
      <div className="title-projetos">
          <p><AiOutlineBarChart /> Projetos Realizados</p>
      </div>
      <div className="cards-projetos">
        <Card className="card-style" style={{ width: '13rem' }}>
          <Card.Img src={Proj01} class="card-image" />
          <Card.Body>
            <Card.Title className="card-title">Buscador de CEP</Card.Title>
            <Card.Text className="card-text">
              Projeto de um <strong>sistema</strong> que <strong>rastreia</strong>, perfeitamente, o <strong>CEP</strong> inserido pelo usuário, utilizando <strong>HTML5, pré-processador SASS</strong> e a <strong>biblioteca React.</strong>
            </Card.Text>
              <Button className="btn-card">
                <a href="https://guimagarotti.github.io/cep-searching/" target="_blank" rel="noreferrer">Acesse o projeto!</a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-style" style={{ width: '13rem' }}>
            <Card.Img src={Proj02} class="card-image" />
            <Card.Body>
              <Card.Title className="card-title">Calculadora WEB</Card.Title>
              <Card.Text className="card-text">
                Projeto de uma <strong>Calculadora</strong> digital e funcional, criada com responsividade para múltipos dispositivos, utilizando <strong>HTML5, CSS3 e JavaScript.</strong>
              </Card.Text>
              <Button className="btn-card">
                <a href="https://guimagarotti.github.io/calculator/" target="_blank" rel="noreferrer">Acesse o projeto!</a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-style" style={{ width: '13rem' }}>
            <Card.Img src={Proj03} class="card-image" />
            <Card.Body>
              <Card.Title className="card-title">E-Commerce</Card.Title>
              <Card.Text className="card-text">
                Projeto de uma <strong>página</strong> de um E-Commerce, no caso, uma loja <strong>virtual</strong> e <strong>fictícia</strong>, para divulgar produtos, utilizando <strong>HTML5, CSS3, SASS e Bootstrap</strong>.
              </Card.Text>
              <Button className="btn-card">
                <a href="https://guimagarotti.github.io/e-commerce/" target="_blank" rel="noreferrer">Acesse o projeto!</a>
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-style" style={{ width: '13rem' }}>
            <Card.Img src={Proj04} class="card-image" />
            <Card.Body>
              <Card.Title className="card-title">Estacionamento</Card.Title>
              <Card.Text className="card-text">
                Projeto de um sistema de <strong>estacionamento</strong>, que possibilita adicionar e remover veículos do sistema, com <strong>HTML5, CSS3, JavaScript e TypeScript.</strong>
              </Card.Text>
              <Button className="btn-card">
                <a href="https://guimagarotti.github.io/estacionamento-typescript/" target="_blank" rel="noreferrer">Acesse o projeto!</a>
              </Button>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
}

export default Cards;
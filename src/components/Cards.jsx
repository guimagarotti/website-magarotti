import React from "react";

import { Button, Card } from 'react-bootstrap';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import Proj01 from "../assets/images/proj-cep.png";
import Proj02 from "../assets/images/proj-calc.png";
import Proj03 from "../assets/images/proj-spotify.png";
import Proj04 from "../assets/images/proj-estac.png";

const Cards = () => {
  return (
    <div className="conteudo-projetos">
      <div className="title-projetos">
          <p><MdOutlineCollectionsBookmark /> Projetos Realizados</p>
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
                Acesse o projeto!
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
                Acesse o projeto!
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-style" style={{ width: '13rem' }}>
            <Card.Img src={Proj03} class="card-image" />
            <Card.Body>
              <Card.Title className="card-title">Clone do Spotify</Card.Title>
              <Card.Text className="card-text">
                Projeto de <strong>clone</strong> da interface inicial do <strong>Spotify</strong>, criada com responsividade para múltipos dispositivos, utilizando <strong>HTML5, CSS3 Grid e Flexbox.</strong>
              </Card.Text>
              <Button className="btn-card">
                Acesse o projeto!
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
                Acesse o projeto!
              </Button>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
}

export default Cards;
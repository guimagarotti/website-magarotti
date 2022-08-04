import React from "react";

import { Button, Card } from 'react-bootstrap';
import { MdOutlineCollectionsBookmark } from 'react-icons/md';
import Proj01 from "../assets/images/proj-cep.png";
import Proj02 from "../assets/images/proj-calc.png";
import Proj03 from "../assets/images/proj-spotify.png";

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
            <Card.Title>Buscador de CEP</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
              <Button className="btn-card">
                Acesse o site
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-style" style={{ width: '13rem' }}>
            <Card.Img src={Proj02} class="card-image" />
            <Card.Body>
              <Card.Title>Calculadora WEB</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button className="btn-card">
                Acesse o site
              </Button>
            </Card.Body>
          </Card>
          <Card className="card-style" style={{ width: '13rem' }}>
            <Card.Img src={Proj03} class="card-image" />
            <Card.Body>
              <Card.Title>Clone do Spotify</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button className="btn-card">
                Acesse o site
              </Button>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
}

export default Cards;
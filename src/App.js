import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Card>
        <Card.Img src="https://picsum.photos/200/100" />
        <Card.Body>
          <Card.Title>
            Título de Exemplo!
          </Card.Title>
          <Card.Text>
            Texto de Exemplo!
          </Card.Text>
          <Button variant="warning">Teste</Button>
        </Card.Body>
      </Card>
      
      <Breadcrumb>
        <Breadcrumb.Item>Teste 1</Breadcrumb.Item>
        <Breadcrumb.Item>Teste 2</Breadcrumb.Item>
        <Breadcrumb.Item>Teste 3</Breadcrumb.Item>
        <Breadcrumb.Item>Teste 4</Breadcrumb.Item>
        <Breadcrumb.Item>Teste 5</Breadcrumb.Item>
      </Breadcrumb>

      <Alert variant="danger">Isso é um alerta!</Alert>

      <Button variant="success">Teste</Button>
    </div>
  );
}

export default App;

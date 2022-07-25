import React from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './App.css'

const App = () => {
  return (
    <>
      <Navbar expand="md" style={{background: '#111111'}}>
        <Container fluid>
            <Navbar.Brand href="#home" id="nav-title"><AiOutlineLeft />Magarotti<AiOutlineRight /></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Item>
                    <Nav.Link className="nav-text" style={{color: '#d4a470'}}>Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1" className="nav-text" style={{color: '#d4a470'}}>Sobre</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2" className="nav-text" style={{color: '#d4a470'}}>Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-3" className="nav-text" style={{color: '#d4a470'}}>Habilidades</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-4" className="nav-text" style={{color: '#d4a470'}}>Contato</Nav.Link>
                    </Nav.Item>
                  </Nav>
            </Navbar.Collapse>            
        </Container>
      </Navbar> 

      <div className='container'>
        <div className='info'>
          <p className='info-item'>Olá, seja bem-vindo, eu sou <br></br><strong id='name'>Guilherme Magarotti</strong><br></br>Desenvolvedor Front-End</p>
        </div>
        <div className='img'>
          <img src="" width="100px" height="100px"></img>
        </div>
      </div>  
    </>
  );
}

export default App;

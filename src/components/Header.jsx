import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Header = () => {
  return (
    <Navbar expand="md" style={{background: '#111111'}} className="navbar-content">
        <Container fluid>
          <Navbar.Brand href="#inicio" id="nav-title"><AiOutlineLeft />Magarotti<AiOutlineRight /></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Item>
                  <Nav.Link className="nav-text active" style={{color: '#fff'}} href="#inicio">Inicio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="link-1" className="nav-text" style={{color: '#d4a470'}} href="#sobre">Sobre</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="link-1" className="nav-text" style={{color: '#d4a470'}} href="#skills">Skills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="link-2" className="nav-text" style={{color: '#d4a470'}} href="#projetos">Projetos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="link-4" className="nav-text" style={{color: '#d4a470'}} href="#contato">Contato</Nav.Link>
                  </Nav.Item>
                </Nav>
          </Navbar.Collapse>            
        </Container>
      </Navbar>
  );
}

export default Header;



  
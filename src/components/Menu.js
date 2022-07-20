import React from "react";

import { Nav, Navbar, Container } from 'react-bootstrap';
import './Menu.css'

const Menu = () => {
  return (
    <>
      <Navbar expand="md">
        <Container fluid id="xupex">
            <Navbar.Brand href="#home" id="nav-title">🧑‍💻 <strong>Magarotti</strong></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item>
                    <Nav.Link href="/home" className="nav-text" style={{color: '#384170'}}>Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1" className="nav-text" style={{color: '#384170'}}>Sobre</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2" className="nav-text" style={{color: '#384170'}}>Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-3" className="nav-text" style={{color: '#384170'}}>Contato</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>            
        </Container>
      </Navbar>      
    </>
  );
}

export default Menu;
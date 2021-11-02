import React from 'react';
import styles from './Header.module.css';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../../../assets/img/memopedia_logo.jpg'

const Header = () => (

  <div>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image className="classLogo" src={logo} roundedCircle />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default Header;

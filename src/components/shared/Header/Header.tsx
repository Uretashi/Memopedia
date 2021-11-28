import React from 'react';
import styles from './Header.module.css';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../../../assets/img/memopedia_logo.jpg';


const Header = () => (
  <div>
      <Navbar bg="dark" variant="dark">
        <Container className={styles.headerContainer}>
          <Navbar.Brand href="/">
            <Image className="rounded float-left" src={logo} roundedCircle />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={"/search"}>Rechercher</Nav.Link>
            <Nav.Link href={"/postMeme"}>Poster un meme</Nav.Link>
            <Nav.Link href={"/login"}>Login</Nav.Link>
            <Nav.Link href={"/createAccount"}>Créer un compte</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
);

export default Header;

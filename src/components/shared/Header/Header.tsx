import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';
import memopedia_logo from '../../../assets/img/memopedia_logo.jpg';
import logged_acount_logo from '../../../assets/img/login_cropped.png'
import UserContext from "../../../context/UserContext";

export default function Header() {

    const userContext = useContext(UserContext);

    /**
     * disconnect the user
     */
    const disconnect = () => {
        localStorage.clear();
        userContext.setUser({})
    }

    return (
        <UserContext.Consumer>
            {({user}) => (
                <div className={styles.Header}>
                    <Navbar className="mr-1" bg="dark" variant="dark">
                        <Container className={styles.headerContainer}>
                            <Navbar.Brand href="/">
                                <Image className="rounded float-left" src={memopedia_logo} roundedCircle />
                            </Navbar.Brand>
                            <Nav className={styles.headerNav}>
                                <div className={styles.navFirstDiv}>
                                    <Link to="/search/uwu">Rechercher</Link>
                                    {Object.keys(user).length === 0 ?
                                        (
                                            <div className={styles.accountDiv}>
                                                <Link to="/login">Login</Link>
                                                <Link to="/createAccount">Créer un compte</Link>
                                            </div>
                                        ) :
                                        (<Link to="/postMeme">Poster un meme</Link>)
                                    }
                                </div>
                                {Object.keys(user).length > 0 &&
                                    <NavDropdown
                                        className={styles.dropdownToggle}
                                        id="nav-dropdown-dark-example"
                                        title={<Image className={styles.accountLogo} src={logged_acount_logo} roundedCircle />}
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item onClick={disconnect}>Se déconnecter</NavDropdown.Item>
                                    </NavDropdown>
                                }
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )}
        </UserContext.Consumer>
    );
}

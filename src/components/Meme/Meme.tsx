import React from 'react';
import styles from './Meme.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import meme1 from '../../assets/meme/meme6.jpg';

require('dotenv').config();

export default class Meme extends React.Component {

    memes: any = [];

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/memes/byId?20`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log("Vous n'avez rien vu monsieur...")
                }
        );
    }

    render() {
        return (
            <div>
                <h1>ParamTitle</h1>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className={styles.DivImage} xs={12} sm={4} md={8}>
                            <img src={meme1} className={styles.MemeImage} />
                        </Col>
                    </Row>
                </Container>
                <Container className={styles.Contain}>
                    <Row>
                        <Col xs={8}>
                            <div className={styles.DivDescription}>
                                <p className={styles.WriteSection}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles.DivVote}>
                                <p className={styles.WriteSection}>Likes: param</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

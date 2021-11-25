import React from 'react';
import styles from './Meme.module.css';
import { Container, Row, Col } from 'react-bootstrap';

require('dotenv').config();

export default class Meme extends React.Component {

    memes = [];

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/memes/byId?20`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log("Vous n'avez rien vu monsieur...")
                });
    }

    render() {
        return (
            <body>
                <div>
                    <h1>ParamTitle</h1>
                    <div className={styles.DivContainer}>
                        <div className={styles.DivImage}>
                            <img className={styles.MemeImage} />
                        </div>

                        <Container>
                            <Row>
                                <Col xs={8}>
                                    <div className={styles.DivDescription}>
                                        test
                                    </div>
                                </Col>
                                <Col>
                                    <div className={styles.DivVote}>
                                        Test
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </body>
        );
    }
}

import React from 'react';
import styles from './Memesearch.module.css';
import { Container, Row, Col } from 'react-bootstrap';

require('dotenv').config();

export default class Memesearch extends React.Component {

    memes: any = [];

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/memes/byTag?tags=youtube,gif`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log('`^`/')
                });
    }

    render() {
        return (
            <body>
                <h1>Entrer un ou plusieurs tags : </h1>
                <Container>
                    <Row xs={1} md={2}>
                        <Col >
                            <form>
                                <label className={styles.wider}>
                                    <input className={styles.wider} value="test" />
                                    <button>Test</button>
                                </label>
                            </form>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </body>
        );
    }
}

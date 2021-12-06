import React from 'react';
import styles from './Memesearch.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import MemeHolder from "../../components/MemeHolder/MemeHolder";

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
            <div>
                <h1>Entrer un ou plusieurs tags : </h1>
                <Container>
                    <Row>
                        <Col >
                            <form className={styles.theForm}>
                                <label className={styles.wider}>
                                    <input className={styles.wider} placeholder="ex : YouTube, Comic..." />
                                    <button>Chercher</button>
                                </label>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <MemeHolder />
                <MemeHolder />
                <MemeHolder />
            </div>
        );
    }
}

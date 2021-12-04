import React from 'react';
import styles from './MemeHolder.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import meme8 from '../../assets/meme/meme8.jpg';

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
            <Container className={styles.Holder}>
                <Row className="justify-content-md-center mt-5" md="auto">
                    <Col xs={12} sm={4} md={8}>
                        <h2>ParamTitle</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" md="auto">
                    <img src={meme8} className={styles.MemeImage} />
                </Row>
                <Row>
                    <p>Vote : param</p>
                </Row>
            </Container>
        );
    }
}

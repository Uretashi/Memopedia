import React from 'react';
import styles from './Meme.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import meme1 from '../../assets/meme/meme6.jpg';

require('dotenv').config();


export default class Meme extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { meme: {} };
    }

    componentDidMount() {
        const memeId = window.location.href.split('/').pop();
        fetch(`${process.env.REACT_APP_API_URL}/memes/one/${memeId}`)
            .then(res => res.json())
            .then(responseJson => {
                    this.setState({ meme: responseJson.res });
            })
            .catch(err => console.log(err));
    }

    render() {
        const meme = this.state.meme;
        console.log(meme)
        return meme['id_meme'] !== undefined ?
            (
                <div>
                    <h2>{meme.title}</h2>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col className={styles.DivImage} xs={12} sm={4} md={8}>
                                <img src={meme.fileBuffer64} className={styles.MemeImage} />
                            </Col>
                        </Row>
                    </Container>
                    <Container className={styles.Contain}>
                        <Row>
                            <Col xs={8}>
                                <div className={styles.DivDescription}>
                                    <p className={styles.WriteSection}>{meme.description}</p>
                                    <p>Date de publication : {meme.publication_date}</p>
                                    <p>tags : {meme.tags}</p>
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
            ) : (<h3>Pas de meme :/</h3>)
    }
}

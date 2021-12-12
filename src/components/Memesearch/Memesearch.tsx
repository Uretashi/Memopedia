import React from 'react';
import styles from './Memesearch.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';

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
                                    <Autocomplete
                                        id="free-solo-demo"
                                        freeSolo
                                        options={tags.map((option) => option.title)}
                                        renderInput={(params) => <TextField {...params} label="freeSolo" />}
                                    />
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

const tags = [
    { title: '#RosesAreRed' },
    { title: '#Cheating' },
    { title: '#Wii' },
    { title: '#Nintendo' },
    { title: '#Car' },
    { title: '#Video' },
    { title: '#Gif' },
    { title: '#YouTube' },
    { title: '#Prison' },
    { title: '#Comic' },
    { title: '#Medium' },
    { title: '#CrystalBall' },
    { title: '#Pokémon' },
    { title: '#Vietnam' },
    { title: '#History' },
    { title: '#StarWars' },
    { title: '#Kenobi' },
    { title: '#Love' },
    { title: '#Liar' },
    { title: '#Guns' },
    { title: '#Music' },
    { title: '#SystemOfADown' },
    { title: '#Traffic' },
];



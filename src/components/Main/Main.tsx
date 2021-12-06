import React from 'react';
import styles from './Main.module.css';
import { Button, Container, Row, Col, ToggleButtonGroup, ToggleButton, Collapse } from 'react-bootstrap';

import meme1 from '../../assets/meme/meme1.jpg';
import meme5 from '../../assets/meme/meme5.jpg';
import meme3 from '../../assets/meme/meme3.jpg';
import meme4 from '../../assets/meme/meme4.jpg';

export default function Main() {

    return (
        <main>
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className={`${styles.DivButtons}`}>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                    <ToggleButton className={`${styles.bouton}`} id="tbg-radio-1" value={1}>
                                        Last meme
                                    </ToggleButton>
                                    <ToggleButton className={`${styles.bouton}`} id="tbg-radio-2" value={2}>
                                        Last user
                                    </ToggleButton>
                                    <ToggleButton className={`${styles.bouton}`} id="tbg-radio-3" value={3}>
                                        Last tag
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Col>
                        <Col xs={8}>
                        </Col>
                    </Row>
                </Container>

                <Container className={`${styles.NoNameYet}`}>
                    <Row className={`${styles.NoNameYet}`}>
                        <Col xs={3}>
                            <div className={`${styles.divLastUsers}`}>
                                <p>Param1</p>
                                <p>Param2</p>
                                <p>Param3</p>
                                <p>Param4</p>
                                <p>Param5</p>
                                <p>Param6</p>
                                <p>Param7</p>
                                <p>Param8</p>
                                <p>Param9</p>
                                <p>Param10</p>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <Container className={`${styles.memeContainer}`}>
                                <Row className="align-items-center">
                                    <Col>
                                        <div className={`${styles.memeSquare}`}>
                                            <img src={meme1} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={`${styles.memeSquare}`}>
                                            <img src={meme5} />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="align-items-center">
                                    <Col>
                                        <div className={`${styles.memeSquare}`}>
                                            <img src={meme3} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={`${styles.memeSquare}`}>
                                            <img src={meme4} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    );
}

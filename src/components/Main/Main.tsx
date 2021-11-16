import React from 'react';
import styles from './Main.module.css';
import { Button, Container, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "../Connection/Login/Login";
import CreateAccount from "../Connection/CreateAccount/CreateAccount";
import Memesearch from "../Memesearch/Memesearch";
import PostMeme from "../PostMeme/PostMeme";


const Main = () => (

    <main>
        <Container fluid>
            <Row>
                <Col>
                    <div className={`${styles.DivButtons}`}>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton className={`${styles.boutonDeMerde}`} id="tbg-radio-1" value={1}>
                                Last meme
                            </ToggleButton>
                            <ToggleButton className={`${styles.boutonDeMerde}`} id="tbg-radio-2" value={2}>
                                Last user
                            </ToggleButton>
                            <ToggleButton className={`${styles.boutonDeMerde}`} id="tbg-radio-3" value={3}>
                                Last tag
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </Container>

        <Container className={`${styles.NoNameYet}`}>
            <Row className={`${styles.NoNameYet}`}>
                <Col xs={5}>
                    <div className={`${styles.divLastUsers}`}>
                        -qlq
                        -qlqd'autre
                        -jugepas
                    </div>
                </Col>
                <Col xs={5}>
                    <div className={`${styles.FewMemes}`}>

                    </div>
                </Col>
                <Col>
                    <div className={`${styles.FewMemes}`}>

                    </div>
                </Col>
            </Row>
        </Container>


        <h1 className={`${styles.Main} text-white`}>Hello UwU</h1>
        <BrowserRouter>
            <Routes>
                <Route path="search/:tags" element={<Memesearch />} />
                <Route path="postMeme" element={<PostMeme />} />
                <Route path="login" element={<Login />} />
                <Route path="createAccount" element={<CreateAccount />} />
            </Routes>
        </BrowserRouter>
    </main>
);

export default Main;

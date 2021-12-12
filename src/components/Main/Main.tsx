import React from 'react';
import styles from './Main.module.css';
import { Button, Container, Row, Col, ToggleButtonGroup, ToggleButton, Collapse } from 'react-bootstrap';

require('dotenv').config();


export default class Main extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { memes: {}, memeNotFound: false };
    }

    componentDidMount() {
        // get random memes
        fetch(`${process.env.REACT_APP_API_URL}/memes/`, { method: 'GET' })
            .then(res => res.json())
            .then(responseJson => {
                if (responseJson.status === 302) {
                    this.setState({ memes: responseJson.res })
                } else {
                    this.setState({ memeNotFound: true });
                }
            })
            .catch(_ => this.setState({ memeNotFound: true }));
    }

    render() {
        return this.state.memes.length > 0 ? (
            <div>
                <div className={styles.memesContainer}>
                    {this.state.memes.map((meme) => {
                        return (
                            <div className={`${styles.memeSquare}`}>
                                <p>{meme.title}</p>
                                {meme.url.split('.')[1] === 'mp4' ?
                                    (
                                        <video controls={true} autoPlay={true}>
                                            <source type="video/mp4" src={meme.fileBuffer64} />
                                        </video>
                                    ) :
                                    (<img src={meme.fileBuffer64} />)
                                }
                            </div>
                        )
                    })}
                </div>
                {/*<Container fluid>*/}
                {/*    <Row>*/}
                {/*        <Col>*/}
                {/*            <div className={`${styles.DivButtons}`}>*/}
                {/*                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>*/}
                {/*                    <ToggleButton className={`${styles.bouton}`} id="tbg-radio-1" value={1}>*/}
                {/*                        Last meme*/}
                {/*                    </ToggleButton>*/}
                {/*                    <ToggleButton className={`${styles.bouton}`} id="tbg-radio-2" value={2}>*/}
                {/*                        Last user*/}
                {/*                    </ToggleButton>*/}
                {/*                    <ToggleButton className={`${styles.bouton}`} id="tbg-radio-3" value={3}>*/}
                {/*                        Last tag*/}
                {/*                    </ToggleButton>*/}
                {/*                </ToggleButtonGroup>*/}
                {/*            </div>*/}
                {/*        </Col>*/}
                {/*        <Col xs={8}>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}

                {/*<Container className={`${styles.NoNameYet}`}>*/}
                {/*    <Row className={`${styles.NoNameYet}`}>*/}
                {/*        <Col xs={3}>*/}
                {/*            <div className={`${styles.divLastUsers}`}>*/}
                {/*                <p>Param1</p>*/}
                {/*                <p>Param2</p>*/}
                {/*                <p>Param3</p>*/}
                {/*                <p>Param4</p>*/}
                {/*                <p>Param5</p>*/}
                {/*                <p>Param6</p>*/}
                {/*                <p>Param7</p>*/}
                {/*                <p>Param8</p>*/}
                {/*                <p>Param9</p>*/}
                {/*                <p>Param10</p>*/}
                {/*            </div>*/}
                {/*        </Col>*/}
                {/*        <Col xs={8}>*/}
                {/*            <Container className={`${styles.memeContainer}`}>*/}
                {/*                {this.state.memes.map((meme) => {*/}
                {/*                    return (*/}
                {/*                        <Row className="align-items-center">*/}
                {/*                            <Col>*/}
                {/*                                <div className={`${styles.memeSquare}`}>*/}
                {/*                                    <p>{meme.title}</p>*/}
                {/*                                    {meme.url.split('.')[1] === 'mp4' ?*/}
                {/*                                        (*/}
                {/*                                            <video controls={true} autoPlay={true}>*/}
                {/*                                                <source type="video/mp4" src={meme.fileBuffer64} />*/}
                {/*                                            </video>*/}
                {/*                                        ) :*/}
                {/*                                        (<img src={meme.fileBuffer64} />)*/}
                {/*                                    }*/}
                {/*                                </div>*/}
                {/*                            </Col>*/}
                {/*                        </Row>*/}
                {/*                    )*/}
                {/*                })}*/}
                {/*            </Container>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}
            </div>
        ) : this.state.memeNotFound === true ?
            (<p>Une erreur est survenue, pas de memes pour cette fois :/</p>) :
            (<p>Chargement des memes \(^o^)/&gt;....</p>)
    }
}

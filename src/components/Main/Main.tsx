import React from 'react';
import styles from './Main.module.css';

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
                <h2>Random meme's for welcome !</h2>
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
            </div>
        ) : this.state.memeNotFound === true ?
            (<p>Une erreur est survenue, pas de memes pour cette fois :/</p>) :
            (<p>Chargement des memes \(^o^)/&gt;....</p>)
    }
}

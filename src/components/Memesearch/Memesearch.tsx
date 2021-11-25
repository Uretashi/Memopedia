import React from 'react';
import styles from './Memesearch.module.css';

require('dotenv').config();

export default class Memesearch extends React.Component {

    memes = [];

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/memes/byTag?tags=youtube,gif`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log('errrrr mdrrrrr salope')
                });

    }

    render() {
        return (
            <div className={styles.Memesearch}>
                Memesearch Component
            </div>
        );
    }
}

// export default Memesearch;

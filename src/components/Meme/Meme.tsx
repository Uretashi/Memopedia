import React from 'react';
import styles from './Meme.module.css';


class Meme extends React.Component {

    // constructor(props: any) {
    //     super(props);
    // }

    memes: any = [];

    componentDidMount() {
    }

    render() {
        return (
            <div className={styles.Meme}>
                Meme Component
            </div>
        );
    }
}

// const Meme = () => (
//   <div className={styles.Meme}>
//     Meme Component
//   </div>
// );

export default Meme;

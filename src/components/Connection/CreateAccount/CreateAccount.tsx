import React from 'react';
import styles from './CreateAccount.module.css';

const CreateAccount = () => (
  <div className={styles.CreateAccount}>
    <img src={require('../../../assets/img/memopedia_logo.jpg').default} alt=""/>
    <p>CreateAccount Component</p>
  </div>
);

export default CreateAccount;

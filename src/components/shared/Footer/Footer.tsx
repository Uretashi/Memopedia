import React from 'react';
import styles from './Footer.module.css';

import { Card } from 'react-bootstrap';

const Footer = () => (
  <footer className={styles.Footer}>
      <Card className="p-4 rounded-0" bg="dark" text="white">
          <p>Made by Senpai's (with &#10084;) Nathanou-Chan, Vincent-Chan and Alexanderu-Chan (El-Diablo) &copy;2021 UwU</p>
      </Card>
  </footer>
);

export default Footer;

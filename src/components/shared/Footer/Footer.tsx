import React from 'react';
import styles from './Footer.module.css';

import { Card } from 'react-bootstrap';

const Footer = () => (
  <footer className={styles.Footer}>
      <Card className="p-4 rounded-0" bg="dark" text="white">
          <p>Made by Senpai (with &#10084;) Vincent-Chan and Alexanderu-Chan UwU &copy;2021</p>
      </Card>
  </footer>
);

export default Footer;

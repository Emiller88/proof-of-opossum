import React from 'react';
import styles from './footer.module.scss';
// import logo from './logo-red.png'
import mail from './mail.svg';
import pencil from './pencil.svg';
import twitter from './twitter.svg';
import github from './github.svg';
import zeppelin from './zeppelin_logo.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.brand}>
      <div className={styles.created}>
        Created by
        <a href="https://zeppelin.solutions/" rel="noopener noreferrer" target="_blank">
          <img
            style={{width: '80px', height: 'auto', 'marginLeft': '10px'}}
            src={zeppelin} alt="Zeppelin" />
        </a>
      </div>
      <div className={styles.copyright}>
        Copyright © 2019 zOS Global Limited
      </div>
    </div>
    <div className={styles.links}>
      <a href="mailto:ramon@zeppelin.solutions" target="_blank" rel="noopener noreferrer">
        <img src={mail} alt="email" />
      </a>
      <a href="https://blog.zeppelinos.org/introducing-zepkit" rel="noopener noreferrer" target="_blank">
        <img src={pencil} alt="medium" />
      </a>
      <a href="https://twitter.com/ZeppelinOrg" rel="noopener noreferrer" target="_blank">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="https://github.com/zeppelinos/zepkit" rel="noopener noreferrer" target="_blank">
        <img src={github} alt="github" />
      </a>
    </div>
  </footer>
)

export default Footer;
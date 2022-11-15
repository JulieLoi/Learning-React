import * as React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';


const Footer: React.FC = () => {
    return (
        <footer className={styles["footer"]}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="./images/DigitalBusinessCard/twitter.png" alt="Twitter Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="./images/DigitalBusinessCard/facebook.png" alt="Facebook Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="./images/DigitalBusinessCard/instagram.png" alt="Instagram Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="./images/DigitalBusinessCard/github.png" alt="Github Icon" 
                    className={styles["footer__icon"]} />
            </a>
        </footer>
    );
};

export default Footer;

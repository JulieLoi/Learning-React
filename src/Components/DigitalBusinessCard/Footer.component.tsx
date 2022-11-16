import * as React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';

interface Props {
    state: any;
    submitState: boolean;
}

const Footer: React.FC<Props> = ({ state, submitState }) => {
    return (
        <footer className={styles["footer"]}>
            <a href={state.twitterLink === "" ? "https://twitter.com" : state.twitterLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src="./images/DigitalBusinessCard/twitter.png" alt="Twitter Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={state.facebookLink === "" ? "http://facebook.com" : state.facebookLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src="./images/DigitalBusinessCard/facebook.png" alt="Facebook Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={state.instagramLink === "" ? "https://instagram.com" : state.instagramLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src="./images/DigitalBusinessCard/instagram.png" alt="Instagram Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={state.githubLink === "" ? "https://github.com" : state.githubLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src="./images/DigitalBusinessCard/github.png" alt="Github Icon" 
                    className={styles["footer__icon"]} />
            </a>
        </footer>
    );
};

export default Footer;

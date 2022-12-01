import React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { FooterSection } from '../../Types';

interface Props {
    footer: FooterSection;
}

const Footer: React.FC<Props> = ({ footer }) => {
    return (
        <footer className={styles["footer"]}>
            <a href={footer.twitterLink === "" ? "https://twitter.com" : footer.twitterLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src="./images/DigitalBusinessCard/twitter.png" alt="Twitter Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={footer.facebookLink === "" ? "http://facebook.com" : footer.facebookLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src="./images/DigitalBusinessCard/facebook.png" alt="Facebook Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={footer.instagramLink === "" ? "https://instagram.com" : footer.instagramLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src="./images/DigitalBusinessCard/instagram.png" alt="Instagram Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={footer.githubLink === "" ? "https://github.com" : footer.githubLink} 
                target="_blank" rel="noopener noreferrer"
                >
                <img src="./images/DigitalBusinessCard/github.png" alt="Github Icon" 
                    className={styles["footer__icon"]} />
            </a>
        </footer>
    );
};

export default Footer;

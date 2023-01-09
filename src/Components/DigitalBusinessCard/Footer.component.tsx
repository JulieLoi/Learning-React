import React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { FooterSection } from '../../Types';

import twitterIcon from '../../assets/images/DigitalBusinessCard/twitter.png';
import facebookIcon from '../../assets/images/DigitalBusinessCard/facebook.png';
import instagramIcon from '../../assets/images/DigitalBusinessCard/instagram.png';
import githubIcon from '../../assets/images/DigitalBusinessCard/github.png';

interface Props {
    footer: FooterSection;
}

const Footer: React.FC<Props> = ({ footer }) => {
    return (
        <footer className={styles["footer"]}>
            <a href={footer.twitterLink === "" ? "https://twitter.com" : footer.twitterLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src={twitterIcon} alt="Twitter Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={footer.facebookLink === "" ? "http://facebook.com" : footer.facebookLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src={facebookIcon} alt="Facebook Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={footer.instagramLink === "" ? "https://instagram.com" : footer.instagramLink} 
                target="_blank" rel="noopener noreferrer"
            >
                <img src={instagramIcon} alt="Instagram Icon" 
                    className={styles["footer__icon"]} />
            </a>
            <a href={footer.githubLink === "" ? "https://github.com" : footer.githubLink} 
                target="_blank" rel="noopener noreferrer"
                >
                <img src={githubIcon} alt="Github Icon" 
                    className={styles["footer__icon"]} />
            </a>
        </footer>
    );
};

export default Footer;

import React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { DescSection } from '../../Types';

interface Props {
    desc: DescSection;
}

const About: React.FC<Props> = ({ desc }) => {
    return (
        <>
            <section className={styles["description"]}>
                <h2>About</h2>
                <p>{desc.aboutText === "" ? "About..." : desc.aboutText}</p>
            </section>
            <section className={styles["description"]}>
                <h2>Interests</h2>
                <p>{desc.interestsText === "" ? "Interests..." : desc.interestsText}</p>
            </section>
        </>

    );
};

export default About;

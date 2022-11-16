import React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';

interface Props {
    state: any;
}

const About: React.FC<Props> = ({ state }) => {
    return (
        <>
            <section className={styles["description"]}>
                <h2>About</h2>
                <p>{state.aboutText === "" ? "About..." : state.aboutText}</p>
            </section>
            <section className={styles["description"]}>
                <h2>Interests</h2>
                <p>{state.interestsText === "" ? "Interests..." : state.interestsText}</p>
            </section>
        </>

    );
};

export default About;

import styles from '../../stylesheets/AirBnbExperience.module.css';

import photoGrid from '../../assets/images/AirBnbExperience/photo-grid.png'

const Hero = () => {
    return (
        <section className={styles["hero"]}>
            <img src={photoGrid} alt="experiences" 
                className={styles["hero__photo-grid"]}
            />
            <h1 className={styles["hero__title"]}>Online Experiences</h1>
            <p className={styles["hero__text"]}>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
};

export default Hero;

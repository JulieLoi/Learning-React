import * as React from 'react';
import styles from '../../stylesheets/TravelJournal.module.css';


const Navbar = () => {
    return (
        <nav className={styles["nav"]}>
            <img src="/images/TravelJournal/travel-journal-logo.png" alt="Travel Journal Logo" 
                className={styles["nav__logo"]}
            />
            <div className={styles["nav__text"]}>my travel journal.</div>
        </nav>
    );
};

export default Navbar;

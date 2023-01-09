import styles from '../../stylesheets/TravelJournal.module.css';

import journalLogo from '../../assets/images/TravelJournal/travel-journal-logo.png';

const Navbar = () => {
    return (
        <nav className={styles["nav"]}>
            <img src={journalLogo} alt="Travel Journal Logo" className={styles["nav__logo"]} />
            <div className={styles["nav__text"]}>my travel journal.</div>
        </nav>
    );
};

export default Navbar;

import styles from '../../stylesheets/AirBnbExperience.module.css';

import airbnbLogo from '../../assets/images/AirBnbExperience/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav className={styles["nav"]}>
            <img src={airbnbLogo} alt="AirBnb Logo" className={styles["nav__logo"]} />
        </nav>
    );
};

export default Navbar;

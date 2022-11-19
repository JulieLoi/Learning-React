import styles from '../../stylesheets/AirBnbExperience.module.css';

const Navbar = () => {
    return (
        <nav className={styles["nav"]}>
            <img src="/images/AirBnbExperience/airbnb-logo.png" alt="AirBnb Logo" 
                className={styles["nav__logo"]}
            />
        </nav>
    );
};

export default Navbar;

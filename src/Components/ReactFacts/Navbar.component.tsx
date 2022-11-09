import styles from '../../stylesheets/ReactFacts.module.css';

interface Props {
    darkMode: boolean
    toggleDarkMode: Function
}

const Navbar: React.FC<Props> = ({ darkMode, toggleDarkMode })  => {
    return (
        <nav className={`${styles["nav"]} ${darkMode ? styles["nav__dark"] : styles["nav__light"]}`}>
            <img 
                src="./images/ReactFacts/react-logo-small.png" alt="small react logo" 
                className={styles["nav__logo"]}
            />
            <h3 className={`${styles["nav__title"]} ${darkMode ? styles["nav__title-dark"] : styles["nav__title-light"]}`}>
                ReactFacts
            </h3>

            <div className={`${styles["toggler"]} ${darkMode ? styles["toggler__dark"] : styles["toggler__light"]}`}>
                <p className={`${styles["toggler__text"]} ${darkMode ? "" : styles["toggler__text-underline"]}`}>Light</p>
                <div className={styles["toggler__slider"]} onClick={() => toggleDarkMode()}>
                    <div className={styles["toggler__slider-circle"]}></div>
                </div>
                <p className={`${styles["toggler__text"]} ${darkMode ? styles["toggler__text-underline"] : ""}`}>Dark</p>
            </div>
        </nav>
    );
}

export default Navbar;

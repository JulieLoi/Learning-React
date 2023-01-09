import React from 'react';
import styles from '../../stylesheets/ReactFacts.module.css';

import logo from '../../assets/images/ReactFacts/react-logo-small.png'

interface Props {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ darkMode, setDarkMode })  => {
    return (
        <nav className={`${styles["nav"]} ${darkMode ? styles["nav__dark"] : styles["nav__light"]}`}>
            <img 
                src={logo} alt="small react logo" 
                className={styles["nav__logo"]}
            />
            <h3 className={`${styles["nav__title"]} ${darkMode ? styles["nav__title-dark"] : styles["nav__title-light"]}`}>
                ReactFacts
            </h3>

            <div className={`${styles["toggler"]} ${darkMode ? styles["toggler__dark"] : styles["toggler__light"]}`}>
                <p className={`${styles["toggler__text"]} ${darkMode ? "" : styles["toggler__text-underline"]}`}>Light</p>
                <label className={styles["switch"]}>
                    <input type="checkbox" 
                        checked={darkMode}
                        onChange={() => setDarkMode(prev => !prev)} 
                    />
                    <span className={`${styles["slider"]} ${styles["round"]}`}></span>
                </label>
                <p className={`${styles["toggler__text"]} ${darkMode ? styles["toggler__text-underline"] : ""}`}>Dark</p>
            </div>
        </nav>
    );
}

export default Navbar;

import { Navbar } from 'react-bootstrap';
import styles from '../../stylesheets/Jokes.module.css';

interface Props {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<Props> = ({ darkMode, setDarkMode }) => {
    return (
        <Navbar expand="lg" className={`${styles["nav"]}`}>
            <div className={styles["nav-title"]}>
                <img src="/images/Jokes/buffoon.png" alt="jester hat"
                    className={styles["nav-title__icon"]}
                />
                <Navbar.Brand className={styles["nav-title__text"]}>Jokes and Puns</Navbar.Brand>
            </div>
            <div className={styles["nav-switch"]}>
                <span className={styles["nav-switch__text"]} style={{ marginRight: "0.5rem" }}>
                    Light
                </span>
                <label className={styles["switch"]}>
                    <input type="checkbox" checked={darkMode}
                        onClick={() => setDarkMode(prev => !prev)}
                    />
                    <span className={`${styles["slider"]} ${styles["round"]}`}></span>
                </label>
                <span className={styles["nav-switch__text"]} style={{ marginLeft: "0.5rem" }}>
                    Dark
                </span>
            </div>
            
        </Navbar>
    );
};

export default NavBar;

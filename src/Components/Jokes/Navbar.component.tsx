import { Navbar, Container } from 'react-bootstrap';
import styles from '../../stylesheets/Jokes.module.css';


interface Props {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<Props> = ({ darkMode, setDarkMode }) => {
    return (
        <Navbar bg={darkMode ? "dark" : "light"} variant="dark" expand="lg"
            className={styles["nav"]}
        >
            <div className={styles["nav-title"]}>
                <img src="/images/Jokes/buffoon.png" alt="jester hat"
                    className={styles["nav-title__icon"]}
                />
                <Navbar.Brand className={styles["nav-title__text"]}>Jokes and Puns</Navbar.Brand>
            </div>
            
        </Navbar>
    );
};

export default NavBar;

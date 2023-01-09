import styles from '../../stylesheets/MemeGenerator.module.css';
import trollIcon from '../../assets/images/MemeGenerator/troll-face.png';

const Navbar = () => {
    return (
        <nav className={styles["nav"]}>
            <div className={styles["nav__logo"]}>
                <img src={trollIcon} alt="Troll Face" className={styles["nav__logo-icon"]} />
                <span className={styles["nav__logo-text"]}>Meme Generator</span>
            </div>
            <div className={styles["nav__course"]}>
                React Course - Project 3
            </div>
        </nav>
    );
};

export default Navbar;

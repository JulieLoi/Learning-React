import styles from '../../stylesheets/MemeGenerator.module.css';

const Navbar = () => {
    return (
        <nav className={styles["nav"]}>
            <div className={styles["nav__logo"]}>
                <img src="/images/MemeGenerator/troll-face.png" alt="Troll Face" 
                    className={styles["nav__logo-icon"]}
                />
                <span className={styles["nav__logo-text"]}>Meme Generator</span>
            </div>
            <div className={styles["nav__course"]}>
                React Course - Project 3
            </div>
        </nav>
    );
};

export default Navbar;

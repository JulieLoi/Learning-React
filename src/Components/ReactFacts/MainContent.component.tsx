import styles from '../../stylesheets/ReactFacts.module.css';

interface Props {
    darkMode: boolean;
}

const MainContent: React.FC<Props> = ({ darkMode }) => {
    return (
        <main className={`${styles["main"]} ${darkMode ? styles["main__dark"] : styles["main__light"]}`}>
            <h1 className={`${styles["main__title"]} ${darkMode ? styles["main__title-dark"] : styles["main__title-light"]}`}>
                Fun facts about React
            </h1>
            <ul className={styles["main__facts"]}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}

export default MainContent;

/*
import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}
*/
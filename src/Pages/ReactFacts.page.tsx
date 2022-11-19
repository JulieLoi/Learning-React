import React, { useState, useEffect } from 'react';
import Navbar from "../components/ReactFacts/Navbar.component";
import MainContent from "../components/ReactFacts/MainContent.component";
import styles from "../stylesheets/ReactFacts.module.css";

const ReactFactsPage: React.FC = () => {

    // Light/Dark Mode - Dark Mode (Default)
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("darkMode") === "true");

    // Local Storage (Dark Mode)
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode])

    // React Facts
    return (
        <div className={`${styles["body"]} ${darkMode ? styles["body__dark"] : styles["body__light"]}`}>
            <Navbar 
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <MainContent 
                darkMode={darkMode}
            />
        </div>
    );
}

export default ReactFactsPage;

import React, { useState, useEffect } from 'react';
import styles from "../stylesheets/ReactFacts.module.css";
import Navbar from "../components/ReactFacts/Navbar.component";
import MainContent from "../components/ReactFacts/MainContent.component";

const ReactFactsPage: React.FC = () => {

    // Light/Dark Mode - Dark Mode (Default)
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("darkMode") === "true");
    function changeMode(): void { 
        setDarkMode(prevMode => !prevMode); 
    }

    // Local Storage (Dark Mode)
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode])

    // React Facts
    return (
        <div className={`${styles["body"]} ${darkMode ? styles["body__dark"] : styles["body__light"]}`}>
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={changeMode}
            />
            <MainContent 
                darkMode={darkMode}
            />
        </div>
    );
}

export default ReactFactsPage;

import { useState, useReducer } from "react";
import Navbar from '../components/Jokes/Navbar.component';
import Filter from '../components/Jokes/Filter.component';
import JokeItem from '../components/Jokes/JokeItem.component';
import jokesData from '../components/Jokes/JokesData';

import styles from '../stylesheets/Jokes.module.css';
import { Joke } from "../Types";
import { jokeReducer } from "../Reducers";


const JokesPage = () => {

    // States
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const [sortFilter, setSortFilter] = useState<string>("");
    const [typeFilter, setTypeFilter] = useState<string>("");

    // Initial Jokes Data and reducer
    const [jokesState, jokesDispatch] = useReducer(jokeReducer, jokesData);

    // Jokes Page
    return (
        <div className={`${styles["jokes-page"]} 
                ${styles[darkMode ? "jokes-page__dm" : "jokes-page__lm"]}
            `}
        >
            <Navbar 
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <div className={styles["jokes-page__body"]}>
                <div className={styles["filter__container"]}>
                    <Filter 
                        jokesData={jokesData}       dispatch={jokesDispatch}
                        sortFilter={sortFilter}     setSortFilter={setSortFilter}
                        typeFilter={typeFilter}     setTypeFilter={setTypeFilter}
                        darkMode={darkMode}
                    />
                </div>
                <div className={styles["jokes"]}>
                    {jokesState.map((joke: Joke) => 
                        <JokeItem 
                            key={joke.id}
                            joke={joke}
                            darkMode={darkMode}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default JokesPage;

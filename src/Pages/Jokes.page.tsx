import { useState, useReducer } from "react";
import Joke from '../components/Jokes/Joke.component';
import jokesData from '../components/Jokes/JokesData';
import Navbar from '../components/Jokes/Navbar.component';
import Filter from '../components/Jokes/Filter.component';

import styles from '../stylesheets/Jokes.module.css';
import JokeType from "../Types/Joke.type";
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
        <div className={styles["jokes-page"]}>
            <Navbar 
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <div className={styles["jokes-page__body"]}>
                <Filter 
                    jokesData={jokesData}       dispatch={jokesDispatch}
                    sortFilter={sortFilter}     setSortFilter={setSortFilter}
                    typeFilter={typeFilter}     setTypeFilter={setTypeFilter}
                />
                <div className={styles["jokes"]}>
                    {jokesState.map((joke: JokeType) => 
                        <Joke 
                            key={joke.id}
                            joke={joke}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default JokesPage;

/**
 // Sorts Jokes by upvotes (ascending)
    let sortedJokes = jokesData.sort((joke1, joke2) => {
        return joke2.upvotes - joke1.upvotes;
    })

    let jokeElements = sortedJokes.map(joke => {
        return (
            <Joke 
                setup={joke.setup}
                punchline={joke.punchline}
                isPun={joke.isPun}
                upvotes={joke.upvotes}
                downvotes={joke.downvotes}
            />
        )
    });

    return (
        <div className="App">
          {jokeElements}
        </div>
    )
 */
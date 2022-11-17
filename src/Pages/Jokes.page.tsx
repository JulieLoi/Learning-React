import React, { useState } from "react";
import Joke from '../components/Jokes/Joke.component';
import jokes from '../components/Jokes/JokesData';
import Navbar from '../components/Jokes/Navbar.component';
import styles from '../stylesheets/Jokes.module.css';



/**
 * PLAN:
 * Show Jokes
 * Let you sort jokes based on filters
 * --ADD FILTER FROM SHOPPING CART PROJECT
 * 
 * Make a simple Navbar.
 * Filter bar on the side
 * Jokes like shopping cart products
 * No need to add jokes or remove them...
 * 
 * MAKE EVERYTHING USING BOotSTRAP
 * 
 */

const JokesPage = () => {

    const [darkMode, setDarkMode] = useState<boolean>(true);

    const jokeElements = jokes.map(joke => {
        return (
            <Joke 
                key={joke.punchline}
                setup={joke.setup}
                punchline={joke.punchline}
                isPun={joke.isPun}
                upvotes={joke.upvotes}
                downvotes={joke.downvotes}
            />
        )
    })


    return (
        <div className={styles["jokes-page"]}>
            <Navbar 
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <div className={styles["jokes"]}>
                {jokeElements}
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
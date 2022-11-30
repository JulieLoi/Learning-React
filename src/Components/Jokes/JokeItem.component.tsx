import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from '../../stylesheets/Jokes.module.css';
import { Joke } from '../../Types';

interface Props {
    joke: Joke,
    darkMode: boolean,
}

const JokeItem: React.FC<Props> = ({ joke, darkMode }) => {

    // State - Show Punchline (default: false)
    let [isShown, setIsShown] = useState(false)

    const upvotes = joke.upvotes;
    const downvotes = joke.downvotes;

    // Joke Component
    return (
        <div className={styles["joke__container"]}>
            <Card bg={darkMode ? "dark" : "light"} 
                border={!darkMode ? "dark" : "light"} 
                text={!darkMode ? "dark" : "light"} 
                className={styles["joke"]}
            >
                <Card.Title className={styles["joke-title"]}>
                    <span className={styles["joke-title__text"]}>{joke.isJoke ? "Joke" : "Pun"}</span>
                    <Button variant={darkMode ? "success" : "outline-success" }
                        onClick={() => setIsShown(prev => !prev)}
                        className={styles["joke-title__btn"]}
                    >
                        {isShown ? "Hide" : "Show"} Punchline
                    </Button>
                </Card.Title>
                <Card.Body className={styles["joke-body"]}>
                    <Card.Text className={styles["joke-body__setup"]}>{joke.setup}</Card.Text>
                    <Card.Text className={`${styles["joke-body__punchline"]}
                            ${styles[isShown ? "joke-body__punchline-show" : ""]}
                        `}
                    >
                        {joke.punchline}
                    </Card.Text>
                </Card.Body>
                <br />
                <Card.Footer className={styles["joke-footer"]}
                    color="dark"
                >
                    <div className={styles["joke-vote"]}>
                        <span className={styles["upvotes"]}>
                            <img src="/images/Jokes/upvote.png" alt="upvote" />
                            {upvotes}
                        </span>
                        <span className={styles["downvotes"]}>
                            <img src="/images/Jokes/downvote.png" alt="downvote" />
                            {downvotes}
                        </span>
                    </div>
                    <span className={upvotes > downvotes ? styles["upvotes"] : styles["downvotes"]}>
                        {`${Math.round((upvotes / (upvotes + downvotes))*100)}%`}
                    </span>
                </Card.Footer>

            </Card>
        </div>
    );
};

export default JokeItem;

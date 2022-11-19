import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from '../../stylesheets/Jokes.module.css';
import { Joke } from '../../Types';

interface Props {
    joke: Joke
}

const JokeItem: React.FC<Props> = ({ joke }) => {

    // State - Show Punchline (default: false)
    let [isShown, setIsShown] = useState(false)

    const upvotes = joke.upvotes;
    const downvotes = joke.downvotes;

    // Joke Component
    return (
        <Card bg="light" border="dark" text="dark" className={styles["joke"]}>
            <Card.Title className={styles["joke-title"]}>
                <span className={styles["joke-title__text"]}>{joke.isJoke ? "Joke" : "Pun"}</span>
                <Button variant="outline-success" 
                    onClick={() => setIsShown(prev => !prev)}
                    className={styles["joke-title__btn"]}
                >
                    {isShown ? "Hide" : "Show"} Punchline
                </Button>
            </Card.Title>
            <Card.Body className={styles["joke-body"]}>
                <Card.Text className={styles["joke-body__setup"]}>{joke.setup}</Card.Text>
                {isShown && <Card.Text className={styles["joke-body__punchline"]}>{joke.punchline}</Card.Text>}
            </Card.Body>
            <Card.Footer className={styles["joke-footer"]}>
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
    );
};

export default JokeItem;

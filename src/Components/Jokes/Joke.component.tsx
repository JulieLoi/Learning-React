import React, { useState } from 'react';
import styles from '../../stylesheets/Jokes.module.css';

interface Props {
    setup: string | undefined;
    punchline: string;
    isPun: boolean;
    upvotes: number;
    downvotes: number;
}

const Joke: React.FC<Props> = ({ setup, punchline, isPun, upvotes, downvotes}) => {

    // State - Show Punchline (default: false)
    let [isShown, setIsShown] = useState(false)

    // Joke Component
    return (
        <div className={styles["joke"]}>
            <div className={styles["joke-top"]}>
                <h1>{isPun ? "Pun" : "Joke"}</h1>
                <button className={styles["joke-top__button"]} onClick={() => setIsShown(prevState => !prevState)}>
                    {isShown ? "Hide" : "Show"} Punchline
                </button>
            </div>

            {setup && <p className={styles["joke__setup"]}>{setup}</p>}
            {isShown && <p className="joke__punchline">{punchline}</p>}

            <div className={styles["joke__votes"]}>
                <div>
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
            </div>

        </div>
    );
};


export default Joke;
/**
 import React from "react";

export default function Joke(props) {

    // State - Show Punchline (default: false)
    let [isShown, setIsShown] = React.useState(false)

    // Joke Type
    let jokeType = "Joke";
    if (props.isPun) { jokeType = "Pun"; }

    // Punchline Button
    function showPunchline() {
        setIsShown(prevState => !prevState);
    }

    // Managing Upvotes and Downvotes
    let upvotes = props.upvotes;
    let downvotes = props.downvotes;

    let upvote_percentage = Math.round((upvotes / (upvotes + downvotes))*100);
    let majorityUpvotes = true;
    if (upvote_percentage < 50) {
        majorityUpvotes = false;
    }

    return (
        <div className="joke">
            <div className="joke-top">
                <h1>{jokeType}</h1>
                <button onClick={showPunchline} className="punchline-button"> 
                    {isShown ? "Hide" : "Show"} Punchline
                </button>
            </div>
            
            {props.setup && <p className="joke-setup">{props.setup}</p>}
            {isShown && <p className="joke-punchline">{props.punchline}</p>}
            <div className="votes">
                <div>
                    <span className="upvotes">
                        <img src={"./images/upvote.png"} alt="upvote" />
                        {upvotes}
                    </span>
                    <span className="downvotes">
                        <img src={"./images/downvote.png"} alt="downvote" />
                        {downvotes}
                    </span>
                </div>
                <span className={(majorityUpvotes ? 'upvotes' : 'downvotes')}>{`${upvote_percentage}%`}</span>
            </div>
        </div>
    );
}
 */
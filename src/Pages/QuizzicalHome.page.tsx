import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Quizzical/Form.component';
import styles from '../stylesheets/Quizzical.module.css';
import { QuizzicalEnum } from '../Enums';
import { Quizzical } from '../Types';

interface Props {
    state: Quizzical,
    dispatch: React.Dispatch<{type: QuizzicalEnum; payload?: any;}>,
    getQuestions: () => void,
}

const QuizzicalHomePage: React.FC<Props> = ({ state, dispatch, getQuestions }) => {

    // State: Loading
    const [loading, setLoading] = useState<boolean>(false);

    // Page Navigation
    const navigate = useNavigate(); 

    // Home Page
    return (
        <div className={`${styles["full-page"]} ${styles["center"]}`}
            style={{ height: "100vh" }}
        >
            
            <div className={styles["home"]}>
                <h1 className={styles["home__title"]}>Quizzical</h1>
                <p className={styles["home__text"]}>
                    Quizzical uses the&nbsp;
                    <span>
                        <a href="https://opentdb.com/" target="_blank" rel="noreferrer"
                            className={styles["home__link"]}
                        >
                        Open Trivia Database
                        </a>
                    </span>
                    , which provides a JSON API for use in programming projects.
                </p>
                <Form 
                    state={state}
                    dispatch={dispatch}
                />
            
                <div className={styles["center"]}>
                    <button className={styles["button"]} 
                        onClick={() => {
                            getQuestions();
                            setLoading(true);
                            setTimeout(() => navigate("/Learning-React/quizzical/quiz"), 5000);
                        }}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
            {loading &&
                <div className={styles["loader-container"]}>
                    <div className={styles["loader"]} />
                    <h1 className={styles["loader__text"]}>Loading</h1>
                </div>
            }
        </div>
    );
};


export default QuizzicalHomePage;


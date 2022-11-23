import React from 'react';
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
                    Quizzical uses the Open Trivia Database, which provides
                    a JSON API for use in programming projects.
                </p>
                <Form 
                    state={state}
                    dispatch={dispatch}
                />
            
                <div className={styles["center"]}>
                    <button className={styles["button"]} 
                        onClick={() => {
                            getQuestions();
                            navigate("/quizzical/quiz");
                        }}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};


export default QuizzicalHomePage;


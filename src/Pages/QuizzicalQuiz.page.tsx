import React from 'react';
import Form from '../components/Quizzical/Form.component';
import BooleanQuestion from '../components/Quizzical/BooleanQuestion.component';
import MultipleQuestion from '../components/Quizzical/MultipleQuestion.component';

import styles from '../stylesheets/Quizzical.module.css';
import { QuizQuestion, Quizzical, QuizzicalQuiz } from '../Types';
import { QuizEnum, QuizzicalEnum } from "../Enums";

import correctIcon from '../assets/images/Quizzical/correct.png';
import incorrectIcon from '../assets/images/Quizzical/incorrect.png';


interface Props {
    state: Quizzical,
    dispatch: React.Dispatch<{type: QuizzicalEnum; payload?: any;}>


    quizState: QuizzicalQuiz,
    quizDispatch: React.Dispatch<{
        type: QuizEnum;
        database?: QuizQuestion[] | undefined;
        id?: string; 
        answer?: string;
    }>,
    getQuestions: () => void,

}

const QuizzicalQuizPage: React.FC<Props> = ({ state, dispatch, quizState, quizDispatch, getQuestions }) => {


    // Creates Question Elements
    const questionElements = () => {
        return quizState.questions.map((q, index) => createQuestion(q, index))
    }

    // Creates a Question Element
    const createQuestion = (q: QuizQuestion, index: number) => {

        // Checks if a question is unanswered when attempting to submit
        let unanswered = quizState.failedSubmit && quizState.questions[index].selectedAnswer === "";

        return (
            <div
                key={q.id}
                className={`${styles["question"]} 
                    ${styles[unanswered ? "question__unanswered" : ""]}`
                }
            >
                <div className={styles["question-header"]}>
                    <h2>
                        <span className={styles["question-header__number"]}>Question {index + 1}</span>&nbsp;
                        <span style={{ fontWeight: 400 }}>
                            ({q.category.replace(":", " -")})
                        </span>
                    </h2>
                    {quizState.submittedQuiz && 
                        (q.selectedAnswer === "true" ? 
                            <img src={correctIcon} alt="green checkmark"
                                className={styles["question-header__image"]}
                            /> 
                            :
                            <img src={incorrectIcon} alt="red cross" 
                                className={styles["question-header__image"]}
                            />
                        )
                    }
                </div>

                <h3 className={styles["question__difficulty"]}>
                    Difficulty:&nbsp;
                    <span style={{ fontWeight: 400 }}>{capitalizeFirstLetter(q.difficulty)}</span>
                    
                </h3>
                <hr className={styles["question__hr"]} />
                <p className={styles["question__text"]}>{q.question}</p>
                

                {q.type === "boolean" ?
                    <BooleanQuestion 
                        question={q}
                        quizState={quizState}
                        quizDispatch={quizDispatch}
                    />
                    :
                    <MultipleQuestion 
                        question={q}
                        quizState={quizState}
                        quizDispatch={quizDispatch}
                    />

                }

            </div>
        )
    }


    // Quizzical Quiz Page
    return (
        <div className={`${styles["full-page"]} ${styles["center"]}`}>
            <div>
                {quizState.failedSubmit &&
                    <div className={styles["alert"]}>
                        <span><b>Please answer the remaining questions</b> (highlighted red)<b>!</b></span>
                    </div>
                }
                {quizState.questions.length === 0 ?
                    <div style={{ height: "100vh" }} className={styles["center"]}>
                        <div>
                            <div className={styles["loader"]} />
                            <h1 className={styles["loader__text"]}>Loading</h1>
                        </div>
                    </div>
                    :
                    <div className={styles["quiz-container"]}>
                        <div className={styles["quiz"]}>
                            <h1 className={styles["quiz__title"]}>Quizzical</h1>
                            <div>
                                {questionElements()}
                            </div>
                        </div>
                        <div className={styles["center"]}>
                            {quizState.submittedQuiz ?
                                <>
                                    <p className={styles["submit-text"]}>
                                        You got {quizState.numCorrect}/{quizState.questions.length} questions correct!
                                    </p>
                                    <button className={styles["button"]}
                                        onClick={() => quizDispatch({ type: QuizEnum.NewQuiz })} 
                                    >
                                        New Quiz
                                    </button>                            
                                </>
                                :
                                <>
                                    <button className={styles["button"]}
                                        onClick={() => quizDispatch({ type: QuizEnum.SubmitQuiz })}
                                    >
                                        Submit Quiz
                                    </button>
                                </>
                            }
                        </div>
                        {quizState.submittedQuiz &&
                            <div className={styles["center"]}>
                                <Form 
                                    state={state}
                                    dispatch={dispatch}
                                />
                            </div>
                        }
                        <div style={{ height: "10vh" }}></div>
                    </div>
                }
            </div>
        </div>
    );
};


export default QuizzicalQuizPage;


/**
 * Capitalizes the first letter of a string
 * @param {String} string 
 * @returns string with the first letter capitalized
 */
const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
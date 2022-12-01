import React from 'react';

import styles from '../../stylesheets/Quizzical.module.css';
import { QuizQuestion, QuizzicalQuiz } from '../../Types';
import { QuizEnum } from '../../Enums';

interface IBooleanQuestionProps {
    question: QuizQuestion,
    quizState: QuizzicalQuiz,
    quizDispatch: React.Dispatch<{
        type: QuizEnum;
        database?: QuizQuestion[] | undefined;
        id?: string; 
        answer?: string;
    }>,
}


const BooleanQuestion: React.FC<IBooleanQuestionProps> = ({ question, quizState, quizDispatch }) => {

    // Creates the correct choice
    const createCorrectChoice = () => {
        return (
            <div key={`${question.id}_correct`}>
                <input 
                    type="radio" id={`${question.id}_correct`}
                    name={question.id} value={"true"}
                    className={`${styles["radio-input"]}
                        ${styles[quizState.submittedQuiz ? "" : "radio-input__working"]}`
                    }
                    checked={question.selectedAnswer === "true"}
                    onChange={() => 
                        quizDispatch({ type: QuizEnum.SetAnswer, id: question.id, answer: "true" })
                    }
                />
                <label 
                    htmlFor={`${question.id}_correct`}
                    className={`${styles["radio-text"]} 
                        ${styles[quizState.submittedQuiz ? "correct-answer" : "radio-text__working"]}`
                    }
                >
                    {question.correct_answer}
                </label>
            </div>
        )
    }

    // Creates the incorrect choice
    const createIncorrectChoice = () => {
        return (
            <div key={`${question.id}_incorrect`}>
                <input 
                    type="radio" id={`${question.id}_incorrect`}
                    name={question.id} value={"false"}
                    className={`${styles["radio-input"]}
                        ${styles[quizState.submittedQuiz ? "incorrect-answer" : "radio-input__working"]}`
                    }
                    checked={question.selectedAnswer === "false"}
                    onChange={() => 
                        quizDispatch({ type: QuizEnum.SetAnswer, id: question.id, answer: "false" })
                    }
                />
                <label 
                    htmlFor={`${question.id}_incorrect`}
                    className={`${styles["radio-text"]} 
                        ${styles[quizState.submittedQuiz ? "incorrect-answer" : "radio-text__working"]}`
                    }
                >
                    {question.incorrect_answers[0]}
                </label>
            </div>
        )
    }


    // True / False Question
    return (
        <fieldset className={styles["radio-toolbar"]} disabled={quizState.submittedQuiz}>
            {question.correct_answer === "True" ?
                <>
                    {createCorrectChoice()}
                    {createIncorrectChoice()}
                </>
                :
                <>
                    {createIncorrectChoice()}
                    {createCorrectChoice()}
                </>
            }
        </fieldset> 
    );
};

export default BooleanQuestion;
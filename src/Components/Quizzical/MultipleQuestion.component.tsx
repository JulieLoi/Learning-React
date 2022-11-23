import React, { useState, useEffect } from 'react';

import styles from '../../stylesheets/Quizzical.module.css';
import { QuizQuestion, QuizzicalQuiz } from '../../Types';
import { QuizEnum } from '../../Enums';


interface IMultipleQuestionProps {
    question: QuizQuestion,
    quizState: QuizzicalQuiz,
    quizDispatch: React.Dispatch<{
        type: QuizEnum;
        database?: QuizQuestion[] | undefined;
        id?: string; 
        answer?: string;
    }>,
}

const MultipleQuestion: React.FC<IMultipleQuestionProps> = ({ question, quizState, quizDispatch }) => {

    // State: the shuffled position of choices
    const [choicesPositions, setChoicesPositions] = useState<number[]>([]);
    useEffect(() => {
        if (choicesPositions.length === 0) { shufflePositions(); }
    }, [choicesPositions]);

    // Shuffles Positions
    const shufflePositions = () => {
        const array: number[] = [1, 2, 3, 4]
        let shuffledArray: number[] = [];
        let usedIndexes: number[] = [];

        let i: number = 0;
        while (i < array.length) {
            let randomNumber = Math.floor(Math.random() * array.length);
            if (!usedIndexes.includes(randomNumber)) {
                shuffledArray.push(array[randomNumber]);
                usedIndexes.push(randomNumber);
                i++;
            }
        }
        setChoicesPositions(shuffledArray);
    }

    // Creates Multiple Choices
    const createChoices = () => {
        let choicesArray: object[]  = [];
        choicesPositions.forEach(position => {
            if (position === 1) { choicesArray.push(createCorrectChoice()) }
            else if (position === 2) { choicesArray.push(createIncorrectChoice(1)) }
            else if (position === 3) { choicesArray.push(createIncorrectChoice(2)) }
            else if (position === 4) { choicesArray.push(createIncorrectChoice(3)) }
        })
        return (<> {choicesArray} </>);
    }

    // Creates a correct choice
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

    // Creates an incorrect choice
    const createIncorrectChoice = (n: number) => {
        const idValue = `${question.id}_incorrect_${n}`;
        const inputValue = `false_${n}`;

        return (
            <div key={idValue}>
                <input 
                    type="radio" id={idValue}
                    name={question.id} value={inputValue}
                    className={`${styles["radio-input"]}
                        ${styles[quizState.submittedQuiz ? "incorrect-answer" : "radio-input__working"]}`
                    }
                    checked={question.selectedAnswer === inputValue}
                    onChange={() => 
                        quizDispatch({ type: QuizEnum.SetAnswer, id: question.id, answer: inputValue })
                    }
                />
                <label 
                    htmlFor={idValue}
                    className={`${styles["radio-text"]} 
                        ${styles[quizState.submittedQuiz ? "incorrect-answer" : "radio-text__working"]}`
                    }
                >
                    {question.incorrect_answers[n-1]}
                </label>
            </div>
        )
    }

    // Multiple Choice Question Component
    return (
        <fieldset className={styles["radio-toolbar"]} disabled={quizState.submittedQuiz}>
            {createChoices()}
        </fieldset>
    );
};

export default MultipleQuestion;

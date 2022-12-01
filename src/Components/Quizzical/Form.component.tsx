import React from 'react';
import styles from '../../stylesheets/Quizzical.module.css';
import { Quizzical } from '../../Types';
import { QuizzicalEnum } from '../../Enums';

interface IFormProps {
    state: Quizzical,
    dispatch: React.Dispatch<{type: QuizzicalEnum; payload?: any;}>
}

const Form: React.FunctionComponent<IFormProps> = ({ state, dispatch }) => {
  return (
    <div className={styles["form"]}>
        <div className={styles["form__select"]}>
            <label htmlFor="amount">Number of Questions: </label>
            <br />
            <select
                id="amount" name="amount" 
                value={state.form.amount}
                className={styles["minimal"]}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        dispatch({ type: QuizzicalEnum.SetFormAmount, payload: e.target.value });
                        dispatch({ type: QuizzicalEnum.SetApi });
                    }
                }
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
        <div className={styles["form__select"]}>
        <label htmlFor="category">Select Category: </label>
            <br />
            <select
                id="category" name="category" 
                value={state.form.category}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    dispatch({ type: QuizzicalEnum.SetFormCategory, payload: e.target.value });
                    dispatch({ type: QuizzicalEnum.SetApi });
                }}
            >
                <option value="">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment - Books</option>
                <option value="11">Entertainment - Film</option>
                <option value="12">Entertainment - Music</option>
                <option value="13">Entertainment - Musicals & Theatres</option>
                <option value="14">Entertainment - Television</option>
                <option value="15">Entertainment - Video Games</option>
                <option value="16">Entertainment - Board Game</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science - Computers</option>
                <option value="19">Science - Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment - Comics</option>
                <option value="30">Science - Gadgets</option>
                <option value="31">Entertainment - Japanese Anime & Manga</option>
                <option value="32">Entertainment - Cartoons & Animations</option>
            </select>
        </div>
        <div className={styles["form__select"]}>
            <label htmlFor="difficulty">Select Difficulty: </label>
            <br />
            <select
                id="difficulty" name="difficulty" 
                value={state.form.difficulty}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    dispatch({ type: QuizzicalEnum.SetFormDifficulty, payload: e.target.value });
                    dispatch({ type: QuizzicalEnum.SetApi });
                }}
            >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <div className={styles["form__select"]}>
            <label htmlFor="type">Select Type of Questions: </label>
            <br />
            <select
                id="type" name="type" 
                value={state.form.type}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    dispatch({ type: QuizzicalEnum.SetFormType, payload: e.target.value });
                    dispatch({ type: QuizzicalEnum.SetApi });
                }}
            >
                <option value="">Any Type</option>
                <option value="boolean">True / False</option>
                <option value="multiple">Multiple Choice</option>
            </select>
        </div>
    </div>
  );
};

export default Form;

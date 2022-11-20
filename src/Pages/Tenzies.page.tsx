import { useReducer, useEffect } from 'react';
import Confetti from 'react-confetti';
import { faker } from '@faker-js/faker';
import DieItem from '../components/Tenzies/DieItem';

import styles from '../stylesheets/Tenzies.module.css';
import { Tenzies } from '../Types';
import { tenziesReducer } from '../Reducers';
import { TenziesEnum } from '../Enums';


const TenziesPage = () => {
    // Reducer
    const initialState: Tenzies = {
        dice: [...Array(10)].map(() => ({id: faker.datatype.uuid(), value: Math.ceil(Math.random() * 6), isHeld: false })),
        tenzies: false,
    }
    const [state, dispatch] = useReducer(tenziesReducer, initialState);

    // Check for Win Condition: All dice are held and have the same value
    useEffect(() => {
        const firstValue = state.dice[0].value;
        if (state.dice.every(die => die.value === firstValue && die.isHeld)) {
            dispatch({ type: TenziesEnum.ChangeTenzies });
          }
    }, [state.dice])
    

    // Tenzies Page
    return (
        <div className={styles["tenzies-page"]}>
            <main className={styles["tenzies"]}>
                {state.tenzies && <Confetti />}
                <div className={styles["tenzies-info"]}>
                    <h1 className={styles["tenzies__title"]}>Tenzies</h1>
                    <p className={styles["tenzies__txt"]}>Roll until all dice are the same.</p> 
                    <p className={styles["tenzies__txt"]}>Click each die to freeze it at its current value between rolls.</p>
                </div>
                <div className={styles["tenzies__dice"]}>
                    {state.dice.map(die => 
                        <DieItem 
                            key={die.id}
                            die={die}
                            dispatch={dispatch}
                        />
                    )}
                </div>
                <button className={styles["tenzies__button"]}
                    onClick={() => state.tenzies ? 
                        dispatch( { type: TenziesEnum.NewGame }) : 
                        dispatch( { type: TenziesEnum.RollDice }) 
                    }
                >
                    {state.tenzies ? "New Game" : "Roll"}
                </button> 
            </main>
        </div>
    );
};

export default TenziesPage;

/*


function App() {

  
  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same.</p> 
      <p>Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {diceElements}
      </div>
      <button className="roll-button" onClick={tenzies ? newGame : handleRoll}>
        {tenzies ? "New Game" : "Roll"}
      </button> 
    </main>
  );
}

export default App;

*/
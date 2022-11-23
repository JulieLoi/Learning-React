import React, { useState, useEffect } from 'react';

import styles from '../../stylesheets/Tenzies.module.css';
import { Die } from '../../Types';
import { TenziesEnum } from '../../Enums';

interface IDieItemProps {
    die: Die;
    dispatch: React.Dispatch<{ type: TenziesEnum; payload?: any; }>
}

const DieItem: React.FunctionComponent<IDieItemProps> = ({ die, dispatch }) => {

    // Choose a Die Face based on Die Value
    const selectFace = () => {
        switch (die.value) {
            case 1:
                return  [
                            "", "", "",
                            "", "dot", "",
                            "", "", "",
                        ]
            case 2:
                return  [
                            "dot", "", "",
                            "", "", "",
                            "", "", "dot",
                        ]
            case 3:
                return  [
                            "dot", "", "",
                            "", "dot", "",
                            "", "", "dot",
                        ]
            case 4:
                return  [
                            "dot", "", "dot",
                            "", "", "",
                            "dot", "", "dot",
                        ]
            case 5:
                return  [
                            "dot", "", "dot",
                            "", "dot", "",
                            "dot", "", "dot",
                        ]
            case 6:
                return  [
                            "dot", "", "dot",
                            "dot", "", "dot",
                            "dot", "", "dot",
                        ]
        }
    }

    const [face, setFace] = useState<string[]>(selectFace()!);
    useEffect(() => {
        setFace(selectFace()!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [die.value])
    

    return (
        <div className={`${styles["die"]} ${die.isHeld? styles["die-held"] : ""}`}
            onClick={() => dispatch({ type: TenziesEnum.HoldDie, payload: die.id })}
        >
            <div className={styles["die-dots"]}>
                <span className={styles[face[0]]}></span>
                <span className={styles[face[1]]}></span>
                <span className={styles[face[2]]}></span>
                <span className={styles[face[3]]}></span>
                <span className={styles[face[4]]}></span>
                <span className={styles[face[5]]}></span>
                <span className={styles[face[6]]}></span>
                <span className={styles[face[7]]}></span>
                <span className={styles[face[8]]}></span>
            </div>
        </div>

    );
};

export default DieItem;

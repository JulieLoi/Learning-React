import React from 'react';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { BusinessCard } from '../../Types';
import Information from './Information.component';
import Description from './Description.component';
import Footer from './Footer.component';

interface Props {
    state: BusinessCard;
}

const Card: React.FC<Props> = ({ state }) => {

    return (
        <div className={styles["card"]}>
            <Information state={state} />
            <Description state={state} />
            <Footer state={state} />                    
        </div>
    )
}

export default Card;
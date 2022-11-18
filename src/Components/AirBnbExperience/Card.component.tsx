import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import styles from '../../stylesheets/AirBnbExperience.module.css';
import ExperienceCard from '../../Types/ExperienceCard.type';

interface ICardProps {
    card: ExperienceCard
}

const Card: React.FC<ICardProps> = ({ card }) => {

    // Card Component
    return (
        <div className={styles["card"]}>
            {(card.openSpots === 0 || card.location === "Online") && 
                <div className={styles["card__badge"]}>
                    {card.openSpots === 0 ? "SOLD OUT" : "ONLINE"}
                </div>
            }
            <img src={card.imageUrl} alt="card img" 
                className={styles["card__image"]}
            />
            <div className={styles["card-info"]}>
                <span className={styles["card-rating"]}>
                    <AiFillStar className={styles["card-rating__star-icon"]} />
                    <span className={styles["card-rating__amount"]}>{card.stats.rating}</span> &nbsp;
                    <span className={styles["card-info__gray-text"]}>{`(${card.stats.reviewCount}) • ${card.location}`}</span>
                </span>
                <br />
                <p className={styles["card-info__name"]}>{card.name}</p>
                <p className={styles["card-info__description"]}>{card.description}</p>
                <span className={styles["card-spots"]}>
                    <p className={styles["card-spots__price"]}>
                        <span style={{ fontWeight: 700 }}>For ${card.price}</span> / person
                    </p>
                    <p>Remaining Space: <span style={{ fontWeight: 700 }}>{card.openSpots}</span></p>
                </span>
            </div>
        </div>
    );
};

export default Card;

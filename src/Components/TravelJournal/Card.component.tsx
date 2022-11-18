import React from 'react';
import styles from '../../stylesheets/TravelJournal.module.css';
import JournalCard from '../../Types/JournalCard.type';

interface ICardProps {
    card: JournalCard;
}

const Card: React.FC<ICardProps> = ({ card }) => {
  return (
    <div>
        <section className={styles["card"]}>
            <div>
                <a href={card.imageUrl} target="_blank" rel="noreferrer">
                    <img src={card.imageUrl} alt={card.title + " location"} 
                        className={styles["card__image" ]}
                    />
                </a>
            </div>
            <div className={styles["card-info"]}>
                <div className={styles["card-info-top"]}>
                    <img src="/images/TravelJournal/location-icon.png" alt="location icon" 
                        className={styles["location-icon"]}
                    />
                    <span className={styles["card-info__location-country"]}>{card.location.toUpperCase()}</span>
                    <a href={card.googleMapsUrl} target="_blank" rel="noreferrer"
                        className={styles["card-info__location-url"]}
                    >
                        View on Google Maps
                    </a>
                </div>
                <h1 className={styles["card-info__location-name"]}>{card.title}</h1>
                <span className={styles["card-info__travel-dates"]}>{`${card.startDate} - ${card.endDate}`}</span><br />
                <span className={styles["card-info__travel-log"]}>{card.description}</span>
            </div>
        </section>
    </div>
  );
};


export default Card;

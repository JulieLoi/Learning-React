import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import styles from '../../stylesheets/Home.module.css';

import { HomeCard } from '../../Types';

interface IProjectCardProps {
    card: HomeCard
}

const ProjectCard: React.FC<IProjectCardProps> = ({ card }) => {

    // Page Navigation
    const navigate = useNavigate(); 


    return (
        <div className={styles["card__container"]}>
            <Card className={styles["card"]} bg="light">
                <div className={styles["card__image-container"]}>
                    <Card.Img variant="top" src={card.image}
                        className={styles["card__image"]}
                        alt={card.title + " image"} 
                        draggable={false}
                    />
                    <span className={styles["card__image-text"]}>{card.isSolo ? "Solo" : "Updated"}</span>
                </div>

                <Card.Body className={styles["card__body"]}>
                    <Card.Title className={styles["card__title"]}>{card.title}</Card.Title>
                    <Card.Subtitle className={styles["card__subtitle"]}>
                        {card.isSolo ? "Solo Project" : "Updated Project"}
                    </Card.Subtitle>
                    <Card.Text className={styles["card__text"]}>
                        {card.description}
                    </Card.Text>
                    <Button variant="outline-success"
                        onClick={() => navigate(card.projectLink)}
                        className={styles["card__button"]}
                    >
                        <span className={styles["card__button-text"]}>{card.title}</span>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectCard;

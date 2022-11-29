import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { BiLinkExternal } from 'react-icons/bi';
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
            <Card className={styles["card"]}>
                <a href={card.image} target="_blank" rel="noreferrer"
                    className={styles["card__link"]}
                >
                    <BiLinkExternal 
                        className={styles["card__link-icon"]}
                    />
                    <Card.Img variant="top" src={card.image}
                        className={styles["card__image"]}
                        alt={card.title + " image"} 
                    />
                </a>
                <Card.Body className={styles["card__body"]}>
                    <Card.Title className={styles["card__title"]}>{card.title}</Card.Title>
                    <Card.Text>
                    {card.description}
                    WORK ON SIZING OF THE CARDS FIXED SIZE
                    </Card.Text>
                    <Button variant="outline-success"
                        onClick={() => navigate(card.projectLink)}
                        className={styles["card__button"]}
                    >
                        {card.title}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectCard;

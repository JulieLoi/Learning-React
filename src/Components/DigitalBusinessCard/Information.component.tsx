import React from 'react';
import { SlEnvolope, SlSocialLinkedin } from 'react-icons/sl';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { BusinessCard } from '../../Types';

interface Props {
    state: BusinessCard;
}

const Information: React.FC<Props> = ({ state }) => {

    return (
        <section className={styles["info"]}>
            <img src={state.image === "" ? "/images/DigitalBusinessCard/default_person.png" : state.image} 
                alt="Professional Portrait" className={styles["info__image"]} />
            <h1 className={styles["info__name"]}>
                {state.name === "" ? "Name" : state.name}
            </h1>
            <h3 className={styles["info__position"]}>
                {state.jobPosition === "" ? "Job Position" : state.jobPosition}
            </h3>
            <h4 className={styles["info__personal-link"]}>
                <a href={state.personalLink} target="_blank" rel="noreferrer"
                    className={`${styles["info__personal-enabled"]} 
                        ${styles[(state.personalLink === "" ? "info__personal-disabled" : "")]}`
                    }
                >
                    Personal Website
                </a>
            </h4>
            <div className={styles["btn-box"]}>
                <button type="button" className={styles["btn-box__button"]}
                    onClick={() => window.open(state.emailLink) }
                >
                    <span>
                        <SlEnvolope className={styles["btn-box__img"]} /> Email
                    </span>
                </button>
                <button type="button" className={styles["btn-box__button"]}
                    onClick={() => window.open(state.linkedInLink)}
                >
                    <span>
                        <SlSocialLinkedin className={styles["btn-box__img"]} /> LinkedIn
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Information;

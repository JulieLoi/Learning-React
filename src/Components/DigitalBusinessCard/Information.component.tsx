import React from 'react';
import { SlEnvolope, SlSocialLinkedin } from 'react-icons/sl';
import styles from '../../stylesheets/DigitalBusinessCard.module.css';
import { InfoSection } from '../../Types';

interface Props {
    info: InfoSection;
}

const Information: React.FC<Props> = ({ info }) => {

    return (
        <section className={styles["info"]}>
            <img src={info.image === "" ? "/images/DigitalBusinessCard/default_person.png" : info.image} 
                alt="Professional Portrait" className={styles["info__image"]} />
            <h1 className={styles["info__name"]}>
                {info.name === "" ? "Name" : info.name}
            </h1>
            <h3 className={styles["info__position"]}>
                {info.jobPosition === "" ? "Job Position" : info.jobPosition}
            </h3>
            <h4 className={styles["info__personal-link"]}>
                <a href={info.personalLink} target="_blank" rel="noreferrer"
                    className={`${styles["info__personal-enabled"]} 
                        ${styles[(info.personalLink === "" ? "info__personal-disabled" : "")]}`
                    }
                >
                    Personal Website
                </a>
            </h4>
            <div className={styles["btn-box"]}>
                <button type="button" className={styles["btn-box__button"]}
                    onClick={() => window.open(info.emailLink) }
                >
                    <span>
                        <SlEnvolope className={styles["btn-box__img"]} /> Email
                    </span>
                </button>
                <button type="button" className={styles["btn-box__button"]}
                    onClick={() => window.open(info.linkedInLink)}
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
